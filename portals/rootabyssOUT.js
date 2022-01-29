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
 * @author Jackson
 */

let eventName;
let key;
let scriptName;
switch (map.getId()) {
        case 105200300:
        case 105200310:
                eventName = "boss_bloody";
                scriptName = "bloody_accept";
                break;
        case 105200100:
        case 105200110:
                eventName = "boss_banban";
                scriptName = "banban_accept";
                break;
}
let event = portal.getEvent(eventName);
if (event != null) {
        portal.abortWarp();
        player.runScript(scriptName);
} else {
        let [map, spawnPoint] = portal.resetRememberedMap("UNITY_PORTAL");
        if (map == 999999999) { //warped to FM without having previous position saved
                map = 100000000; //Perion
                spawnPoint = "unityPortal2"; //market00 on Perion
        }
        portal.playPortalSE();
        player.showSystemMessage("从鲁塔比斯回到原来所在的地方。");
        player.changeMap(map, spawnPoint);
}