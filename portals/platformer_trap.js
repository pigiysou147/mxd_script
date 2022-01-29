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

/* global portal, player */

/**
 *
 * @author Jackson
 */
portal.abortWarp();
player.teleportToPortalId(3, 0);
player.soundEffect("Sound/Ambience.img/warning");
player.setUserEmotionLocal(5, 2000);
let stage = parseInt(map.getId() % 1000 / 10);
switch (stage) {
        case 9:
        case 10:
        case 14:
        case 20:
        case 24:
        case 28:
        case 29:
        case 30:
        case 33:
        case 38:
        case 39:
        case 40:
                map.setFootholdMan(1);
                break;


}