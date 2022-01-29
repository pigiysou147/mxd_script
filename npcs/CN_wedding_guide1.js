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
let local = "中国小屋";
let itemId = 5250504;


let sel = npc.askMenu(" 看样子你应该有事情想问我吧。说吧，你想知道什么。\r\n#b#L0# 我想在" + local + "婚礼礼堂举行婚礼！#l\r\n#L1# 如何求婚？#l\r\n#L2# 如何参加婚礼呢？ #l\r\n#L3# 我要兑换#z" + itemId + "# #l");
switch (sel) {
        case 0:
                npc.sayNext("在" + local + "婚礼礼堂中举行婚礼非常简单！只要你拥有商城中出售的#b小屋婚礼券#k即可。不过，新郎新娘必须都处在" + local + "婚礼礼堂中才行。");
                npc.sayNext("在俩人面对面的状态下双击#b小屋婚礼券#k，即可进行求婚。不管男女，只要持有婚礼券，即可进行求婚。这是不是很浪漫呢~？");
                break;
        case 1:
                npc.sayNext("双击#b小屋婚礼券#k，可以输入名字。需要注意的是，务必在#b" + local + "婚礼礼堂中与想要求婚的对象面对面#k。毕竟躲起来求婚可是很懦弱的哦。");
                npc.sayNext("对方接受求婚后，立即进入为结婚准备的小小婚礼礼堂。求婚前，也别忘了联系想要道贺的宾客哦！");
                break;
        case 2:
                npc.sayNext("求婚被接受后，新郎新娘进入婚礼礼堂，" + local + "婚礼礼堂里就会为两位新人竖起婚礼拱门~? 想要参加婚礼的宾客可通过双击该#b婚礼拱门的名牌#k，进入婚礼礼堂。");
                npc.sayNext("#b最多只有6名#k宾客可以进入婚礼礼堂，因此必须抓紧哦！进入婚礼礼堂后，#b在婚礼结束之前无法离开#k。请一定要为道贺留出足够的时间哦?");
                npc.sayNext("小屋婚礼结束后，新郎新娘以及宾客均可以获得#b特别增益#k~！#b幸运的那个人#k可以获得比别人#b更好的特别增益#k~ 敬请期待吧?");
                break;
        case 3:
                if (player.hasItem(5250500, 1)) {
                        if (player.canGainItem(itemId, 1)) {
                                player.loseItem(5250500, 1);
                                player.gainItem(itemId, 1);
                                npc.say("#z" + itemId + "#兑换成功！现在你可以在这里向你的心上人求婚啦！");
                        } else {
                                npc.say("特殊栏空间不足，确保有一个空位！");
                        }
                } else {
                        npc.say("没有#z5250500#是不能兑换#z" + itemId + "#的！请前往现金商城进行购买！");
                }

                break;
}
