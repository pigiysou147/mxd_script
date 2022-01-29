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
npc.sayNext("不错不错，你带回来了黑珠，我承认你的能力，我要帮助唤醒慧眼。");
let ret = npc.askYesNo("你做好准备好唤醒慧眼，获得更强大的力量，蜕变成双刀客吗？");
if (ret == 1) {
    player.loseItem(4032616);
    player.setJob(431);
    player.gainSp(3);
    npc.completeQuest();
} else {
    npc.sayNext("好的，那等你准备好了在来吧。");
}