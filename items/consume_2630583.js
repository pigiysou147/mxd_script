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

let n = player.getIntQuestRecordEx(500773, "manager");
let npcId = 9400920 + n;
if (player.isQuestStarted(64591) || player.isQuestCompleted(64591)) {
        if (player.getChannel() == 1) {
                if (npc.getSlot() > 0) {
                        player.loseItem(npc.getItemId(), npc.getSlot(), 1);
                }
                npc.rememberMap("RETURN_MAP");
                if (player.isQuestStarted(64591)) {
                        player.changeMap(871000011);
                } else {
                        player.goMyHome();
                }

        } else {
                npc.sayNextE("#face0#当前只有#b频道-1#k可以进入！", npcId);
        }
} else {
        player.showSystemMessage("未完成任务，无法使用！");
}

