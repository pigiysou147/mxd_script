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

if (!"o".equals(player.getKeyValue("MyHome_Clock")) && !"o".equals(player.getKeyValue("MyHome_Desk"))) {

        npc.sayNextENoEsc("#face0#你忘记了放置的方法吗？", 9400921);
        npc.sayNextENoEsc("#face0#首先双击背包里的桌子和时钟，前往[家具保管箱]。", 9400921);
        npc.sayNextENoEsc("#face0#然后点击我的小屋菜单的#i3801391#按键，打开[家具保管箱]，双击想要放置的家具。", 9400921);
        npc.sayNextENoEsc("#face1#点击想要放置家具的位置后，再点击[完成放置]按键即可！你要再试一次吗？", 9400921);
} else if (!"o".equals(player.getKeyValue("MyHome_Clock"))) {
        npc.sayNextENoEsc("#face2#时钟的位置真的很好，桌子也可以用相同的方式放置。", 9400921);
        npc.sayNextENoEsc("#face1#对了，时钟和墙上的家具都能和地面上的家具重叠设置哦，这样就能把家里布置得更好了吧？", 9400921);
} else if (!"o".equals(player.getKeyValue("MyHome_Desk"))) {
        npc.sayNextENoEsc("#face2#桌子的位置真的很好，时钟也可以用相同的方式放置。", 9400921);
        npc.sayNextENoEsc("#face1#对了，时钟和墙上的家具都能和地面上的家具重叠设置哦，这样就能把家里布置得更好了吧？", 9400921);
} else {
        npc.sayNextENoEsc("#face2#你已经放置好了吗？", 9400921);
        npc.sayNextENoEsc("#face1#哇！终于像个人住的房屋了！ 啊，这是当然了，原先也是一样的。", 9400921);
        npc.sayNextENoEsc("#b不不，现在终于像个家了！这都多亏了艾尔宾和艾米呢！ 谢谢。", true);
        npc.sayNextENoEsc("#face0#难道！你的谢谢就只是嘴上说说？应该还有更好的方式吧~~比如说金币？", 9400920);
        npc.sayNextENoEsc("#b…", true);
        npc.sayNextENoEsc("#face3#…", 9400921);
        npc.sayNextENoEsc("#face2#我开玩笑的，可能有2%是出于真心吧。", 9400920);
        npc.sayNextENoEsc("#face0#现在去邀请居民们吧？", 9400921);
        npc.completeQuest();
        player.updateQuestRecordEx(500767, "4", "1");
        player.updateWorldShareRecord(500767, player.getQuestRecordEx(500767));
        player.startQuest(64600, 0);
        let sel = npc.askMenuENoEsc("#face1#如果可以，#h0#亲自去广场邀请居民们吧，怎么样？\r\n#b#L0#好的！#l\r\n#L1#现在还有点尴尬啊。#l", 9400921);
        switch (sel) {
                case 0:
                        npc.sayNextENoEsc("#face1#好的，那就快去吧！我和艾米会准备一些简单的食物。", 9400921);
                        break;
                case 1:
                        npc.sayNextENoEsc("#face1#去认识认识就不尴尬啦！那你就先去，我和艾米会准备一些简单的食物。", 9400921);
                        break;
        }
        player.startNavigation(871200000, 0, "out00", 0);
}
