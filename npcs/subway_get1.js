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
 * Treasure Chest (NPC 1052008)
 * Line 3 Construction Site: B1 <Subway Depot> (Map 103000902)
 *
 * Completes Shumi's Lost Coin (Quest 2055) and gives mineral ores as a reward
 * if the quest is completed and the player successfully reached the end.
 *
 * @author Jackson (content from KiniroMS r227)
 */

let itemId, quantity;
if (player.isQuestActive(2055)) {
        itemId = 4031039;
        quantity = 1;
} else {
        let rewards = [4010003, 4010000, 4010002, 4020001, 4010005, 4010004, 4010001];
        itemId = rewards[Math.floor(Math.random() * rewards.length)];
        quantity = 2;
}

if (player.gainItem(itemId, quantity))
        player.changeMap(103000100);
else //TODO: GMS-like line
        npc.say("Please check whether your ETC. inventory is full.");