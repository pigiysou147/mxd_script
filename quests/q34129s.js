/*  This is mada by Jonkson   
 *  
 *  功能：[消亡旅途]每日任务
 *  
 *  修改 Yanran
 */
let quests = {};
let delQuest = {};
let questinfocount = 0;
let sele;
let questcount = 5;
questcount = player.isQuestCompleted(34164) ? questcount - 1 : questcount; //用于判断调查团任务，决定最终任务个数
questcount = player.isQuestCompleted(34165) ? questcount - 1 : questcount;
questcount = player.isQuestCompleted(34166) ? questcount - 1 : questcount;
questcount = player.isQuestCompleted(34167) ? questcount - 1 : questcount;

let text = "你来得正好，#ho#。今天我有 " + questcount + " 件事要拜托#ho#你。那立刻开始执行吧？如果不喜欢的话，可以按切换按钮，切换到其他任务。\r\n\r\n";
initQuest();
for (let i = 0; i < questcount; i++) {
        text += "#b#e#y" + quests[i] + "##k#n\r\n";
}
let selection = npc.askYesNo(text);
if (selection == 1) {
        //替换
        let sel = npc.askYesNo("你对列表中的任务不满意吗？那你可以找找其他任务。\r\n\r\n#b(删除部分或全部任务，重置列表。)#k");
        if (sel == 1) {
                selectDel();
                switch (sele) {
                        case 5:
                                delDone();
                                npc.say("结束任务后，只要来找我完成就行了。你必须在今天午夜之前来找我。那祝你好运。");
                                break;
                        default:
                                let check = delQuest[sele];
                                if (check == null) {
                                        delQuest[sele] = sele;
                                }
                                let size = 0;
                                for (let idx in delQuest) {
                                        size++;
                                }
                                if (size >= questcount) {
                                        //开始执行任务
                                        delDone();
                                } else {
                                        //selectDel();
                                        delDone();
                                }
                                break;
                }
        }
} else {
        //执行
        execute();
        npc.sayNext("结束任务后，只要来找我完成就行了。你必须在今天午夜之前来找我。那祝你好运。");
}

function selectDel() {
        var str = "请选择想要删除的任务。\r\n\r\n";
        for (var i = 0; i < questcount; i++) {
                if (delQuest[i] != null) {
                        str += "#k#e#L" + i + "# #y" + quests[i] + "##l#k#n\r\n";
                } else {
                        str += "#b#e#L" + i + "# #y" + quests[i] + "##l#k#n\r\n";
                }
        }
        str += "\r\n#L5# #r#e没有想要删除的任务了。#k#n#l";
        sele = npc.askMenu(str);
}

function delDone() {
        let size = 0;
        for (let idx in delQuest) {
                player.forfeitQuest(quests[idx]);
                quests[idx] = null;
                size++;
        }
        let str = "今天拜托你的事情是这" + questcount + "件。\r\n\r\n";
        if (size > 0) {
                str = "新生成了 " + size + "个新任务，以代替被删除的" + size + "个任务。今天拜托你的事情是这" + questcount + "件。\r\n\r\n";
        }
        randQuest();
        for (let i = 0; i < questcount; i++) {
                if (delQuest[i] != null) {
                        str += "#b#e#y" + quests[i] + "##k #r[NEW]#k#n\r\n";
                } else {
                        str += "#b#e#y" + quests[i] + "##k#n\r\n";
                }
        }
        npc.sayNext(str);
        execute();
}


function execute() {
        for (let i = 0; i < questcount; i++) {
                let questID = Number(player.getQuestRecordEx(34129, String(i)));
                player.startQuest(questID, 0);
        }
        npc.startQuest();
        questinfocount = player.isQuestCompleted(34164) ? questinfocount + 1 : questinfocount;
        questinfocount = player.isQuestCompleted(34165) ? questinfocount + 1 : questinfocount;
        questinfocount = player.isQuestCompleted(34166) ? questinfocount + 1 : questinfocount;
        questinfocount = player.isQuestCompleted(34167) ? questinfocount + 1 : questinfocount;
        player.updateQuestRecordEx(34127, "count", String(questinfocount));
}


function initQuest() {
        //Done
        if (player.getPQLog("LoraDay") < 10) {
                player.addPQLog("LoraDay");
                if (player.getQuestRecordEx(34129) != null) {
                        for (let i = 0; i < questcount; i++) {
                                let questID = Number(player.getQuestRecordEx(34129, String(i)));
                                player.forfeitQuest(questID);
                        }
                }
                randQuest();
        } else {
                //载入原来记录
                for (let i = 0; i < questcount; i++) {
                        quests[i] = Number(player.getQuestRecordEx(34129, String(i)));
                }
        }
}


function randQuest() {
        //34130 - 34150  随机选取5个 Done
        for (let i = 0; i < questcount; i++) {
                let questID = quests[i];
                if (questID == null) { //没有写入任务
                        let bFlag = false; //判断是否已经重复
                        while (!bFlag) {
                                bFlag = true;
                                let number = 34130 + Math.floor(Math.random() * 21);
                                for (let idx = 0; idx < 5; idx++) {
                                        let cc = quests[idx];
                                        if (cc == number) {
                                                bFlag = false;
                                        }
                                }
                                if (bFlag) {
                                        quests[i] = number;
                                }
                        }
                }
        }
        for (let idx in quests) {
                let questID = quests[idx];
                player.updateQuestRecordEx(34129, String(idx), String(questID));
        }
}