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
let maxPlayers = 4;
let minLevel = [245];
let maxLevel = [300];
let maxenter = [1];
let BossName = ["戴米安"];
let PQLog = ["Demian"];
let event = ["boss_demian"];
let onlyOne = true;
let startmap = 105300303;
if (map.getId() == startmap) {
        let text = "";
        for (let i = 0; i < BossName.length; i++) {
                text += "\r\n#b#L" + i + "#挑战" + BossName[i] + "#l#k";
        }
        let sel = npc.askMenuE("#e<Boss：戴米安>#n\r\n再往前就是世界树的顶端了，是否做好向着戴米安发起挑战的准备了呢？#b" + text, true);
        if (party == null || player.getId() != party.getLeader()) {
                npc.sayNextE("你需要有一个#r" + minPlayers + "~" + maxPlayers + "#k人的队伍.并且等级在" + minLevel[sel] + "~" + maxLevel[sel] + "范围,\r\n那么请让你的组队长和我对话吧!", true);
        } else if (party.numberOfMembersInChannel() < minPlayers || party.getMembersCount(map.getId(), 1, 300) > maxPlayers) {
                npc.sayNextE("你需要有一个#r" + minPlayers + "~" + maxPlayers + "#k人的队伍.!", true);
        } else if (party.getMembersCount(map.getId(), minLevel[sel], maxLevel[sel]) < minPlayers) {
                npc.sayNextE("你队员的等级要在" + minLevel[sel] + "~" + maxLevel[sel] + "范围!请确认!", true);
        } else if (party.getMembersCount(map.getId(), 1, 300) < party.getMembersCount()) {
                npc.sayNextE("好像有队员在其他地方，请把队员都召集到这里！", true);
        } else if (!party.isAllMembersAllowedPQ(PQLog[sel], maxenter[sel])) {
                npc.sayNextE("你队员#r#e" + party.getNotAllowedMember(PQLog[sel], maxenter[sel]).getName() + "#n#k次数已经达到上限了。", true);
        } else{
            if(sel==0){
				
			
                //拿到队伍所有玩家
				let members = party.getLocalMembers();
				var flag = true;
				var txt="以下是你的队员信息:\r\n";
				for (let i = 0; i < members.length; i++) {
					
					var charid=members[i].getId();
					
					let thisplayer = members[i];
					txt+="玩家名字："+thisplayer.getName();
					
					//拿到武器突破
					var wuqi =thisplayer.getInventorySlot(-1,-11);
					if(wuqi==null){
						flag=false;
						txt+="未佩戴武器，不满足入场条件 ";
					}else{
						var tupo = (wuqi.getLimitBreak()/100000000);
						txt+=" #b武器突破:"+tupo+"亿#k ";
						if(tupo<3.5){
							flag=false;
						}
						txt+="\r\n";
					}
					
				}
				if(flag==true){
						txt+="#r所有队员满足入场条件！\r\n 是否现在进入?#k";
						let choos = npc.askYesNo(txt);
						if(choos==1){
							if (npc.makeEvent(event[sel], onlyOne, party) == null) {
									npc.say("已经有队伍在进行了,请更换其他频道尝试。", 3001021);
							}
						}
				}else{
					txt+="#r有队员不满足入场条件！#k";
					npc.say(txt);
				}
			}else{
				if (npc.makeEvent(event[sel], onlyOne, party) == null) {
					npc.say("已经有队伍在进行了,请更换其他频道尝试。", 3001021);
				}
			}
        }
        
} else {
        let ret = npc.askYesNoE("#e<Boss：戴米安>#n\r\n\r\n你想要现在就离开这里吗？", true);
        if (ret == 1) {
                player.changeMap(105300303);
        }
}
