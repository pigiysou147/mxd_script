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


let ret = npc.askYesNo("米哈尔，祝贺你击退了失魂落魄的骑士们。你想现在成为骑士团长吗？");
if (ret == 1) {
        player.setJob(5112);
        player.gainSp(5);
        npc.completeQuest();
        npc.sayNext("好了，从现在开始你就是骑士团长了！");
} else {
        npc.sayNext("嗯，那等你考虑好了在说吧！");
}
