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


player.changeBGM("BgmWz2.img/myHome_room");

if (map.getMyHomeId() == player.getAccountId()) {
        player.updateQuestRecordEx(500767, player.getWorldShareRecord(500767));
        player.updateQuestRecordEx(500778, player.getWorldShareRecord(500778));
        player.updateQuestRecordEx(500773, player.getWorldShareRecord(500773));
        player.updateQuestRecordEx(500763, player.getWorldShareRecord(500763));
        let buy = player.getQuestRecordEx(500778, "t");
        if (buy != null) {
                player.startQuest(500778, 0);
        } else {
                player.forfeitQuest(500778);
        }
        if (player.isQuestCompleted(64601) && !player.isQuestStarted(64605) && !player.isQuestCompleted(64605)) {
                if (!player.isQuestCompleted(64602)) {
                        let OBJECT_1 = player.spawnTempNpc(9400924, -10, 100, 1);//7E 4C 0F 00
                        player.setNpcSpecialAction(OBJECT_1, "summon", 0, false);
                }
                if (!player.isQuestCompleted(64603)) {
                        let OBJECT_1 = player.spawnTempNpc(9400923, -160, 100, 0);//7C 4C 0F 00
                        player.setNpcSpecialAction(OBJECT_1, "summon", 0, false);

                }
                if (!player.isQuestCompleted(64604)) {
                        let OBJECT_1 = player.spawnTempNpc(9400922, -60, 100, 1);//7D 4C 0F 00
                        player.setNpcSpecialAction(OBJECT_1, "summon", 0, false);
                }
        }
        let n = player.getQuestRecordEx(500773, "askR");
        if (n != null) {
                let x = player.getIntQuestRecordEx(500767, "managerXpos");
                let y = player.getIntQuestRecordEx(500767, "managerYpos");
                player.spawnTempNpc(9400930, x, y, 1);
        }
}
