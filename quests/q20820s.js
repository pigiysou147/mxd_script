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
        npc.sayNext("欢迎来到圣地！这里是冒险岛世界最和平、最安全的地方。是女皇希纳斯统治的土地！   你的名字是……啊，是叫#b#h0##k吧？很高兴见到你！我一直在等你。你来这里，是想成为#p1101000#骑士团的一员吧？我叫#p1102004#。我奉女皇之名，在这里为像你这样的初心者提供指导。");
        npc.sayNext("具体的事情以后再说，你先到新骑士团员欢迎会去看看吧。先去那里和其他修炼教官打个招呼。请跟我来。");
        npc.completeQuest();
        player.changeMap(130030100, 0);

}
