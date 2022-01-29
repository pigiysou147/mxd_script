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
if (player.hasItem(4001086, 1)) {
        let ret = npc.askYesNo("石板上的文字发出了奇异的光芒，石板后的一扇小门开启了。想要使用秘密通道吗？");
        if (ret == 1) {
                player.changeMap(709000700);
        } else {
                npc.say("如果想移动，请再与我对话。");
        }
} else {
        npc.say("#b(一座石碑，上面写着看不懂的文字……。)");
}