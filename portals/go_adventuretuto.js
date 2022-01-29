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



switch (map.getId()) {
    case 4000012:
        if (player.isQuestCompleted(32204)) {
            player.changeMap(4000013, 0);
            portal.playPortalSE();
        } else {
            portal.abortWarp();
        }
        break;
    case 4000013:
        if (player.isQuestCompleted(32207)) {
            player.changeMap(4000014, 0);
            portal.playPortalSE();
        } else {
            portal.abortWarp();
        }
        break;
    case 4000014:
        if (player.isQuestStarted(32210)) {
            player.changeMap(4000020, 0);
            portal.playPortalSE();
        } else {
            portal.abortWarp();
        }
        break;
}
if (!portal.warped()) {
    player.dropAlertNotice("先完成麦加的任务在离开吧！");
}