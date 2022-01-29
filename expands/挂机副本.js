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

let minPlayers = 1;
let maxPlayers = 1;
let minLevel = 210;
let maxLevel = 300;
let maxenter = 2;
let BossName = ["挂机地图1","挂机地图2","挂机地图3","挂机地图4","挂机地图5","挂机地图6","挂机地图7"];
let PQLog = "guaji";
let event = "guaji";
var mapList=[867233300,867233350,867233400,867233450,867233500,867233550,867131100];
let onlyOne = false;
let startmap = 867202300;
var count =0;
let text = "";
for (let i = 0; i < BossName.length; i++) {
		text += "\r\n#b#L" + i + "##r" + BossName[i] + " [#m"+mapList[i]+"#]#b";
		
		var players=npc.getEvent("gailou").getMap(mapList[i]).getPlayers();
		count=players.size();
		if(count>0){
			text +="  玩家:#b"+players[0].getName()+"#l#k";
		}else{
			text +="  #g可以进入#l#k";
		}
		
}
let sel = npc.askMenu("#e#r<挂机副本>#n\r\n伟大的勇士啊。这里是挂机副本,普通玩家每天可以进入2次.购买了<周返利卡#v2431643#>和<月返利卡#v2431677#>的玩家每天可以进入次数不限. \r\n" + text);
count=npc.getEvent("gailou").getMap(mapList[sel]).getPlayers().size();
if (party == null || player.getId() != party.getLeader()) {
		npc.sayNext("你需要有一个#r" + minPlayers + "~" + maxPlayers + "#k人的队伍.并且等级在" + minLevel + "~" + maxLevel + "范围,\r\n那么请让你的组队长和我对话吧!");
} else if (party.numberOfMembersInChannel() < minPlayers || party.getMembersCount(map.getId(), 1, 300) > maxPlayers) {
		npc.sayNext("你需要有一个#r" + minPlayers + "~" + maxPlayers + "#k人的队伍.!");
} else if (party.getMembersCount(map.getId(), minLevel, maxLevel) < minPlayers) {
		npc.sayNext("你队员的等级要在" + minLevel + "~" + maxLevel + "范围!请确认!");
} else if (party.getMembersCount(map.getId(), 1, 300) < party.getMembersCount()) {
		npc.sayNext("好像有队员在其他地方，请把队员都召集到这里！");
} else if (!player.hasItem(2431677,1) &&!player.hasItem(2431643,1) && !party.isAllMembersAllowedPQ(PQLog, maxenter)) {
		npc.sayNext("#e#r你队员#r#e" + party.getNotAllowedMember(PQLog, maxenter) + "#n#k次数已经达到上限了。非返利用户每天只能进入2次");
} else if(count>0){
	npc.say("这个地图已经有人在挂机了,请换一个地图");
}else if(!player.hasMeso(10000000)){
	npc.say("需要1000W金币");
}else if (npc.makeEvent(event, onlyOne, [player,mapList[sel]]) == null) {
		npc.sayNext("已经有队伍在进行了,请更换其他频道尝试。");
}

