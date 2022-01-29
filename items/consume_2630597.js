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
let types = [5, 6, 7];
if (map.getId() >= 871100000 && map.getId() <= 871100099) {
        player.addHomeDrawing(types);
        if (npc.getSlot() > 0) {
                player.loseItem(npc.getItemId(), npc.getSlot(), 1);
        }
} else {
        player.dropAlertNotice("只有在我的小屋里面才能使用");
}