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
 * Lets the party continue on through each stage in the Ludi party
 * quest.
 *
 * @author Jackson 
 */

let stage = 0;
switch (map.getId()) {
        case  922010100:
                stage = 1;
                break;
        case 922010400:
                stage = 2;
                break;
        case 922010600:
                stage = 3;
                break;
        case 922010700:
                stage = 4;
                break;
        case 922010800:
                stage = 5;
                break;
        case 922010900:
                stage = 6;
                break;
        case 922011000:
                stage = 7;
                break;
        case 922011100:
                stage = 8;
                break;

}
let event = npc.getEvent("party2");

function clear(stage, exp) {
        event.setVariable(stage + "stageclear", true);
        let aRate = parseInt(stage / 6 * 100);
        event.setVariable("achieverate", aRate);
        map.showAchieveRate(aRate);
        map.screenEffect("quest/party/clear");
        map.soundEffect("Party1/Clear");
        map.portalEffect("gate");
        let members = event.getVariable("members");
        for (let i = 0; i < members.length; i++)
                if (members[i].getHp() > 0)
                        members[i].gainExp(exp);
}

function failStage() {
        map.screenEffect("quest/party/wrong_kor");
        map.soundEffect("Party1/Failed");
}

function rectangleStages(stage) {
        let debug = false; //see which positions are occupied
        var stage8question = [
                "300+180+45+53 = ?",
                "90+42+15+11 = ?",
                "120+410+57-20 = ?",
                "342+256-144+35 = ?"
        ];
        let combos = [
                [0, 0, 0, 0, 1, 0, 1, 1, 0],
                [1, 0, 0, 0, 1, 0, 0, 1, 0],
                [0, 0, 0, 0, 1, 1, 1, 0, 0],
                [0, 0, 0, 1, 0, 0, 0, 1, 1]
        ];
        let objsets = [0, 0, 0, 0, 0, 0, 0, 0, 0];

        if (player.getId() == party.getLeader()) {
                let preamble = event.getVariable("leader5thpreamble");
                if (preamble == null || !preamble) {
                        npc.sayNext("欢迎来到五阶段. 在这个阶段你会看到一些箱子.我会出一个题目，你们需要算对答案，并找到正确答案所有对应数字的箱子，才能进入到下一阶段#k. 你们需要有#b3个队员来寻找正确的答案并站在上面.#k\r\n如果你站得离边缘太近将得不到正确答案; 请靠近箱子中间. 当然只允许3名队员在站上. 当他们已经站在上面, 队长需要#b双击我来检查是否是正确答案#k.好的，现在开始给题目并站上去，来寻找正确的箱子组合吧!");
                        event.setVariable("leader5thpreamble", true);
                        let sequenceNum = Math.floor(Math.random() * stage8question.length);
                        event.setVariable("stage5combo", sequenceNum);
                        map.blowWeather(5120018, stage8question[sequenceNum]);
                } else {
                        // Check for stage completed
                        let complete = event.getVariable(stage + "stageclear");
                        if (complete != null && complete) {
                                npc.sayNext("恭喜你完成当前阶段，传送口已经打开,快点进入下一个阶段吧!");
                        } else { // Check for people on ropes and their positions
                                let totplayers = 0;
                                for (let j = 0; j < objsets.length; j++) {
                                        let count = map.getNumPlayersItemsInArea(j);
                                        if (count >= 1) {
                                                objsets[j]++;
                                                totplayers += count;
                                        }
                                }

                                // Compare to correct positions
                                // Don't even bother if there aren't three players.
                                if (totplayers == 3 || debug) {
                                        let combo = combos[event.getVariable("stage5combo")];
                                        let testcombo = true;
                                        for (let i = 0; i < objsets.length && testcombo; i++)
                                                if (combo[i] != objsets[i])
                                                        testcombo = false;
                                        if (debug) {
                                                let str = "包含的对象:";
                                                for (let i = 0; i < objsets.length; i++)
                                                        str += "\r\n" + (i + 1) + ". " + objsets[i];
                                                str += "\r\n正确的组合: ";
                                                for (let i = 0; i < combo.length; i++)
                                                        str += "\r\n" + (i + 1) + ". " + combo[i];
                                                if (testcombo) {
                                                        str += "\r\n结果: #g通过#k";
                                                        npc.say(str);
                                                } else {
                                                        str += "\r\n结果: #r错误#k";
                                                        str += "\r\n#b是否强制完成当前阶段?#k";
                                                        debug = npc.askYesNo(str);
                                                }
                                        }
                                        if (testcombo || debug) {
                                                clear(stage, Math.pow(2, stage) * 50);
                                        } else {
                                                failStage();
                                        }
                                } else {
                                        npc.sayNext("3个队友还没有找到箱子吗. 请快算出正确答案.只允许有3名队友站在箱子上, 如果你站得离边缘太近将得不到正确的答案, 所以请记住这一点。继续加油!");
                                }
                        }
                }
        } else {
                let complete = event.getVariable(stage + "stageclear");
                if (complete != null && complete)
                        npc.sayNext("恭喜你完成当前阶段，传送口已经打开,快点进入下一个阶段吧!");
                else
                        npc.sayNext("请让组队长跟我交谈.");
        }
}

function getPrize() {
         player.changeMap(922010000, "sp");
}
if (event != null) {
        switch (stage) {
                case 1:
                        if (player.getId() == party.getLeader()) {
                                let preamble = event.getVariable("leader1stpreamble");
                                if (preamble == null || !preamble) {
                                        event.setVariable("leader1stpreamble", true);
                                        npc.sayNext("欢迎来到第1阶段,看看周围,是不是有很多#r老鼠#k请消灭它们并且带来20张#b通行证给我#k,如果你成功拿到了1张通行证，请交给你们的组长，然后再转交给我。");
                                } else {
                                        let complete = event.getVariable(stage + "stageclear");
                                        if (complete != null && complete) {
                                                npc.sayNext("你们已经成功完成了第一阶段,赶快向第二阶段前进吧。");
                                        } else {
                                                // Check how many passes they have compared to number of party members
                                                if (!player.hasItem(4001022, 20)) {
                                                        npc.sayNext("消灭了所有的老鼠并且带来#b20#k张通行证才可以进入第二阶段。请检查一下你的背包~");
                                                } else {
                                                        clear(stage, 100);
                                                        player.loseItem(4001022, 20);
                                                        npc.sayNext("你们成功收集了#b20#k通行证。 已经成功完成了第一阶段。好了，我将开启通往下一个关卡的结界，时间不多了，你们赶快到那里进行第二阶段的挑战吧。");
                                                }
                                        }
                                }
                        } else {
                                let pVar = "member1stpreamble" + player.getId();
                                let preamble = event.getVariable(pVar);
                                if (preamble == null || !preamble) {
                                        npc.sayNext("欢迎来到第二阶段，看看周围,是不是有很多#r老鼠#k请消灭它们并且获取通行证，你们把通行证全部交给组队长，组队长再和我讲话，就可以顺利通关了，那么祝你一切顺利！");
                                        event.setVariable(pVar, true);
                                } else {
                                        let complete = event.getVariable(stage + "stageclear");
                                        if (complete != null && complete) {
                                                npc.sayNext("传送口已经打开,快点进入下一个阶段吧...");
                                        } else {
                                                npc.sayNext("快点消灭所有的怪物并收集通行证，然后交给组队长！");
                                        }
                                }
                        }
                        break;
                case 2:
                        if (player.getId() == party.getLeader()) {
                                let preamble = event.getVariable("leader2ndpreamble");
                                if (preamble == null || !preamble) {
                                        event.setVariable("leader2ndpreamble", true);
                                        npc.sayNext("欢迎来到第2阶段，让你的队员在次元洞内杀死所有的怪物并且收集14张通行证在来与我谈话。");
                                } else {
                                        let complete = event.getVariable(stage + "stageclear");
                                        if (complete != null && complete) {
                                                npc.sayNext("恭喜你们完成第二阶段。时间已经不多了,赶快进入下一阶段吧。");
                                        } else {
                                                // Check how many passes they have compared to number of party members
                                                if (!player.hasItem(4001022, 14)) {
                                                        npc.sayNext("次元洞内的怪物没有清理完毕，赶快抓紧时间。");
                                                } else {
                                                        clear(stage, 100);
                                                        player.loseItem(4001022, 14);
                                                        npc.sayNext("你们成功收集了#b14#k通行证。 已经成功完成了第二阶段。好了，我将开启通往下一个关卡的结界，时间不多了，你们赶快到那里进行第三阶段的挑战吧。");
                                                }
                                        }
                                }
                        } else {
                                let pVar = "member2ndpreamble" + player.getId();
                                let preamble = event.getVariable(pVar);
                                if (preamble == null || !preamble) {
                                        npc.sayNext("欢迎来到第二阶段，在次元洞内杀死黑暗中的怪物并且收集14张通行证，获取通行证，你们把通行证全部交给组队长，组队长再和我讲话，就可以顺利通关了，那么祝你一切顺利！");
                                        event.setVariable(pVar, true);
                                } else {
                                        let complete = event.getVariable(stage + "stageclear");
                                        if (complete != null && complete) {
                                                npc.sayNext("传送口已经打开,快点进入下一个阶段吧...");
                                        } else {
                                                npc.sayNext("快点消灭所有的怪物并收集通行证，然后交给组队长！");
                                        }
                                }
                        }
                        break;
                case 3:
                        npc.sayNext("你好！欢迎来到第三阶段！ 看看这里， 你会看到很多数字盒子， 如果你想通过这里到达下一个阶段，你必须找到正确的数字盒子。 但是，如果你选择了错误的箱子，你将从原地重新开始！ 祝你好运。");
                        break;
                case 4:
                        if (player.getId() == party.getLeader()) {
                                let preamble = event.getVariable("leader4thpreamble");
                                if (preamble == null || !preamble) {
                                        event.setVariable("leader4thpreamble", true);
                                        npc.sayNext("欢迎来到第四阶段,请和你的队友消灭地图上所有的怪物并且收集4张通行证在来和我说话吧。获取通行证，然后交给我，就可以顺利通关了，那么祝你一切顺利！");
                                } else {
                                        let complete = event.getVariable(stage + "stageclear");
                                        if (complete != null && complete) {
                                                npc.sayNext("现在可以到下一个关卡了，如果不快点的话，门可能就关闭了。");
                                        } else {
                                                if (player.hasItem(4001022, 4)) {
                                                        clear(stage, 100);
                                                        player.loseItem(4001022, 4);
                                                        npc.sayNext("你们成功收集了4张通行证。 已经成功完成了第四阶段。好了，我将开启通往下一个关卡的结界，时间不多了，你们赶快到那里进行第五阶段的挑战吧。");
                                                } else {
                                                        npc.sayNext("快点消灭所有的怪物并收集通行证！");
                                                }
                                        }
                                }
                        } else {
                                let pVar = "member4thpreamble" + player.getId();
                                let preamble = event.getVariable(pVar);
                                if (preamble == null || !preamble) {
                                        npc.sayNext("欢迎来到第四阶段,请和你的队友消灭地图上所有的怪物并且收集4张通行证，获取通行证，你们把通行证全部交给组队长，组队长再和我讲话，就可以顺利通关了，那么祝你一切顺利！");
                                        event.setVariable(pVar, true);
                                } else {
                                        let complete = event.getVariable(stage + "stageclear");
                                        if (complete != null && complete) {
                                                npc.sayNext("传送口已经打开,快点进入下一个阶段吧...");
                                        } else {
                                                npc.sayNext("快点消灭所有的怪物并收集通行证，然后交给组队长！");
                                        }
                                }
                        }
                        break;
                case 5:
                        rectangleStages(stage);
                        break;
                case 6:
                        let complete = event.getVariable(stage + "stageclear");
                        let boss = event.getVariable("bossclear");
                        if (complete == null || !complete) {
                                if (player.getId() == party.getLeader()) {
                                        if (boss != null && boss && player.hasItem(4001023, 1)) {
                                                player.loseItem(4001023, 1);
                                                clear(stage, 1500);
                                                npc.sayNext("恭喜你打败了#b阿丽莎乐#k.再次跟我对话可以进入奖励阶段。");
                                        } else {
                                                npc.sayNext("这里是最后一个阶段; 消灭#b阿丽莎乐#k获得#b次元的钥匙#k,就能通过考验,祝你好运!");
                                        }
                                } else {
                                        npc.sayNext("请击败#b阿丽莎乐#k,并把#b次元的钥匙#k交给组队长让他带给我!");
                                }
                        } else {
                                let sel =npc.askYesNo("恭喜你们已经完成了所有阶段的任务。我会给你们奖励,你们准备好接受奖励了吗？\r\n 请队长最后再点击奖励，否则会出现队员得不到奖励的情况");
                        if(sel==1){
                                if (player.getId() == party.getLeader()) {
                                        let members = party.getLocalMembers();
                                
                                        for (let i = 0; i < members.length; i++) {
                                                
                                                if(members[i].getPQLog("玩具组队")<5){
                                                        if(members[i].getId()==party.getLeader()){
                                                                members[i].addPQLog("带队次数",1,1);
                                                        }
                                                        members[i].setEvent(event);
                                                        members[i].addPQLog("party2");
                                                        members[i].addPQLog("玩具组队",1,1);
                                                        members[i].addPQLog("活力",20,999);
                                                        members[i].modifyCashShopCurrency(1,1500);
                                                        members[i].gainItem(2614045,1);//突破50W
                                                        members[i].gainItem(2430781,1);//
                                                        members[i].gainItem(4310028,3);
                                                        members[i].loseItem(4001022);
                                                        members[i].loseItem(4001023);
                                                        
                                                        npc.broadcastNoticeWithoutPrefix("【玩具组队奖励】 玩家"+members[i].getName()+" 完成了玩具组队任务，获得了一系列的奖励");
                                                        //增加组队点数	
                                                        var zudui = parseInt((Math.random() * 3+1)*5000) ;
                                                        members[i].updateQuestRecordEx(7907,"point",members[i].getIntQuestRecordEx(7907,"point")+zudui );
                                                        members[i].dropMessage(1,"获得了组队点数："+zudui);
                                                        
                                                }else{
                                                        members[i].	dropMessage(1,"超过次数无法获得奖励了");
                                                }
                                                members[i].changeMap(221023300);	
                                        }
                                        
                                        event.stopTimer("kick");
                                        event.startTimer("clear", 10 * 1000);

                                }else{
                                        npc.say("请让组长和我交谈");
                                }
                                
                        }
								
                                
                        }
                        break;
        }
} else if (map.getId() == 922011100) {
        player.changeMap(922010000, "sp");
}