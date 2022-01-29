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
let SUCCESS = 25;
let MASTER = 30;

let  menu = player.getSkillMenu(MASTER);
if (menu == "") {
        npc.sayS("看来你不需要能手册啊。");
} else {
        let sel = npc.askMenuS("你可以提升的技能目录如下。\r\n" + menu + "\r\n\r\n#r#L0# #fn黑体##fs14##e取消使用能手册。#n#fs##fn##l");
        if (sel > 0) {
                if (player.canUseSkillBook(sel, MASTER)) {
                        player.loseItem(npc.getItemId(), 1);
                        player.useSkillBook(SUCCESS, sel, MASTER);
                } else {
                        npc.sayS("看来你不需要能手册啊。");
                }
        }
}