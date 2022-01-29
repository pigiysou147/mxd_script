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
npc.sayNextS("虽然我曾经预想过，但一想到双弩精灵都不记得我了，我的心就……");
npc.sayNextS("就算继续变得强大下去，又有什么意义呢？");
npc.sayNextS("……迄今为止之所以我可以一直强大，都要多亏了阿琅借给我的守护精灵。");
npc.sayNextS("原本都尘埃落定之后，我是打算将精灵还回去的。");
npc.sayNextS("当再次与阿琅相遇之时，想要证明我们从前就认识，拿出阿琅的精灵是最为确凿的证据。");
npc.sayNextS("但是不能在继续拖延下去了，阿琅会一直在没有守护精灵的陪伴下孤独生活下去的。");
npc.sayNextS("日后只希望看到精灵时，阿琅能够记起我，但现在也只能放下这虚无的希望了。");
let ret = npc.askYesNoS("虽然已经迟了许久，单不要在做拖延，得赶紧去见阿琅了。\r\n#b(接受后会立即前往狐狸村。)");
if (ret == 1) {
        npc.sayNextS("去狐狸村吧，阿琅应该就在狐狸树附近。");
        npc.startQuest();
            npc.rememberMap("RETURN_MAP");
        player.changeMap(940204115, 0);
}
