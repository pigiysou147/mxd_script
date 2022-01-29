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
if (player.getJob() == 412 || player.getJob() == 422 || player.getJob() == 434) {
        let sel = npc.askMenu("你找我有什么事情么? \r\n#b#L1# 关于自由转职#l");
        if (sel == 1) {
                if (player.getPQLog("FreeChangeJob") == 0) {
                        let ret = npc.askYesNo("自由转职一天只能一次,你是否现在就要进行选择？");
                        if (ret == 1) {
                                player.openUI(0xA7);
                        }
                } else {
                        npc.sayNext("你今天已经使用自由转职过了.请明天再试!");
                }
        }
} else if (player.getJob() < 400 || player.getJob() > 434) {
        npc.sayNext("你为什么想见我？我没有你想知道的事。");
} else if (player.isQuestStarted(1457)) {
        let sel = npc.askMenu("我可以将你传送到天鹰或火焰龙所在地, 那么你想去 \r\n #b#L0#火焰龙森林#l\r\n #b#L1#天鹰森林#l");
        if (sel == 0) {
                if (player.hasItem(4031517, 1)) {
                        npc.sayNext("你已经有#b#t4031517##k了");
                } else {
                        npc.makeEvent("change_job", false, [player, 924000200]);
                }
        } else if (sel == 1) {
                if (player.hasItem(4031518, 1)) {
                        npc.sayNext("你已经有#b#t4031518##k了");
                } else {
                        npc.makeEvent("change_job", false, [player, 924000201]);
                }
        }
} else {
        npc.sayNext("你还不够强大走飞侠顶尖的道路。等你变得更强壮再来找我吧。");
}