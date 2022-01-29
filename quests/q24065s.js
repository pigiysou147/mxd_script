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

startScript();

function startScript() {
        npc.sayNext("现在精灵的三围长老全部聚齐了……你还记得吗？双弩精灵，我们的国王？三围长老全部聚齐的话，就能使用一个魔法。名叫纯白净化……！");
        npc.sayNextS("纯白净化的话，我应该……", false);
        npc.sayNext("本来是在国王遇到危机情况，无法使用力量的时候使用的莫噶。可以将所有精灵精神深处最纯洁最高贵的力量召唤出来。使用之后，其他陷入诅咒的人一定就会醒来。！");
        npc.sayNextS("你们也因为诅咒的影响而变弱了吗……没关系吗？", false);
        npc.sayNext("纯白净化可以通过精神共鸣将精灵们链接在一起，增强相互的力量……虽然不是很简单，但只需要消耗很少的力量就行。现在马上就可以使用。");
        npc.startQuest();
        npc.sayNextS("如果那个魔法可以成功……大家就能都醒来吗？那就别再犹豫了。三位长老，请把困在冰里的百姓从痛苦中拯救出来。", false);
        player.showAvatarOriented("Effect/Direction5.img/mercedesQuest/Scene1");
}
