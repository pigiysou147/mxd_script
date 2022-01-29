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
 * Kyrin: Pirate Instructor (NPC 1072008)
 * Hidden Street: Pirate Test Room (Map 108000500),
 *   Hidden Street: Pirate Test Room (Map 108000501),
 *   Hidden Street: Pirate Test Room (Map 108000502),
 *   Hidden Street: Pirate Test Room (Map 108000503)
 *
 * Lets players out of pirates 2nd job advancement quest, whether it be for
 * forfeit or completion.
 *
 * @author Jackson (content from DelphiMS r418)
 */


if (player.hasItem(4031013, 30)) {
        npc.sayNext("哇, 这么快就狩猎到30颗#b黑珠#k了! 恭喜你, 我现在就把你传送出去吧。");
        player.changeMap(120000101);
} else {
        npc.sayNext("走吧, 去狩猎30颗#b黑珠#k");
}
   