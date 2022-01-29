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
 * Sparkling Crystal (NPC 1061010)
 * Warps player out of the other dimension.
 *
 * @author Jackson (content from Vana r3171)
 */

let selection = npc.askYesNo("(你可以通过雪原圣地的神圣的石头再次进来, 你确定要出去吗?)");
if (selection == 1) {
        player.changeMap(211040401);
}