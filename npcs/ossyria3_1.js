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
 * Orbis Magic Spot (NPC 2012014)
 * Orbis: Orbis Tower <20th Floor> (Map 200080200)
 *
 * Warps to the El Nath Magic Spot.
 *
 * @author Jackson (content from Vana r3171)
 */

if (player.hasItem(4001019, 1)) {
        let selected = npc.askYesNo("You can use #b#t4001019##k to activate #b#p2012014##k. Will you teleport to where #b#p2012015##k is?");
        if (selected == 1) {
                player.loseItem(4001019, 1);
                player.changeMap(200082100);
        }
} else {
        npc.say("There's a #b#p2012014##k that'll enable you to teleport to where #b#p2012015##k is, but you can't activate it without the scroll.");
}