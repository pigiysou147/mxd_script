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
 * V核心大师
 * NpcId 1540945
 * @author Jackson 
 */
 if(player.getLevel()<200){
	 npc.say("等级还没到200级，不能五转哦~");
 }else{
        if(!player.isQuestCompleted(1465)){
                player.completeQuest(1465, 0);
        }
        if(!player.isQuestCompleted(1484) && player.getLevel()>=260){
                player.completeQuest(1484, 0);
        }

        
        let response = npc.askMenu("已经为您自动完成五转,你可以选择使用如下功能：#b\r\n#L0#我想强化V核心。#l\r\n#L1#领取每日#r核心宝石#b。#l\r\n#L3#获取更多#r核心宝石#b。#l\r\n#L2#增加#r神秘徽章#b装备栏。#l" + (player.isGm() ? "\r\n" : ""),3003462);
        if (response == 0) {
                player.openUI(1131);
        } else if (response == 1) {
                if (player.getPQLog("FREE_VCORE") <= 0) {
                        if (player.canGainItem(2435902, 10)) {
                                player.addPQLog("FREE_VCORE");
                                player.gainItem(2435902, 10);
                                npc.say("已经领取#r10#k个核心宝石。");
                        } else {
                                npc.say("背包消耗栏空间不足！请清理！");
                        }
                } else {
                        npc.say("你今天已经领取过核心宝石了。");
                }
        } else if (response == 2) {
                //npc.say("暂时无法使用！");
                if (player.isQuestCompleted(34478)) {
                        npc.say("你已经增加过#r神秘徽章#b装备栏了！");
                } else {
                        let anser = npc.askYesNo("增加#r神秘徽章#b装备栏需要 #e10E#k金币。确认是否要开启");
                        if (anser == 1) {
                                if (player.hasMesos(1000000000)) {
                                        player.loseMesos(1000000000);
                                        player.completeQuest(34478, 0);
                                        npc.say("#r神秘徽章#b装备栏已增加！");
                                } else {
                                        npc.say("您的金币不足！");
                                }
                        }
                }
        } else if (response == 3) {
                let se =npc.askYesNo("更多核心宝石在怪物公园获取哦？是否要传送到怪物公园呢？");

                if(se==1){
                        player.changeMap(951000000);
                }
        } 

}