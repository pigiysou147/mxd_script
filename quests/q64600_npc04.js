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

var data = "";
if (player.isQuestStarted(64600)) {
        data = player.getQuestRecordEx(64600, "NpcSpeech");
}
if (data == null) {
        data = "";
}
if (player.isQuestStarted(64600) && data.indexOf("94009214") == -1) {
        npc.sayNextE("#face1#你回来了啊？", 9400921);
        npc.sayNextE("#face0#啊，我都激动起来了！对了，你没有别的要邀请的朋友吗？", 9400921);

        player.setLayerOn(900, "0", 0, -80, 12, "Effect/DirectionWz2.img/effect/myHomeTuto/4", 4, true, -1, false, 0, 0);
        npc.sayNextENoEsc("#face1#好友邀请，只要在点击我的小屋菜单的#i3801393#按键后，输入好友的角色名字就能邀请了。。", 9400921);
        npc.sayNextENoEsc("#face1#在#b好友名单窗口#k或者#b聊天窗口#k中右键点击好友的角色名字，然后点击[我的小屋邀请]按键也能进行邀请。", 9400921);
        player.setLayerOff(1000, "0");
        npc.sayNextE("#face1#那你下次再邀请吧。", 9400921);
        npc.sayNextE("#face1#好的，现在只要等人来就可以了。", 9400921);
        player.updateQuestRecordEx(64600, "NpcSpeech", "94009214/" + data);
        player.completeQuest(64600, 0);
}