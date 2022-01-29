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
 * NLC ticket gate (NPC 9201068)
 * New Leaf City Town Street: NLC Subway Station (Map 600010001)
 *
 * Admits players into New Leaf City subway.
 * Teleports players to waiting room of subway to Kerning City.
 *
 * @author Jackson (content from Vana r3171)
 */

let str = "这里是新叶城地铁检票口 ";
let tic = map.getId() == 600010001 ? 4031713 : 4031711;
let toMap = map.getId() == 600010001 ? 600010002 : 600010004;
let a = player.hasItem(tic, 1);
if (a) {
        str += "你想使用哪一张地铁票?\r\n";
        if (a)
                str += "#b#L0##t" + tic + "##l#k\r\n";
        let selection = npc.askMenu(str);

        let go = true;
        if (selection == 0) {
                let event = npc.getEvent("ship_nlc");
                if (event == null) {
                        npc.say("对不起，去新叶城的地铁正在检修。");
                        go = false;
                } else if (event.getVariable("board")) {
                        if (npc.askYesNo("请虽然看起来这辆车有很多空位。请准备好车票我才能让你上车。这将是长途旅程，不过正好会到达你的目的地。你觉得如何？想搭乘这辆车吗？") == 0) {
                                npc.sayNext("你在这里还有其他事情要处理，对吧?");
                                go = false;
                        }
                } else if (event.getVariable("docked")) {
                        npc.sayNext("我们将会在列车出发前1分钟进行检票，请耐心等待几分钟，请注意时间，要在出发前1分钟准时到达这里.");
                        go = false;
                } else {
                        npc.sayNext("嗯 ... 你没有车票.没有车票的话是不能让你进去的. 请找贝尔购买车票吧.");
                }
        }
        if (go) {
                player.loseItem(tic, 1);
                player.changeMap(toMap);
        }
} else {
        npc.say(str + "嗯 ... 你没有车票.没有车票的话是不能让你进去的. 请找贝尔购买车票吧.");
}