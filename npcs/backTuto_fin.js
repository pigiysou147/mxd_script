/*
 * Auroms MapleStory server emulator written in Java
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

/* global player, npc, party */

/**
 * 
 * @author Jackson 
 */
let ret = npc.askYesNo("嗯呀，你终于来到这里啦！现在你将踏入冒险世界！我为你准备了许多礼物帮助你能更好的适应！做好准备了吗？");
if (ret == 1) {
        while (player.getLevel() < 10) {
                player.gainExp(1000);
        }
        player.modifyCashShopCurrency(2, 4000);
        player.gainParcel(5150040, 10, "恭喜你完成入岛指引。");
        player.gainParcel(2022991, 100, "恭喜你完成入岛指引。");
        player.gainParcel(2450022, 5, "恭喜你完成入岛指引。");
        player.gainMesos(1000000);
        player.cancelItemEffect(2003519);
        player.changeMap(100000000, 0);
}