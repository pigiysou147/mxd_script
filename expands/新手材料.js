var tt = "#fEffect/CharacterEff/1082565/0/0#"; //饼干兔子
var fenge = "#fEffect/ItemEff/1004122/effect/default/8#";
// 每个阶段礼包所需的充值数
var condition = new Array(100,100);
// 礼包内容
var reward = new Array(
	Array(
        // 礼包1 1000
		Array(4000361,200,"新手戒指一阶段成长材料"),
		Array(4000060,200,"新手戒指二阶段成长材料"),
		Array(4000299,300,"新手戒指三阶段成长材料"),
		Array(4310238,50,"新手戒指三阶段成长材料"),
		Array(4000182,300,"新手戒指四阶段成长材料"),
		Array(4310238,100,"新手戒指四阶段成长材料"),
		
		Array(4310014,2000,"新手戒指四阶段成长材料"),
		Array(4023026,3,"新手戒指五阶段成长材料"),
		Array(4023025,1,"新手戒指五阶段成长材料")

    ),
	Array(
        // 礼包1 2000
		
		Array(4001006,3600,"翅膀成长材料")

    )
    
);

var text;
var ljname;
var revenue;

var xiangou = new Array(1,1,1,1,1,1,1);

revenue = parseInt(getHyPay(1));
text = "\t\t\t" + tt + " #e新手满阶材料包#k#n " + tt + "\r\n\r\n";
text += "#d#e当前直冲为： #r" + revenue + " #d元\r\n";


var txt = "";


for(var i = 0; i < reward.length ; i++) {
	var price=parseInt(condition[i]);
	
	var goumai =getEventCount("材料礼包" + (i+1));
    if(goumai >= xiangou[i]) {
        txt = "[#r已购买:"+xiangou[i]+"#d]";
    } else {
		
        if( revenue >= price) {
            txt = "[#b可购买#d]";
        } else  {
            txt = "[#g金额不足#d]";
        }

    }
	
    
    text += "#d#L" + i + "#" + tt + txt + " 新手满阶材料包"+(i+1)+" #r  " + price + "#l\r\n\r\n\r\n";
	var cc=2;
	if(reward[i].length<2){
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
	
    
}
text += "#k";
let selection = npc.askMenu(text);

var need=parseInt(condition[selection]);

text = "\t\t\t#e#r- 新手满阶材料包" + need + "元福利 -#k#n\r\n\r\n";
for(var i = 0; i < reward[selection].length; i++) {
    text += "\t\t#i" + reward[selection][i][0] + "# [" + reward[selection][i][1] + "个]";
    if(reward[selection][i].length > 2) {
        text += "[#r" + reward[selection][i][2] + "#k]\r\n";
    } else {
        text += "\r\n";
    }
}
let sel = npc.askYesNo(text);


if(sel == 1) {
	if(getEventCount("材料礼包" + (selection+1)) >=xiangou[selection]) {
		npc.say("#e#r\r\n\r\n\t\t这个礼包您已经购买到最大值了");
	} else if(revenue < need) {
		npc.say("直冲点不够！");
	} else if(player.getFreeSlots(3) < reward[selection].length ) {
		npc.say("每个栏位至少要保持"+reward[selection].length+"个空位以上才能领取哦~");
	} else {

		for(var i = 0; i < reward[selection].length; i++) {
			player.gainItem(reward[selection][i][0], reward[selection][i][1]);
		}
		setEventCount("材料礼包" + (selection+1), 0, 1);
		addHyPay(parseInt(condition[selection]));
		npc.broadcastWeatherEffectNotice(2,"恭喜玩家"+player.getName()+"购买了"+parseInt(condition[selection])+"  新手满阶材料包，掌声欢呼声！！！",10000);
		npc.broadcastPlayerNotice(1,"恭喜玩家"+player.getName()+"购买了"+parseInt(condition[selection])+"  新手满阶材料包，掌声欢呼声！！！");
		npc.broadcastPlayerNotice(2,"恭喜玩家"+player.getName()+"购买了"+parseInt(condition[selection])+"  新手满阶材料包，掌声欢呼声！！！");
		npc.broadcastPlayerNotice(3,"恭喜玩家"+player.getName()+"购买了"+parseInt(condition[selection])+"  新手满阶材料包，掌声欢呼声！！！");

		npc.say("领取成功");
	}
}



function addHyPay(price) {
    var sql = "update hypay set cash=cash-? where accountId=?";
    var result = player.customSqlUpdate(sql, price, player.getAccountId());
    player.gainItem(4009398,price);

}
function getHyPay() {

    var sql = "SELECT * from hypay where accountId=?  ";

    var result = player.customSqlResult(sql, player.getAccountId());

    if(result.size() > 0) {
        if(result.get(0) != null) {
			if(result.get(0).get("cash")==null){
				 return 0;
			}else{
				 return result.get(0).get("cash");
			}
           
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