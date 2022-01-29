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
npc.sayNext("哦，鸡蛋 拿来了吗？快把蛋给我吧。我来帮你把它孵化。");
let ret = npc.askYesNo("来，拿着。不知道这到底可以用来干什么……");
if (ret == 1) {
        npc.completeQuest();
        player.gainExp(360);
        player.loseItem(4032451, 1);
        player.loseItem(4033081, 1);
        var string = ["UI/tutorial/evan/9/0"];
        npc.sayImage(string);
} else {
        npc.say("嗯？奇怪。孵化器没有设置好。重新尝试一下吧。");
}

