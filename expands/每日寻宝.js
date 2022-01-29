

var text = "";
var questid = 200100;
var maxtimes = 5;
var playerid = 0;
var accepttimes = 0;
var questitemid = 0;
var questitemcs = 0;
var mapid = 0;
var qinfo = "";
var lastMapList = Array();
var maplist = Array(
        
        Array(100000200, "射手村 - 射手村公园"),
        Array(100000202, "射手村 - 宠物公园"),
        Array(100010000, "射手村 - 射手村北部小山"),
        Array(100010100, "射手村 - 梦境小道"),
        Array(100000001, "射手村 - 玛亚的家"),
        Array(100000002, "射手村 - 长老斯坦的家"),
        Array(100000003, "射手村 - 丽娜的家"),
        Array(102000000, "勇士部落 - 勇士部落"),
        Array(102000003, "勇士部落 - 战士圣殿"),
        Array(102030000, "火焰之地 - 野猪的领土"),
        Array(102030200, "火焰之地 - 铁甲猪猪的领土"),
        Array(102030300, "火焰之地 - 燃烧的热气"),
        Array(102030400, "火焰之地 - 灰烬之地"),
        Array(103000000, "废弃都市 - 废弃都市"),
        Array(103000001, "废弃都市 - 废都武器店"),
        Array(103000002, "废弃都市 - 废都药店"),
        Array(103000003, "废弃都市 - 废都爵士酒吧"),
        Array(103000004, "废弃都市 - 废都医院"),
        Array(103000005, "废弃都市 - 废都美发店"),
        Array(103000006, "废弃都市 - 废都修理店"),
        Array(100000204, "射手村 - 弓箭手的殿堂"),
        Array(102000004, "勇士部落 - 战士的殿堂"),
        Array(220000001, "玩具城 - 杂货店"),
        Array(220000002, "玩具城 - 药店"),
        Array(220000003, "玩具城 - 玩具城整形医院"),
        Array(220000004, "玩具城 - 玩具城美发店"),
        Array(220000005, "玩具城 - 玩具城护肤中心"),
        Array(220000006, "玩具城 - 玩具城宠物训练场"),
        Array(220000100, "玩具城 - 玩具城售票处"),
        Array(220000110, "玩具城 - 码头<开往星精灵>"),
        Array(220000111, "玩具城 - 候船室<开往星精灵>"),
        Array(240000001, "神木村 - 村长之家"),
        Array(240000002, "神木村 - 药水商店"),
        Array(240000003, "神木村 - 亚可之家"),
        Array(240000004, "神木村 - 依托之家"),
        Array(240000005, "神木村 - 库摩之家"),
        Array(240000006, "神木村 - 潘姆之家")
        );

playerid = player.getId();
accepttimes = maxtimes - getEventValue("寻宝任务",false);



let date = player.getQuestRecordEx(questid,"date");
//比对时间 如果数据库记录的不是今天的日期 则全部刷新
if(date != getNowFormatDate()){
	player.updateQuestRecordEx(questid, "date", getNowFormatDate());
	player.updateQuestRecordEx(questid, "questN", "-1");
}

let questN = player.getQuestRecordEx(questid,"questN"); //任务地图

text = "\t\t\t#e每日寻宝 - 金利奇的黄金袋子#n\r\n\r\n";
text += "我的财富，遍布世界各地……\r\n";
text += "今日剩余寻宝次数：#r" + accepttimes + "#k 次\r\n";
text += "#r#L999#寻宝任务简介#l#k\r\n\r\n";
if (questN != -1) {  // 判断是否接取了任务
	if (player.isQuestCompleted(questid)) { // 判断是否完成任务
		if (accepttimes <= 0) { // 判断是否超过完成次数
			text += "您已经完成了今天的寻宝任务，请明天0点后再来吧~\r\n";
		} else {
			text += "#b#L0#接受任务#l#k\r\n";
		}
	} else {
		text += "#r#L100#确定当前地图为藏宝地图#l\r\n";
		text += "#r#L2#查看任务提示#l\r\n";
		text += "#r#L4#放弃任务 (无法获得任何奖励，且会消耗一次任务次数)#l\r\n";
	}
} else if (accepttimes > 0) {
	text += "#b#L3#接受任务#l\r\n";
} else {
	text += "  您已经完成了今天的寻宝任务，请明天0点后再来吧~\r\n";
}
text += "#b#L222#购买黄金罗盘#l#k";
var selected =  npc.askMenu(text);
switch(selected){
	case 999:
		text = "#fUI/UIWindow2.img/Quest/quest_info/summary_icon/summary#\r\n\r\n#e#d什么是寻宝任务？#n#k\r\n";
		text += "\t接受寻宝任务之后，你将会获得一个#b寻宝便签#k，我会告诉你可能藏有宝藏的5个地图，并且会保存在寻宝便签中，你需要找到这个#b正确的地图#k并打开便签确认正确的地图。\r\n";
		text += "#e#d什么是黄金罗盘？#n#k\r\n";
		text += "\t使用黄金罗盘，可以帮助你直接寻找到正确的宝藏地图。您可以通过购买获得黄金罗盘，同时寻宝过程中有几率获得黄金罗盘。\r\n";
		npc.say(text);
		break;
	case 222:
		var YN = npc.askYesNo("是否要花费#r1000#k点购买一个黄金罗盘？");
		if(YN == 1){
			if(player.getCashShopCurrency(1) < 1000){
					npc.say("你没有" + 1000 + " 点卷");	
			}else{
				player.gainItem(2430030,1);
				player.modifyCashShopCurrency(1,-1000);
				npc.say("购买成功!");
			}
		}else{
			npc.say("需要再来找我吧！");
		}
		break;
	case 3:
		//接受任务
		if(player.getLevel() < 160) {
			npc.say("等级不足160级，无法领取任务。");
		}else if(player.getFreeSlots(2) < 1){
			npc.say("你的消耗栏格子不足，请先整理一下吧。");
		}else{
			getRandomArray();
			var questrandid = Math.floor(Math.random() * lastMapList.length);
			mapid = lastMapList[questrandid][0] // 任务地图ID
			player.gainItem(2430251,1);
			text = "宝箱有可能藏匿在一下几个地图，寻找到正确的地图并打开宝箱！\r\n";
			var jj = 1;
			for (var key in lastMapList) {
				player.updateQuestRecordEx(questid, "map"+jj, lastMapList[key][0]);
				qinfo += "#b" + lastMapList[key][1] + "\r\n";
				text += "#b" + lastMapList[key][1] + "\r\n";
				jj++;
			}
			player.updateQuestRecordEx(questid, "questN", mapid);
			player.updateQuestRecordEx(questid, "mapsInfos", lastMapList);
			setEventValue("寻宝任务",1);
			npc.say(text);
		}
		break;
	case 4:
		//放弃任务
		var YN =npc.askYesNo("是否放弃任务？");
		if(YN == 1){
			player.updateQuestRecordEx(questid, "questN", "-1");
			player.loseItem(2430251,1);
			npc.say("放弃成功，可以重新接取任务了！");
		}else{
			npc.say("请继续加油");
		}
		break;
	case 2:
		//查看任务提示
		var mapsInfos = player.getQuestRecordEx(questid,"mapsInfos");
		var maps = mapsInfos.split(",");
		text = "宝箱有可能藏匿在一下几个地图，寻找到正确的地图并打开宝箱！\r\n";
		for(var i = 0;i<5;i++){
			text += "#b"+(i+1)+". "+maps[2*i+1]+"\r\n"
		}
		npc.say(text);
		break;
	case 100:
		//完成任务
		
		if(map.getId() == questN){
			//这里给奖励。。。。
			player.gainItem(2436256,1);
			player.updateQuestRecordEx(questid, "questN", "-1");
			player.loseItem(2430251,1);
			npc.say("恭喜你，寻宝成功！");
		}else{
			npc.say("寻宝失败，这不是藏匿宝藏的地图哦!");
		}
}


function getRandomArray() {
    if (lastMapList.length >= 5)
        return true;
    var newMapId = maplist[Math.floor(Math.random() * maplist.length)];
    for (var key in lastMapList) {
        if (lastMapList[key] == newMapId) {
            getRandomArray();
            return false;
        }
    }
    lastMapList.push(newMapId);
    getRandomArray();
}

//flag = true 查总的不重置
//flag = false 查当天的
function getEventValue(event1,flag){
	var charInfo = getCharInfo();
	if(flag){
		var sql = "select sum(value) as numbe from zz_xr_event where accounts_id = "+parseInt(charInfo.accounts_id)+" and event = '"+event1+"' and world ="+parseInt(charInfo.world)+" "; 
	}else{
		var sql = "select sum(value) as numbe from zz_xr_event where accounts_id = "+parseInt(charInfo.accounts_id)+" and event = '"+event1+"' and world ="+parseInt(charInfo.world)+" AND DATE_FORMAT(time, '%Y-%m-%d') = DATE_FORMAT(NOW(), '%Y-%m-%d') "; 
	}
	var resultList = player.customSqlResult(sql);
	var count=0;
	for (var i = 0; i < resultList.size(); i++) {
		var result = resultList.get(i);
		if (result == null) {
			break;
		}
		count = result.get("numbe");
		if(count ==null){
			count = 0;
		}
	}
	return parseInt(count);
}

function setEventValue(event1,value1){
	var charInfo = getCharInfo();
	var sql = "insert into zz_xr_event(accounts_id, world, `event`,`value`,time) values("+charInfo.accounts_id+","+charInfo.world+",'"+event1+"',"+value1+",now())";
	player.customSqlInsert(sql);
}

function getCharInfo(){
	var sql = "select accountid,world from characters where id = "+player.getId()+"";
	var resultList = player.customSqlResult(sql);
	var charInfo={};
	for (var i = 0; i < resultList.size(); i++) {
		var result = resultList.get(i);
		if (result == null) {
			break;
		}
		charInfo.accounts_id = result.get("accountid");
		charInfo.world = result.get("world");
	}
	return charInfo;
}


function gainItemPeriod(itemid,quantity,time){
	if(time < 1000 && time > 0){
		time = 1000*60*60*24*time;
	}
	for(var i = 0 ;i<quantity;i++){
		let newItem = player.makeItemWithId(itemid);
		if(time != 0){
			newItem.setExpiration(new Date().getTime() + time);
		}
		player.gainItem(newItem);
	}
}


//获取当前时间，格式YYYY-MM-DD
function getNowFormatDate() {
	let date = new Date();
	let seperator1 = "";
	let year = date.getFullYear();
	let month = date.getMonth() + 1;
	let strDate = date.getDate();
	if (month >= 1 && month <= 9) {
		month = "0" + month;
	}
	if (strDate >= 0 && strDate <= 9) {
		strDate = "0" + strDate;
	}
	let currentdate = year + seperator1 + month + seperator1 + strDate;
	return currentdate;
}