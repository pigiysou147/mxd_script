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
endScript();


function endScript() {
        let sel = npc.askYesNo("嗯……看你的表情就知道你啥都没想起来。不过不用担心。说不定这反倒更好。来，这里有一些药水，加油吧！\r\n\r\n#fUI/UIWindow.img/Quest/reward#\r\n#v2000022# 10个 #t2000022#\r\n#v2000023# 10个 #t2000023#");
        if (sel == 1) {
                npc.completeQuest();
                player.gainExp(57);
                player.gainItem(2000022, 10);
                player.gainItem(2000023, 10);
                npc.sayNextSNoEsc("#b（就算我真的是英雄……一个什么能力都没有的英雄又能有什么用呢？）#k", false);
        } else {
                npc.sayNextNoEsc("呜呜，你是嫌这把剑太寒碜吗？");
        }
}
