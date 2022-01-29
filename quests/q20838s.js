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
        npc.sayNext("#b(扑通扑通…)#k");
        npc.sayNext("…啊！吓我一跳！精神不好，谁来了也不知道。你就是#p1102006#說的那个贵族吗？很高兴見到你！我是#p1102007#。那么要进行考验了吗？这不会很难的。只要记得到目前为止所学过的东西就没问题了。");
        npc.sayNext("测试很简单。看到那的箱子了嗎？破坏箱子的话怪物就会跑出来，击败怪物的话就可以得到考试的证书了。");
        npc.sayNext("嗯？破坏箱子的方法是？啊，用用普通攻击就可以破坏箱子了。..#b以普通攻击#k破坏箱子， #b对付怪物则是用技能攻击#k比较好的样子？那么就收集3个#t4033670#吧。");
        player.showAvatarOriented("Effect/OnUserEff.img/guideEffect/cygnusTutorial/9");
        npc.startQuest();
}
