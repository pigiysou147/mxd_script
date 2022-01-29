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
endScript();


function endScript() {
        npc.sayNextNoEsc("哈！看来你又想起来好多事情了！终于知道我是怎么打造出来的了，那我现在帮助你恢复部分以前的力量吧！");
        npc.sayNextNoEsc("哈哈!你的力量又恢复了一部分了！！");
        if (player.getJob() == 2100) {
                if (player.gainItem(1142130, 1)) {
                        player.setJob(2110);
                        player.gainSp(5);
                        npc.completeQuest();
                } else {
                        npc.sayNextNoEsc("背包空间不足！");
                }
        }
}
