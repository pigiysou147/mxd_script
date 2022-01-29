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

let event = npc.getEvent();
if (event != null) {
		
        for (var i = 0; i < 5; i++) {
                let skillId = 80001960 + i;
                let data = player.getQuestRecordEx(15325, String(i));
                if (null != data) {
                        var count = Number(data);
                        for (let z = 0; z < count; z++) {
                                player.useSkillEffect(skillId, 1, 0x7FFFFFFF);
                        }
                }
        }
		
		

        if (Math.floor(Math.random() * 10000) < 200) {
                //马修勒 9001087
                if (player.getPQLog("TK_9001087") < 3) {
                        player.addPQLog("TK_9001087");
                        player.completeQuest(15348, 0);
                }
        } else if (player.isQuestCompleted(15348)) {
                player.startQuest(15348, 0);
        } else if (Math.floor(Math.random() * 10000) < 200) {
                //月妙 9001088
                if (player.getPQLog("TK_9001088") < 3) {
                        player.addPQLog("TK_9001088");
                        player.completeQuest(15349, 0);
                }
        } else if (player.isQuestCompleted(15349)) {
                player.startQuest(15349, 0);
        }
        if (Math.floor(Math.random() * 10000) < 200) {
                //9001091 - 绿洲 
                if (player.getPQLog("TK_9001091") < 3) {
                        player.addPQLog("TK_9001088");
                        player.completeQuest(15350, 0);
                }
        } else if (player.isQuestCompleted(15350)) {
                player.startQuest(15350, 0);
        }
        if (Math.floor(Math.random() * 10000) < 200) {
                //9001097 沙漠狐狸 
                let number = player.getIntQuestRecordEx(15325, "4");
                if (number <= 0) {
                        player.completeQuest(15351, 0);
                }
        } else if (player.isQuestCompleted(15351)) {
                player.startQuest(15351, 0);
        }

}


