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
 * tutorial8
 * Maple Road: Snail Hunting Ground I (Map 40000)
 *
 * Gives an hint to new players on checking their stats.
 *
 * @author Jackson
 */
player.setInGameCurNodeEventEnd(true);
player.setInGameDirectionMode(true, true, false, false);
//player.setStandAloneMode(true);
let ret = npc.playMovie("adventurer.avi", true);
if (ret != 1) {
        player.scriptProgressMessage("播放动画失败。");
}
player.setInGameDirectionMode(false, false, false, false);
//player.setStandAloneMode(false);
player.changeMap(4000005, 0);