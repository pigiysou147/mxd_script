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
let ret = npc.askAccept("由我来说明另一种让怪怪变得更强的方法吧。");
if (ret == 1) {
    npc.sayNext("怪怪不只能强化，也可以进化呢。透过怪怪图鉴上的进化分页就可以进行进化。");
    npc.sayNext("#i3801011#\r\n怪怪们可以进行进化。但是在进化前，必须确认目标怪怪已经抵达 Lv5 (最大等级)。");
    npc.sayNext("#i3801011#\r\n先把Lv5的怪怪放在上方的 Base 栏后，再把相同阶级的怪怪材料配置在下方的 Material 栏上，点击进化按钮即可。");
    npc.sayNext("#i3801011#\r\n进化是无条件成功，做为进化用材料的怪怪也会因失去力量而回归自然。");
    npc.sayNext("进行进化的怪怪是会提升阶级，阶级从低到高分为C级、B级、A级、S级与SS级。");
    npc.startQuest();
    npc.completeQuest();
}
