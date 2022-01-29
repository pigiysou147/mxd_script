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


npc.sayNextENoEsc("#face1#怎么样？是不是很舒服？", 9400921);
npc.sayNextENoEsc("#b好像是……", true);
npc.sayNextENoEsc("#face2#哈哈，既然躺下了，那就顺便休息一下吧？我想起来可以给你个小礼物！请等一下。", 9400921);
if (player.gainItem(2672015, 1)) {
        player.updateQuestRecordEx(500767, "2", "1");
        player.updateWorldShareRecord(500767, player.getQuestRecordEx(500767));
        npc.completeQuest();
        player.startQuest(64594, 0);

        npc.sayNextENoEsc("#face1# [#i2672015:##t2672015#]\r\n啦啦~！这是为了纪念我们成为邻居而送你的礼物。这是可以代替破旧的椅子，让你舒舒服服地坐着的蓬松~沙发。", 9400921);
        player.setLayerOn(900, "0", 0, -80, 12, "Effect/DirectionWz2.img/effect/myHomeTuto/3", 4, true, -1, false, 0, 0);
        npc.sayNextENoEsc("#face1#打开背包，双击#t2672015:#即可前往#b[家具保管箱]#k。", 9400921);
        npc.sayNextENoEsc("#face1#然后点击我的小屋菜单的#b#i3801391##t3801391##k按键，查看沙发，点击[放置]按键后就能放在任意位置。但是，不能和已经放置的床重叠放置。你要不要试试？", 9400921);
        player.setLayerOff(1000, "0");
        npc.sayNextENoEsc("#face2#如果#h0#能喜欢就好了！", 9400921);
} else {
        npc.sayNextENoEsc("#face2#你的背包消耗栏不够放啦，先去整理下吧！", 9400921);
}
