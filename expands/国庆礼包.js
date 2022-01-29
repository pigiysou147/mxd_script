var tt = "#fEffect/CharacterEff/1082565/0/0#"; //饼干兔子
var fenge = "#fEffect/ItemEff/1004122/effect/default/8#";
// 每个阶段礼包所需的充值数
var condition = new Array(100,400, 1000, 2000, 4000, 6000,13000,30000);
// 礼包内容
var reward = new Array(
	Array(
        // 礼包1 50元
        Array(2439919, 1)

    ),
	Array(
        // 礼包1 200元
        Array(2431041, 1),//赌狗
        Array(2614079, 8),//1000万突破
        Array(4031997, 300),//蘑菇金币
        Array(4023025, 1),//金火
        Array(4023026, 2),//紫火
        Array(4033298, 2)

    ),
    Array(
        // 礼包1 500元
        Array(2431041, 1),//赌狗
        Array(2614079, 18),//1000万突破
        Array(4031997, 500),//蘑菇金币
        Array(4023025, 2),//金火
        Array(4023026, 5),//紫火
		
        Array(4033911, 3),//瓶子
        Array(4033298, 10)

    ),
    Array(
        // 礼包2 1000元
        Array(2431041, 2),//赌狗
        Array(2614079, 35),//1000万突破
        Array(4031997, 1200),//蘑菇金币
        Array(4023025, 5),//金火
        Array(4023026, 10),//紫火
        Array(4033911, 6),//瓶子
        Array(4033298, 10)

    ),
    Array(
        // 礼包3 2000元
        Array(2431041, 3),//赌狗
        Array(2614079, 70),//1000万突破
        Array(4023026, 20),//紫火
        Array(4023025, 10),//金火
        Array(4031997, 2600),//蘑菇金币
        Array(4033298, 20),
        Array(4033911, 12),//瓶子
        Array(4001332, 1)//大蜡笔

    ),
    Array(
        // 礼包4 3000元
        Array(2431041, 5),//赌狗
        Array(2614079, 100),//1000万突破
        Array(4031997, 3800),//蘑菇金币
        Array(4023025, 15),//金火
        Array(4023026, 40),//紫火
        Array(4033298, 30),
        Array(4033911, 18),//瓶子
        Array(4001332, 2)//大蜡笔
    ),
    Array(
        // 礼包5 6500
        Array(2431041, 10),//赌狗
        Array(2614079, 210),//1000万突破
        Array(4031997, 8000),//蘑菇金币
        Array(4001332, 4),//大蜡笔
        Array(4023025, 40),//金火
        Array(4023026, 85),//紫火
        Array(3992025, 120),//大星
        Array(4033911, 38),//瓶子
        Array(5064501, 120),//黑色涅槃
        Array(4033298, 70)
    ),
	Array(
        // 礼包5 15000
        Array(2431041, 20),//赌狗
        Array(2614079, 600),//1000万突破
        Array(4031997, 18000),//蘑菇金币
        Array(4001332, 8),//大蜡笔
        Array(4023026, 220),//紫火
        Array(4036457, 45),//黑火
        Array(3992025, 380),//大星
        Array(4033911, 80),//瓶子
        Array(5064501, 380),//黑色涅槃
		
        Array(4033298, 180)
    )
);

var text;
var ljname;
var revenue;

var xiangou = new Array(1,3,3,3,3,3,3,3);

revenue = parseInt(getHyPay(1));
text = "\t\t\t" + tt + " #e中秋国庆欢乐购礼包中心#k#n " + tt + "\r\n\r\n";
text += "#d#e当前可用于购买礼包的金额为： #r" + revenue + " #d元\r\n";
//text+=fenge+fenge+fenge+fenge+fenge+fenge+fenge+fenge+fenge+fenge+fenge+fenge+fenge+fenge+fenge+fenge+fenge+fenge+"\r\n"
var txt = "";
var index = 3;

var countList=getcountList();
for(var i = 0; i < condition.length ; i++) {
	var goumai =getEventCount("guoqing" + (i+1));
    if(goumai >= xiangou[i]) {
        txt = "[#r已购买最大值:"+xiangou[i]+"#d]";
    } else {
        if( revenue >= parseInt(condition[i]*0.5)) {
            txt = "[#b还可购买"+(xiangou[i]-goumai)+"个#d]";
        } else  {
            txt = "[#g充值金额不足#d]";
        }

    }
	
    
    text += "#d#L" + i + "#" + tt + txt + " 中秋国庆欢乐购礼包"+(i+1)+" #r\t" + parseInt(condition[i]*0.5) + "#l\r\n\r\n\r\n";
	var cc=4;
	if(reward[i].length<4){
		cc=reward[i].length;
	}
    for(var j = 0; j < cc; j++) {

			text += "#v" + reward[i][j][0] + "# X " + reward[i][j][1];
			if(reward[i][j][2] != null) {
				text += "(" + reward[i][j][2] + ")";
			}
		}
    
    text += "\r\n";

    var count =0;
        //count=countList.get(i).get("total")
    
    text+="#b本周全服累计售出数量为:#k#r"+count+"#k\r\n";
    text += fenge + fenge + fenge + fenge + fenge + fenge + fenge + fenge + fenge + fenge + fenge + fenge + fenge + fenge + fenge + fenge + fenge + fenge + "\r\n"
}
text += "#k";
let selection = npc.askMenu(text);
text = "\t\t\t#e#r- 中秋国庆礼包" + parseInt(condition[selection]*0.5) + "元福利 -#k#n\r\n\r\n";
for(var i = 0; i < reward[selection].length; i++) {
    text += "\t\t#i" + reward[selection][i][0] + "# #z" + reward[selection][i][0] + "#[" + reward[selection][i][1] + "个]";
    if(reward[selection][i].length > 2) {
        text += "[#r" + reward[selection][i][2] + "#k]\r\n";
    } else {
        text += "\r\n";
    }
}
let sel = npc.askYesNo(text);

if(sel == 1) {
	if(getEventCount("guoqing" + (selection+1)) >=xiangou[selection]) {
		npc.say("#e#r\r\n\r\n\t\t这个礼包您已经购买到最大值了");
	} else if(revenue < parseInt(condition[selection]*0.5)) {
		npc.say("活动期间内充值金额未达标！"+revenue);
	} else if(player.getFreeSlots(1) < 5 || player.getFreeSlots(2) < 5 || player.getFreeSlots(3) < 5 || player.getFreeSlots(4) < 5 || player.getFreeSlots(5) < 5) {
		npc.say("每个栏位至少要保持5个空位以上才能领取哦~");
	} else {

		for(var i = 0; i < reward[selection].length; i++) {
			player.gainItem(reward[selection][i][0], reward[selection][i][1]);
		}
		setEventCount("guoqing" + (selection+1), 0, 1);
		addHyPay(condition[selection]);
		npc.broadcastWeatherEffectNotice(2,"恭喜玩家"+player.getName()+"购买了价值"+parseInt(condition[selection]*0.5)+" 中秋国庆欢乐购礼包，掌声送给土豪！！！",10000);
		npc.broadcastPlayerNotice(1,"恭喜玩家"+player.getName()+"购买了价值"+parseInt(condition[selection]*0.5)+" 中秋国庆欢乐购礼包，掌声送给土豪！！！");
		npc.broadcastPlayerNotice(2,"恭喜玩家"+player.getName()+"购买了价值"+parseInt(condition[selection]*0.5)+" 中秋国庆欢乐购礼包，掌声送给土豪！！！");
		npc.broadcastPlayerNotice(3,"恭喜玩家"+player.getName()+"购买了价值"+parseInt(condition[selection]*0.5)+" 中秋国庆欢乐购礼包，掌声送给土豪！！！");

		npc.say("领取成功");
	}
}


function getcountList(){	//														570, 1428, 2857, 5394, 8251,11108
    var sql="select event,sum(value) total from accounts_event where `event` in('guoqing1','guoqing2','guoqing3','guoqing4','guoqing5','guoqing6','guoqing7','guoqing8') GROUP BY event";
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
            return result.get(0).get("paihangbang2")*0.5+1;
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