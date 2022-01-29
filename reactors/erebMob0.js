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
 * (Reactor 2000)
 * Rainbow Street: Amherst (Map 1010000),
 *   Rainbow Street: Amherst Townstreet (Map 1010002),
 *   Rainbow Street: Snail Field of Flowers (Map 1010004),
 *   Rainbow Street: The Field East of Amherst (Map 1020000),
 *   Orbis: Top of the Hill (Map 200000300)
 *
 * Scrap box in Amherst area and in Top of the Hill in Orbis.
 * Drops miscellaneous potions and mesos.
 * Locations in Amherst also drop quest items for Pio's Collecting Recycled
 * Goods (i.e. Rusty screw and Old Wooden Board).
 *
 * @author Jackson
 */

if (player.isQuestActive(20838)) {
        let pos = player.getPosition();
        player.showSystemMessage("注意，出现了修炼用提姆!");
        map.spawnMob(9300732, pos.x, pos.y);
}

