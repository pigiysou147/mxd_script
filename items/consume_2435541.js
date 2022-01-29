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
//party.changeMap(240080000);
let items = new Array();
let point = 0;
let mesos = 0;
let exp = 0;

//增加组队点数	
////var zudui = parseInt((Math.random() * 3+1)*5000) ;
//player.updateQuestRecordEx(7907,"point",player.getIntQuestRecordEx(7907,"point")+zudui );
//player.dropMessage(1,"获得了组队点数："+zudui);
/*var c=1;
var txt="";
for(var i=1;i<64;i++){
	if(i<30){
		c+=20;
	}else if(i>=30 && i<50){
		c+=30;
	}else if(i>=50 && i<64){
		c+=50
	}
	txt+="层数:"+i+" 证物：总计"+c+"\r\n";
}*/

var count =player.customSqlResult("select count(id) count from accounts where loggedin>1").get(0).get("count");;
let str = player.getBuddyCapacity()+"欢迎使用在线奖励发送系统。\r\n#b";
str+="#L789#当前玩家在线总数:#r"+count+" #k #b 查看在线玩家列表#l";
str += "\r\n#L1#添加物品奖励#l";
str += "\r\n#L3#添加点券奖励#l";
str += "\r\n#L4#添加金币奖励#l";
str += "\r\n#L5#添加经验奖励#l";
str += "\r\n#L999#奖励信息核对#l";
str += "\r\n#L123#地图玩家查看#l";
str += "\r\n#L234#查看当日武器通关各类副本次数#l";

let flag = true;

while (flag) {
        let sel = npc.askMenu(str);
        switch (sel) {
                case 1:
                        while (true) {
                                let iStr = "已添加的物品：\r\n\r\n";
                                for (let i = 0; i < items.length; i++) {
                                        iStr += "#b#L" + i + "##v" + items[i][0] + ":##r#z" + items[i][0] + "##k x#r" + items[i][1] + "#n#k#l\r\n";
                                }
                                iStr += "\r\n#L9999##e#b添加物品#l          #L1000#完成添加#l";
                                let iSel = npc.askMenu(iStr);
                                if (iSel == 1000) {
                                        break;
                                } else if (iSel == 9999) {
                                        let itemId = npc.askNumber("请输入待添加物品的Id：\r\n#e#r(请一定确认道具Id的正确性)#k#n", 0, 1000000, 9999999);
                                        if (player.makeItemWithId(itemId) != null) {
                                                let quantity = npc.askNumber("添加物品#e#v" + itemId + ":##b#z" + itemId + "##n#k\r\n请输入数量：", 1, 1, 9999);
                                                items.push(new Array(itemId, quantity));
                                                npc.sayNext("物品#e#v" + itemId + ":##r#z" + itemId + "##k x#r" + quantity + "#n#k 添加完成！");
                                        } else {
                                                npc.sayNext("你输入的Id有误，请重试！");
                                        }
                                } else {
                                        let delRet = npc.askYesNo("是否要删除#v" + items[iSel][0] + ":##r#z" + items[iSel][0] + "##k x#r" + items[iSel][1] + "#n#k\这个物品？");
                                        if (delRet == 1) {
                                                items.splice(iSel, 1);
                                                npc.sayNext("物品删除完成！");
                                        }
                                }
                        }
                        break;
                case 3:
                        if (point > 0) {
                                let mp = npc.askYesNo("已设置点券券奖励：#e#r" + point + "\r\n是否需要修改？");
                                if (mp == 0) {
                                        break;
                                }
                        }
                        point = npc.askNumber("请输入奖励的点券券数：\r\n", 1000, 0, 2100000000);
                        npc.sayNext("已成功添加点券券奖励：#e#r" + point + "#n#k！");
                        break;
                case 4:
                        if (mesos > 0) {
                                let mm = npc.askYesNo("已设置金币奖励：#e#r" + mesos + "\r\n是否需要修改？");
                                if (mm == 0) {
                                        break;
                                }
                        }
                        mesos = npc.askNumber("请输入奖励的金币数：\r\n", 1000, 0, 2100000000);
                        npc.sayNext("已成功添加金币奖励：#e#r" + mesos + "#n#k！");
                        break;
                case 5:
                        if (exp > 0) {
                                let mm = npc.askYesNo("已设置经验值奖励：#e#r" + exp + "\r\n是否需要修改？");
                                if (mm == 0) {
                                        break;
                                }
                        }
                        exp = npc.askNumber("请输入奖励的经验值：\r\n", 1000, 0, 2100000000);
                        npc.sayNext("已成功添加经验值奖励：#e#r" + exp + "#n#k！");
                        break;
                case 999:
                        let all = "请核对以下奖励！\r\n";
                        if (point > 0) {
                                all += "#b\r\n点券券#k：#r" + point;
                        }
                        if (mesos > 0) {
                                all += "#b\r\n金  币#k：#r" + mesos;
                        }
                        if (exp > 0) {
                                all += "#b\r\n经验值#k：#r" + exp;
                        }
                        for (let i = 0; i < items.length; i++) {
                                all += "\r\n#b#v" + items[i][0] + ":##r#z" + items[i][0] + "##k x#r" + items[i][1] + "#n#k";
                        }
                        all += "\r\n#b#r#L999#核对完成#l          #L1000#返回修改#l";
                        let cSel = npc.askMenu(all);
                        switch (cSel) {
                                case 999:
                                        let message = npc.askBoxTextNoEsc("请输入奖励描述信息：\r\n ", "来自小蘑菇的关怀~", 50, 3);
                                        let days = npc.askNumberNoEsc("请输入奖励可领取期限（单位：#r天#k）", 3, 1, 365);
                                        let ret = npc.askYesNo("请确认已核对无误！点击确认后将无法撤回！");
                                        if (ret == 1) {
                                                flag = false;
                                                
                                                // var players=npc.getChannelPlayers();
                                                // for(var i=0;i<players.size();i++){
													
                                                //         for (let j = 0; j < items.length; j++) {
                                                //                 players[i].gainGachaponItem(message,items[j][0], items[j][1], 1 );
                                                //         }
													
                                                // }
                                                if (point > 0) {
                                                npc.addCSPointReward(point, message, days);
                                                }
                                                if (mesos > 0) {
                                                npc.addMesosReward(mesos, message, days);
                                                }
                                                
                                                
                                                for (let i = 0; i < items.length; i++) {
                                                npc.addItemReward(items[i][0], items[i][1], message, days);
                                                }
                                                npc.broadcastWeatherEffectNotice(43, "收到在线奖励！请到左侧奖励栏查看！", 30000);
                                                npc.sayNext("所有奖励已经发送完毕！请到左侧奖励栏查看！");
                                        }
                        }
                        break;
				case 789:
					var sql ="select a.name,map,recentip from (select hypay.`name` name,accounts.recentip from accounts ,hypay where accounts.id=hypay.accountid and accounts.loggedin>1)as a ,characters as c where c.`name`=a.`name` order by recentip";
					var result =player.customSqlResult(sql);
					var txt="\r\n#r#e";
					for(var i=0;i<result.size();i++){
					 txt+="#L"+result.get(i).get("map")+"#"+result.get(i).get("name")+" #所在地图: #m"+result.get(i).get("map")+"#IP:"+result.get(i).get("recentip")+"#l\r\n\r\n";
					 
					}
					let map =npc.askMenuS(txt);
					player.changeMap(map);
				break;
				case 123:
					var event = npc.getEvent("gailou");
					var m = event.getMap(224000000);
					var allPlayers = m.getMap();
					allPlayers = allPlayers.iterator();
					var txt ="";
					while (allPlayers.hasNext()) {//循环每一个玩家
						var players = allPlayers.next();
						///player.runScript("活動獎勵發放");
						txt+="\r\n"+players.getName();
					}
					npc.say(txt);
				break;
				case 234:
					var txt="当日打过BOSS的所有武器ID为:\r\n";
					var date = new Date();
					var 月 = new Date().getMonth() + 1;
					var 日 = new Date().getDate();
					var 時 = new Date().getHours();
					var 分 = new Date().getMinutes();
					var startTime="2020-"+月+"-"+日+" 00:00:00";
					
					var sql ="SELECT *,count(id) count from bossrank where itemid>100000 and  endtime>'"+startTime+"' GROUP BY itemid order by count desc";
					var todayResult=player.customSqlResult(sql);
					for(var i=0;i<todayResult.size();i++){
						txt+="#L"+i+"##e#r玩家:"+todayResult.get(i).get("name")+"ID："+todayResult.get(i).get("itemid")+"次数:"+todayResult.get(i).get("count")+"#l\r\n";
					}
					let se= npc.askMenu(txt);
					let id =todayResult.get(se).get("itemid");
					var sql2="SELECT * from bossrank where itemid>100000 and  endtime>'"+startTime+"' and itemid="+id;
					var detalTody=player.customSqlResult(sql2);
					txt="当日ID："+id+"打过BOSS的记录为:\r\n";
					for(var i=0;i<detalTody.size();i++){
						txt+="#e#r玩家:"+detalTody.get(i).get("name")+"BOSS:"+detalTody.get(i).get("boss")+""+"\r\n";
					}
					npc.askMenu(txt);
				break;
        }
}



