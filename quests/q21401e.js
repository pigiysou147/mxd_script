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
        npc.sayNextNoEsc("战神你阻止了暴走的我，让我内心的黑暗得到了释放。。！");
        npc.sayNextNoEsc("我现在可以让你恢复全部的力量…");
        if (player.getJob() == 2111) {
                if (player.gainItem(1142132, 1)) {
                        player.setJob(2112);
                        player.gainSp(5);
                        npc.completeQuest();
                        npc.sayNextNoEsc("是否感觉到所有的力量都已经恢复了呢！");
                } else {
                        npc.sayNextNoEsc("背包空间不足！");
                }
        }
}
