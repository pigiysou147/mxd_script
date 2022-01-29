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

npc.sayNextENoEsc("#b那个……你好！", true);
npc.sayNextENoEsc("#face0#你好！米兰达", 9400920);
npc.sayNextENoEsc("#face0#…", 9400924);
npc.sayNextENoEsc("#b现在跳蚤市场还没开吗？", true);
npc.sayNextENoEsc("#face0#正如你所见，我正在思考新的商品。", 9400924);
npc.sayNextENoEsc("#face0#嗯~~这下可麻烦了，为了庆祝#h0#搬来，我们正打算办搬家聚会呢，可是墙上实在太空了呢！", 9400920);

npc.sayNextENoEsc("#face1#如果能将米兰达的特别~作品装饰在墙上，肯定会很棒的，所以我们才来到了这里呢！", 9400920);
npc.sayNextENoEsc("#face1#…", 9400924);
npc.completeQuest();
player.startQuest(64598, 0);
player.updateQuestRecordEx(1068, "count", "60");
player.updateQuestRecordEx(1069, "max", "60");
player.updateQuestRecordEx(1068, "type", "2");
if (!player.gainItem(2671002, 1)) {
        player.gainParcel(2671002, 1, "背包不足，以邮件发送！");
}

npc.sayNextENoEsc("#face0#好吧，不过现在没多少商品可供挑选。直接送你个木钟好了！", 9400924);

