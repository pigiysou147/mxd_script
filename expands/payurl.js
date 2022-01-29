
var lq2 ="#fUI/UIWindow2.img/WorldMap/HyperTeleport/BtCharge/pressed/0#"
var lq3 ="#fUI/UIWindow2.img/actionAchievement/achievement/win1/bt/ani/0#"
var vvv4 = "#fEffect/CharacterEff/1112926/0/0#"; //红星
var z1 = "#fEffect/CharacterEff/1112926/0/0#"; //红星

//if(1==1){
var txt ="\r\n\t\t\t"+lq3+"#r我要充值#k"+lq3+"\r\n\r\n";
txt+="\r\n #e#r #L0#"+lq2+"#l\t\t #L1#直充点兑换充值#l\r\n\r\n";
txt+="#r#L2#超值返利卡#l\t\t#L3#邀请返利#l\r\n\r\n";
txt+="#r#L4#周周乐#l";
let selection =npc.askMenuS(txt);
if(selection==0){
	var name=npc.askText("#r#e请输入要充值的账号\r\n(默认为自己的账号，也可以填入其他人的): ",player.getAccountName(),1,20);
	var number =npc.askNumber("请输入要充值的金额(请输入整数): ",1,1,10000);
	var type=npc.askMenu("#r#e请选择支付的类型:\r\n\r\n #r#L2#支付宝支付#l\t #L1#微信支付#l#b");

	player.openWebUI("http://103.216.152.129:8800/codePay?amount="+number+"&type="+type+"&pay_id="+name);
	
	 //var name=  player.customSqlResult("select name from accounts where id ="+player.getAccountId()).get(0).get("name"); // 查詢數據
       
	//npc.say("充值渠道目前正在调整当中。。。如有充值需求请联系群主");
	//player.openWebUI(271,"UI/UIWindowCN.img/CN_Cash_Web/backgrnd","http://103.216.152.129:8800/index?pay_id="+name);
	//player.openURL("http://45.113.202.159:8800/index?pay_id="+name);
}else if(selection==2){
	player.runScript("fanli");
}else if(selection==3){
	player.runScript("充值返利");
}else if(selection==4){
	player.runScript("周周乐");
}else if(selection==1){
	var cash = getCash();
	txt="\r\n 你当前拥有直充点为：#r"+cash+"#k.\r\n";
	txt+="#b请输入要兑换的直充点数。#k\r\n";
	txt+="#r#e请注意：50RMB=50直充点=50现金点(可用于购买个人礼包以及周末礼包)+143余额累计以及143每日充值";
	//txt+="\r\n#e#r春节期间多赠送50%哦  也就是冲100直冲点可以兑换300的余额,300的累计,150的现金点哦~\r\n";
	//txt+="\r\n#e#r请注意,每个账号每天的额外赠送的额度仅限1000直冲点(即最高赠送1430余额,1430累计,510现金点),超过部分不予赠送";
	//txt+="#e#r#b双12期间，兑换直充大于100的，可以获得额外10%的直充返还哦。例如：兑换100直充，可以返还10直充点~";
	let number =npc.askNumber(txt,1,1,cash);
	
	var result =number*2.86;
	
	txt="#b是否兑换"+number+"直充点？\r\n#r#e";
	//txt+="仅在兑换大于等于100的直冲点的时候,赠送才会生效哦#k\r\n";
	
	var restCount=1000-getEventCount("当日赠送");
	
	var song=0;
	if(number>=100){
		//song=number*1.43;
		
	}
		
	if(restCount<=0){
		song=0;
		restCount=0
	}
	result =song+result;
	//txt+="剩余可赠送的额度为:"+restCount*1.43;
	//txt+="\r\n#r你可以获得 :\r\n"+result+"余额 赠送部分:#r"+song+"\r\n"+result+"累计 赠送部分:#r"+song+"\r\n"+(number+song/2.86)+"现金点 赠送部分:#r"+song/2+"#k";
	txt+="\r\n#r你可以获得 :\r\n"+result+"余额 \r\n"+result+"累计 \r\n"+(number+song/2.86)+"现金点#k";
	let sel = npc.askYesNo(txt);
	if(sel==1){
		if(cash<number){
			npc.say("直充点不足");
		}else{
			if(number>=100){
				setEventCount("当日赠送",1,number);
				
			}
			//返利10%直充操作
			if(number>=100){
				
				//fanli(parseInt(number/10));
			}
			addHyPay(number,result);
			npc.say("兑换成功。");
		}
	}
}
function fanli(number) {
	var sql = "update hypay set cash=cash+? where accountId=?";
	var result = player.customSqlUpdate(sql, number, player.getAccountId());

	var remark="双11返利";
	var cashSql="insert into cash_log  values(0,"+player.getAccountId()+",'"+player.getName()+"',"+number*1+",'"+remark+"',now())";
	player.customSqlInsert(cashSql);
}

function getCash() {
	var sql = "select cash from hypay where accountid = ? ";
	var result = player.customSqlResult(sql, player.getAccountId());
	if(result.size() > 0) {
		if(result.get(0) != null) {
			return result.get(0).get("cash");
		}
	} else {
		return 0;
	}

}
function addHyPay(number,result) {
	var sql = "update hypay set pay=pay+?,leiji=leiji+?,paihangbang=paihangbang+?,paihangbang2=paihangbang2+?,today=today+?,cash=cash-? where accountId=?";
	var result = player.customSqlUpdate(sql, result,result,result,result,result,number, player.getAccountId());
	
	player.gainItem(4009398,number);
	var remark="兑换余额累计";
	var cashSql="insert into cash_log  values(0,"+player.getAccountId()+",'"+player.getName()+"',"+number*-1+",'"+remark+"',now())";
	player.customSqlInsert(cashSql);
	
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