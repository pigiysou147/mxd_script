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
let maxPlayers = 6;
let minLevel = [210, 250];
let maxLevel = [300, 300];
let maxenter = [1, 1];
let BossName = ["觉醒希拉普通（210级）"];
let PQLog = ["JinHillah", "JinHillah_Hard"];
let event = ["boss_jinhillah", "boss_jinhillah_hard"];
let onlyOne = true;
let startmap = 450011320;

if (map.getId() == startmap) {
        let text = "";
        for (let i = 0; i < BossName.length; i++) {
                text += "\r\n#b#L" + i + "#" + BossName[i] + "#l#k";
        }
        let sel = npc.askMenuS("必须现在进入欲望祭坛与真希拉战斗.#b" + text);
        if (party == null || player.getId() != party.getLeader()) {
                npc.sayNextS("你需要有一个#r" + minPlayers + "~" + maxPlayers + "#k人的队伍.并且等级在" + minLevel[sel] + "~" + maxLevel[sel] + "范围,\r\n那么请让你的组队长和我对话吧!");
        } else if (party.numberOfMembersInChannel() < minPlayers || party.getMembersCount(map.getId(), 1, 300) > maxPlayers) {
                npc.sayNextS("你需要有一个#r" + minPlayers + "~" + maxPlayers + "#k人的队伍.!");
        } else if (party.getMembersCount(map.getId(), minLevel[sel], maxLevel[sel]) < minPlayers) {
                npc.sayNextS("你队员的等级要在" + minLevel[sel] + "~" + maxLevel[sel] + "范围!请确认!");
        } else if (party.getMembersCount(map.getId(), 1, 300) < party.getMembersCount()) {
                npc.sayNextS("好像有队员在其他地方，请把队员都召集到这里！");
        } else if (!party.isAllMembersAllowedPQ(PQLog[sel], maxenter[sel])) {
                npc.sayNextS("你队员#r#e" + party.getNotAllowedMember(PQLog[sel], maxenter[sel]).getName() + "#n#k次数已经达到上限了。");
        } else  {
				//拿到队伍所有玩家
				let members = party.getLocalMembers();
				var flag = true;
				var txt = "以下是你的队员信息:\r\n";
				var score = 0;
				for(let i = 0; i < members.length; i++) {
					

					var charid = members[i].getId();

					let thisplayer = members[i];
					txt += "玩家名字：" + thisplayer.getName();

					//拿到战斗力
					var fenshu = 0;
					var result = thisplayer.customSqlResult("select 总评分 from zz_totalscore where characterid=?", thisplayer.getId());
					if(result.size() > 0) {
						fenshu = result.get(0).get("总评分");
					}
					txt += " #b评分:" + fenshu + "#k ";
					score += parseInt(fenshu);
					
					//拿到武器突破
					var wuqi =thisplayer.getInventorySlot(-1,-11);
					if(wuqi==null){
						flag=false;
						txt+="未佩戴武器，不满足入场条件 ";
					}else{
						var tupo = (wuqi.getLimitBreak()/100000000);
						txt+="\r\n#b武器突破:"+tupo+"亿#k ";
						if(tupo<3.5){
							txt+=" #r[不满足]#k ";
							flag=false;
						}else{
							txt+=" #g[满足]#k ";
						}
						var wqLevel=wuqi.getReqLevel();
						var needLevel=150;
						txt+="#b武器等级:#r"+wqLevel+" 需要 :"+needLevel+"#k ";
						if(wqLevel<needLevel){
							txt+=" #r[不满足]#k ";
							flag=false;
						}else{
							txt+=" #g[满足]#k ";
						}
						var onlineTime=thisplayer.getOnlineTime();
						var needTime=100;
						txt+="#b在线:#r"+onlineTime+" 需要 :"+needTime+"分钟#k ";
						if(onlineTime<needTime && getHyPay(thisplayer.getAccountId()) < 9999){
							txt+=" #r[不满足]#k ";
							flag=false;
						}else{
							txt+=" #g[满足]#k ";
						}
						txt+="\r\n";
					}
					txt += "\r\n";

				}
				txt += "当前队伍总评分:#r" + score + "#k\r\n";
				if(members.length > 1) {
					if(score < 700000) {
						txt+="需要总评分#r70W#k\r\n";
						flag = false;
					}
				} else {
					if(score < 300000) {
						txt+="需要总评分#r30W#k\r\n";
						flag = false;
					}
				}

				if(flag == true) {
					txt += "#r所有队员满足入场条件！\r\n 是否现在进入?#k";
					let choos = npc.askYesNo(txt);
					if(choos == 1) {
						if(npc.makeEvent(event[sel], onlyOne, party) == null) {
							npc.say("已经有队伍在进行了,请更换其他频道尝试。", 3001021);
						}
					}
				} else {
					txt += "#r有队员不满足入场条件！#k";
					npc.say(txt);
				}
			
        }
} else {
        let ret = npc.askYesNoS("#e<Boss：觉醒希拉>#n\r\n\r\n你想要现在就离开这里吗？");
        if (ret == 1) {
                player.changeMap(450011990);
        }
}

function getHyPay(accid) {

	var sql = "select leiji from hypay where accountid = ? ";

	var result = player.customSqlResult(sql,accid);

	if(result.size() > 0) {
		if(result.get(0) != null) {
			return result.get(0).get("leiji");
		}
	} else {
		return 0;
	}

}