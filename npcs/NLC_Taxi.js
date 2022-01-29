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
 * NLC Taxi (NPC 9201056)
 * New Leaf City Town Street: New Leaf City - Town Center (Map 600000000),
 *   Phantom Forest: Haunted House (Map 682000000)
 *
 * Taxi NPC for Masteria. Teleports players from New Leaf City - Town Center to
 * the Haunted House in Phantom Forest.
 *
 * @author Jackson (content from Vana r3171)
 */

switch (map.getId()) {
        case 610010000:
        {
                let selection = npc.askYesNo("嘿，你好。玩的还开心吧。准备回新叶都市了吗？");
                if (selection == 1) {
                        npc.sayNext("那就让我们回到文明社会吧！进来坐好……马上就到目的地！");
                        player.changeMap(600000000);
                } else if (selection == 0) {
                        npc.say("哦，你还想在这附近转转？可以理解。等你想回新叶都市了，过来找我就行！");
                }
                break;
        }
        default :
        {
                let selection = npc.askYesNo("嘿，你好。有兴趣深入大师领地荒野探险吗？这片大陆还有很多地方无人涉足……所以说能走的路不多。幸好我们有这东西……有了它，没有路也能前进，而且看上去还特别帅！我现在可以带你去#b幽影森林#k。那里有个叫#b普伦德加斯特庄园#k的地方。有人说那儿闹鬼！怎么样……想去见识一下么");
                if (selection == 1) {
                        npc.sayNext("好嘞！系好安全带，咱们这就去那庄园咯！小心颠簸哦！");
                        player.changeMap(610010000, 6);
                } else if (selection == 0) {
                        npc.say("是吗？情有可原……我也觉得那里很吓人！改变心意的话，就来这儿找我吧。");
                }
                break;
        }
}