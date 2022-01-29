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

npc.sayNextENoEsc("#b艾米！", true);
npc.sayNextENoEsc("#face2##h0#~你是来表示感谢的吧？呼，你能有这种房屋都是因为我艾米哦！你可不能忘记这件事。", 9400920);
npc.sayNextENoEsc("#b没错，谢谢你让我来到了这里。", true);
let sel = npc.askMenuENoEsc("#b所以说……我觉得如果以后装修房屋的事情也能和艾米一起完成，那就太好了。\r\n#b#L0# 请你成为我的管家。#l\r\n#L1#今后我们一起好好相处吧。#l\r\n#r(※只能雇佣1名管家，雇佣后可以通过管家菜单进行变更。)#l", true);
if (sel == 0) {
        npc.sayNextENoEsc("#face1#管家？管家？嗯……听起来倒是很有趣，你会给我报酬的吧？ ", 9400920);
        npc.sayNextENoEsc("#face2#这样啊，好的！那我就答应你吧，#h0#。", 9400920);
        npc.sayNextENoEsc("#face1#对了，这是给#h0#的礼物！因为你说想要用高级的家装饰，我就准备了这个。它还有很厉害的功能，你可别被吓到了哦！ ", 9400920);
        if (!player.gainItem(2671001, 1)) {
                player.gainParcel(2671001, 1, "背包空间不足，以邮件发送");
        }
        player.completeQuest(64608, 0);
        player.updateQuestRecordEx(64610, "hide", "1");
        player.updateQuestRecordEx(500773, "askR", "0");
        player.updateQuestRecordEx(500773, "manager", "0");
        player.updateQuestRecordEx(500773, "managerHide", "0");
        player.updateQuestRecordEx(500773, "bonusTalk", "0");
        player.updateQuestRecordEx(500773, "s1", "15");

        player.updateQuestRecordEx(500773, "s1", "15");
        player.updateQuestRecordEx(500773, "s2", "0");
        player.updateQuestRecordEx(500773, "s3", "13");
        player.updateQuestRecordEx(500773, "s4", "11");
        player.updateQuestRecordEx(500773, "s5", "10");

        player.updateQuestRecordEx(500773, "a1", "15");
        player.updateQuestRecordEx(500773, "a2", "0");
        player.updateQuestRecordEx(500773, "a3", "13");
        player.updateQuestRecordEx(500773, "a4", "11");
        player.updateQuestRecordEx(500773, "a5", "10");

        player.updateQuestRecordEx(500773, "b1", "10");
        player.updateQuestRecordEx(500773, "b2", "15");
        player.updateQuestRecordEx(500773, "b3", "10");
        player.updateQuestRecordEx(500773, "b4", "9");
        player.updateQuestRecordEx(500773, "b5", "10");
        
        player.updateWorldShareRecord(500773, player.getQuestRecordEx(500773));
        npc.completeQuest();
} else {
        npc.sayNextENoEsc("#face2##h0#嗯！肯定会好好相处的啦。", 9400920);
}
