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
player.closeUI(0);
player.closeUI(1);
player.closeUI(2);
player.closeUI(3);
player.closeUI(6);

player.closeUI(0x28);
player.closeUI(0xCA);
player.closeUI(0xDC);



player.setInGameCurNodeEventEnd(true);
player.setInGameDirectionMode(true, false, false, true);

npc.setCameraScaleAbsMove(0, 0, 1000, 2000, -80, 120);
player.teleportToPos(3, player.getId(), new java.awt.Point(0, 100));

player.setLayerBlind(true, 255, 0, 0, 0, 0, 0);
//npc.setDelay(1200);
//player.setLayerBlind(false, 0, 0, 0, 0, 1000, 0);
//npc.setDelay(1400);
player.soundEffect("Sound/PL_Sound.img/myHome/knock1");
//npc.setDelay(1000);

npc.sayNextENoEsc("#face0#你没听到什么声音吗？", 9400921);
player.soundEffect("Sound/PL_Sound.img/myHome/knock1");
//npc.setDelay(1000);
npc.sayNextENoEsc("#face0#…", 9400920);
player.soundEffect("Sound/PL_Sound.img/myHome/knock2");
//npc.setDelay(1000);

npc.sayNextENoEsc("#face1#看来有谁找来了吧！", 9400921);
npc.sayNextENoEsc("#b应该没什么人要来啊……？", true);

player.spawnTempNpc(9400935, -250, 100, 0);
player.setNpcSpecialAction(9400935, "summon", 0, false);

//npc.setDelay(1000);

npc.sayNextENoEsc("#face0#勇者大人！", 9400926);

player.setNpcForceMove(9400935, 1, 150, 100);
//npc.setDelay(3000);
npc.sayNextENoEsc("#face0#[50个#i2010058:##t2010058#]\r\n这是给你的礼物……！", 9400926);
npc.sayNextENoEsc("#face1#欢迎你来到我们村子！", 9400926);
if (!"1".equals(player.getQuestRecordEx(64696, "give"))) {
        if (!player.gainItem(2010058, 50)) {
                player.gainParcel(2010058, 50, "背包不足，以邮件发送！");
        }
        player.updateQuestRecordEx(64696, "give", "1");
}
npc.sayNextENoEsc("#face1#你~~妈妈允许你这么做了吗？", 9400920);
npc.sayNextENoEsc("#face0#当然了！", 9400926);
npc.sayNextENoEsc("#face2#哇，#h0#真是太幸运了~ 特鲁迪家的奶油面包真的很好吃。充满了柔软奶油的蓬松面包，吃下一口后，在嘴里融化开来……可以说是让人感觉到幸福就在身边的味道吧！", 9400921);
npc.sayNextENoEsc("#b……啊……那我分你一点吧？", true);
npc.sayNextENoEsc("#face1#啊，不用了！这是给#h0#的乔迁礼物嘛。", 9400921);
npc.sayNextENoEsc("#b谢谢你，特鲁迪！我会好好吃的！", true);

player.setNpcForceFlip(9400935, -1);
player.setNpcForceMove(9400935, -1, 100, 100);
npc.sayNextENoEsc("#face1#啊啊啊~~", 9400926);

player.destroyTempNpc(9400935);
npc.setCameraScale(0, 0, 2000, 1000);
npc.setCameraReturnToUser(0, 0);

player.setInGameDirectionMode(false, true, false, false);

npc.sayNextENoEsc("#face1#特鲁迪看来很喜欢#h0#呢！", 9400921);
npc.sayNextENoEsc("#b我没什么能够回礼的呢……", true);
npc.sayNextENoEsc("#face0#嗯~要不要办搬家聚会呢？", 9400921);
npc.sayNextENoEsc("#face0#搬家聚会？", 9400920);
npc.sayNextENoEsc("#b搬家聚会？", true);
npc.sayNextENoEsc("#face1#邀请村民们来，用好吃的招待他们！再叫上#h0#的好友！", 9400921);
npc.sayNextENoEsc("#b好主意！", true);
npc.sayNextENoEsc("#face1#哇，肯定很有趣！", 9400920);
npc.sayNextENoEsc("#face1#好的！那就开始准备搬家聚会吧？", 9400921);
npc.completeQuest();

