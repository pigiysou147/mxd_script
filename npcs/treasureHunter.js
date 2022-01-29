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


npc.sayNext("可以进行武器破功，破功需要使用金币，比例为#r#e1000:1#k#n。\r\n武器需要破功：#e#r5000w#k#n以上才能使用！");

//获取身上武器
let weapon = player.getInventorySlot(-1, -0xB);
if (weapon == null) {
        npc.say("您身上并没有装备武器");
} else {
        let str = "当前武器：#v" + weapon.getDataId() + "##r#t" + weapon.getDataId() + "#\r\n";
        str += "#当前武器已有突破值:" + weapon.getLimitBreak() + "\r\n";
        npc.sayNext(str);
        if (weapon.getLimitBreak() >= 50000000) {
                let num = npc.askNumber("请输入您需要增加的破功值", 10000, 10000, 90000000);
                if (num >= 10000) {
                        let ret = npc.askYesNo("是否要用#r" + (num * 1000) + "金币#k增加破功#r" + num);
                        if (ret == 1) {
                                if (player.hasMesos(num * 1000)) {
                                        player.loseMesos(num * 1000);
                                        weapon.setLimitBreak(weapon.getLimitBreak() + num);//破功
                                        player.updateItem(-0xB, weapon);
                                        npc.sayNext("恭喜你，武器破功已经完成！");
                                }
                        }
                }
        } else {
                npc.say("您身上装备的武器破功值不足#e#r5000w#k#n");
        }
}
