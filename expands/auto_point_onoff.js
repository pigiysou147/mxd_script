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

let event = npc.getEvent("auto_point");
if (event != null) {
	var txt="";
        let players = event.getVariable("players");
        let flag = true;
        for (let i in players) {
                if (players[i].getId() == player.getId()) {
                        flag = false;
                        break;
                }
        }
        if (flag) {
                let ret = npc.askYesNo("是否开启泡点？");
                if (ret == 1) {
                        players.push(player);
                        player.setEvent(event);
						txt+=players[i].getName()+" ";
                }
        } else {
                npc.say("当前已开启泡点！的玩家有"+txt);
        }
} else {
        npc.say("暂时无法使用。");
}