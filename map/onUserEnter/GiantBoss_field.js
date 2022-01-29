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

let event = npc.getEvent("boss_beidler");
if (event != null) {
        let mapInfo = event.getVariable("MAP_INFO");
        if (!(map.getId() in mapInfo)) {
                mapInfo[map.getId()] = "1";
        }
        if (map.getId() == 863010410 || map.getId() == 863010310) {
                if (event.getVariable("Kill" + map.getId()) != null) {
                        player.showPortalEffect("open", 2);
                        player.showPortalEffect("clear", 2);
                }
        }
        party.showGiantBossMap(mapInfo);
        let idx = map.getId() / 10 % 100;
        player.showScreenDelayedEffect("Map/Effect.img/giantBoss/enter/" + idx, 0);
}
