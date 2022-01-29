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

/* global portal, player */

/**
 *
 * @author Jackson
 */

let event = portal.getEvent();
if (event != null) {
        let nextName = event.getVariable("next");
        let c = event.getVariable("count");
        if (c == null) {
                c = 0;
        }
        if ("1".equals(nextName)) {
                c += 1;
                event.setVariable("count", String(c));
        }
        event.setVariable("next", "0");
        if (c / 2 >= 30) {
                player.teleportToPortalId(3, 0);
                player.runScript("platformar_done");
        }
}
portal.abortWarp();
