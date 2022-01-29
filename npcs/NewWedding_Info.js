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

let sel = npc.askMenu("看你的样子，像是有问题要问我嘛，说说看吧。\r\n#b#L0# 我想在New 婚礼公园举行婚礼！#l\r\n#L1# 怎样才能求婚？ #l\r\n#L2# 怎样参加婚礼？#l");
switch (sel) {
        case 0:
                npc.sayNext("在New 婚礼公园举行婚礼其实很简单！只要有现金商店出售的#b小屋婚礼门票#k就可以了。不过，新郎新娘都要在New 婚礼公园里才行。");
                npc.sayNext("与求婚对象面对面地双击 #b小屋婚礼门票#k，就可以求婚了。不管是男是女，只要有结婚券都可以大胆向异性求婚。 不觉得很浪漫吗~？");
                break;
        case 1:
                npc.sayNext("双击#b小屋婚礼门票#k就能输入名字。 需要注意的是，你一定要和求婚对象#b在New 婚礼公园面对面地站着#k。  躲在角落求婚实在太逊了，不是吗。");
                npc.sayNext("只要对方接受求婚，就可以立刻进入小型礼拜堂准备婚礼。 记得在求婚之前联系想邀请的宾客哦！");
                break;
        case 2:
                npc.sayNext("接受求婚后，新郎、新娘进入礼拜堂，就会在New 婚礼公园中出现只属于二人的婚礼拱形门~ 想要参加婚礼的宾客只要#b双击婚礼拱形门的名牌#k就能进入礼拜堂了。");
                npc.sayNext("#b最多只有6名#k宾客可以进入婚礼礼堂，因此必须抓紧哦！进入婚礼礼堂后，#b在婚礼结束之前无法离开#k。请一定要为道贺留出足够的时间哦?");
                npc.sayNext("可爱小屋婚礼结束之后，新郎、新娘和宾客就能获得#b特殊增益#k~! 其中最幸运的#b1个人#k还能获得比其他人#b更强大的特殊增益#k~尽请期待哦");
                break;
}
