/*
 * AuroMS MapleStory server emulator written in Java
 * Copyright (C) 2018 Kent
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

/* global npc, player, map */

let diceCount = player.getIntQuestRecordEx(63376, "diceCount");
if (diceCount <= 0) {
        npc.sayNextNoEsc("#h0#,你已经使用了所有的骰子，但是没有通关呢，希望下次运气会好些。\r\n现在将会把你传送出去。", 9400493);
        player.changeMap(867121900);
} else {
        let ret = npc.askYesNo("#h0#,你想离开这里吗？", 9400493);
        if (ret == 1) {
                player.changeMap(867121900);
        }
}
