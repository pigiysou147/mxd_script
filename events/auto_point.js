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


let players = [];

function init(attachment) {
        event.setVariable("players", players);
        event.startTimer("point", 60 * 1000);
}


function removePlayer(playerId) {
        for (var i=0;i<players.length;i++) {
			if(players[i]!=undefined){
					if (players[i].getId() == playerId) {
							players[i].setEvent(null);
							delete players[i];
							break;
					}
			}
        }

}

function playerDisconnected(player) {
        removePlayer(player.getId());
}

function playerChangedMap(player, destination) {
	if(destination.getId()!=330000010){
		player.dropMessage(1,"泡点已经结束,点击回到市场就可以再次开启泡点");
        removePlayer(player.getId());
	}else{
		player.dropMessage(1,"注意哦:只有使用拍卖卷的回到市场功能才能正常开启泡点哦~");
	}
		
}

function timerExpired(key) {
        switch (key) {
                case  "point":
                        for (var i=0;i<players.length;i++) {
							if(players[i]!=undefined){
								if(players[i].getChannel()==1){
									players[i].dropMessage(1,"泡点获得1活力");
									players[i].dropMessage(1,"泡点获得5点券");
									players[i].dropMessage(1,"泡点获得10抵用");
									players[i].addPQLog("活力",1,999);
									players[i].modifyCashShopCurrency(1, 5);
									players[i].modifyCashShopCurrency(2, 10);
								}
								
							}
                        }
                        event.startTimer("point", 60 * 1000);
                        break;
        }
}

