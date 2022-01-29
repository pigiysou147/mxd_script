/*
 * AuroMS MapleStory server emulator written in Java
 * Copyright (C) 2018 Kent
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

/* global npc, player, map */

let n = player.getIntQuestRecordEx(500773, "manager");
let npcId = 9400920 + n;

let str = "#face0##b你要去哪儿？\r\n";
if (map.getId() == 871000000) {
        str += "#L0#前往我的小屋#l\r\n";
} else {
        if (player.isQuestStarted(64595)) {
                str += "#L2#前往广场#l\r\n";
        } else {
                str += "#L1#前往广场#l\r\n";
        }
}
str += "#L9#离开我的小屋#l";


let sel = npc.askMenuE(str, npcId);
switch (sel) {
        case 0:
                if (player.getChannel() == 1) {
                         player.goMyHome();
                } else {
                        npc.sayNextE("#face0#当前只有#b频道-1#k可以进入！", npcId);
                }
                break;
        case 1:
                player.changeMap(871000000, 0);
                break;
        case 2:
                player.changeMap(871000012, 0);
                break;
        case 9:
                //回到源地图
                let [mapId, spawnPoint] = npc.resetRememberedMap("RETURN_MAP");
                if (mapId == 999999999) {
                        mapId = 100000000;
                        spawnPoint = 0;
                }
                player.changeMap(mapId, spawnPoint);
                break;

}
