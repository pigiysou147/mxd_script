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

if (player.hasItem(4031059, 1) && player.canGainItem(1142109, 1)) {
    player.loseItem(4031059);
    player.gainItem(1142109, 1);
    player.setJob(531);
    player.gainSp(3);
    npc.completeQuest();
    npc.sayNext("恭喜!你现在是一名毁灭炮手了!");
} else {
    npc.sayNext("请确认你装备栏有一格空间。");
}