/*
 * NeroMS MapleStory server emulator written in Java
 * Copyright (C) 2017-2018  Jackson
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

/**
 * Jane (NPC 1002100)
 * Victoria Road: Lith Harbor (Map 104000000)
 *
 * Sells potions after completing Jane the Alchemist quests - i.e. Jane and the
 * Wild Boar (Quest 2010), Jane's First Challenge (Quest 2011), Jane's Second
 * Challenge (Quest 2012), and Jane's Final Challenge (Quest 2013).
 *
 * @author Jackson (content from KiniroMS r227)
 */

if (player.isQuestCompleted(2013)) {
        let items = [2000002, 2022003, 2022000, 2001000];
        let costs = [310, 1060, 1600, 3120];
        let recoverAmount = [300, 1000, 800, 1000];
        let recoverType = ["HP", "HP", "MP", "HP and MP"];

        npc.sayNext("是你…多亏了你，我能做很多事。现在我做了很多东西。如果你需要什么，告诉我。");
        let selStr = "你想买什么?#b";
        for (let i = 0; i < items.length; i++)
                selStr += "\r\n#L" + i + "##z" + items[i] + "# (价格 : " + costs[i] + " 金币)#l";
        selection = npc.askMenu(selStr);

        let item = items[selection];
        let cost = costs[selection];
        let count = npc.askNumber("你想要#b#t" + item + "##k? #t" + item + "# 会恢复 " + recoverAmount[selection] + " " + recoverType[selection] + ". 你想买多少?", 1, 1, 100);
        selection = npc.askYesNo("你将要购买#r" + count + "#k个#b#t" + item + "##k? 每个#t" + item + "#需要" + cost + "金币,所以一共是#r" + cost * count + "#k金币.");
        cost *= count;
        if (selection == 1) {
                if (player.hasMesos(cost) && player.gainItem(item, count)) {
                        player.loseMesos(cost);
                        npc.sayNext("谢谢你。这里的东西总是可以做的，所以如果你需要什么，欢迎再来。");
                } else {
                        npc.sayNext("请检查并查看您的其他栏中是否有空位，你可能没有#r" + cost + "#k金币.");
                }
        } else if (selection == 0) {
                npc.sayNext("我还有很多你以前给我的材料。所有的物品都在那里，所以请慢慢选择.");
        }
} else if (player.isQuestCompleted(2010)) {
        npc.sayNext("你看起来不够强壮，我没办法为你提供服务…");
} else {
        npc.say("我的梦想是到处旅行，就像你一样。但是我父亲不允许我这样做，因为他认为这很危险。不过，如果我向他证明我不是他认为的那个软弱的女孩，他可能会说“好的”");
}