/*
 * AuroMS MapleStory server emulator written in Java
 * Copyright (C) 2018 Kent
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

/* global npc, player, map */

let n = player.getIntQuestRecordEx(500773, "manager");
let hide = player.getIntQuestRecordEx(500773, "managerHide");
let npcId = 9400920 + n;

let menu = "#face0#我能帮你做些什么呢？\r\n\r\n";
if (hide == 0) {
        menu += "#L1##b隐藏管家#k#l\r\n";
} else {
        menu += "#L1##b显示管家#k#l\r\n";
}
menu += "#L2##b变更管家#k#l\r\n";
menu += "#L3##b变更管家放置位置#k#l";
let sel = npc.askMenuA(menu, npcId);
switch (sel) {
        case 1:
                if (hide == 0) {//进行隐藏
                        player.updateQuestRecordEx(500773, "managerHide", "1");
                        player.updateWorldShareRecord(500773, player.getQuestRecordEx(500773));

                        player.destroyTempNpc(9400930);
                        npc.sayNextE("#face0#好的，那今后我就先离开咯！", npcId);
                } else {//进行显示
                        player.updateQuestRecordEx(500773, "managerHide", "0");
                        player.updateWorldShareRecord(500773, player.getQuestRecordEx(500773));

                        let x = player.getIntQuestRecordEx(500767, "managerXpos");
                        let y = player.getIntQuestRecordEx(500767, "managerYpos");
                        player.spawnTempNpc(9400930, x, y, 1);
                        npc.sayNextE("#face0#我又回来了！", npcId);
                }
                break;
        case 2:
                let str = "#face0#你要变更管家吗？嗯……\r\n好吧，你要变更为谁呢？\r\n\r\n";
                str += (n == 0 ? "#L1##b#p9400921##k#l" : "#L0##b#p9400920##k#l");
                let nSel = npc.askMenuA(str, npcId);
                npcId = 9400920 + nSel;
                if (nSel == 0) {
                        for (let i = 1; i <= 5; i++) {
                                player.updateQuestRecordEx(500773, "b" + i, player.getIntQuestRecordEx(500773, "s" + i));
                                player.updateQuestRecordEx(500773, "s" + i, player.getIntQuestRecordEx(500773, "a" + i));
                        }
                } else {
                        for (let i = 1; i <= 5; i++) {
                                player.updateQuestRecordEx(500773, "a" + i, player.getIntQuestRecordEx(500773, "s" + i));
                                player.updateQuestRecordEx(500773, "s" + i, player.getIntQuestRecordEx(500773, "b" + i));
                        }
                }
                player.updateQuestRecordEx(500773, "manager", String(nSel));
                player.updateWorldShareRecord(500773, player.getQuestRecordEx(500773));
                npc.sayNextE("#face0#好的，那今后就请多多指教了！", npcId);
                break;
        case 3:
                let ret = npc.askYesNoE("是否要改变我当前位置到你现在所处的位置？", npcId);
                if (ret == 1) {
                        let pos = player.getPosition();
                        player.destroyTempNpc(9400930);
                        let x = pos.getX();
                        let y = pos.getY();
                        player.updateQuestRecordEx(500767, "managerXpos", String(x));
                        player.updateQuestRecordEx(500767, "managerYpos", String(y));
                        player.updateWorldShareRecord(500767, player.getQuestRecordEx(500767));
                        player.spawnTempNpc(9400930, x, y, 1);
                        npc.sayNextE("#face0#好的，那今后就在这里啦！", npcId);
                }
                break;
}
