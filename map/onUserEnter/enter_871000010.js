// /*
//  * NeroMS MapleStory server emulator written in Java
//  * Copyright (C) 2017-2018  Jackson
//  *
//  * This program is free software: you can redistribute it and/or modify
//  * it under the terms of the GNU Affero General Public License as
//  * published by the Free Software Foundation, either version 3 of the
//  * License, or (at your option) any later version.
//  *
//  * This program is distributed in the hope that it will be useful,
//  * but WITHOUT ANY WARRANTY; without even the implied warranty of
//  * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
//  * GNU Affero General Public License for more details.
//  *
//  * You should have received a copy of the GNU Affero General Public License
//  * along with this program.  If not, see <http://www.gnu.org/licenses/>.
//  */

// /**
//  *
//  * @author Jackson
//  */


 player.completeQuest(64590, 0);
// player.setInGameCurNodeEventEnd(true);
// player.setInGameDirectionMode(true, false, false, false);
// player.changeBGM("Bgm00.img/Silence");

// player.spawnTempNpc(9400928, 3900, 115, 1);
// player.setNpcSpecialAction(9400928, "summon", 0, false);
// player.changeBGM("Bgm00/FloralLife");

// npc.setCameraStickToUser();


// player.setForcedMove(2, 230);
// ////npc.setDelay(1000);

// player.setNpcForceMove(9400928, -1, 100, 100);
// ////npc.setDelay(2000);


// npc.sayNextENoEsc("#face3#哎呀……你是看了宣传单后来的吗？真的？", 9400920);

// player.setNpcForceFlip(9400928, 1);
// ////npc.setDelay(300);

// player.setNpcForceMove(9400928, 1, 150, 100);
// ////npc.setDelay(1000);

// npc.sayNextENoEsc("#face2#哎呀呀！别站着了，快点坐在这里吧！", 9400920);
// ////npc.setDelay(1000);

// player.setForcedMove(2, 120);

// npc.setCameraScaleRelMove(0, 1000, 1000, 2000, 150, 100);
// ////npc.setDelay(1000);

// player.setNpcForceFlip(9400928, -1);
// ////npc.setDelay(300);

// npc.sayNextENoEsc("#face2#虽然你已经看过宣传单了，但你应该知道这不是什么华丽的大宅子哦。它非常小巧，有点朴素但是非常温馨~，真的是很舒适的家哦。", 9400920);
// npc.sayNextENoEsc("#face1#请想象一下在结束了疲惫的一天后，躺在床上休息的样子。远处的鸟叫声，从窗子外面吹来的微风。可以在其中舒舒服服地休息！这不就是幸福吗！", 9400920);
// npc.sayNextENoEsc("#face1#家是回忆的场所，为了能让新的主人用回忆填满这个地方，家里已经留下了一些~空闲的地方。这样的留白总是让人激动呢。", 9400920);
// let falg = true;
// while (falg) {
//         let sel = npc.askMenuANoEsc("#face2#这样的房屋只要50万金币！怎么样？现在就马上签合同吧？\r\n#b#L0#我要签合同。#l\r\n#L1#给我一点时间考虑一下。#l\r\n#L2#这个价格是不是太便宜了。#l\r\n#L3#你这话说的有点奇怪啊。#l", 9400920);
//         switch (sel) {
//                 case 0:
//                         falg = false;
//                         npc.sayNextENoEsc("#face2#好的！请在这个合同上签字吧！ ", 9400920);
//                         break;
//                 case 1:
//                         npc.sayNextENoEsc("#face2#这么便宜的房子还要在考虑什么？", 9400920);
//                         break;
//                 case 2:
//                         npc.sayNextENoEsc("#face2#太便宜了？你不会担心这个是骗人的吧！这个绝对不骗人", 9400920);
//                         break;
//                 case 3:
//                         npc.sayNextENoEsc("#face2#怎么会奇怪呢？你不想要的话，别人等着要呢！ ", 9400920);
//                         break;
//         }
// }

// player.setLayerBlind(true, 200, 0, 0, 0, 1300, 0);
// ////npc.setDelay(1600);

// npc.setMonologue("#fs30##e[蘑菇屋买卖合同]", false);
// npc.setMonologue("#fs15#买卖双方就以下标记的不动产按照下述内容结成买卖契约。", false);
// npc.setMonologue("#fs20#\r\n所在地：冒险岛世界金银岛凯兰西亚村蘑菇路1-1", false);
// npc.setMonologue("#fs20#买卖金额：500,000 金币", false);
// var myDate = new Date();
// var s = myDate.getFullYear() + "/" + appendZero(myDate.getMonth() + 1) + "/" + appendZero(myDate.getDate());
// var sDate = s.substr(2);
// npc.setMonologue("#fs20#签约日期：" + sDate, false);
// npc.setMonologue("#fs12#(绝对！绝对！禁止因为变心而退款！)", false);
// npc.setMonologue("#fs15#\r\n卖方：艾米", false);
// npc.setMonologue("#fs15#买方：#h0#", true);
// //player.setLayerBlind(true, 0, 0, 0, 0, 1000, 0);////npc.setDelay(1600);

// if (player.gainItem(2630583, 1)) {
//         npc.sayNextENoEsc("#face1#我给你能够马上前往家中的#i2630583:##t2630583#，使用它就能回到家里！", 9400920);
// } else {
//         npc.sayNextENoEsc("#face1#啊，我本来打算给你能够马上前往家中的#i2630583:##t2630583#，但是背包里似乎没有空间了呢！", 9400920);
// }
// npc.sayNextENoEsc("#face2#请不要担心，即使没有#t2630583#，还有很多可以前往家中的方法！", 9400920);
// player.showSystemMessage("不会出现实际的金币支出和减少。");
// player.setLayerOn(900, "0", 0, -80, 12, "Effect/DirectionWz2.img/effect/myHomeTuto/0", 4, true, -1, false, 0, 0);
// npc.sayNextENoEsc("#face1#第一，点击角色快捷栏的[前往我的小屋]按键后移动。", 9400920);
// npc.sayNextENoEsc("#face1#第二，在我的角色信息栏中点击[前往我的小屋]按键后移动。", 9400920);
// player.setLayerOff(600, "0");
// npc.sayNextENoEsc("#face1#我接下来还有事情，就不能和你一起去了……你应该能找到吧？", 9400920);

// npc.sayNextENoEsc("#face3#那就请好好享受冒险岛生活吧！ 下次再见……#fs8#(别再见)……#fs12#了！", 9400920);

// player.updateQuestRecordEx(64612, "housing", "4");
// player.updateQuestRecordEx(64612, "furniture", "2");

// player.completeQuest(500763, 0);
// player.completeQuest(64590, 0);
// player.startQuest(64591, 0);
// player.updateQuestRecordEx(500767, "7", "1");
// player.updateWorldShareRecord(500767, player.getQuestRecordEx(500767));
// //房屋信息管理
// player.updateQuestRecordEx(500773, "askR", "0");
// player.updateQuestRecordEx(500773, "managerHide", "1");
// player.updateQuestRecordEx(500773, "bonusTalk", "0");
// player.updateQuestRecordEx(500773, "s5", "-45");
// player.updateQuestRecordEx(500773, "resetDate", sDate);
// player.updateQuestRecordEx(500773, "affDown", "19/12/31");
// player.updateWorldShareRecord(500773, player.getQuestRecordEx(500773));

// //房屋名称
// player.updateQuestRecordEx(500763, "name", player.getName());
// player.updateWorldShareRecord(500763, player.getQuestRecordEx(500763));
// player.createMyHome();
// player.showSystemMessage("[我的小屋]入场方法");
// player.showSystemMessage("1. 点击角色快捷栏的[前往我的小屋]按键即可进入。");
// player.showSystemMessage("2. 点击我的角色信息栏的[前往我的小屋]按键即可进入。");
// player.showSystemMessage("※ 完成所有的教程任务后，账号内的所有角色都能使用[我的小屋]。");

// player.destroyTempNpc(9400920);

// player.setInGameDirectionMode(false, true, false, false);
// let rMap = player.getIntQuestRecordEx(64590, "rMap");
// player.changeMap(rMap, 0);


// function appendZero(s) {
//         return ("00" + s).substr((s + "").length);
// }

