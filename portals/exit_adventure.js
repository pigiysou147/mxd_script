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
        case 211040401:
                portal.playPortalSE();
                player.changeMap(211040300, "in00");
                break;
        case 910400200:
                if ("dummySleepy".equals(portal.getName()) && player.isQuestStarted(32243)) {
                        player.changeMap(105000000, 8);
                } else {
                        player.showSystemMessage("做完任务再离开吧！");
                        portal.abortWarp();
                }
                break;
        default:
                player.dropMessage(1, "Portal:" + portal.getName());
                portal.abortWarp();
}
