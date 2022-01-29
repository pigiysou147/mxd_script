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

var subWeaponData = new Array(
        Array(6100, 1352500, 10),
        Array(6110, 1352501, 30),
        Array(6111, 1352502, 60),
        Array(6500, 1352600, 10),
        Array(6510, 1352601, 30),
        Array(6511, 1352602, 60),
        Array(6400, 1353300, 10),
        Array(6410, 1353301, 30),
        Array(6411, 1353302, 60)
        );
var flag = false;
var text = "请选择您要更换的副武器：\r\n\r\n#b";
var subjob = player.getSubJob();
for (var i = 0; i < subWeaponData.length; i++) {
        if (player.getJob() == subWeaponData[i][0]) {
                text += "#L" + i + "##v" + subWeaponData[i][1] + ":##z" + subWeaponData[i][1] + "#\r\n";
                flag = true;
        }
}
if (flag) {
        let sel = npc.askMenu(text);
        let ret = npc.askYesNo("您是否要将替换上副武器:#e#b#v" + subWeaponData[sel][1] + ":##z" + subWeaponData[sel][1] + "##n#k\r\n(#r如果原有装备，将被直接替换掉！#k)。");
        if (ret == 1) {
                if (player.getLevel() < subWeaponData[sel][2]) {
                        npc.sayNext("对不起,您的等级不足" + subWeaponData[sel][2] + "级。");
                } else {
                        player.equip(-10, subWeaponData[sel][1]);
                        npc.sayNext("已经为你替换上了新的副武器。");
                }
        }
} else {
        npc.sayNext("对不起,当前无法为你服务。");
}





        