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
        npc.sayNext("刚刚教你的东西应该没忘了吧？按下Ctrl键是攻击怪物的普通攻击。好像没有忘记的样子，那就继续教你下一个阶段吧。。准备好了吗?");
        npc.sayNext("这次是技能攻击。可以比普通攻击更强劲地打击敌人。按住快捷键K开启技能栏看看。..你修炼得更强的话，就可以使用更多种的技能了，所以认真修炼是很重要的啊。");
        player.gainExp(372);
        player.setSkillLevel(10001244, 1, 0, false);
        player.showAvatarOriented("Effect/OnUserEff.img/guideEffect/cygnusTutorial/6");
        npc.completeQuest();
}
