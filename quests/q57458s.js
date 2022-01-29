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
npc.sayNextENoEsc("#face0#神那，你总算开始逐渐恢复力量了啊。记得刚来到冒险岛的时候，你根本就什么都做不好的呢。", 9130081);
npc.sayNextENoEsc("哼，当时不过是因为环境突然发生变化，让我有些混乱了而已。但还是很快就适应了这里。", true);
npc.sayNextENoEsc("#face0#你嘴上是这么说，但实际提供给我的灵力还远远不够用啊。再这么下去，我就要被活活饿死啦。", 9130081);
npc.sayNextENoEsc("对了，接下来就要一边在冒险岛各地探险，一边完成任务了。在此之前，必须先把几个有关法术的封印给解开了才行。不然只凭初步的法术，是根本没有办法继续应付接下来的任务的。", true);
npc.sayNextENoEsc("原本计划提供给小白的灵力，也要先用在新的法术上了。你记得做好心理准备吧。", true);
npc.sayNextENoEsc("#face0#不是吧！喂喂，你要是继续撤走灵力，我就真的要饿死了啊！难道是因为我刚刚告诉你说，现在的灵力已经不够用了，所以你才在闹脾气吗？是这个原因吗？对不起嘛，是我说错话，你就别生气啦～！", 9130081);
npc.sayNextENoEsc("（好了，我已经多少明白该怎样在冒险岛运用灵力。是不会真的让你活活饿死的。）", true);

npc.sayNextENoEsc("（不过，目前的灵力还不足以打倒信长，救出姬儿。必须要继续努力才行……）", true);
player.setJob(4210);
player.gainSp(5);
if (!player.gainItem(1552002, 1)) {
        player.gainParcel(1552002, 1, "背包空间不足，以邮件发送！");
}
if (!player.gainItem(1142507, 1)) {
        player.gainParcel(1142507, 1, "背包空间不足，以邮件发送！");
}
npc.startQuest();
npc.completeQuest();