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
 * Roger's Apple (NPC 2000 Quest 1021) Start
 * Maple Road: Lower level of the Training Camp (Map 2)
 *
 * Gives advice to new players on how to use items.
 *
 * @author Jackson
 */

startScript();

function startScript() {
        npc.sayNext("你好。是为了成为骑士而来的那位啊");
        npc.sayNextS("是，我叫做#h0#。是第一次來到这个庭院。看来圣地有很多美丽的地方啊。", false);
        npc.sayNext("圣地可是个和平又美丽的地方呢。训练太困难了，你不用做吗？");
        npc.sayNextS("是，虽然还有很多不足的地方，但是即使面临到怎样的困难，我也会坚定的！好！我会战胜这些的，成为一个了不起的骑士的。所以，冒险岛的和平就由我来守护了。应该…", false);

        npc.sayNext("(浅浅的微笑) 即使是再怎么艰难的道路也是必然要走的道路啊。现在是大家要加把劲的时候了。");
        npc.sayNextS("但是，是谁呢？照这个打扮看来应该不是皇家骑士团…", false);
        npc.sayNext("是，我是…");
        npc.startQuest();
        player.gainExp(92);
}
