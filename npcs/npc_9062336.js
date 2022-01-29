/**
 * Bingo
 */

let WAIT_FIELD = 922290000;
let EVENT_FIELD = 922290100;
let OUT_FIELD = 922290200;

let event = npc.getEvent("event_bingo");
switch (map.getId()) {
    case EVENT_FIELD: {
        let text = "Bingo~#b\r\n"
        if (event == null) {
            text += "活动出错。\r\n"
        } else if (event.getVariable("RankInfo") != null) {
            text += "#L0#领取奖励#l\r\n"
        }
        text += "#L1#出去#l"
        let sel = npc.askMenu(text);
        switch (sel) {
            case 0:
                let r = getReward(event.getVariable("RankInfo"));
                text = r[0];
                if (r[1]) {
                    npc.askMenu(text);
                    getRewardByRank(r[2]);
                } else {
                    npc.say(text);
                }
                break;
            case 1:
                player.changeMap(OUT_FIELD);
                break;
        }
        break;
    }
    case OUT_FIELD: {
        let text = "欢迎下次再来~#b\r\n"
        if (event != null && event.getVariable("RankInfo") != null) {
            text += "#L0#领取奖励#l\r\n"
        }
        text += "#L1#出去#l"
        let sel = npc.askMenu(text);
        switch (sel) {
            case 0:
                let r = getReward(event.getVariable("RankInfo"));
                text = r[0];
                if (r[1]) {
                    npc.askMenu(text);
                    getRewardByRank(r[2]);
                } else {
                    npc.say(text);
                }
                break;
            case 1:
                player.changeMap(WAIT_FIELD);
                break;
        }
        break;
    }
    case WAIT_FIELD: {
        if (event == null) {
            text = "现在不是活动时间。"
            if (player.isGm()) {
                text += "你要开启Bingo吗？";
                if (npc.askYesNo(text)) {
                    npc.makeEvent("event_bingo", true, null);
                }
            } else {
                npc.say(text);
            }
        } else {
            let text = "欢迎来到Bingo~\r\n#b"
            if (!event.getVariable("Closed")) {
                text += "#L1#我要报名参加Bingo#l\r\n"
            }
            if (event.getVariable("RankInfo") != null) {
                text += "#L2#我要领取奖励#l\r\n"
            }
            if (player.isGm()) {
                text += "#L3#关闭Bingo#l"
            }
            let sel = npc.askMenu(text);
            switch (sel) {
                case 1:
                    player.setEvent(event);
                    event.getVariable("Players").push(player);
                    player.showTimer((event.getVariable("endTime") - new Date().getTime()) / 1000);
                    npc.say("稍等片刻，活动即将开始。");
                    break;
                case 2:
                    let r = getReward(event.getVariable("RankInfo"));
                    text = r[0];
                    if (r[1]) {
                        npc.askMenu(text);
                        getRewardByRank(r[2]);
                    } else {
                        npc.say(text);
                    }
                    break;
                case 3:
                    event.destroyEvent();
                    npc.say("活动已关闭。");
                    break;
            }

        }
        break
    }
}

function getReward(info) {
    let canReward = false;
    let rank = -1;
    let json = JSON.parse(info)["rank"];
    let text = "#e排行榜#n\r\n"
    for (let i = 0; i < json.length; i++) { //stage
        text += "STAGE " + (i + 1) + "\r\n"
        for (let j = 0; j < json[i].length; j++) {
            text += json[i][j]["chrId"] + "角色名:" + json[i][j]["chrName"] + " 排名:" + json[i][j]["rank"] + "\r\n"
            if (json[i][j]["chrId"] == player.getId()) {
                canReward = true;
                if (rank < json[i][j]["rank"]) {
                    rank = json[i][j]["rank"];
                }
            }
        }
    }
    if (canReward && rank > -1) {
        if (event.getVariable("Reward").indexOf(player.getId()) > -1) {
            canReward = false;
            text += "已经领过了！"
        } else {
            text += "#b#L0#领取奖励#l";
        }
    } else {
        text += "没有你的奖励哦，下次努力吧。"
    }
    return [text, canReward, rank];
}

function getRewardByRank(rank) {
    event.getVariable("Reward").push(player.getId());
    player.gainItem(4110010, (31 - rank) * 3);
    npc.say("获得了#v4110010##b#z4110010##k *" + ((31 - rank) * 3) + "个")
}