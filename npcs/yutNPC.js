/*
 * Auroms MapleStory server emulator written in Java
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

/* global player, npc, party */

/**
 * 
 * @author Jackson 
 */


npc.sayNext("这里可以进行装备开孔，开孔需要#e#r金币50E#k#n");
let str = "";
for (let i = 1; i <= 128; i++) {
        let equip = player.getInventorySlot(1, i);
        if (equip != null) {
                str += "#b#L" + i + "##v" + equip.getDataId() + "##t" + equip.getDataId() + "##l\r\n";
        }
}
if (str.length <= 0) {
        npc.sayNext("你的背包里面好像没有东西哦！");
} else {
        str = "请选择需要开孔的装备：\r\n" + str;
        let sel = npc.askMenu(str);
        let equip = player.getInventorySlot(1, sel);
        if (equip != null) {
                let ret = npc.askYesNo("是否要用50E金币对装备第#e#r" + sel + "格#n#k装备#b#v" + equip.getDataId() + "##t" + equip.getDataId() + "##n");
                if (ret == 1) {
                        if (equip.getSocket(1) >= 0) {
                                npc.say("该装备已经开过孔！");
                        } else if (!player.hasMesos(5000000000)) {
                                npc.say("您好像没有足够的金币哦！");
                        } else {
                                player.loseMesos(5000000000);
                                equip.setSocket(1, 0);
                                player.updateItem(sel, equip);
                                npc.say("恭喜你，装备开孔成功！");
                        }
                } else {
                        npc.say("那么欢迎下次光临！");
                }
        } else {
                npc.say("该装备不存在！");
        }
}
