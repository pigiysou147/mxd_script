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

let sel = npc.askMenu("等一下!!你想要移动到哪个扎昆的祭坛呢?#b\r\n#L1#普通扎昆#l\r\n#L2#进阶扎昆#l", 2030013);
switch (sel) {
        case 0:
                if (player.getLevel() < 50) {
                        npc.sayNext("你的力量好像不够啊, 等你到了50级再来吧。");
                } else if (!player.hasItem(4001796, 1)) {
                        player.showSystemMessage("你没有需要献给简单扎昆的祭品，因此无法进行移动。");
                } else {
                        player.changeMap(211042402, "west00");
                }
                break;
        case 1:
                if (player.getLevel() < 90) {
                        npc.sayNext("你的力量好像不够啊, 等你到了90级再来吧。");
                } else if (!player.hasItem(4001017, 1)) {
                        player.showSystemMessage("你没有需要献给普通扎昆扎昆的祭品，因此无法进行移动。");
                } else {
                        player.changeMap(211042400, "west00");
                }
                break;
        case 2:
                if (player.getLevel() < 90) {
                        npc.sayNext("你的力量好像不够啊, 等你到了90级再来吧。");
                } else if (!player.hasItem(4001017, 1)) {
                        player.showSystemMessage("你没有需要献给进阶扎昆扎昆的祭品，因此无法进行移动。");
                } else {
                        player.changeMap(211042401, "west00");
                }
                break;
}