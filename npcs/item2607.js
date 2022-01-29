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

if (player.isQuestStarted(2607)) {
        if (player.checkNearby(new java.awt.Point(-1111, -222))) {
                if (player.hasItem(4033178, 1)) {
                        npc.say("快回去交任务吧！");
                } else if (player.canGainItem(4033178, 1)) {
                        player.gainItem(4033178, 1);
                } else {
                        npc.say("其他栏背包已满，请清理。");
                }
        } else {
                npc.say("请来到我面前！");
        }
}
