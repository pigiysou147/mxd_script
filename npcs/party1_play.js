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
 * Cloto (NPC 9020001)
 * Hidden Street: 1st Accompaniment <1st Stage> (Map 103000800),
 *   Hidden Street: 1st Accompaniment <2nd Stage> (Map 103000801),
 *   Hidden Street: 1st Accompaniment <3rd Stage> (Map 103000802),
 *   Hidden Street: 1st Accompaniment <4th stage> (Map 103000803),
 *   Hidden Street: 1st Accompaniment <Last Stage> (Map 103000804)
 *
 * Lets the party continue on through each stage in the Kerning City party
 * quest.
 *
 * @author Jackson (content from KiniroMS r227)
 */

let stage = parseInt((map.getId() - 910340000) / 100);
let event = npc.getEvent("party1");

//TODO: GMS-like conversation
function clear(stage, exp) {
        event.setVariable(stage + "stageclear", true);
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
        let stages = ["第二", "第三", "第4"];
        let objs = ["绳子", "平台", "木桶"];
        let verbs = ["爬", "站", "站"];
        let donts = ["处于绳子的位置太低", "站得离边缘太近", "站得离边缘太近"];
        let combos = [
                [//stage 2
                        [0, 1, 1, 1],
                        [1, 0, 1, 1],
                        [1, 1, 0, 1],
                        [1, 1, 1, 0]
                ],
                [//stage 3
                        [0, 0, 1, 1, 1],
                        [0, 1, 0, 1, 1],
                        [0, 1, 1, 0, 1],
                        [0, 1, 1, 1, 0],
                        [1, 0, 0, 1, 1],
                        [1, 0, 1, 0, 1],
                        [1, 0, 1, 1, 0],
                        [1, 1, 0, 0, 1],
                        [1, 1, 0, 1, 0],
                        [1, 1, 1, 0, 0]
                ]
        ];
        let objsets = [
                [0, 0, 0, 0],
                [0, 0, 0, 0, 0]
        ];

        let index = stage - 2;

        if (player.getId() == party.getLeader()) {
                let preamble = event.getVariable("leader" + stages[index] + "preamble");
                if (preamble == null || !preamble) {
                        npc.sayNext("欢迎来到" + stages[index] + "阶段. 在这个阶段你会看到一些" + objs[index] + ".你们需要找到正确的" + objs[index] + "组合，才能进入到下一阶段#k. 你们需要有#b3个队员来寻找正确的" + objs[index] + "并" + verbs[index] + "在上面.#k\r\n如果你" + donts[index] + "将得不到正确答案; 请靠近" + objs[index] + "中间. 当然只允许3名队员在" + objs[index] + "上. 当他们已经" + verbs[index] + "在上面, 队长需要#b双击我来检查是否是正确答案#k.好的，现在开始" + verbs[index] + "上去，来寻找正确的" + objs[index] + "组合吧!");
                        event.setVariable("leader" + stages[index] + "preamble", true);
                        let sequenceNum = Math.floor(Math.random() * combos[index].length);
                        event.setVariable("stage" + stages[index] + "combo", sequenceNum);
                } else {
                        // Check for stage completed
                        let complete = event.getVariable(stage + "stageclear");
                        if (complete != null && complete) {
                                npc.sayNext("恭喜你完成当前阶段，传送口已经打开,快点进入下一个阶段吧!");
                        } else { // Check for people on ropes and their positions
                                let totplayers = 0;
                                for (let j = 0; j < objsets[index].length; j++) {
                                        let count = map.getNumPlayersItemsInArea(j);
                                        if (count >= 1) {
                                                objsets[index][j]++;
                                                totplayers += count;
                                        }
                                }

                                // Compare to correct positions
                                // Don't even bother if there aren't three players.
                                if (totplayers == 3 || debug) {
                                        let combo = combos[index][event.getVariable("stage" + stages[index] + "combo")];
                                        let testcombo = true;
                                        for (let i = 0; i < objsets[index].length && testcombo; i++)
                                                if (combo[i] != objsets[index][i])
                                                        testcombo = false;
                                        if (debug) {
                                                let str = "包含的对象:";
                                                for (let i = 0; i < objsets[index].length; i++)
                                                        str += "\r\n" + (i + 1) + ". " + objsets[index][i];
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
                                        npc.sayNext("3个队友还没有找到" + objs[index] + "吗. 请考虑所有不同的组合.只允许有3名队友" + verbs[index] + "在" + objs[index] + ", 如果你" + donts[index] + "将得不到正确的答案, 所以请记住这一点。继续加油!");
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
	if (player.getId() == party.getLeader()) {
		let members = party.getLocalMembers();
	
		for (let i = 0; i < members.length; i++) {
			
			if(members[i].getPQLog("废弃组队")<5){
				if(members[i].getId()==party.getLeader()){
					members[i].addPQLog("带队次数",1,1);
				}
				members[i].addPQLog("废弃组队",1,1);
				members[i].addPQLog("活力",10,999);
				members[i].modifyCashShopCurrency(1,1000);
				members[i].gainItem(2614045,1);
				members[i].gainItem(2430781,1);
				members[i].gainItem(4310028,1);
				//增加组队点数	
				var zudui = parseInt((Math.random() * 3+1)*5000) ;
				members[i].updateQuestRecordEx(7907,"point",members[i].getIntQuestRecordEx(7907,"point")+zudui );
				members[i].dropMessage(1,"获得了组队点数："+zudui);
				npc.broadcastNoticeWithoutPrefix("【废弃组队奖励】 玩家 "+members[i].getName()+"  完成了废弃组队组队任务，获得了一系列的奖励");
				
			}else{
				members[i].	dropMessage(1,"超过次数无法获得奖励了");
			}
			members[i].changeMap(910002000);
		}
	}else{
		npc.say("请让组长和我交谈");
	}
	
        
}

switch (stage) {
        case 1:
                let questions = [
                        "第一个问题：3转最低等级是多少？#b\r\n（打倒怪物，获取相应数量的证书。）",
                        "第一个问题：4转最低等级是多少？#b\r\n（打倒怪物，获取相应数量的证书。）",
                        "第一个问题：中国有几个省级行政区域？#b\r\n（打倒怪物，获取相应数量的证书。）",
                        "第一个问题：3年前冒险岛3转最低等级是多少？#b\r\n（打倒怪物，获取相应数量的证书。）",
                        "第一个问题：5月份一共有多少天？#b\r\n（打倒怪物，获取相应数量的证书。）"
                ];
                let answers = [60, 100, 34, 70, 31];
                if (player.getId() == party.getLeader()) {
                        let preamble = event.getVariable("leader1stpreamble");
                        if (preamble == null || !preamble) {
                                event.setVariable("leader1stpreamble", true);
                                npc.sayNext("你好，欢迎来到第一个阶段，在这里你可能会看到很多凶狠的鳄鱼，跟我对话，我会给你们每一个人出一道题目，你们再打倒凶狠的鳄鱼获取相应数目的证书卡交给我，就行了。之后我会给你们一张通行证，你们把通行证全部交给组队长，组队长再和我讲话，就可以顺利通关了，那么祝你一切顺利！");
                        } else {
                                let complete = event.getVariable(stage + "stageclear");
                                if (complete != null && complete) {
                                        npc.sayNext("现在可以到下一个关卡了，如果不快点的话，门可能就关闭了。");
                                } else {
                                        // Check how many passes they have compared to number of party members
                                        let numPasses = event.getVariable("members").length - 1;
										if(numPasses==0){
											numPasses++;
										}
                                        if (!player.hasItem(4001008, numPasses)) {
                                                npc.sayNext("你们还需要" + numPasses + "通行证才可以过关。");
                                        } else {
                                                clear(stage, 100);
                                                player.loseItem(4001008, numPasses);
                                                npc.sayNext("你们成功收集了 " + numPasses + "通行证。 已经成功完成了第一阶段。好了，我将开启通往下一个关卡的结界，时间不多了，你们赶快到那里进行第二阶段的挑战吧。");
                                        }
                                }
                        }
                } else {
                        let pVar = "member1stpreamble" + player.getId();
                        let qIndexVar = "member1st" + player.getId();
                        let preamble = event.getVariable(pVar);
                        if (preamble == null || !preamble) {
                                let qIndex = event.getVariable(qIndexVar);
                                if (qIndex == null) {
                                        // Select a random question to ask the player.
                                        qIndex = Math.floor(Math.random() * questions.length);
                                        event.setVariable(qIndexVar, qIndex);
                                }
                                npc.sayNext("你好，欢迎来到第一个阶段，在这里你可能会看到很多凶狠的鳄鱼，跟我对话，我会给你们每一个人出一道题目，你们再打倒凶狠的鳄鱼获取相应数目的证书卡交给我，就行了。之后我会给你们一张通行证，你们把通行证全部交给组队长，组队长再和我讲话，就可以顺利通关了，那么祝你一切顺利！");
                                npc.sayNext("你需要回答的问题是:" + questions[qIndex]);
                                event.setVariable(pVar, true);
                        } else {
                                let complete = event.getVariable(stage + "stageclear");
                                if (complete != null && complete) {
                                        npc.sayNext("传送口已经打开,快点进入下一个阶段吧...");
                                } else {
                                        let dVar = "member1stdone" + player.getId();
                                        complete = event.getVariable(dVar);
                                        // don't let one player get more than one pass for his question
                                        if (complete == null || !complete) {
                                                // Reply to player correct/incorrect response to the question they have been asked
                                                let numcoupons = answers[event.getVariable(qIndexVar)];
                                                if (!player.hasItem(4001007, numcoupons + 1) && player.hasItem(4001007, numcoupons)) {
                                                        player.loseItem(4001007, numcoupons);
                                                        //there should already be at least one empty slot in the ETC inventory by now
                                                        player.gainItem(4001008, 1);
                                                        npc.sayNext("回答正确,请收好通行证,并把它交给队长!");
                                                        event.setVariable(dVar, true);
                                                } else {
                                                        npc.sayNext("你给我的通行证和问题的答案不符合,请在想想。 你需要回答的问题是 : #b" + questions[event.getVariable(qIndexVar)] + "#k");
                                                }
                                        } else {
                                                npc.sayNext("恭喜你回答正确了答案，请把你的通行证交给队长吧.");
                                        }
                                }
                        }
                }
                break;
        case 2:
        case 3:
                rectangleStages(stage);
                break;
        case 4:
                if (player.getId() == party.getLeader()) {
                        let preamble = event.getVariable("leader1stpreamble");
                        if (preamble == null || !preamble) {
                                event.setVariable("leader1stpreamble", true);
                                npc.sayNext("你好，欢迎来到第四个阶段，在这里你可能会看到很多凶狠的火独眼兽，消灭所有火独眼兽，获取通行证，然后交给我，就可以顺利通关了，那么祝你一切顺利！");
                        } else {
                                let complete = event.getVariable(stage + "stageclear");
                                if (complete != null && complete) {
                                        npc.sayNext("现在可以到下一个关卡了，如果不快点的话，门可能就关闭了。");
                                } else {
                                        if (player.hasItem(4001008, 19)) {
                                                clear(stage, 100);
                                                player.loseItem(4001008, 19);
                                                npc.sayNext("你们成功收集了19张通行证。 已经成功完成了第四阶段。好了，我将开启通往下一个关卡的结界，时间不多了，你们赶快到那里进行第五阶段的挑战吧。");
                                        } else {
                                                npc.sayNext("快点消灭所有的怪物并收集19张通行证！");
                                        }
                                }
                        }
                } else {
                        let pVar = "member1stpreamble" + player.getId();
                        let preamble = event.getVariable(pVar);
                        if (preamble == null || !preamble) {
                                npc.sayNext("你好，欢迎来到第四个阶段，在这里你可能会看到很多凶狠的火独眼兽，消灭所有火独眼兽，获取通行证，你们把通行证全部交给组队长，组队长再和我讲话，就可以顺利通关了，那么祝你一切顺利！");
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
                let complete = event.getVariable(stage + "stageclear");
                if (complete == null || !complete) {
                        if (player.getId() == party.getLeader()) {
                                if (player.hasItem(4001008, 1)) {
                                        player.loseItem(4001008, 1);
                                        clear(stage, 1500);
                                        npc.sayNext("恭喜,你们成功的通过第5阶段。再次跟我对话可以领取奖励。");
                                } else {
                                        npc.sayNext("欢迎来到第5阶段,你们需要收集一张#v4001008#才可以通关。");
                                }
                        } else {
                                npc.sayNext("欢迎来到第5阶段,你们需要收集一张#v4001008#才可以通关。");
                        }
                } else {
                        npc.sayNext("恭喜你们已经完成了所有阶段的任务。我会给你们奖励,你们准备好接受奖励了吗？");
                        getPrize();
                }
                break;
}