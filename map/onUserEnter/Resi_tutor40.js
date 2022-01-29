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
//player.setStandAloneMode(true);
npc.sayNextNoEsc("嗯…实验似乎进行的相当顺利。和黑色之翼合作果然是明智之举…呵呵呵", 2159012);
npc.sayNextNoEsc("格里梅尔果然有先见之明。", 2159008);
npc.sayNextNoEsc("黑色之翼无法挑剔的机器人，就快要完成了。現在实验要开始下一个阶段了，接下来会更有趣。", 2159012);
npc.sayNextNoEsc("下一个阶段呢？", 2159008);
npc.sayNextNoEsc("呼呼…到現在还不知道吗？光看这个实验室就应该会知道，我现在要制造什么东西。只制造机器人不怎么好玩，比机器人还有趣的…", 2159012);
npc.sayNextNoEsc("嗯？这个实验者吗？你打算对这个实验者做什么吗？", 2159008);
npc.sayNextNoEsc("什么，我能了解在你眼中，看不见这实验室伟大的地方。至于你呢！只要把你的任务做好就行了。看好在这里的每一个实验者，让他们没办法逃跑就行了。", 2159012);
npc.sayNextNoEsc("…嗯？有没有听到什么奇怪的声音？", 2159012);
npc.sayNextNoEsc("嗯？奇怪的声音？这样一说，好像有什么…？", 2159008);
player.updateQuestRecordEx(23007, "vel00", "3");
player.setDirectionMod(true);
player.setInGameDirectionMode(false, false, false, false);
player.showTrembleEffect(false, 500);
player.showReservedEffect("Effect/Direction4.img/Resistance/TalkInLab");
