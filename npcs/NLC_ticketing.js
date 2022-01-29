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

let msg = new Array("克拉齐亚的新叶都市", "废弃都市", "废弃都市", "新叶城");
let ticket = new Array(4031711, 4031713);
let cost = 5000;
let returnMap = new Array(103020000, 600010001);

let selection;
switch (map.getId()) {
        case 103020000:
                selection = 0;
                break;
        case 600010001:
                selection = 1;
                break;
        case 600010004:
                selection = 2;
                break;
        case 600010002:
                selection = 3;
                break;
}
if (selection < 2) {
        let sel = npc.askMenu("你好,请问是要一张地铁票吗?\r\n#L0##b" + msg[selection] + "#l");
        let ret = npc.askYesNo("前往" + msg[selection] + "从整点开始每 10 分钟一列, 车票价格为#b" + cost + " 金币#k. 确定要购买#b#t" + ticket[selection] + "#吗#k?");
        if (ret == 1) {
                if (!player.hasMesos(cost) || !player.canGainItem(ticket[selection], 1)) {
                        npc.sayNext("你确定你有 #b" + cost + " 金币吗#k? 如果有, 请确认你的物品栏是否已满.");
                } else {
                        player.loseMesos(cost);
                        player.gainItem(ticket[selection], 1);
                        npc.sayNext("这是你的票，请收好。");
                }
        } else {
                npc.sayNext("你到那里肯定不是去旅游的，对不对？");
        }
} else {
        let ret = npc.askYesNo("你现在想要回到#b" + msg[selection] + "#k地铁站吗?");
        if (ret == 1) {
                player.changeMap(returnMap[selection - 2]);
        } else {
                npc.sayNext("好的,请耐心等候~!");
        }
}