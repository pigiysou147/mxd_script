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

if (player.gainItem(2672018, 1)) {
        npc.completeQuest();
        npc.sayNextENoEsc("#face0#[#i2672018:##t2672018#]\r\n这是搬家礼物。", 9400924);

        npc.sayNextENoEsc("#b哇！这是你亲自做的吗？真是太帅了，怎么能养得这么漂亮呢？连叶子都在闪闪发光呢！", true);
        npc.sayNextENoEsc("#face0#……这是我买来的。", 9400924);
        npc.sayNextENoEsc("#b啊……谢谢你，米兰达，我会好好养的。", true);

        player.destroyTempNpc(9400924);
} else {
        npc.sayNextENoEsc("#face0#你的背包消耗栏不足啊，快清理下吧。", 9400924);
}
