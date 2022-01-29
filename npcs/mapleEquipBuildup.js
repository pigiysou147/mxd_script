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
 * 
 * @author Jackson 
 */
let str = "今日在线时间:#e#r" + player.getOnlineTime() + "#k#n分钟.";
if (player.isGm()) {
        str += "\r\n#e#r管理员您好,请选择功能：#n#b";
        str += "\r\n#L1#满技能#l";
        str += "\r\n#L2#获取道具#l";
        str += "\r\n#L3#快速转职#l";
        str += "\r\n#L4#提升等级#l";
        str += "\r\n#L5#发送奖励#l";
        //str += "\r\n#L6#Tespie#l";
} else {
        str += "\r\n\r\n#e#r#h0#您好,请选择快捷功能：#n#b";
}
str += "\r\n#L6#快速转职#l";
str += "\r\n#L7#替换副手#l";

let sel = npc.askMenu(str);
switch (sel) {
        
        case 6:
                player.runScript("changeJob");
                break;
        case 7:
                player.runScript("subweapon");
                break;
       

}
