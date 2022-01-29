/**
* 理財購買  739977676 
**/
let aaa = "#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";
let z5 = "#fEffect/CharacterEff/1112904/2/1#"; //五角花
let tz = "#fEffect/CharacterEff/1082565/2/0#"; //兔子藍
let f1 = "#fEffect/CharacterEff/1112905/0/1#"; //小紅心
let tz12 = "#fEffect/CharacterEff/1112924/0/0#"; //黃星
let tz13 = "#fEffect/CharacterEff/1112925/0/0#"; //藍星
let tz14 = "#fEffect/CharacterEff/1112926/0/0#"; //紅星

//會員盒子
let vipBox = Array(
	//盒子ID 天數 所需餘額 詞條 詳細介紹
	Array(2430865,30,500 , "購買#v2432303# 500  餘額 30天" , "詳細介紹")
);

//辦理會員送的裝備
let vipEquips = Array(
	//第幾個盒子送的 介紹 裝備ID 裝備名 所需點券 四圍 攻擊力 BOSS 所屬 無視 是否上鎖1上0不上 時間
	Array(1,"全屬88,攻擊88 ",1112915,"VIP1專屬裝備",88,88,0,0,0,1,30)
);

//辦理會員送的物品
let vipItems = Array(
	//第幾個盒子送的 物品ID 數量
);


let str = "" + f1 + " " + f1 + " " + f1 + " " + f1 + " " + f1 + " " + f1 + " " + f1 + " " + f1 + " " + f1 + " " + f1 + " " + f1 + " " + f1 + " " + f1 + " " + f1 + " " + f1 + " " + f1 + " " + f1 + " " + f1 + " " + f1 + "";
str += "\t\t\t\t\t#r" + tz + "理財購買中心" + tz + "#k\r\n";
for(let i = 0; i<vipBox.length;i++){
	str += "#L"+i+"#"+vipBox[i][3]+"#l\r\n"
}
let selected = npc.askMenu(str);

let equipsF = [];
let itemsF = [];
for(let i = 0 ; i < vipEquips.length;i++){
	if((vipEquips[i][0]-1) == selected){
		equipsF.push(vipEquips[i]);
	}
}

str = "#v"+vipBox[selected][0]+"# #b理財介紹:\r\n#r"+vipBox[selected][4]+"\r\n#b贈送裝備:\r\n";
for(let i = 0 ; i < equipsF.length;i++){
	str += "#v"+equipsF[i][2]+"#  #r"+equipsF[i][1]+"\r\n"
}
str += "#r#e\r\n是否辦理？"
let YN = npc.askYesNo(str);
if(YN == 1){
	if(player.hasItem(vipBox[selected][0],1)){
		npc.say("#b您已經擁有 #v"+vipBox[selected][0]+"# , 無法重復辦理");
	}else if(getHyPay(1) < vipBox[selected][2]){
		npc.say("#b您的餘額不足！無法辦理！");
	}else if (player.getFreeSlots(1) < 10 || player.getFreeSlots(2) < 10 || player.getFreeSlots(3) < 10 || player.getFreeSlots(4) < 10 || player.getFreeSlots(5) < 10) {
		npc.say("包裹空間不足，請確保包裹每個欄位有至少 " + 10 + " 格空間");
	}else if (player.getPQLog("VIP月卡")>0){
		npc.say("#b您的帳號已辦過VIP，無法再次領取，如#r遺失vip包#b或#r時間到期#b請聯繫管理員。");
	}else{
		gainHyPay(-vipBox[selected][2]);	
		npc.broadcastNoticeWithoutPrefix("[理財系統]:玩家 "+player.getName() + " 成功辦理了理財產品");
		player.addPQLog("VIP月卡",1,30);
		gainItemPeriod(vipBox[selected][0],1,vipBox[selected][1]); //給期限的盒子
		//player.gainItem(vipBox[selected][0],1);//給永久盒子
		
		for(let i = 0 ; i < itemsF.length;i++){
			player.gainItem(itemsF[i][1],itemsF[i][2]);
		}
		
		for(let i = 0 ; i < equipsF.length;i++){
			let newItem = player.makeItemWithId(equipsF[i][2]);
			newItem.setStr(equipsF[i][4]); //裝備力量
			newItem.setDex(equipsF[i][4]); //裝備敏捷
			newItem.setInt(equipsF[i][4]); //裝備智力
			newItem.setLuk(equipsF[i][4]); //裝備運氣

			newItem.setMad(equipsF[i][5]);
			newItem.setPad(equipsF[i][5]);

			newItem.setStatR(equipsF[i][7]);// 所有屬性
			newItem.setBossDamageR(equipsF[i][6]);// BOSS傷 
			newItem.setIgnorePDR(equipsF[i][8]);// 無視防禦
			newItem.setAttribute(equipsF[i][9]);
			player.gainItem(newItem);
		}
		
		
		npc.say("辦理成功！");

	}
}


function gainItemPeriod(itemid,quantity,time){
	if(time < 1000){
		time = 1000*60*60*24*time;
	}
	for(let i = 0 ;i<quantity;i++){
		let newItem = player.makeItemWithId(itemid);
		newItem.setExpiration(new Date().getTime() + time);
		player.gainItem(newItem);
	}
}

function getHyPay(type) {
    var sql = "select * from hypay where accname = '" + getAccountName() + "'";
    var push = player.customSqlResult(sql);
    if (push.size() > 0) {
        var result = push.get(0);
        if (type == 1) {
            var pay = result.get("pay");
        } else if (type == 2) {
            var pay = result.get("payUsed");
        } else if (type == 3) {
            var pay = result.get("payReward");
        }
    } else {
        player.customSqlInsert("INSERT INTO `hypay` (`accname`, `name`) VALUES ('" + getAccountName() + "', '" + player.getName() + "')");
        return getHyPay(1);
    }

    return pay;
}
function getAccountName() {
    var i = -1;
    var sql = "select name,id from accounts where id=" + player.getAccountId() + " order by name limit 1;";
    var push = player.customSqlResult(sql);
    if (push.size() > 0) {
        var result = push.get(0);
        var name = result.get("name");
    }

    return name;
}

function gainHyPay(count) {
    var sql = "update hypay set pay =pay+? where accname = '" + getAccountName() + "';";   
    player.customSqlUpdate(sql, count);
}
function getCharInfo(){
	var sql = "select accounts_id,world from characters where id = "+player.getId()+"";
	var resultList = player.customSqlResult(sql);
	var charInfo={};
	for (var i = 0; i < resultList.size(); i++) {
		var result = resultList.get(i);
		if (result == null) {
			break;
		}
		charInfo.accounts_id = result.get("accounts_id");
		charInfo.world = result.get("world");
	}
	return charInfo;
}
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
