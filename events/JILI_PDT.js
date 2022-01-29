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


let frequency = 60 * 1000;//泡点间隔 单位毫秒

let points = {//泡点奖励列表。
    vip: {//每个VIP等级判断的物品
        普通: [2430865, 1],
        尊贵会员: [2430865, 1]
    },
    reward: {//每个VIP等级的奖励
        普通: [ // VIP等级，必须有VIP0
            [1, 20, 20, "点券"],
            [1, 20, 20, "抵用券"]
        ],
        尊贵会员: [
            [1, 40, 40, "点券"],
            [1, 20, 20, "抵用券"]
        ]
    }
}

function init(attachment) {
	event.setVariable("hour", 20);
	event.setVariable("min", 30);
    event.startTimer("point", frequency);
}

function timerExpired(key) {
    switch (key) {
        case "point":
			let pdmap = [
                910000000,
                
                910000000,
                809030000]; //泡点运作的地图
            let hymap=[
                809000201,
                993176808,
                924010300,
				101050010,
				800024000,
                927020070,
                809000101,
                910310512
            ]
            
            var pdnum = 20;//普通泡点数量
            let players = event.getChannelPlayers();
			for (let i = 0; i < players.size(); i++) {
				let player = players.get(i);
                if(player.getChannel()==1){
                    //1X的玩家
                    var flag=0;
                    //普通泡点地图
                    for(var j=0;j<pdmap.length;j++){
                        if(player.getMapId()==pdmap[j]){
                            flag=1;
                            break;
                        }
                    }
                     for(var j=0;j<hymap.length;j++){
                        if(player.getMapId()==hymap[j]){
                            flag=2;
                            break;
                        }
                    }
                    if(flag==1){
                        //泡点地图
                            if(player.hasItem(2436363,1)){
                                //会员泡点
                                player.addPQLog("活力",10,999);
                                player.modifyCashShopCurrency(1,pdnum*2);
                                player.modifyCashShopCurrency(2,pdnum*2);
                                player.showSystemMessage("[会员泡点]: 获得 10 活力！");
                                player.showSystemMessage("[会员泡点]: 获得 "+pdnum*2+" 点券！");
                                player.showSystemMessage("[会员泡点]: 获得 "+pdnum*2+" 抵用！");
                            }else{
                                player.addPQLog("活力",5,999);
                                player.modifyCashShopCurrency(1,pdnum);
                                player.modifyCashShopCurrency(2,pdnum);
                                player.showSystemMessage("[泡点]: 获得 5 活力！");
                                player.showSystemMessage("[泡点]: 获得 "+pdnum+" 点券！");
                                player.showSystemMessage("[泡点]: 获得 "+pdnum+" 抵用！");
                            }
                    }else if(flag==2){
                        player.runScript("泡点奖励T");

                    }

                }
				
			}
			
            event.startTimer("point", frequency);
            break;
    }
}

