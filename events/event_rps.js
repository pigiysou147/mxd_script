// Created by Jackson
// Event
// 剪刀石头布

let EXIT_MAP = 993030100;
let gameFiled;
let readyMFiled;
let endEnter;

function init(attachment) {
        event.setVariable("Open", "0");//初始化活动开关
        readyMFiled = event.getMap(993030000);//初始化准备地图
        gameFiled = event.getMap(993030200);//初始化活动地图
}

function timerExpired(key) {
        switch (key) {
                case "Event_Open":
                        event.getVariables().clear();
                        event.setVariable("Open", "1");//活动开启
                        event.startTimer("Close", 90 * 1000);//90秒等待时间
                        break;
                case "Close":
                        if (readyMFiled.getPlayerCount() > 0) {//如果玩家数量大于几人
                                event.startTimer("Warp_To_Game_Field", 3 * 1000);// 3秒后执行传送所有玩家到活动开始地图
                        } else {//否则关闭活动
                                event.setVariable("Open", "0");//活动关闭
                        }
                        break;
                case "Warp_To_Game_Field":
                        gameFiled.endFieldEvent();//停止活动地图的计时器，防止发生错误
                        readyMFiled.transferPlayers(gameFiled.getId());//传送准备地图的所有玩家到活动地图
                        event.startTimer("Start_Game", 20 * 1000);//计时器启动：10秒后开启 地图活动线程
                        break;
                case "Start_Game":
                        gameFiled.startFieldEvent();//启动地图活动线程
                        break;
                case "Game_Over":
                        event.setVariable("Open", "0");//活动关闭
                        gameFiled.transferPlayers(EXIT_MAP);//传送所有玩家到退出
                        break;
                default:
                        break;
        }
}
