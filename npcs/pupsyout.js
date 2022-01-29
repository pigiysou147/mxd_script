/*
 * AuroMS MapleStory server emulator written in Java
 * Copyright (C) 2018 Kent
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

/* global npc, player, map */

if (map.getId() == 865000000) {
        let selection = npc.askMenu("你要去达尼尔拉商团的舰船吗?\r\n#b\r\n#L0#进入舰船。#l");
        if (selection == 0) {
                npc.makeEvent("berry_quest", false, [player, [865010001]]);
        }
} else {
        let selection = npc.askMenu("你要回凯梅尔兹吗??\r\n#b\r\n#L0#前往村庄。#l");
        if (selection == 0) {
                player.changeMap(865000000, 0);
        }
}
