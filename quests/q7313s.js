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
npc.sayNext("在这个洞穴深处有一条邪恶的#e#r暗黑龙#k#n. 要想前往那里, 必须带着#e#b#t4001086##k#n从秘密通道通过才行. ");
npc.sayNext("勇敢的人啊, 现在的你应该比我更需要这件东西. 我要将\r\n\r\n#i4001086##e#b#t4001086##k#n给你. ");
npc.sayNext("只有拥有此物的人才能够在#e#b敢死队的暗号石板#k#n中发现秘密通道. 如果不小心将证物丢失, 就请再来和我对话吧. ");
if (player.canGainItem(4001086, 1)) {
        player.gainItem(4001086, 1);
        npc.startQuest();
        npc.completeQuest();
} else {
        npc.sayNext("啊，请清理下你的背包其他栏，没有空间是不能获取象征的！");
}
