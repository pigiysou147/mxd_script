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
npc.sayNext("最近成长了不少，但是要我承认你的能力，你就必须从影子双刀那边带回#r30个#k黑珠，并且我就帮助你唤醒慧眼，使你获得更强大的力量，蜕变成双刀客！");
let ret = npc.askYesNo("是否现在就开始进行试炼？");
if (ret == 1) {
    npc.startQuest();
    player.changeMap(103050370, 0);
} else {
    npc.sayNext("那你好好准备下。");
}
