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


npc.sayNextE("距离最初来到这个世界，已经过去多长时间了呢？当时，我在陌生的丘陵醒来，发现身体完全不听自己的控制。后来才知道，原来是因为日本和这个世界的物理法则不同，才导致出现这样的问题。就因为这个缘故，我一开始就连想击败训练用的人偶都需要花上不少的力气，实在是太丢脸了。", true);
npc.sayNextE("不过在那之后，我又经历了各种各样的事情，逐渐开始适应要如何在这个世界活动自己的身体了。虽说还没有彻底恢复原本的力量，但身体至少变得听话了很多。", true);
npc.sayNextE("好久没有用过的那些剑术，现在应该也可以重新开始使用了。相信只要脚踏实地坚持修行，那么终有一日，我一定能够自由自在地使出原本所有的秘藏剑术来。虽说目前还很难完全实现这一点，但一定要继续努力下去才是。", true);
player.setJob(4110);
player.gainSp(5);
npc.startQuest();
npc.completeQuest();