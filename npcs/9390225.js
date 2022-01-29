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
var txt="\r\n\r\n#r#e会员等级在V8以上可以进行航海加速，清理当前怪物;";
txt+="\r\n当前会员等级为:"+getLevel(leiji);
var max=145;
if(player.getPQLog("每日充值礼包")>0){
	max+=50;
}
if(myLevel>=8){
	max=148;
	
}else{
	max=8;
}

txt+="\r\n#L0#清理怪物 剩余次数 #r"+(max-getEventCount("航海清怪"))+"#k#l"
let sel = npc.askMenu(txt);
if(sel==0){
	//if(npc.askYesNo("是否要消耗1次清怪次数来清怪呢？")){
		if(max-getEventCount("航海清怪")>=0){
			setEventCount("航海清怪",1,1);
			map.clearMobs();
			npc.say("清理完毕");
		}else{
			npc.say("次数不足");
		}
		
	//}
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