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
if (player.getLevel() >= 30) {
    npc.sayNext("哇, 你现在比我上次见你的时候强了很多呢, 我觉得你现在是时候转职了。");
    let ret = npc.askYesNo("那么..... 你想测试自己的能力吗? 你只需要消灭那些怪物获得30个黑珠就可以了! ");
    if (ret == 1) {
        npc.startQuest();
        player.changeMap(912040005, 0);
    } else {
        npc.sayNext("好吧,那么你想转职的时候再来找我吧。");
    }
} else {
    npc.sayNext("这是海盗在30级或以上才能进行的!");
}
