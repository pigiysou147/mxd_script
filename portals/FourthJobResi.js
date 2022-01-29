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
let mapId = -1;
if (player.isQuestStarted(23043) || player.isQuestCompleted(23043)) {
        if (player.isQuestCompleted(23046) || player.hasItem(4032743, 1)) {
                mapId = 931000300;
        }
} else if (player.isQuestStarted(23044) || player.isQuestCompleted(23044)) {
        if (player.isQuestCompleted(23047) || player.hasItem(4032743, 1)) {
                mapId = 931000301;
        }
} else if (player.isQuestStarted(23045) || player.isQuestCompleted(23045)) {
        if (player.isQuestCompleted(23048) || player.hasItem(4032743, 1)) {
                mapId = 931000302;
        }
} else if (player.isQuestStarted(23166) || player.isQuestCompleted(23166)) {
        if (player.isQuestCompleted(23167) || player.hasItem(4032743, 1)) {
                mapId = 931000303;
        }
}

if (mapId > 0) {
        portal.playPortalSE();
        player.changeMap(mapId, 0);
} else {
        player.showSystemMessage("无法进入！");
        portal.abortWarp();
}