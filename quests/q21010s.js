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

startScript();

function startScript() {
        npc.sayNextNoEsc("咦？什么人在岛上……？哎呦，这不是#p1201000#吗？#p1201000#来这里是为了……这人是#p1201000#的朋友吗？啊？你说这人是英雄？");
        npc.sayNextNoEsc("     #i4001170#");
        npc.sayNextNoEsc("这位原来就是#p1201000#一族数百年间苦苦守候的英雄啊！啊，乍一看倒是和普通人没什么两样……");
        let sel = npc.askAcceptNoEsc("不过，既然被黑魔法师的诅咒给冰封了数百年，现在体力一定很虚弱吧。#b我这里有些恢复体力的药水，赶紧喝下去吧#k。");
        if (sel == 1) {
                player.gainItem(2000022, 1);
                npc.startQuest();
                npc.sayNextNoEsc("请先喝掉药水，然后再慢慢谈！");
                npc.sayNextSNoEsc("#b（这药水怎么喝？……不记得了……）#k", false);
                player.showHireTutorMsg(0xE);
        } else {
                npc.sayNextNoEsc("哎呀，别客气！送英雄一瓶药水又不是什么大事。你要是改了主意，请随时来找我。");
        }
}
