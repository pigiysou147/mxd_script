var status = -1;
var text;
var diff;
var sel;
var time;
var aaa = "#fEffect/CharacterEff/1112949/4/0#";

// 每个礼包所需的在线时长
var condition = new Array(20, 30, 50, 80,110);
var reward = new Array( // 礼包编号、道具id、数量
	// 20
	Array(
		
		Array( 4310011, 100),
		Array( 4031997, 5),
		Array( 4001759, 20),
		Array( 2614054, 1)
	),
	Array(
		// 30
		Array( 4310011, 100),
		Array( 4031997, 10),
		Array( 4001759, 30),
		Array( 2614054, 2)
	),

	// 50
	Array(
		Array( 4310011, 200),
		Array( 2614025, 1),
		Array( 2614025, 1)
	),
	// 80
	Array(
		Array( 4310011, 300),
		Array( 2614025, 1),
		Array( 2614025, 1)
	),
	//120
	Array(
		Array( 4310011, 300),
		Array( 4001118, 2),
		Array( 2614025, 5)
	)
);

var huoyue = getEventCount("活跃");
var curlevel = -1;
var max=120;
text = "\r\n#e#d 您今天活跃度为： #r" + huoyue + " ";
text+="\t\t\t#L999##r一键领取#l\r\n\r\n";
text+="   今日完成度#k #B"+huoyue/max*100+"[%]#"+parseInt(huoyue/max*100)+"%#b\r\n";

for(var i = 0; i < condition.length; i++) {
	
	if(getEventCount("活跃度" + i)> 0) {
		text += "#L" + i + "##v2028264##l ";
	}else{
		text += "#L" + i + "##v2028269##l ";
	}
}
text += "\r\n\r\n";

text += "#L100##r【每日航海】：参与一次航海 活跃+25"
if(getEventCount("航海首日")>0){
	text+="#k[#r已完成#k]#l\r\n";
}else{
	text+="#k[#g未达标#k]#l\r\n";
}

text += "#r#L101#【名人堂】：完成名人堂奖励领取 活跃+5"
if(getEventCount("名人堂")>0){
	text+="#k[#r已完成#k]#l\r\n";
}else{
	text+="#k[#g未达标#k]#l\r\n";
}

text += "#r#L102#【远征副本】：通关远征副本 活跃+10"
if(getEventCount("远征")>0){
	text+="#k[#r已完成#k]#l\r\n";
}else{
	text+="#k[#g未达标#k]#l\r\n";
}

text += "#r#L103#【枫之高校】：完成枫之高校 活跃+5"
if(player.getPQLog("枫之高校通关")>0){
	text+="#k[#r已完成#k]#l\r\n";
}else{
	text+="#k[#g未达标#k]#l\r\n";
}

text += "#r#L104#【每日在线】：每日在线360分钟 活跃+10"
if(getEventCount("在线礼包4")>0){
	text+="#k[#r已完成#k]#l\r\n";
}else{
	text+="#k[#g未达标#k]#l\r\n";
}



text += "#r#L105#【突破任务】：突破副本20关 活跃+20"
if(getEventCount("tpfb")>0){
	text+="#k[#r已完成#k]#l\r\n";
}else{
	text+="#k[#g未达标#k]#l\r\n";
}


text += "#r#L106#【日常跑环】：25次跑环+10";
if(getEventCount("连续跑环")>0){
	text+="#k[#r已完成#k]#l\r\n";
}else{
	text+="#k[#g未达标#k]#l\r\n";
}


text += "#r#L107#【收集任务】：收集材料突破 活跃+5"
if(getEventCount("蘑菇的委托1")>0){
	text+="#k[#r已完成#k]#l\r\n";
}else{
	text+="#k[#g未达标#k]#l\r\n";
}

text += "#r#L108#【组队副本】：一条龙完成+20";
if(getEventCount("蘑菇的委托2")>0){
	text+="#k[#r已完成#k]#l\r\n";
}else{
	text+="#k[#g未达标#k]#l\r\n";
}

text += "#r#L109#【绯红组队】：完成绯红组队  活跃+10"
if(getEventCount("绯红通关")>0){
	text+="#k[#r已完成#k]#l\r\n";
}else{
	text+="#k[#g未达标#k]#l\r\n";
}

text += "#r#L110#【每日充值】：每日充值11元 活跃+10"
if(getEventCount("每日充值礼包30")>0){
	text+="#k[#r已完成#k]#l\r\n";
}else{
	text+="#k[#g未达标#k]#l\r\n";
}

text += "#r#L111#【每日充值】：每日充值100元 活跃+20"
if(getEventCount("每日充值礼包285")>0){
	text+="#k[#r已完成#k]#l\r\n";
}else{
	text+="#k[#g未达标#k]#l\r\n";
}





let selection = npc.askMenu(text,9310561);

if(selection==999){
	//一键领取
	var totalCount=0;
	for(var i=0;i<condition.length;i++){
		if(getEventCount("活跃度" + i)==0 && huoyue>=condition[i]){
			getEventCount("活跃");
					setEventCount("活跃度" + i,1,1);
			totalCount++;
			for(var j=0;j<reward[i].length;j++){
				player.gainItem(reward[i][j][0],reward[i][j][1]);
			}
		}
	}
	if(totalCount>0){
		
		npc.say("领取成功,请注意查收奖励");
	}else{
		npc.say("你当前所能领取的奖励已经领取完毕。");
	}
	
	//
}else if(selection==100){
	if(!player.isQuestCompleted(17007)){
		player.startQuest(17003,0);
		player.changeMap(865010200);
	}else{
		player.changeMap(865000001);
	}
}else if(selection==101){
	player.changeMap(993120400);
}else if(selection==102){
	player.runScript("团队副本");
}else if(selection==103){
	player.changeMap(744000000);
}else if(selection==104){
	player.runScript("zx");
}else if(selection==105){
	player.runScript("突破副本");
}else if(selection==106){
	player.runScript("mrph");
}else if(selection==107){
	player.changeMap(102000005);
}else if(selection==108){
	player.changeMap(102000005);
}else if(selection==109){
	
	player.changeMap(610030020);
}else if(selection==110){
	player.runScript("meiri");
}else if(selection==111){
	player.runScript("meiri");
}else{
	if(getEventCount("活跃度" + selection) > 0) {
		npc.say("这个礼包您已经领取过了");

	}else{
			text = "\t\t\t\t#e#r-  " + condition[selection] + " 活跃度奖励 -#k#n\r\n\r\n";
			for(var i = 0; i < reward[selection].length; i++) {
				text += "\t\t\t#i" + reward[selection][i][0] + "# #z" + reward[selection][i][0] + "#[" + reward[selection][i][1] + "个]\r\n";
			}
			let sel = npc.askYesNo(text);
			if(sel == 1) {
				
				if(huoyue < condition[selection]) {
					npc.say("你的活跃值不足，无法领取。");

				}else{
					
					if(!player.getFreeSlots(2) > 5) {
						npc.say("包裹空间不足，请确保包裹每个栏位有至少 " + 5 + " 格空间");

					}else{
						
						for(var i = 0; i < reward[selection].length; i++) {
							player.gainItem(reward[selection][i][0], reward[selection][i][1]);
						}
						if(selection==5){
							addHyPay(10);
						}
						getEventCount("活跃");
					setEventCount("活跃度" + selection,1,1);
						npc.broadcastNoticeWithoutPrefix( "『活跃度奖励』" + " : " + "玩家 " + player.getName() + " 领取了在线 " + condition[selection] + " 活跃度奖励。");
						
						npc.say("领取成功！");
					}
					
				}
					
			}
		
	}
}

function addHyPay(price) {
	var sql = "update hypay set pay=pay+? where accountId=?";
	var result = player.customSqlUpdate(sql, price, player.getAccountId());

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

		var result = player.customSqlInsert(sql, player.getAccountId(), player.getWorld(), eventName, 0,0);
		return 0;
	}

}

function setEventCount(eventName,type,value) {

	var sql = "update accounts_event set type=?,value=value+? where accounts_id=? and event=?";

	var result = player.customSqlUpdate(sql, type,value,player.getAccountId(), eventName);


}