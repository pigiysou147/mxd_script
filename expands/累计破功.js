var tt = "#fEffect/CharacterEff/1082565/0/0#"; //饼干兔子
var fenge="#fEffect/ItemEff/1004122/effect/default/8#";
// 每个阶段礼包所需的充值数
var condition = new Array(500, 1000, 2000, 3000, 5000, 8000, 10000, 12000, 15000, 20000, 30000, 40000,50000,60000,70000);
// 礼包内容
var reward = new Array(
//500给与的破功
1000000,

//1000给与的破功
3000000,

//2000给与的破功
5000000,

//3000给与的破功
10000000,

//5000给与的破功
15000000,

//8000给与的破功
20000000,

//10000给与的破功
20000000,

//12000给与的破功
30000000,

//15000给与的破功
30000000,

//20000给与的破功(我是最后一个 改的时候切忌 这一句最后 没有(,)逗号) 可以自己加充值礼包数量 对应格式
50000000,

//30000给与的破功(我是最后一个 改的时候切忌 这一句最后 没有(,)逗号) 可以自己加充值礼包数量 对应格式
80000000,

//40000给与的破功(我是最后一个 改的时候切忌 这一句最后 没有(,)逗号) 可以自己加充值礼包数量 对应格式
100000000,

//50000给与的破功(我是最后一个 改的时候切忌 这一句最后 没有(,)逗号) 可以自己加充值礼包数量 对应格式
150000000,

//60000给与的破功(我是最后一个 改的时候切忌 这一句最后 没有(,)逗号) 可以自己加充值礼包数量 对应格式
200000000,

//70000给与的破功(我是最后一个 改的时候切忌 这一句最后 没有(,)逗号) 可以自己加充值礼包数量 对应格式
300000000
);


var text="";
var ljname;

var revenue =  parseInt(getHyPay(2)*1);
text += "#d#e当前总充值现金点数量： #r" + revenue + " #d元\r\n";
text += "\t\t\t" + tt + " #e#r累计破功中心#k#n " + tt + "\r\n\r\n";

//text+=fenge+fenge+fenge+fenge+fenge+fenge+fenge+fenge+fenge+fenge+fenge+fenge+fenge+fenge+fenge+fenge+fenge+fenge+"\r\n"
var txt = "";

for(var i = 0; i <= condition.length-1 ; i++) {
	if(getEventCount("累计破功" + condition[i]) == 1) {
		txt = "[#r已领取#d]";
	} else {
		if(getEventCount("累计破功" + condition[i]) == 0 && revenue>=condition[i]){
			txt = "[#b待领取#d]";
		}else if(getEventCount("累计破功" + condition[i]) == 0 && revenue<condition[i]){
			txt = "[#g未达标#d]";
		}
		
	}
	text += "#d#L" + i + "#" + tt + txt +  "#累计 [#r" + condition[i ] + "#d] 送破功 [#r"+reward[i ]+"#d]#l\r\n";

	
	//text+=fenge+fenge+fenge+fenge+fenge+fenge+fenge+fenge+fenge+fenge+fenge+fenge+fenge+fenge+fenge+fenge+fenge+fenge+"\r\n"
}
text += "#k";
var item = player.getInventorySlot(-1, -11);
let selection = npc.askMenu(text);

if(item==null){

		npc.say("请装备武器");

}else{

	text = "#e累计充值" + condition[selection ] + "元 送破功 [" + reward[selection ] + "]#k\r\n#rPS:你确定要把破功增加到你现在身上这把武器上?#v"+item.getDataId()+"#(不可逆转)\r\n";
	let sel = npc.askYesNo(text);
	if(sel == 1) {
		if(getEventCount("累计破功" + condition[selection]) == 1) {
			npc.say("#e#r\r\n\r\n\t\t这个礼包您已经领取过了");
		} else if(revenue < condition[selection]) {
			npc.say("累计金额未达标！");
		} else {

			item.setLimitBreak(item.getLimitBreak() + reward[selection ]);
			player.updateItem(-11,item);
			setEventCount("累计破功" + condition[selection], 0, 1);
			npc.broadcastNotice("≡累计充值≡　　恭喜玩家 " + player.getName() + " 领取了累计充值 " + condition[selection ] + " 元的破功奖励 总计破功"+reward[selection]+"！！！");
		
			npc.say("领取成功");
		}
	}
}


function getHyPay() {

	var sql = "select leiji from hypay where accountid = ? ";

	var result = player.customSqlResult(sql, player.getAccountId());

	if(result.size() > 0) {
		if(result.get(0) != null) {
			return result.get(0).get("leiji");
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