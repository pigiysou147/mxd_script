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
let ret = npc.askYesNo("进入需要黑龙入场券1张，每次进入都会#r扣除1张#k黑龙入场券，请慎重！\r\n\r\n#r#e友情提示1:每个角色一天只能登记10次黑龙远征队. \r\n友情提示2:黑龙入场券在游戏商城中购买.#n#k");
if (ret == 1) {
        if (player.hasItem(5220006, 1)) {
                player.loseItem(5220006, 1);
                player.changeMap(240050400);
        } else {
                npc.say("请确认你身上有#r#e#z5220006##n");
        }
}
