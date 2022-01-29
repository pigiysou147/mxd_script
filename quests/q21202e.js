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
        npc.sayNextNoEsc("哈！你已经证明了自己的价值。你会得到你想要的，最好的战斧！");
        npc.sayNextSNoEsc("我的回忆又回来了…");
        npc.completeQuest();
        npc.sayNextNoEsc("哈哈!你已经得到你想要的了，现在可以离开了！");
}
