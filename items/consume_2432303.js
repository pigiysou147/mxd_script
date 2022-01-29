/**
* 理財盒子 739977676 
**/

var z = "#fEffect/CharacterEff/1082565/2/0#"; //星系
var xx = "#fEffect/CharacterEff/1082565/4/0#";
var epp = "#fEffect/CharacterEff/1082312/0/0#";  //彩光
var xxx = "#fEffect/CharacterEff/1082565/2/0#"; //星系

var dayItems = Array(//每日福利送的物品
);
var dayDQ = 200000;//每日點券
var dayDY = 200000;//每日抵用
var dayYE = 0;//每日餘額
var dayJB = 100000000;//每日金幣
var dayPG = 0;//每日破功
var ROLLItems = Array(4000000,10);//roll鑰匙 ID 數量

//副本重置的記錄值
var bossLog = Array(
	"beilun",//貝倫
	"半半",//半半
	"Akayrum",
	"Akayrum_Easy",
	"Beidler",
	"Caoong",
	"Demian",
	"Dunkel",
	"Demian_Hard",
	"Dusk",
	"Fairy",
	"Hillah",
	"Hontale",
	"Hontale_Chaos",
	"JinHillah",
	"JinHillah_Hard",
	"Lucid",
	"Lucid_Hard",
	"Magnus",
	"Magnus_Easy",
	"Magnus_Hard",
	"NLC",
	"Pinkbeen",
	"Pinkbeen_Chaos",
	"Shinas",
	"Siwu",
	"Siwu_Chaos",
	"VonLeon_Normal",
	"VonLeon_Easy",
	"Will",
	"Zakum_Normal",
	"Zakum_Chaos",
	"Zakum_Easy",
	"玩具城"
);

let YN;
var selStr = "" + epp + "" + epp + "" + epp + "" + epp + "\r\n";
selStr += "#e#d                " + xx + "土豪神豪百寶箱" + xx + "\r\n";
selStr += "#r" + epp + "" + epp + "" + epp + "" + epp + "\r\n";
selStr += "#L0#" + z + " 每日福利#l  #L1#" + z + " 洗血洗藍#l  #L2#" + z + " BOSS重置#l\r\n";
selStr += "#L3#" + z + " 自選發型#l  #L4#" + z + " 每日破功#l  #L5#" + z + " 每日雙倍#l\r\n";
selStr += "\r\n" + epp + "" + epp + "" + epp + "" + epp + "";
var selected = npc.askMenu(selStr);
switch (selected){
	case 0:
		//福利
		selStr = "是否領取以下每日福利？(賬號每日一次)\r\n";
		selStr += "#b點券 #r"+dayDQ;
		selStr += "\r\n#b抵用 #r"+dayDY;
		selStr += "\r\n#b金幣 #r"+dayJB;
		selStr += "\r\n#b餘額 #r"+dayYE+"\r\n";
		for(let i = 0; i< dayItems.length;i++){
			selStr += "#v"+dayItems[i][0]+"# x "+dayItems[i][1]+" ,"
		}
		YN = npc.askYesNo(selStr);
		if(YN == 1){
			if(getEventValue("理財每日福利",false)>=1){
				npc.say("您的帳號今天已經領取過該禮包，無法再次領取");
				break;
			}
			if (player.getFreeSlots(1) < dayItems.length || player.getFreeSlots(2) < dayItems.length || player.getFreeSlots(3) < dayItems.length || player.getFreeSlots(4) < dayItems.length || player.getFreeSlots(5) < dayItems.length) {
				npc.say("包裹空間不足，請確保包裹每個欄位有至少 " + dayItems.length + " 格空間");
			}else{
				setEventValue("理財每日福利", 1);
				for(let i = 0; i < dayItems.length ; i++){
					player.gainItem(dayItems[i][0],dayItems[i][1]);
				}
				player.gainMesos(dayJB);
				player.modifyCashShopCurrency(1,dayDQ);
				player.modifyCashShopCurrency(2,dayDY);
				gainHyPay(dayYE);
				npc.say("領取成功");
			}
		}
		break;
	case 1:
		//洗血藍
		player.runScript("洗血洗藍");
		break;
	case 2:
		//重置副本
		YN = npc.askYesNo("是否重置該角色的副本記錄？(每個賬號每天1次)");
		if(YN == 1){
			if(getEventValue("理財每日副本",false)==1){
				npc.say("您的賬號今天已經重置過，無法再次領取");
				break;
			}else{
				setEventValue("理財每日副本", 1);
				for(let i = 0; i < bossLog.length; i++){
					player.resetPQLog(bossLog[i]);
				}
				npc.say("重置成功");
				break;
			}
		}
		break;
	case 3:
		//自選發型
		player.runScript("自選髮型");
		break;
	case 4:
		/*
		//每日破攻
		YN = npc.askYesNo("是否需要提升裝備欄第一格裝備的突破值("+dayPG+")？\r\n(每個賬號每天1次)");
		if(YN == 1){
			if(getEventValue("理財每日突破",false)==1){
				npc.say("您的賬號今天已經領取過，無法再次領取");
			}else{
				//獲取第一格裝備
				let toDrop = player.getInventorySlot(1, 1);
				//判斷第一格裝備是否存在
				if(toDrop == null){
					npc.say("請將您需要突破的裝備放到第一格！");
				}else{
					setEventValue("理財每日突破", 1);
					toDrop.setLimitBreak(toDrop.getLimitBreak() + dayPG);//破功
					player.updateItem(1, toDrop);
					npc.say("突破成功，您的武器增加了#r"+dayPG+"#k突破值");
				}
			}
		}*/
		
		player.runScript("累計破功");
		
		break;
	case 5:
		//雙倍
		selStr = "是否領取每日雙倍？(賬號每日一次)\r\n";
		YN = npc.askYesNo(selStr);
		if(YN == 1){
			if(getEventValue("理財每日雙倍",false)>=1){
				npc.say("您的賬號今天已經領取過該禮包，無法再次領取");
				break;
			}if (player.getFreeSlots(1) < 2 || player.getFreeSlots(2) < 2|| player.getFreeSlots(3) < 2 || player.getFreeSlots(4) < 2|| player.getFreeSlots(5) < 2) {
				npc.say("包裹空間不足，請確保包裹每個欄位有至少 " + 2 + " 格空間");
				break;
			}else{
				setEventValue("理財每日雙倍", 1);
				gainItemPeriod(2450159,1,1);
				gainItemPeriod(2023072,1,1);
				npc.say("領取成功");
				break;
			}
		}
		break;
	default:
		npc.say("該功能開發中");
		break;
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

//flag = true 查總的不重置
//flag = false 查當天的
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