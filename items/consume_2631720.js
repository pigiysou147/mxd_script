var status = 0;
var typed = 0;
var vipLevel = new Array( 	
100,
500, 
1000, 
2000, 
3000, 
5000, 
8000, 
10000, 
15000,
20000,
30000,
40000,
50000,
90000,
130000,
190000,
250000,
310000,
390000,
450000

);

var leiji =getHyPay();

var myLevel=0;
//识别会员等级操作
for(var i=0;i<vipLevel.length;i++){
	if(leiji>=vipLevel[i]){
		myLevel++;
	}else{
		break;
	}
}


function getLevel(number){
	var level=0;
	for(var i=0;i<vipLevel.length;i++){
		if(number>=vipLevel[i]){
			level++;
		}else{
			break;
		}
	}
	if(level>10 && level <20){
		return "#v3991021##v3990000##v"+(3990000+level-11)+"#";
	}else if(level ==10){
		return "#v3991021##v3990000##v3990009#";
	}else if(level ==20){
		return "#v3991021##v3990001##v3990009#";
	}else{
		return "#v3991021##v"+(3990000+level-1)+"#";
	}
}

var list = Array(
	Array(200, 100000),
	Array(500, 200000),
	Array(1000, 300000),
	Array(2000, 500000),
	Array(3000, 800000),
	Array(5000, 1000000),
	Array(8000, 1200000),
	Array(10000, 1500000),
	Array(12000, 1800000),
	Array(15000, 2000000),
	Array(18000, 2200000),
	Array(20000, 2300000),
	Array(25000, 2500000),
	Array(30000, 3000000),
	Array(35000, 5000000)

);
var eff4 = "#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#";
var bbb = "#fUI/UIWindow2.img/Quest/quest_info/summary_icon/summary#";
var xxx = "#fUI/UIWindow2.img/Quest/quest_info/summary_icon/startcondition#";
var sql = "select leiji from hypay where accname =?";

var revenue =  parseInt(getHyPay(2)*1);
var selStr = "";
selStr += "#L0#                #r一键领取所有突破#k\r\n\r\n";
for(var i = 1; i <= list.length; i++) {
	selStr += "#L" + i + "#累计充值#r" + list[i - 1][0] + "#k免费领取突破\r\n";
}
let selection = npc.askMenuS(selStr);

var item = player.getInventorySlot(-1, -11);
if(item == null) {
	npc.say("#b突破失败.\r\n系统为检测到角色身上装备武器.");

} else {
	if(selection == 0) {
		//根据等级判断倍数：
		var beishu=1;
		if(myLevel==13 ){
			//V13
			beishu=2;
		}else if(myLevel==14){
			//V14
			beishu=3;
		}else if(myLevel==15){
			//V15
			beishu=4;
		}else if(myLevel==16){
			//V16
			beishu=5;
		}else if(myLevel==17){
			//V17
			beishu=6;
		}else if(myLevel==18){
			//V18
			beishu=7;
		}else if(myLevel==19){
			//V19
			beishu=8;
		}else if(myLevel==20){
			//V20
			beishu=10;
		}
		var str = "";
		for(var i = 0; i < list.length; i++) {
			var num = list[i][0];
			var tupo = list[i][1];
			if(getEventCount(num + "累计突破") < 1) {
				if(revenue >= num) {

					setEventCount(num + "累计突破",1,1);
					
					item.setLimitBreak(item.getLimitBreak() + tupo*beishu);
					player.updateItem(-11, item);
					str += num + "  ";
					npc.broadcastNotice("[累计充值免费领取] 恭喜玩家 " + player.getName() + " 成功累计充值" + num + "武器伤害" + tupo*beishu + "");

				}

			}
		}
		npc.say("本次领取了" + str + "的累计突破");
	} else {
		var num = list[selection - 1][0];
		var tupo = list[selection - 1][1];
		if(getEventCount(num + "累计突破") < 1) {
			if(revenue >= num) {

				setEventCount(num + "累计突破",1,1);
				item.setLimitBreak(item.getLimitBreak() + tupo);
				player.updateItem(-11, item);
				npc.broadcastNotice("[累计充值免费领取] 恭喜玩家 " + player.getName() + " 成功累计充值" + num + "武器伤害" + tupo + "");
				npc.say("#b伤害上限突破成功.\r\n\r\n本次追加伤害为：#r" + tupo + "#b.");

			} else {
				npc.say("突破失败.\r\n需要充值累计达到" + num + "\r\n您现在拥有：充值累计:#r " + revenue + "#k ");

			}
		} else {
			npc.say("#b突破失败.#k\r\n每日只能使用#r1#k次\r\n\r\n该帐号今日已使用#r" + getEventCount(num + "累计突破") + "#k次\r\n你目前累计充值#r " + revenue + "#k");

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