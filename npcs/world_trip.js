/*
 * AuroMS MapleStory server emulator written in Java
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

let worldTrip = [500000000, 800000000];
if (map.getId() == 800000000) {
        let [returnMap, spawnPoint] = npc.getRememberedMap("WORLD_TOUR");
        let selection = npc.askMenu("还满意冒险游程吗? ?\r\n"
                + "#b#L0#已经游览了，想回到#m" + returnMap + "#? #l\r\n"
                + "#b#L1#我想继续探索这个地方#l");
        if (selection == 0) {
                npc.sayNext("好吧。现在我将带你回到原来的地方。如果你想再旅行，请再次跟我对话！");
                player.changeMap(returnMap, spawnPoint);
                npc.resetRememberedMap("WORLD_TOUR");
        } else if (selection == 1) {
                npc.say("好啊。如果你改变主意，请告诉我。");
        }
} else {
        let msg = "为了从繁忙的日常中解脱，去享受一趟旅游怎么样？不仅可以体检新颖的异国文化，还能学到不少东西的机会！我们冒险岛旅游公司为您准备了，丰富有趣的#b世界旅游#k套餐。谁说环游世界很贵？请放一万个心。我们#b冒险岛世界旅游套餐#k只需要#b3000金币#k就可以享乐全程。";
        npc.sayNext(msg);
        let str = "";
        for (var i = 0; i < worldTrip.length; i++) {
                str += "#b#L" + i + "# #m" + worldTrip[i] + "##k\r\n";
        }
        selection = npc.askMenu("现在就可以去往 #b世界各地充满冒险岛特色的景点#k游览一番。在每个旅游地我都会为大家提供满意热诚的服务。那么请准备好，我们出发去\r\n" + str);

        if (selection >= 0) {
                npc.sayNext("你想去#b#m" + worldTrip[selection] + "##k旅游吗#k? 这是个不错的地方，在那里玩肯定很开心的。");
                let cost = 3000;
                if (player.hasMesos(cost)) {
                        npc.rememberMap("WORLD_TOUR");
                        player.changeMap(worldTrip[selection]);
                        player.loseMesos(cost);
                } else {
                        npc.say("请确认你是否带有足够的盘缠。");
                }
        }
}