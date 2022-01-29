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
let count = player.getPQLog("GiantBossTicket");
let text = "#e<心树的记忆>#n \r\n\r\n再下去就是由于心树的愤怒而发生变异的#r贝勒德#k所在的地了,通往贝勒德的路需要的钥匙。"
        + "\r\n#b#L1#每天可以领取3个#v4033981##z4033981#。\r\n"
        + "\r\n#b#L3#移动到#r#e心树的记忆#n#k。\r\n";
let sel = npc.askMenu(text, 9390124);
switch (sel) {
        case 1:
               npc.sayNext("每天可以领3个#v4033981#钥匙", 9390124);
			if( player.getPQLog("GiantBossTicket")>0){
				npc.say("今天已经领过了。。", 9390124);
			}else if (player.canGainItem(4033981, 3)  ) {
					player.addPQLog("GiantBossTicket");
					player.gainItem(4033981, 3);
					npc.say("领取成功,祝您游戏愉快。", 9390124);
			} 
                
                break;
        case 3:
                player.changeMap(863010000, 1);
                break;
}