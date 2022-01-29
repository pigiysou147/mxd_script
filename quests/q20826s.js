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
        npc.sayNext("首先针对圣地来做个介绍。圣地是在女皇的魔法笼罩之下的漂浮島。所以虽然漂浮在这里，但是却扮演着冒险岛往返之船的角色。");
        npc.sayNext("现在的状况不太好，留在这里注视着黑魔法师的一举一动，同时培养对抗他的力量。");
        npc.sayNext("是，还有…骑士团分为5个职业，分別可以使用光、火、风、闪电、黑暗的精灵的力量。由5名的骑士团长带领着皇家骑士团…？?\r\n不是啊，胡克。怎么又来我的课程了呢？");
        npc.sayNext("当然是很好奇新进的骑士团员有没有好好接受教育啊。不是因为很憧憬闪电骑士团长胡克，才想成为骑士的吗？", 1101007);
        npc.sayNext("胡克，别为难他了。");
        npc.sayNext("奇努，首先好像应该向新进骑士团员介绍这个身体才对啊。从打招呼开始吧，如何？？", 1101007);
        npc.sayNext("胡克，我们打了招呼就要走了#h0#.這位是闪电骑士团长，胡克。先打声招呼吧。");
        npc.startQuest();
}
