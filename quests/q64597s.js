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


npc.sayNextENoEsc("#face1##h0#！我想了一下，这里应该要有个桌子才行。要是有一些能够装饰在墙上的装饰品就更好了！ ", 9400921);
npc.sayNextENoEsc("#b那样应该会很棒呢！在哪里能找到桌子和装饰品呢？", true);
player.teleportToPos(5, player.getId(), new java.awt.Point(18, 114));
npc.sayNextENoEsc("#face0#装饰品在广场上的米兰达的跳蚤市场就能买到。", 9400921);
npc.sayNextENoEsc("#face0#家具得去其他村子的工坊买，但是现在没多少时间了，就拜托一下艾丹吧。", 9400921);
npc.sayNextENoEsc("#face1#我去找艾丹，你和艾米一起去米兰达的跳蚤市场买装饰品吧？", 9400921);
npc.sayNextENoEsc("#b我知道了！", true);
npc.startQuest();



