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
        npc.sayNextS("啊……啊……冷静，冷静下来，双弩精灵。着急也没有用。冷静。把现在的情况整理一下。");
        npc.sayNextS("1. 黑魔法师的诅咒没有消失。从长老们和其他百姓们还困在病里来看，这一点可以确认。.");
        npc.sayNextS("2. 醒来的人好像只有我。虽然不知道是为什么……想到醒来之前感觉到的那个气息，也许是因为黑魔法师的封印变弱了？");
        npc.sayNextS("3. 虽然想到外面去看看冒险岛世界的情况，但是不行，因为……我现在等级只有10级。着到底是怎么回事！我竟然只有10级！");
        npc.sayNextS("黑魔法师最后一个诅咒……那个诅咒的影响当然会很大，看来我是太低估了。而且也不知道过了多长时间，被困在冰里这么长时间没身体也变僵硬了。");
        npc.sayNextS("受了伤，又受到诅咒，被困在冰里这么长时间，等级变低是当然的事情……怎么会这样！劻勷我恢复成原来的等级！我双弩精灵竟然只有10级！");
        npc.sayNextS("……呼，呼……冷，冷静。不是尖叫的时候！先确认下身体状态。真的只有10级了吗？该不会还有伤还没好吧？手脚还能动吗？");
        npc.sayNextS("左手可以动……");
        npc.sayNextS("右手也没问题。");
        npc.sayNextS("腿也没事。");
        npc.sayNextS("伤全都好了。只是等级……呃呃呃……好想哭……");
        npc.startQuest();
        npc.completeQuest();
}
