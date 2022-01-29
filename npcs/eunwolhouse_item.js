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


if (player.isQuestStarted(38008)) {
        player.setQuestData(38008, "clear");
        player.completeQuest(38008, 0);
}
if (player.isQuestStarted(38018)) {
        player.setQuestData(38018, "clear");
        player.completeQuest(38018, 0);
        player.startQuest(38019, 0);
}
if (player.isQuestStarted(38023)) {
        player.setQuestData(38023, "clear");
        player.completeQuest(38023, 0);
}

