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

let event = reactor.getEvent("guild_quest");
if (event != null) {
        let spear = parseInt(event.getVariable("spear"));
        spear += 1;
        event.setVariable("spear", spear);
        let t_map = event.getMap(990000400);
        t_map.setReactorState("speargate", spear, 0);
        if (spear >= 4) {
                event.setVariable("state_s2", "clear");
                map.soundEffect("Party1/Clear");
                map.screenEffect("quest/party/clear");
                t_map.soundEffect("Party1/Clear");
                t_map.screenEffect("quest/party/clear");
        }
}


