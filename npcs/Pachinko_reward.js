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

/* global npc, player */

/**
 *
 * NpcId 9310101
 * @author Jackson
 */
let goods = Array(
	Array(5201000, 2000, 19000), //2000个
	Array(5201005, 500, 500), //50
	Array(5201004, 20, 200) //20
);
let selection = npc.askMenu("你需要什么服务?\r\n\r\n#b\r\n #b\r\n#L1#领取奖品#l\r\n");
 if(selection == 1) {
	let idx = player.getIntQuestRecordEx(9900001, "idx");
	
	let str = "当前获得的奖品:\r\n";
	var count =0;
	if(idx > 0) {
		for(let i = 0; i < idx; i++) {
			let itemId = player.getIntQuestRecordEx(9900001, String(i));
			if(itemId > 0) {
				count++;
				str += "#L"+i+"##b#i" + itemId + "##t" + itemId + "# x 1#k  #r需要金币5000W#k#l\r\n";
			}
		}
	}
	var total=count*50000000;
	var need=50000000;
	if(idx > 0) {
		let answer = npc.askMenu(str + "\r\n#r #L998#领取全部奖品？(需要"+total+"金币)#l\r\n");
		if(answer==998){
			
			if(player.getFreeSlots(3) < 5) {
				npc.say("请清理背包");
			}else if(!player.hasMesos(total)){
				npc.say("需要"+total+"金币才可以兑换");
			} else {
				player.loseMesos(total);
				for(let i = 0; i < idx; i++) {
					let itemId = player.getIntQuestRecordEx(9900001, String(i));
					if(itemId > 0) {
						player.gainItem(4110010,1);
					}
				}
				player.updateQuestRecordEx(9900001, "");
				

				npc.say("好的，奖品领取申请已经处理，稍后将以#b快递#k送达！请注意查收");
			}
			
			
			
		} else {
			if(player.getFreeSlots(3) < 5) {
				npc.say("请清理背包");
			}else if(!player.hasMesos(need)){
				npc.say("需要5000W金币才可以兑换");
			} else {
				player.loseMesos(need);
				player.gainItem(4110010,1);
				player.updateQuestRecordEx(9900001, String(answer), "");
		
				npc.say("好的，奖品领取申请已经处理，稍后将以#b快递#k送达！请注意查收");
			}
		}
	} else {
		npc.say("你好像没有中奖呀！请继续努力吧！");
	}
}