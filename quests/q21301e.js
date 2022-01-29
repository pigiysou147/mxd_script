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
        npc.sayNextNoEsc("哈！你击退了小偷乌鸦，不错，不错！");
        npc.sayNextNoEsc("我现在可以帮助你再恢复部分的力量…");
        if (player.getJob() == 2110) {
                if (player.gainItem(1142131, 1)) {
                        player.setJob(2111);
                        player.gainSp(5);
                        npc.completeQuest();
                        npc.sayNextNoEsc("哈哈!是不是感觉力量又增加了哈！");
                } else {
                        npc.sayNextNoEsc("背包空间不足！");
                }
        }
}
