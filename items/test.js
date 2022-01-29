var status = -1;
var text;
var diff;
var sel;
var time;
var aaa = "#fEffect/CharacterEff/1112949/4/0#";
var ca = java.util.Calendar.getInstance();
var hour = ca.get(java.util.Calendar.HOUR_OF_DAY); //获得小时
var minute = ca.get(java.util.Calendar.MINUTE); //获得分钟
var second = ca.get(java.util.Calendar.SECOND); //获得秒

// 每个礼包所需的在线时长
var condition = new Array(20, 30, 50, 80,120);
var reward = new Array( // 礼包编号、道具id、数量
	// 30
	Array(1, 5062009, 5),

	// 60
	Array(2, 2436324, 1),
	Array(2, 5062009, 10),

	// 120
	Array(3, 2436324, 2),
	Array(3, 5062009, 10),
	Array(3, 5062500, 10),
	Array(3, 2022530, 1),

	// 360
	Array(4, 2436324, 5),
	Array(4, 5062009, 10),
	Array(4, 5062500, 10),
	Array(4, 5062024, 2),
	Array(4, 2049116, 5),
	Array(4, 2340000, 5),
	
	Array(5, 2436324, 5),
	Array(5, 5062009, 10),
	Array(5, 5062500, 10),
	Array(5, 5062024, 2),
	Array(5, 2049116, 5),
	Array(5, 2340000, 5)
);

var huoyue = getEventCount("活跃");
var curlevel = -1;
var max=100;
text = "#e#d 您今天活跃度为： #r" + huoyue + " 今日完成度#k #B"+huoyue/max*100+"[%]#\r\n#b";

for(var i = 1; i <= condition.length; i++) {
	text += "#L" + i + "#活跃" + condition[i - 1] + "";
	if(getEventCount("活跃度" + i) > 0) {
		text += "(已领取)";
		curlevel = curlevel == -1 ? i : curlevel;
	}
	text += "#l";
}
text += "#k\r\n\r\n#r";

text += "#r【组队副本】：一条龙完成+20";
if(getEventCount("蘑菇的委托2")>0){
	text+="#k[#r已完成#k]\r\n";
}else{
	text+="#k[#g未达标#k]\r\n";
}


text += "#r【日常跑环】：25次跑环+10";
if(getEventCount("连续跑环")>0){
	text+="#k[#r已完成#k]\r\n";
}else{
	text+="#k[#g未达标#k]\r\n";
}


text += "#r【绯红组队】：完成绯红组队  活跃+10"
if(getEventCount("绯红通关")>0){
	text+="#k[#r已完成#k]\r\n";
}else{
	text+="#k[#g未达标#k]\r\n";
}


text += "#r【收集任务】：BOSS战利品收集 活跃+10"
if(getEventCount("蘑菇的委托3")>0){
	text+="#k[#r已完成#k]\r\n";
}else{
	text+="#k[#g未达标#k]\r\n";
}

text += "#r【收集任务】：收集材料突破 活跃+5"
if(getEventCount("蘑菇的委托1")>0){
	text+="#k[#r已完成#k]\r\n";
}else{
	text+="#k[#g未达标#k]\r\n";
}

text += "#r【突破任务】：每日极限突破任务 活跃+10"
if(getEventCount("Day_Quest")>0){
	text+="#k[#r已完成#k]\r\n";
}else{
	text+="#k[#g未达标#k]\r\n";
}

text += "#r【每日充值】：每日充值11元 活跃+10"
if(getEventCount("每日充值礼包30")>0){
	text+="#k[#r已完成#k]\r\n";
}else{
	text+="#k[#g未达标#k]\r\n";
}
text += "#r【每日充值】：完成每日充值100元 活跃+20"
if(getEventCount("每日充值礼包285")>0){
	text+="#k[#r已完成#k]\r\n";
}else{
	text+="#k[#g未达标#k]\r\n";
}

let selection = npc.askMenu(text,9310561);


if(getEventCount("活跃度" + selection) > 0) {
	npc.say("这个礼包您已经领取过了");

}
sel = selection;
text = "\t\t\t\t#e#r-  " + condition[selection - 1] + " 活跃度奖励 -#k#n\r\n\r\n";
for(var i = 0; i < reward.length; i++) {
	if(reward[i][0] == selection) {
		text += "\t\t\t#i" + reward[i][1] + "# #z" + reward[i][1] + "#[" + reward[i][2] + "个]\r\n";
	}
}
let sel = npc.askYesNo(text);
if(sel == 1) {
	if(huoyue < condition[sel - 1]) {
		npc.say("你的活跃值不足，无法领取。");

	}
	var rewardlist = new Array();
	for(var i = 0; i < reward.length; i++) {
		if(reward[i][0] == sel) {
			if(reward[i][3] == null || reward[i][3] == '')
				reward[i][3] = 0;
			rewardlist.push(new Array(reward[i][1], reward[i][2], reward[i][3]));
		}
	}
	if(!player.getFreeSlots(1) > rewardlist.length) {
		npc.say("包裹空间不足，请确保包裹每个栏位有至少 " + rewardlist.length + " 格空间");

	}
	for(var i = 0; i < rewardlist.length; i++) {
		
			player.gainItem(rewardlist[i][0], rewardlist[i][1]);
		
	}
	getEventCount("活跃");
					setEventCount("活跃度" + sel,1,1);
	npc.broadcastNoticeWithoutPrefix(1, "『活跃度奖励』" + " : " + "玩家 " + player.getName() + " 领取了在线 " + condition[sel - 1] + " 活跃度奖励。");
	
	npc.say("领取成功！");
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