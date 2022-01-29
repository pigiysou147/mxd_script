/**
 * Bingo
 * @author Yukinoshita
 * @description Bingo
 */
let endTime;
let waitTime = 120000; //开始bingo活动后等待报名的时间
let endBingoTime = 600000; //活动开始后自动销毁活动的时间
let minSize = 1; //最小报名人数

let WAIT_FIELD = 922290000;
let EVENT_FIELD = 922290100;
let OUT_FIELD = 922290200;

let info = {
    "numberAmount": 50, //报数总数量
    "boardCount": 2, //板子数量，1或2
    "boardX": 5, //板长
    "boardY": 5, //板宽
    "maxStage": 2, //几轮
    "waitTime": 10000, //几毫秒后开始下一轮
    "numberInterval": 3000 //报数间隔
}

function init(attachment) {
    event.setVariable("Players", []);
    event.setVariable("Closed", false);
    event.setVariable("Reward", []);
    endTime = new Date().getTime() + waitTime;
    event.setVariable("endTime", endTime);
    event.startTimer("StartBingo", waitTime);
    event.startTimer("EndBingo", endBingoTime);
}



function timerExpired(key) {
    switch (key) {
        case "StartBingo": {
            let players = event.getVariable("Players");
            if (players.length > minSize) {
                for (let i = 0; i < players.length; i++) {
                    players[i].changeMap(EVENT_FIELD);
                    event.getMap(EVENT_FIELD).prepareStartBingoEvent(JSON.stringify(info));
                    event.setVariable("Closed", true);
                }
            } else {
                event.getMap(WAIT_FIELD).blowWeather(1, "人数不足" + minSize + ",活动取消。");
                event.destroyEvent();
            }
            break;
        }
        case "EndBingo": {
            let players = event.getVariable("Players");
            for (let i = 0; i < players.length; i++) {
                players[i].changeMap(OUT_FIELD);
            }
            event.destroyEvent();
            break;
        }
    }
}

function playerChangedMap(player, destination) {
    switch (destination.getId()) {
        case WAIT_FIELD:
            player.showTimer((endTime - new Date().getTime()) / 1000);
            break;
        case EVENT_FIELD:
            break;
        default:
            removePlayer(player.getId());
            break;

    }
}

function removePlayer(playerId) {
    let players = event.getVariable("Players");
    for (let i in players) {
        if (players[i].getId() == playerId) {
            players[i].setEvent(null);
            players[i].closeTimer();
            delete players[i];
            break;
        }
    }

}

function deinit() {
    let players = event.getVariable("Players");
    for (let i = 0; i < players.length; i++) {
        players[i].closeTimer();
        players[i].setEvent(null);
    }
}
