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
 * Roger's Apple (NPC 2000 Quest 1021) Start
 * Maple Road: Lower level of the Training Camp (Map 2)
 *
 * Gives advice to new players on how to use items.
 *
 * @author Jackson
 */

startScript();

function startScript() {
        npc.sayNextSNoEsc("到底是什么书啊..啊，这到底是....我还是头一次看见这种文字。一个字都看不懂。。。。");
        npc.sayNextSNoEsc("好像是非常重要的东西，必须尽快送到圣地去...");
        npc.sayNextSNoEsc("怎么感觉阴森森的...");
        npc.startQuest();
        for (var i = 0; i < 8; i++) {
                map.spawnMob(9300741, -325, -30);
        }
        npc.saySNoEsc("咦。。？怎么突然有人出现了，难道是要把书抢走吗？...不行，不能让黑色之翼抢走，来吧！");
}
