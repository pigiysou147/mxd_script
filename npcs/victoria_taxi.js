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

let taxiMaps = [100000000, 104000000, 102000000, 101000000, 103000000, 120000000, 105000000];


npc.sayNext("你好~!我是#p1012000#。你想快速又安全地移动到其他村庄吗? 那么就请使用令客户百分百满意的#b#p1012000##k吧。这次我给你免费优待!我将会送你去想去的地方。");
let prompt = "请选择目的地。#b";
for (let i = 0; i < taxiMaps.length; i++) {
        if (taxiMaps[i] != map.getId()) {
                prompt += "\r\n#L" + i + "##m" + taxiMaps[i] + "##l";
        }
}
let mapIndex = npc.askMenu(prompt);
let selection = npc.askYesNo("看样子, 你好像已经没有什么事情需要在这里做了。确定要移动到#b#m" + taxiMaps[mapIndex] + "##k村庄吗?");
if (selection == 1) {
        player.changeMap(taxiMaps[mapIndex]);
} else if (selection == 0) {
        npc.say("如果你想移动到其他村庄, 请随时使用我们的出租车~");
}

