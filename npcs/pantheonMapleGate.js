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
let  mapList = Array(
        Array("冒险岛世界 - 六岔路口", 104020000)
        );

let text = "请选择你想去的地方:\r\n";
for (var i = 0; i < mapList.length; i++) {
        text += "#b#L" + i + "# " + mapList[i][0] + "#k\r\n";
}

let sel = npc.askMenu(text);
switch (sel) {
        case 0:
                if (player.isQuestStarted(38030)) {
                        player.setQuestData(38030, "clear");
                        player.completeQuest(38030, 3000012);
                        if (player.getJob() == 2500) {
                                player.setJob(2510);
                                player.gainSp(5);
                        }
                }
                break;

}
player.changeMap(mapList[sel][1], 0);

