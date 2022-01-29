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
        npc.sayNext("看来好像熟悉了基本攻击，这次来告诉你比较进阶的攻击方式。");
        npc.sayNext("#h0#，只是练习而已？继续认真做。奇赞，奇库暂时说个话…", 1102100);
        npc.sayNext("#h0#，稍微休息一下吧。");
        npc.sayNext("(嘀嘀咕咕)", 1102000);
        npc.sayNext("!!!");
        npc.sayNext("...", 1102004);
        npc.sayNext("#h0#，在这里稍等一下。我马上就回來。不管怎样都不要独自行动！");

        npc.startQuest();
        player.gainExp(17);
        npc.completeQuest();

}
