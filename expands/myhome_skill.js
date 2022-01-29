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
let maxLeve = 6;
let n = player.getIntQuestRecordEx(500773, "manager");
let npcId = 9400920 + n;
let nowTime = new Date().getTime();
let buffDate = player.getQuestRecordEx(500773, "buffDate");
let nowDate = getMyDate(nowTime);

if (player.getAmountOfItem(2631718)<1) {
	var count =player.getPQLog("家具购买");
	var txt="#b你需要完成20次加入购入邀请才可以领取小屋BUFF这个箱子哦~#k\r\n";
	txt+="你当前完成的次数为:#r"+count+"#k/20";
	npc.sayNext(txt);
	if(count<20){
		npc.say("需要完成20次家具购入哦");
	}else{
		player.gainItem(2631718,1);
		npc.sayNextE("#face0#领取成功", npcId);
	}
	
} else {
        npc.sayNextE("#face0#你已经领取了BUFF增益了~", npcId);
}

function getMyDate(str) {
        var oDate = new Date(str),
                oYear = oDate.getFullYear(),
                oMonth = oDate.getMonth() + 1,
                oDay = oDate.getDate(),
                oTime = oYear + '/' + addZero(oMonth) + '/' + addZero(oDay);
        return oTime.substr(2);
}

//补零操作
function addZero(num) {
        if (parseInt(num) < 10) {
                num = '0' + num;
        }
        return num;
}