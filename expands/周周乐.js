var tt = "#fEffect/CharacterEff/1082565/0/0#"; //饼干兔子
// 每个阶段礼包所需的充值数
// 礼包内容
var condition = new Array(10, 25, 50);
// 礼包内容
var reward = new Array(
	// 首充10元
	Array(
		    //10元的  每日的 
		Array(-2, 30),//余额
		Array(2439217, 1,"[重置困难暴君]"),
		Array(2614025, 1),//百万突破
		Array(4001715, 1)
		
	),
	Array(
		//25元的  每日的 
		Array(-2, 45),//余额
		Array(2439218, 1,"[重置困难路西德]"),
		Array(2614025, 2),//百万突破
		Array(4033911, 2),//瓶子
		Array(4033298, 1),//信任
		Array(4023026, 1),
		Array(4001715, 2)
		
	),
	Array(
		//50元的  每日的 
		Array(-2, 75),//余额
		Array(2439219, 1,"[重置困难威尔]"),
		Array(2614025, 3),//百万突破
		Array(4033911, 3),//瓶子
		Array(4033298, 2),//信任
		Array(4023026, 2),
		Array(4001715, 3)
		

	)
);
var text;
var ljname;
var revenue;
var date =new Date();
var 月 = date.getMonth() + 1;
var 日 = date.getDate();
var 时 = date.getHours();
var 分 = date.getMinutes();
var 秒 = date.getSeconds();
var today="2021-"+月+"-"+日+" 00:00:00";

var now="2021-"+月+"-"+日+" "+时+":"+分+":"+秒;

var tomorrow="2021-"+月+"-"+(日+1)+" 00:00:00";
var yesterday="2021-"+月+"-"+(日-1)+" 00:00:00";

var cash=getCash();
text = "\t\t\t" + tt + " #e七天充值(从购买算起7天后更新)" + tt +  "\r\n";
text +=" #b每日消耗50点直充点即可获得以下所有奖励#k \r\n";
text +=" #r当前直充点为:"+cash+"#k \r\n";

var todayRecord =0;
var todayStatus=-1;
getTodayCashRecord();

text += "#d#e今日完成数量： #r" + todayRecord + " #d元\r\n\r\n";
text +="#L0##e#r消耗直充，领取今日奖励 #k \r\n";
text +="#L1##e#r马上领取今日奖励 #k \r\n";
if(todayRecord==0){
	text +="#L2##e#r马上消耗300直充，可以领取自购买日当天起7日内奖励\r\n（买6送1并且额外赠送地狱威尔重置道具X1） #k \r\n";
}
let choos=npc.askMenu(text);

var coast=0;
if(choos==0){
	let coast = npc.askNumber("#r#e请输入今天要消耗的直冲点数.(最大值为50)",1,1,50-todayRecord);
	
	let sel=npc.askYesNo("是否要花费"+coast+"点直充购买当天的奖励呢？");
	if(sel==1){
		
		//充值当天操作
		if(cash<coast){
			npc.say("需要"+coast+"直冲");
		}else{
			//扣直冲
			coastCash(coast);
			//添加纪录
			addTodayRecord(coast);
			npc.say("购买成功，请再次点击领取当日奖励");
		}
	}
	
}else if(choos==1){
	var text="";
	text = "\t\t\t" + tt + " #e每日直冲消耗(12点更新)" + tt +  "\r\n #b每日消耗直冲50即可获得以下所有奖励#k \r\n";
	
	text+=" #r以下对应档次就是10元-25元-50元奖励#k#k#n \r\n";
	text += "#d#e今日充值金额数量： #r" + todayRecord + " #d元\r\n";

	var txt = "";
	for(var i = 0; i <= condition.length - 1; i++) {
		if(getEventCount("每日直冲" + condition[i]) == 1) {
			txt = "[#r已领取#d]";
		} else {
			if(getEventCount("每日直冲" + condition[i]) == 0 && todayRecord>=condition[i]){
				txt = "[#b待领取#d]";
			}else if(getEventCount("每日直冲" + condition[i]) == 0 && todayRecord<condition[i]){
				txt = "[#g未达标#d]";
			}
			
		}
		
		text += "#d#L" + i + "#" + tt + txt + " 每日直冲消耗  #r" + condition[i] + "#k  福利 #l\r\n";
		
	}
	text += "#k";
	let selection = npc.askMenu(text);
	
	text = "\t\t\t#e#r- 每日消耗直冲" + condition[selection] + "元福利 -#n\r\n\r\n";
	for(var i = 0; i < reward[selection].length; i++) {
		if(reward[selection][i][0]==-2){
			text += "\t\t\t#v4310267#累计 X " + reward[selection][i][1] ;
			text += "\r\n\t\t\t#v4310267#余额 X "+Math.round(reward[selection][i][1]);
			text += "\r\n\t\t\t#v4310267#现金点 X "+Math.round(reward[selection][i][1]*0.35);
		
		}else{
			text += "\t\t\t#i" + reward[selection][i][0] + "# #z" + reward[selection][i][0] + "#[" + reward[selection][i][1] + "个]";
		
		}
		if(reward[selection][i].length==3){
			text+=""+reward[selection][i][2];
		}
		text+="\r\n";
	}
	
	let sel = npc.askYesNo(text);
	
	if(sel==1){
	if(getEventCount("每日直冲" + condition[selection]) >0) {
		npc.say("#e#r\r\n\r\n\t\t这个礼包您已经领取过了");
	} else if(todayRecord < condition[selection]) {
		npc.say("消耗直冲未达标！");
	} else {
		setEventCount("每日直冲" + condition[selection], 1, 1);
		updateTodayStatus();
		for(var i = 0; i < reward[selection].length; i++) {
			if(reward[selection][i][0]==-2){
				addHyPay(reward[selection][i][1]);
			}else{
				player.gainItem(reward[selection][i][0], reward[selection][i][1]);
			}
			
		}
			npc.say("今日奖励领取完成");
		}
	}
	
	
	
	
}else if(choos==2){
	coast=300;
	let sel=npc.askYesNo("是否要花费"+coast+"点直充购买7天的奖励呢？");
	if(sel==1){
		//充值当天操作
		if(cash<coast){
			npc.say("需要"+coast+"直冲");
		}else{
			//扣直冲
			coastCash(coast);
			//添加纪录
			addSevendayRecords();
			
			player.gainItem(2439216,1);
			npc.say("购买成功，请再次点击领取当日奖励 #v2439216#已经赠送给你");
		}
	}
}


function updateTodayStatus(){
	player.customSqlUpdate("update baby_qitian set status=status+1 where create_time >=? and create_time <=? and account_id=?",today,tomorrow,player.getAccountId());
}

function addTodayRecord(coast){
	var sql = "select * from baby_qitian where account_id = ? and create_time>=? and create_time<=?";

	var result = player.customSqlResult(sql, player.getAccountId(),today,tomorrow);

	if(result.size() > 0) {
		player.customSqlUpdate("update baby_qitian set cash=cash+? where account_id = ? and create_time>=? and create_time<=?",coast,player.getAccountId(),today,tomorrow);
	} else {
		player.customSqlInsert("insert into baby_qitian values (0,?,?,?,?,?,0)",player.getAccountId(),player.getId(),player.getName(),now,coast);
	}
	

}

function addSevendayRecords(){
	//1
	now="2021-"+月+"-"+日+" "+时+":"+分+":"+秒;
	player.customSqlInsert("insert into baby_qitian values (0,?,?,?,?,?,0)",player.getAccountId(),player.getId(),player.getName(),now,50);
	//2
	now="2021-"+月+"-"+(日+1)+" "+时+":"+分+":"+秒;
	player.customSqlInsert("insert into baby_qitian values (0,?,?,?,?,?,0)",player.getAccountId(),player.getId(),player.getName(),now,50);
	//3
	now="2021-"+月+"-"+(日+2)+" "+时+":"+分+":"+秒;
	player.customSqlInsert("insert into baby_qitian values (0,?,?,?,?,?,0)",player.getAccountId(),player.getId(),player.getName(),now,50);
	//4
	now="2021-"+月+"-"+(日+3)+" "+时+":"+分+":"+秒;
	player.customSqlInsert("insert into baby_qitian values (0,?,?,?,?,?,0)",player.getAccountId(),player.getId(),player.getName(),now,50);
	//5
	now="2021-"+月+"-"+(日+4)+" "+时+":"+分+":"+秒;
	player.customSqlInsert("insert into baby_qitian values (0,?,?,?,?,?,0)",player.getAccountId(),player.getId(),player.getName(),now,50);
	//6
	now="2021-"+月+"-"+(日+5)+" "+时+":"+分+":"+秒;
	player.customSqlInsert("insert into baby_qitian values (0,?,?,?,?,?,0)",player.getAccountId(),player.getId(),player.getName(),now,50);
	//7
	now="2021-"+月+"-"+(日+6)+" "+时+":"+分+":"+秒;
	player.customSqlInsert("insert into baby_qitian values (0,?,?,?,?,?,0)",player.getAccountId(),player.getId(),player.getName(),now,50);
	
}






function getCash() {
	var sql = "select cash from hypay where accountid = ? ";
	var result = player.customSqlResult(sql, player.getAccountId());
	if(result.size() > 0) {
		if(result.get(0) != null) {
			return parseFloat(result.get(0).get("cash"));
		}
	} else {
		return 0;
	}

}

function coastCash(price) {
	var sql = "update hypay set cash=cash-? where accountId=?";
	var result = player.customSqlUpdate(sql, price,player.getAccountId());
	player.gainItem(4009398,price);
	var remark="购买周周乐";
	var cashSql="insert into cash_log  values(0,"+player.getAccountId()+",'"+player.getName()+"',"+price*-1+",'"+remark+"',now())";
	player.customSqlInsert(cashSql);
}




function addHyPay(price) {
	var sql = "update hypay set pay=pay+?,leiji=leiji+?,paihangbang2=paihangbang2+? where accountId=?";
	var result = player.customSqlUpdate(sql, price,price,price,player.getAccountId());

}

function getTodayCashRecord() {

	var sql = "select * from baby_qitian where account_id = ? and create_time>=? and create_time<=?";

	var result = player.customSqlResult(sql, player.getAccountId(),today,tomorrow);

	if(result.size() > 0) {
		if(result.get(0) != null) {
			todayRecord=result.get(0).get("cash");
			todayStatus=result.get(0).get("status");
		}
	}

}

function getTodayStatus(){

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