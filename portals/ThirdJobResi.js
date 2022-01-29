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


if (player.isQuestActive(23033) || player.isQuestActive(23034) || player.isQuestActive(23035) || player.isQuestActive(23164)) {
        if (portal.makeEvent("change_job", false, [player, 931000200]) != null) {
                portal.playPortalSE();
        } else {
                player.showSystemMessage("发生未知错误！");
                portal.abortWarp();
        }
} else {
        player.showSystemMessage("当前无法进入！");
        portal.abortWarp();
}