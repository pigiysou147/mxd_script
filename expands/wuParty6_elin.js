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
 * Lakelis (NPC 9020000)
 * Victoria Road: Kerning City (Map 103000000)
 *
 * Admits players into Kerning City party quest.
 *
 * @author Jackson
 */
//if (map.getId()==100030301 && player.isGm()){
 if (map.getId()==100030301 ){	 
let minPlayers = 2;
let maxPlayers = 6;
let minLevel = 200;
let maxLevel = 300;
let maxenter = 2;
let PQLog = "party3";

let sel = npc.askMenu("#e<组队任务：毒雾森林>#n\r\n\r\n我们一定更要拯救被怪人污染的森林，可现在阿尔泰营地？\r\n#d每天最多领取5次奖励，每次完成组队积分+3，家族积分+100\r\n通关奖励为：#v4310224# x 1 #v4000313# x 2 #v4001714# x 5 #v2614005# x 5\r\n#e#r并且有20%的几率额外获得双倍奖励，组长的概率为50%\r\n#b#L0#进入毒雾森林。#l\r\n#L1#听艾琳的叙述。#l");
switch (sel) {
        case 0:
                if (party == null || player.getId() != party.getLeader()) {
                        npc.say("你需要有一个#r" + minPlayers + "~" + maxPlayers + "#k人的队伍.并且等级在" + minLevel + "~" + maxLevel + "范围,\r\n那么请让你的组队长和我对话吧!");
                } else if (!player.isGm()&&(party.numberOfMembersInChannel() < minPlayers || party.getMembersCount(map.getId(), 1, 300) > maxPlayers)) {
                        npc.say("你需要有一个#r" + minPlayers + "~" + maxPlayers + "#k人的队伍.!");
                } else if (!player.isGm()&&party.getMembersCount(map.getId(), minLevel, maxLevel) < minPlayers) {
                        npc.say("你队员的等级要在" + minLevel + "~" + maxLevel + "范围!请确认!");
                } else if (party.getMembersCount(map.getId(), 1, 300) < party.getMembersCount()) {
                        npc.say("好像有队员在其他地方，请把队员都召集到这里！");

                } else if (!party.isAllMembersAllowedPQ(PQLog, maxenter)) {
                        npc.say("你队员#r#e" + party.getNotAllowedMember(PQLog, maxenter) + "#n#k今日次数已经达到上限了。");
                }else if (npc.makeEvent("PQ_PoisonForest", true, party) == null) {
                        npc.say("组队训练场任务里面已经有人了，请稍等..");
                }
                break;
        case 1:
                npc.say("这里曾经是一个干净和平的森林，有着美丽的仙女。但前一段时间，有个 #r 神秘男子穿着黑色的长袍#k 来了， 赶走了仙女，并进行了一个邪恶的研究。由于他的研究，森林变得越来越被污染了。现在我们必须拯救森林！");
                break;
}
 } else if (map.getId()==933025000){
	  var  event= npc.getEvent("PQ_PoisonForest");
	  var mapStat = event.getVariable(String(map.getId()));
		//npc.say(mapStat)
	 // if (mapStat==true){
		 if(true){
						if (npc.askYesNo("呼……还好你来到了这里，因为迷雾的原因，我一直找不到你，正着急呢，好了我们继续往森林深处走吧，我会用魔法把你们队员全部送过去！")){
							party.changeMap(933026000);
                            }
	  }
 } else if (map.getId()==933026000){
	  var event = npc.getEvent("PQ_PoisonForest");
	  var mapStat = event.getVariable(String(map.getId()));
	  if (mapStat==true){
		  if (party == null || player.getId() != party.getLeader()) {
                        npc.say("请让组队长跟我交谈！");
                    } else {
						npc.say("怪物球全部收集到啦，太好了，我尝试着唤醒一个净化了的森林矮人");
						party.changeMap(933027000);
                            }
							 } else {
                    npc.say("帮我击退那些中毒的森林矮人!！");
                }
 } else if (map.getId()==933029000){
		npc.sayNext("谢谢你帮助了我，虽然没有揭露怪人的真正身份……但是我们妨碍了他的研究，总有一天森林会恢复的！");
		player.addTrait("will", 35);
		player.addTrait("charisma", 10);
	  
		player.runScript("毒雾森林奖励")
	  
		player.changeMap(100030301, 0);
 } else {
	 if (npc.askYesNo("-毒雾森林\r\n\r\n你确定要离开吗？")){
		 player.changeMap(100030301);
	}
 }

//flag = true 重置
//flag = false 不重置
function getEventValue(event1,flag){
	var charInfo = getCharInfo();
	if (flag){
		var sql = "update zz_xr_event set value = ? where accounts_id = ? and event = ? and world =?  AND DATE_FORMAT(time, '%Y-%m-%d') != DATE_FORMAT(NOW(), '%Y-%m-%d') ";
	    player.customSqlUpdate(sql,0,parseInt(charInfo.accounts_id),event1,parseInt(charInfo.world));
	}
	if(!flag){
		var sql = "select value from zz_xr_event where accounts_id = "+parseInt(charInfo.accounts_id)+" and event = '"+event1+"' and world ="+parseInt(charInfo.world)+" ";  
	}else{
		var sql = "select value from zz_xr_event where accounts_id = "+parseInt(charInfo.accounts_id)+" and event = '"+event1+"' and world ="+parseInt(charInfo.world)+" AND DATE_FORMAT(time, '%Y-%m-%d') = DATE_FORMAT(NOW(), '%Y-%m-%d') "; 
	}

	
	var resultList = player.customSqlResult(sql);
	var count=null;
	for (var i = 0; i < resultList.size(); i++) {
    var result = resultList.get(i);
    if (result == null) {
        break;
    }
		count = result.get("value");
		}
if(count ==null){
			count = 0;
		}
	
	return parseInt(count);
}

function setEventValue(event1,value1) {
	var charInfo = getCharInfo();
	var isExist = false;
	var sql_a = "select value from zz_xr_event where accounts_id = ? and event = ? and world =? ";
	var result_a = player.customSqlResult(sql_a,parseInt(charInfo.accounts_id),event1,parseInt(charInfo.world));
	var chaid = null;
	if(result_a.size() != 0) {
		if(result_a.get(0) != null) {
			chaid = result_a.get(0).get("value");
		}
	}

	if(chaid != null) {
			isExist = true;
	}
	if(!isExist) { //不存在这条记录，就添加一条
		var sql_b = "insert into zz_xr_event(accounts_id, world, `event`,`value`) values(?,?,?,?)";
		player.customSqlInsert(sql_b,charInfo.accounts_id,charInfo.world,event1,value1);
	} else {
		var sql = "update zz_xr_event set value = value+? where accounts_id = ? and event = ? and world =? ";
	    player.customSqlUpdate(sql,value1,parseInt(charInfo.accounts_id),event1,parseInt(charInfo.world));
		}
}
function  resetEventValue(event1){
	var charInfo = getCharInfo();
	player.customSqlUpdate("delete from zz_xr_event where accounts_id = "+parseInt(charInfo.accounts_id)+" and event = '"+event1+"'");
}

function  getCharInfo(){
	var sql = "select accounts_id,world from characters where id = ?";
	var resultList = player.customSqlResult(sql,player.getId());
	var charInfo={};
	for (var i = 0; i < resultList.size(); i++) {
		var result = resultList.get(i);
		if (result == null) {
			break;
		}
		charInfo.accounts_id = result.get("accounts_id");
		charInfo.world = result.get("world");
	}
	return charInfo;
}
function gainItemP(ItemId,number) {
	if (!player.canGainItem(ItemId, number)){
		var sql_a = "select * from zz_Store where player_id = ? and ItemId = ?";
	var result_a = player.customSqlResult(sql_a,player.getId(),ItemId);
	if(result_a.size() != 0) {
		var sql = "update zz_Store set number = number+? where id = ?";
	    player.customSqlUpdate(sql,number,result_a.get(0).get("id"));
	} else {
		var sql = "INSERT IntO zz_Store (player_id,ItemId,number,ItemName) VALUES(?,?,?,?)";
		player.customSqlInsert(sql, player.getId(),ItemId,number,player.makeItemWithId(ItemId).getItemName());
	}
	player.dropMessage(10,"检测到您背包空间不足或存在固有道具，已将您获得的["+player.makeItemWithId(ItemId).getItemName()+" x "+number+"]存入'储藏仓库'中，请前往领取。");
		} else {
			player.gainItem(ItemId,number);
			}
}