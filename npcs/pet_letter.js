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
 * Trainer Frod (NPC 1012007)
 * Victoria Road: Pet-Walking Road (Map 100000202)
 *
 * Finishes the pet walking challenge.
 *
 * @author Jackson (content from KiniroMS r227)
 */

if (player.hasItem(4031035, 1)) {
        npc.sayNext("嗯，那是我哥哥的信！可能是因为我觉得自己没工作没东西……嗯？啊……你听从了我哥哥的建议，训练了你的宠物，然后站在这里，嗯？好极了！！既然你努力来这里，我会提高你和宠物的亲密度。");
        if (player.getPetCount() == 0) {
                npc.sayNext("嗯...你真的带着你的宠物来了吗？这些障碍物是给宠物的。没有它你来这里干什么？？离开这里！");
        } else {
                player.loseItem(4031035, 1);
                player.gainCloseness(2);
                npc.sayNext("你怎么认为？你不觉得你和你的宠物越来越亲近了吗？如果你有时间，在我哥哥的允许下，在这个障碍物上再次训练你的宠物。");
        }
} else {
        npc.say("我哥哥告诉我要照顾宠物的障碍物，但是…因为我离他太远了，我忍不住想四处游逛……呵呵，既然我看不见他，不如冷静几分钟吧。");
}