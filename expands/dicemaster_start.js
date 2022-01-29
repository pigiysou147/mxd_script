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

let countN = player.getPQLog("DiceMaster");
let countB = player.getPQLog("DiceMasterBonus");
let sel = npc.askMenu("你好，#b#e#h0##n#k。你喜欢哪种游戏模式呢？\r\n#b\r\n#L1# 普通关卡(每个角色1天可以进入5次 - " + countN + "/5)#l\r\n#L2# 奖励关卡(每个角色1天可以进入5次 - " + countB + "/5)#l", 9400493);
switch (sel) {
        case 1: {
                let count = 5 - countN;
                if (count <= 0) {
                        npc.say("今天已经无法再次进入掷骰大师普通关卡了！", 9400493);
                } else {
                        npc.sayNext("你带来了入场券啊。今天还可以进入#b#e" + count + "#n#k次。要立即进入掷骰大师普通关卡吗？\r\n\r\n#r#e[注意事项]\r\n1. 掷骰大师 普通关卡。每个角色1天可以进入5次。\r\n2. 本内容建议使用1024*768以上的清晰度。#n#k", 9400493);
                        let mapId = 867121000 + Math.floor(Math.random() * 9) * 100;
                        player.addPQLog("DiceMaster");
                        npc.rememberMap("RETURN_MAP");
                        npc.makeEvent("dicemaster", false, [player, mapId]);
                }
                break;
        }
        case 2: {
                let count = 5 - countB;
                if (count <= 0) {
                        npc.say("今天已经无法再次进掷骰大师奖励关卡了！", 9400493);
                } else {
                        npc.sayNext("你带来了入场券啊。今天还可以进入#b#e" + count + "#n#k次。要立即进入掷骰大师奖励关卡吗？\r\n\r\n#r#e[注意事项]\r\n1. 掷骰大师 奖励关卡。每个角色1天可以进入5次。\r\n2. 本内容建议使用1024*768以上的清晰度。#n#k", 9400493);
                        let mapId = 867121901 + Math.floor(Math.random() * 9);
                        player.addPQLog("DiceMasterBonus");
                        npc.rememberMap("RETURN_MAP");
                        npc.makeEvent("dicemaster", false, [player, mapId]);
                }
                break;
        }
}