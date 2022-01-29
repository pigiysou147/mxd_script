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
        npc.sayNext("长老们的纯白净化不起作用的原因，想来想去只有一个。请冷静的听我说。黑魔法师的封印好像已经变弱，或者已经解开了。");
        npc.sayNext("想想其实很简单。从国王陛下醒来的事情，可以看到黑魔法师的诅咒出现了裂痕。而且通过不端的修炼，国王的力量正在逐渐恢复。");
        npc.sayNext("本来是在国王遇到危机情况，无法使用力量的时候使用的莫噶。可以将所有精灵精神深处最纯洁最高贵的力量召唤出来。使用之后，其他陷入诅咒的人一定就会醒来。！");
        npc.sayNext("那样的话，我们种族的力量也会逐渐变强。但是其他人还是没能战胜诅咒。好像被什么阻挡了一样……");
        npc.sayNext("结论只有一个。#e黑魔法师的诅咒虽然出现了裂缝，但好像正在变强#k。");
        npc.sayNext("黑魔法师的诅咒变强，说明黑魔法师的封印正在变弱，他的力量正在回到冒险岛世界……只能这么解释。");
        npc.startQuest();
        npc.sayNext("结论是，现在的……经历了数百年时间的冒险岛世界陷入了危机之中。危机的制造者正是黑魔法师。");

}
