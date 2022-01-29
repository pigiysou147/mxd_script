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

endScript();

function endScript() {
        npc.sayNext("怎么样？是不是用技能攻击怪物，战斗效率更高呢，现在我们将进行下一个训练！");
        npc.sayNext("这次是技能攻击。可以比普通攻击更强劲地打击敌人。按住快捷键K开启技能栏看看。..你修炼得更强的话，就可以使用更多种的技能了，所以认真修炼是很重要的啊。");
        player.gainExp(560);
        npc.completeQuest();
        player.changeMap(130030106, 0);
}
