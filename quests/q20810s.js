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


let ret = npc.askYesNo("米哈尔，祝贺你通过了成为实习骑士的所有考试。我随时可以任命你为实习骑士。你想现在成为实习骑士吗？");//                
if (ret == 1) {
        player.setJob(5110);
        player.gainSp(5);
        npc.startQuest();
        npc.completeQuest();
        npc.sayNext("好了，从现在开始你就是实习骑士了！");
} else {
        npc.sayNext("你为什么要拒绝自己的命运呢……");
}
