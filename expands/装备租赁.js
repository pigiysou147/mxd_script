var tt = "#fEffect/CharacterEff/1082565/0/0#"; //饼干兔子
var fenge = "#fEffect/ItemEff/1004122/effect/default/8#";
// 每个阶段礼包所需的充值数
var condition = new Array(500,500);
// 礼包内容
var reward = new Array(
	Array(
        // 礼包1 1000
		
		Array(-1,1430,""),
		Array(2431589,1,"777攻击 388全属性 20E突破自选埃苏武器")

    ),
	Array(
        // 礼包1 2000
		Array(-1,1430,""),
		Array(2631999,3,"全属性188 攻击力298ffn防具三件套\r\n"),
		Array(2631998,3,"全属性128 攻击力128高级贝勒德套\r\n"),
		Array(2631997,3,"全属性138 攻击力68小暴君3件套\r\n")

    )
    
);

var text;
var ljname;
var revenue;

var xiangou = new Array(1,1,1,1,1,1,1);

revenue = parseInt(getHyPay(1));
text = "\t\t\t" + tt + " #e新手租赁装备购买#k#n " + tt + "\r\n\r\n";
text += "#d#e当前直冲为： #r" + revenue + " #d元\r\n";
text += "#d#e购买租赁礼包可以获得对应的余额累计以及现金点\r\n";


var txt = "";


for(var i = 0; i < reward.length ; i++) {
	var price=parseInt(condition[i]);
	
	var goumai =getEventCount("租赁礼包" + (i+1));
    if(goumai >= xiangou[i]) {
        txt = "[#r已购买:"+xiangou[i]+"#d]";
    } else {
		
        if( revenue >= price) {
            txt = "[#b可购买#d]";
        } else  {
            txt = "[#g金额不足#d]";
        }

    }
	
    
    text += "#d#L" + i + "#" + tt + txt + " 新手装备租赁"+(i+1)+" #r  " + price + "#l\r\n\r\n\r\n";
	var cc=4;
	if(reward[i].length<4){
		cc=reward[i].length;
	}
    for(var j = 0; j < cc; j++) {
			if(reward[i][j][0]!=-1){
				text += "#v" + reward[i][j][0] + "# X " + reward[i][j][1];
				if(reward[i][j][2] != null) {
					text += "" + reward[i][j][2] + "\r\n";
				}
			}else{
				text += "#v4310267#余额 "+reward[i][j][1]+" +累计"+reward[i][j][1]+"     \r\n\r\n";
			}
			
	}
    
    text += "\r\n";

    var count =0;
	
    
}
text += "#k";
let selection = npc.askMenu(text);

var need=parseInt(condition[selection]);

text = "\t\t\t#e#r- 新手装备租赁" + need + "元福利 -#k#n\r\n\r\n";
for(var i = 0; i < reward[selection].length; i++) {
	if(reward[selection][i][0]==-1){
		text += " #r#e  礼包内含以下物品:#v4310267#余额 "+reward[selection][i][1]+"+累计"+reward[selection][i][1]+"    \r\n\r\n";
	}else{
		 text += "\t#i" + reward[selection][i][0] + "# [" + reward[selection][i][1] + "个]";
		if(reward[selection][i].length > 2) {
			text += "#r" + reward[selection][i][2] + "#k\r\n";
		} else {
			text += "\r\n";
		}
	}
	
   
}
let sel = npc.askYesNo(text);


if(sel == 1) {
	if(getEventCount("租赁礼包" + (selection+1)) >=xiangou[selection]) {
		npc.say("#e#r\r\n\r\n\t\t这个礼包您已经购买到最大值了");
	} else if(revenue < need) {
		npc.say("直冲点不够！");
	} else if(player.getFreeSlots(3) < reward[selection].length ) {
		npc.say("每个栏位至少要保持"+reward[selection].length+"个空位以上才能领取哦~");
	} else {

		for(var i = 0; i < reward[selection].length; i++) {
			if(reward[selection][i][0]!=-1)
			player.gainItem(reward[selection][i][0], reward[selection][i][1]);
		}
		setEventCount("租赁礼包" + (selection+1), 0, 1);
		addHyPay(parseInt(condition[selection]));
		npc.broadcastWeatherEffectNotice(2,"恭喜玩家"+player.getName()+"购买了"+parseInt(condition[selection])+"  新手装备租赁，掌声欢呼声！！！",10000);
		npc.broadcastPlayerNotice(1,"恭喜玩家"+player.getName()+"购买了"+parseInt(condition[selection])+"  新手装备租赁，掌声欢呼声！！！");
		npc.broadcastPlayerNotice(2,"恭喜玩家"+player.getName()+"购买了"+parseInt(condition[selection])+"  新手装备租赁，掌声欢呼声！！！");
		npc.broadcastPlayerNotice(3,"恭喜玩家"+player.getName()+"购买了"+parseInt(condition[selection])+"  新手装备租赁，掌声欢呼声！！！");

		npc.say("领取成功");
	}
}



function addHyPay(price) {
    var sql = "update hypay set cash=cash-?,pay=pay+?,leiji=leiji+?,today=today+? where accountId=?";
    var result = player.customSqlUpdate(sql, price,price*2.86,price*2.86,price*2.86, player.getAccountId());
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