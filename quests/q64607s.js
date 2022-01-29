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

if (map.getId() > 871100000 && map.getId() < 871100010) {
        npc.sayNextENoEsc("#b这真的是我的房子……", true);
        npc.sayNextENoEsc("#b今后我就能随心所欲地装饰这个房屋了吗？", true);
        npc.sayNextENoEsc("#b太棒了！真是太帅了！", true);
        npc.sayNextENoEsc("#b但是……应该从哪里开始呢？……", true);
        npc.sayNextENoEsc("#b之前都是因为有艾尔宾和艾米的帮助，我才能轻松地享受装修的乐趣……", true);
        npc.sayNextENoEsc("#b他们……以后还会帮助我吗？", true);
        npc.sayNextENoEsc("#b请艾尔宾和艾米来当我的管家吧！", true);
        npc.completeQuest();
} else {
        npc.sayNextENoEsc("#b似乎已经完成建造了，回家看看吧。\r\n(※该任务只能在我的小屋内进行。)", true);
}



