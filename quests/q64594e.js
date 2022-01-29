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

if (!"o".equals(player.getKeyValue("MyHome_Sofa"))) {
        npc.sayNextENoEsc("#face1#你还没能把沙发放好啊。没关系，一开始肯定不容易。我再跟你说明一遍吧。", 9400921);
        player.setLayerOn(900, "0", 0, -80, 12, "Effect/DirectionWz2.img/effect/myHomeTuto/3", 4, true, -1, false, 0, 0);
        npc.sayNextENoEsc("#face1#打开背包，双击#t2672015:#即可前往#b[家具保管箱]#k。", 9400921);
        npc.sayNextENoEsc("#face1#然后点击我的小屋菜单的#b#i3801391##t3801391##k按键，查看沙发，点击[放置]按键后就能放在任意位置。但是，不能和已经放置的床重叠放置。", 9400921);
        player.setLayerOff(1000, "0");
        npc.sayNextENoEsc("#face2#你要不要再试一次？", 9400921);
} else {

        npc.sayNextENoEsc("#face1#呵呵，果然……我就说我的眼光不会错的嘛？", 9400921);
        npc.sayNextENoEsc("#face2#放上和简单的灰调原木床相配的布艺沙发，就能装修出将简洁之美发挥到极致的风格！怎么样？家里是不是变得更加优雅了？", 9400921);
        npc.sayNextENoEsc("#b比刚才看起来更像是家了呢，谢谢你，艾尔宾！", true);
        npc.sayNextENoEsc("#face0#那么……你以后就住在这里了吗？", 9400921);
        npc.sayNextENoEsc("#b也许……吧？", true);
        npc.sayNextENoEsc("#face1#好极了！旁边一直没有邻居，我还觉得有点寂寞呢。能有像#h0#这样帅气的人搬来住真是太好了。", 9400921);
        npc.completeQuest();

        let sel = npc.askMenuENoEsc("#face2#如果你有时间，要不要和我一起去广场？我可以给你介绍一下其他邻居！\r\n#L0##b好的。#l\r\n#L1#今天很忙。#l", 9400921);
        if (sel == 1) {
                npc.sayNextENoEsc("#face2#好极了，那你就跟我来吧！", 9400921);

        } else {
                npc.sayNextENoEsc("#face0#就一会儿，认识下新伙伴，走啦！我带你过去！", 9400921);
        }
        player.startNavigation(871200000, 0, "out00", 0);
        player.startQuest(64595, 0);

}

