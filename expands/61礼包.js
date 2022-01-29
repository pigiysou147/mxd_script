 var tt = "#fEffect/CharacterEff/1082565/0/0#"; //饼干兔子
var fenge = "#fEffect/ItemEff/1004122/effect/default/8#";
// 每个阶段礼包所需的充值数
var condition = new Array(285, 571,857);
// 礼包内容
var reward = new Array(
    Array(
        // 礼包1 100元
        Array(2431041, 1),//赌狗
        Array(2614078, 5),//500万突破
        Array(4031997, 100),//蘑菇金币
        Array(4023026, 2),//紫火
        Array(4033298, 2)

    ),
    Array(
        // 礼包2 200元
        Array(2431041, 1),//赌狗
        Array(2614078, 11),//500万突破
        Array(4031997, 250),//蘑菇金币
        Array(4023025, 1),//金火
        Array(4023026, 3),//紫火
        Array(4033298, 3)

    ),
    Array(
        // 礼包3 300元
        Array(2431041, 1),//赌狗
        Array(2614078, 17),//500万突破
        Array(4023026, 5),//紫火
        Array(4023025, 2),//金火
        Array(4031997, 500),//蘑菇金币
        Array(4033298, 5)

    )
);

var text;
var ljname;
var revenue;

var xiangou = new Array(3,3,3);

revenue = parseInt(getHyPay(1));
text = "\t\t\t   " + tt + " #e六一礼包中心#k#n " + tt + "\r\n\r\n";
text += "#d#e当前可用于购买礼包的金额为： #r" + revenue + " #d元\r\n";
//text+=fenge+fenge+fenge+fenge+fenge+fenge+fenge+fenge+fenge+fenge+fenge+fenge+fenge+fenge+fenge+fenge+fenge+fenge+"\r\n"
var txt = "";
var index = 3;

for(var i = 0; i < condition.length ; i++) {
    if(getEventCount("61libao" + (i+1)) >= xiangou[i]) {
        txt = "[#r已购买最大值#d]";
    } else {
        if( revenue >= parseInt(condition[i]*0.35+1)) {
            txt = "[#b可购买#d]";
        } else  {
            txt = "[#g充值金额不足#d]";
        }

    }
    text += "#d#L" + i + "#" + tt + txt + " 61礼包"+(i+1)+" #r\t\t\t" + parseInt(condition[i]*0.35+1) + "#l\r\n\r\n\r\n";

    for(var j = 0; j < 4; j++) {

        text += "#v" + reward[i][j][0] + "# X " + reward[i][j][1];
        if(reward[i][j][2] != null) {
            text += "(" + reward[i][j][2] + ")";
        }
    }
    text += "\r\n";

    var countList=getcountList();
    var count =0;
    if(countList.size()>0){
        count=countList.get(i).get("total")
    }
    text+="#b本周全服累计售出数量为:#k#r"+count+"#k\r\n";
    text += fenge + fenge + fenge + fenge + fenge + fenge + fenge + fenge + fenge + fenge + fenge + fenge + fenge + fenge + fenge + fenge + fenge + fenge + "\r\n"
}
text += "#k";
let selection = npc.askMenu(text);
text = "\t\t\t#e#r- 61礼包" + parseInt(condition[selection]*0.35+1) + "元福利 -#k#n\r\n\r\n";
for(var i = 0; i < reward[selection].length; i++) {
    text += "\t\t#i" + reward[selection][i][0] + "# #z" + reward[selection][i][0] + "#[" + reward[selection][i][1] + "个]";
    if(reward[selection][i].length > 2) {
        text += "[#r" + reward[selection][i][2] + "#k]\r\n";
    } else {
        text += "\r\n";
    }
}
let sel = npc.askYesNo(text);
var cal = java.util.Calendar.getInstance();
var week =cal.get(java.util.Calendar.DAY_OF_WEEK) - 1;
if(week==0){
    week=7;
}
if(1==1 ){
    if(sel == 1) {
        if(getEventCount("61libao" + (selection+1)) >=xiangou[selection]) {
            npc.say("#e#r\r\n\r\n\t\t这个礼包您已经购买到最大值了");
        } else if(revenue < parseInt(condition[selection]*0.35+1)) {
            npc.say("活动期间内充值金额未达标！"+revenue);
        } else if(player.getFreeSlots(1) < 5 || player.getFreeSlots(2) < 5 || player.getFreeSlots(3) < 5 || player.getFreeSlots(4) < 5 || player.getFreeSlots(5) < 5) {
            npc.say("每个栏位至少要保持5个空位以上才能领取哦~");
        } else {

            for(var i = 0; i < reward[selection].length; i++) {
                player.gainItem(reward[selection][i][0], reward[selection][i][1]);
            }
            setEventCount("61libao" + (selection+1), 0, 1);
            addHyPay(condition[selection]);
            //npc.broadcastWeatherEffectNotice(2,"恭喜玩家"+player.getName()+"购买了价值"+parseInt(condition[selection]*0.35+1)+" 61大礼包，掌声送给土豪！！！",10000);
            //npc.broadcastPlayerNotice(1,"恭喜玩家"+player.getName()+"购买了价值"+parseInt(condition[selection]*0.35+1)+" 61大礼包，掌声送给土豪！！！");
            //npc.broadcastPlayerNotice(2,"恭喜玩家"+player.getName()+"购买了价值"+parseInt(condition[selection]*0.35+1)+" 61大礼包，掌声送给土豪！！！");
            //snpc.broadcastPlayerNotice(3,"恭喜玩家"+player.getName()+"购买了价值"+parseInt(condition[selection]*0.35+1)+" 61大礼包，掌声送给土豪！！！");

            npc.say("领取成功");
        }
    }
}else{
    npc.say("只有周一到周五才开放购买哦"+week);
}

function getcountList(){	//														570, 1428, 2857, 5394, 8251,11108
    var sql="select event,sum(value) total from accounts_event where `event` in('61libao1','61libao2','61libao3','61libao4','61libao5','61libao6','61libao7') GROUP BY event";
    var result = player.customSqlResult(sql);
    return result;

}
function addHyPay(price) {
    var sql = "update hypay set paihangbang2=paihangbang2-? where accountId=?";
    var result = player.customSqlUpdate(sql, price, player.getAccountId());

}
function getHyPay() {

    var sql = "select paihangbang2 from hypay where accountid = ? ";

    var result = player.customSqlResult(sql, player.getAccountId());

    if(result.size() > 0) {
        if(result.get(0) != null) {
            return result.get(0).get("paihangbang2")*0.35+1;
        }
    } else {
        return 0;
    }

}

function getEventCount(eventName) {

    var sql = "select value,time from accounts_event where accounts_id = ? and event =? ";

    var result = player.customSqlResult(sql, player.getAccountId(), eventName);

    if(result.size() > 0) {
        if(result.get(0) != null) {
            return result.get(0).get("value");
        }
    } else {
        var sql = "insert into  accounts_event (accounts_id,world,event,type,value) values(?,?,?,?,?)";

        var result = player.customSqlInsert(sql, player.getAccountId(), player.getWorld(), eventName, 0, 0);
        return 0;
    }

}

function setEventCount(eventName, type, value) {

    var sql = "update accounts_event set type=?,value=value+? where accounts_id=? and event=?";

    var result = player.customSqlUpdate(sql, type, value, player.getAccountId(), eventName);

}