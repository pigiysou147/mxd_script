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


let sel = npc.askMenu("#e<阿斯旺解放战>#n\r\n你愿意去扫荡仍然在阿斯旺地区徘徊的希拉的残党吗?#b\r\n\r\n\r\n#L0#扫荡希拉的残党#l\r\n#L1#直接消灭希拉 (120级以上)#l", 2183001);
if (sel == 0) {
        player.showSystemMessage("阿斯旺解放战暂时处于和平状态。请等到下一季的解放战。");
} else if (sel == 1) {
        if (player.getLevel() >= 120) {
                npc.sayNext("现在你将到达希拉之塔入口，请务必消灭希拉吧。", 2183001);
                player.changeMap(262030000);
        } else {
                npc.say("以你现在的实力，对战希拉有些勉强。必须达到120级以上才能进行挑战。", 2183001);
        }
}
