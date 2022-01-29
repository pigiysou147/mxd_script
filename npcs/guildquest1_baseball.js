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
 * Gatekeeper, Sharenian: Door to the Sharenian Castle (990000500)
 * 
 * @author Jackson 
 */

 let max_try = 7;
 let event = npc.getEvent("guild_quest");
 if (event != null) {
         let leader = event.getVariable("leader");
         let state = event.getVariable("state_s3");
         if (leader.equals(player.getName())) {
                 if (state == null) {
                         event.setVariable("state_s3", "0");
                         makeCombo();
                         npc.sayNext("欢迎来到第三关，我是通往秘密房间的守护人。 请贡献出祭品放在石像前面， 石像会告诉你们它们会接受什么祭品，如果放了错误的祭品，石像会发怒的。 你一共有7次机会来摆放这些祭品。祝你好运！");
                 } else {
                         if ("clear".equals(state)) {
                                 npc.sayNext("你已经完成了我对你们的考验，请快进入下一个地图迎接挑战吧！");
                         } else {
                                 action();
                         }
                 }
         } else {
                 npc.say("欢迎来到第三关，我是通往秘密房间的守护人。 请贡献出祭品放在石像前面， 石像会告诉你们它们会接受什么祭品，如果放了错误的祭品，石像会发怒的。 你一共有7次机会来摆放这些祭品。祝你好运！");
         }
 } else {
         npc.say("发生未知错误，请离开后重新进入。");
 }
 
 
 function action() {
         let checkArea = true;
         let results = [0, 0, 0];
         let items = [0, 0, 0, 0];
         let oblations = event.getVariable("oblation");
         for (let i = 0; i < 4; i++) {
                 let it = oblations[i];
                 items[it] += 1;
         }
         for (let i = 0; i < 4; i++) {
                         for (let item = 0; item < 4; item++) {
                                 if (map.getNumItemsInArea(item) > 0) {
                                         for (let x = 0; x < 4; x++) {//item  idx
                                                 if (x == item) {//check item idx 
                                                         if (item == oblations[i]) {
                                                                 //正确答案
                                                                 results[0] += 1;
                                                                 items[x] -= 1;
                                                         } else {
                                                                 //错误答案，进行判断是否是包含在答案中
                                                                 if (items[x] > 0) {
                                                                         items[x] -= 1;
                                                                         results[1] += 1;
                                                                 } else {
                                                                         results[2] += 1;
                                                                 }
                                                         }
                                                         break;
                                                 }
                                         }
                                 }
                         }
                 
         }
         //npc.say("答案:" + oblations + " \r\n物品对应数量：" + items + " \r\n结果：" + results);
         if (checkArea) {
                 let tryCount = parseInt(event.getVariable("oblation_try")) + 1;
                 event.setVariable("oblation_try", tryCount);
                 let clear = results[0] >= 4;
                 if (clear) {
                         event.setVariable("state_s3", "clear");
                         map.setReactorState("watergate", 1, 0);
                         map.soundEffect("Party1/Clear");
                         map.screenEffect("quest/party/clear");
                         //player.gainGuildCommitment(200);
                         npc.say("恭喜你们成功完成这个考验，现在你可以进入下一个关卡了。");
                 } else if (tryCount > max_try) {
                         makeCombo();
                         npc.say("你没有通过此项测试，请重新摆放祭品，做好准备后再跟我谈话吧。");
                 } else {
                         let str = "\r\n#r";
                         if (results[0] > 0) {
                                 str += results[0] + "个#k石像觉得祭品正确。\r\n#r";
                         }
                         if (results[1] > 0) {
                                 str += results[1] + "个#k石像收到了错误的祭品。\r\n#r";
                         }
                         if (results[2] > 0) {
                                 str += results[2] + "个#k石像收到了不认识的祭品。\r\n#r";
                         }
                         str += "\r\n#k这是你的第#e#r" + tryCount + "次#n#k尝试。";
                         npc.sayNext(str);
                 }
         } else {
                 npc.say("请确保所有的祭品都摆放在正确的位置后再试,请不要摆放不是祭品的物品。");
         }
 
 }
 
 function makeCombo() {
         event.setVariable("oblation_try", 0);
         let oblation = [];
         for (var i = 0; i < 4; i++) {
                 let rnd = Math.floor(Math.random() * 4);
                 oblation.push(rnd);
         }
         event.setVariable("oblation", oblation);
 }