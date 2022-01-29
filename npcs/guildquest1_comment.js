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
 * Shawn (NPC 9040002)
 * Victoria Road: Excavation Site <Camp> (Map 101030104)
 *
 * Gives background info on the guild quest.
 *
 * @author Jackson (content from Vana r3171)
 */

let loop = true;
let str = "我们家族联盟，长期以来一直试图破译“翡翠碑”，一种珍贵的古老遗迹。结果，我们发现圣瑞尼亚，这个来自过去的神秘国度，躺在这里沉睡着。我们还发现了一件传奇的、神话般的珠宝#t4001024#的线索，可能就在圣瑞尼亚的遗迹中。这就是为什么公会联盟开启了公会探索来寻找#t4001024#\r\n#b";
while (loop) {
        let selection = npc.askMenu(str
                + "#L0# 圣瑞尼亚是什么?#l \r\n"
                + "#L1# #t4001024#? 这是什么?#l\r\n"
                + "#L2# 家族任务?#l\r\n"
                + "#L3# 不, 我不需要了解.#l");
        str = "你有其他想知道的吗?\r\n#b";

        switch (selection) {
                case 0:
                        npc.sayNext("圣瑞尼亚是一个过去的文人文明，控制着维多利亚岛的每一个地区。艾里葛斯神庙，地牢深处的神殿，以及其他古老的建筑，在那里没有人知道是谁建造的，它确实是在圣瑞尼亚时代建造的。");
                        npc.sayNext("圣瑞尼亚的最后一位国王是一位名叫锡安列三世的绅士，显然他是一位非常明智和富有同情心的国王。但是有一天，整个王国都崩溃了，没有任何解释。");
                        break;
                case 1:
                        npc.sayNext("#t4001024#是一种传奇的宝石，它能带给拥有它的人永恒的青春。具有讽刺意味的是，似乎每个人都被#t4001024#踩到了地上，这也解释了圣瑞尼亚的灭亡。");
                        break;
                case 2:
                        npc.sayNext("我以前派过几队探险家去圣瑞尼亚，但他们都没有回来，这促使我们开始了行会的探索。我们一直在等待那些足够强大的公会来应对挑战，像你这样的公会。");
                        npc.sayNext("这个公会任务的最终目标是探索圣瑞尼亚并找到#t4001024#。这不是权力解决一切的任务。团队合作在这里更重要。");
                        break;
                case 3:
                        npc.say("真的？如果你还有什么要问的，请随时来找我。");
                        loop = false;
                        break;
        }
}