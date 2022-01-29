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

let sel = npc.askMenu("你想做什么？#b\r\n\r\n #L0#离开这里。#l");
let ret = npc.askYesNo("你确定你要离开吗？离开之后就不能再回到这里来了。");
if (ret == 1) {
        player.changeMap(990001100, 0);
} else {
        npc.say("祝你能顺利的通过家族任务！");
}
