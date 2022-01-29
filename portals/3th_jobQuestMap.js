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
 * quest00
 * Victoria Road: The Forest East of Henesys (Map 100030000)
 *
 * Warps players into Utah's pig farm for Camila's Gem (Quest 2073).
 *
 * @author Jackson (content from Vana r3171)
 */
let mapID = 0;
if (player.isQuestStarted(1431) || player.isQuestStarted(1432) || player.isQuestStarted(1433)) {//warrior
    mapID = 910540100;
} else if (player.isQuestStarted(1435) || player.isQuestStarted(1436) || player.isQuestStarted(1437)) {//mage
    mapID = 910540200;
} else if (player.isQuestStarted(1439) || player.isQuestStarted(1440)) {//bowman
    mapID = 910540300;
} else if (player.isQuestStarted(1442) || player.isQuestStarted(1443) || player.isQuestStarted(1447)) {//theif
    mapID = 910540400;
} else if (player.isQuestStarted(1445) || player.isQuestStarted(1446) || player.isQuestStarted(1448)) {//pirate
    mapID = 910540500;
}
if (mapID > 0 && portal.makeEvent("change_job", false, [player, mapID]) != null) {
    portal.playPortalSE();
} else {
    player.changeMap(211040401, 0);
}
