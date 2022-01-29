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
 * 
 * @author Jackson 
 */

if (player.isQuestStarted(6141) && player.hasItem(4031450, 1)) {
        let selection = npc.askYesNo("我发现你有#b#t4031450##k. 你想进去吗#m921100100#?", 2030000);
        if (selection == 1) {
                if (npc.makeEvent("iceDemon", true, player) == null)
                        npc.sayNext("已经有人在里面，请稍等一会儿。", 2030000);
        } else if (selection == 0) {
                npc.sayNext("等你准备好了在来找我.", 2030000);
        }
} else {
        npc.sayNext("你好像要继续往深处走嘛...你可要考虑清楚哦。据说深处有很多很可怕的怪物，曾经有数十位勇士闯了进去，但是没有一个人回来……从此再也没有人敢进去了。不管你准备多么充分，千万不要冒然行动啊。", 2030000);

        let str = "劝你还是打消这个念头吧，我不想再看到有人…...你执意要进去？好吧，让我看看你的资质。";
        if (player.getLevel() < 50) {
                npc.say(str + "啊～你还没到50级？！我绝不会让你去冒险", 2030000);
        } else {
                let selection = npc.askYesNo(str + "!嗯～似乎还不错。你确定要进入吗？", 2030000);
                if (selection == 1) {
                        player.changeMap(211040300, 5);
                } else if (selection == 0) {
                        npc.sayNext("做一个冒险的决定很不容易的。如果你以后改变了想法再来找我。守护在这里是我的使命。", 2030000);
                }
        }
}