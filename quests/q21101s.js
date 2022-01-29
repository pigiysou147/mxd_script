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

startScript();

function startScript() {
        let sel = npc.askYesNoS("#b(让我确认自己是不是使用#p1201001#的英雄？使劲抓住#p1201001#试试，肯定会有什么反映的。)#k");
        if (sel == 1) {
                if (player.gainItem(1142129, 1)) {
                        if (player.getJob() == 2000) {
                                player.gainEquipInventorySlots(4);
                                player.gainUseInventorySlots(4);
                                player.gainSetupInventorySlots(4);
                                player.gainEtcInventorySlots(4);
                                player.gainCashInventorySlots(4);
                                player.setJob(2100);
                                player.resetStats(4, 4, 4, 4);
                                player.gainSp(5);
                                player.setSkillLevel(20009000, 1, 0, false);
                        }
                        npc.startQuest();
                        npc.completeQuest();
                        npc.sayNextS("#b(似乎想起来了什么……)#k");
                        let mov = npc.askYesNoS("是否想跳过剧情动画？");
                        if (mov != 1) {
                                player.changeMap(914090100, 0);
                        }
                } else {
                        npc.sayNext("请清理背包！");
                }
        } else {
                npc.sayNextNoEsc("你就不想去试试吗？你不好奇自己的谁吗？");
        }
}
