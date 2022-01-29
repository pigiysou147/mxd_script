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
npc.sayNext("走双刀之路所必备的东西就是敏锐的慧眼，去珠房打下浑浊的玻璃珠后，打碎它，就能获得只向具有成为主人资格的人显示的慧眼。");
let ret = npc.askYesNo("是否现在就进入珠房？");
if (ret == 1) {
    npc.startQuest();
    player.changeMap(910350000, 0);
} else {
    npc.sayNext("那你好好准备下。");
}
