/**
* 消耗一個道具， 為指定裝備增加 XXX屬性值 【要求裝備剩余次數必須為XX，星星必須超過XX才可以使用】  QQ:739977676 
**/
//var a = npc.askText("","",0,999);

/**let toDrop = player.getInventorySlot(1, 1);
		toDrop.setStatR(a);
		toDrop.setGrade(20); //給S潛能
		toDrop.setOption(1, 60001, false);
		toDrop.setOption(2, 60001, false);
		toDrop.setOption(3, 60001, false);
		toDrop.setOption(1, 40292, true);
		toDrop.setOption(2, 40292, true);
		toDrop.setOption(3, 40292, true);
player.updateItem(1, toDrop);**/

//let number = npc.askNumber("","",0,99);
//var text = "當前地圖怪物數量："+map.getEventMobCount()+""
//player.showProgressMessageFont(text, 4, 30, 0, 0);//黑色的字
//player.runScript("活動獎勵發放")
/*     
 *  
 *  
 *  功能：NPC 功能模版
 *  
 *  @author NautMS 
 */

/* global cm */
var item = 2434622
let pay = 250
var selStr;
var uiLose = "#fUI/UIWindow.img/RpsGame/charLose#";
var step = -1;
			if (getHyPay(1)>=pay){
				selStr = "請選擇屬於你的幸運號碼\r\n"
				for(var i = 1; i <= 9 ; i++){
	selStr += "#L"+i+"##fUI/Basic/LevelNo/" + i + "##l" + "";
			}}
		var playerHand = npc.askMenu(selStr,9310073);
		var npcHand = Math.floor(Math.random()*8+1);
		var win =  playerHand - npcHand;
		npc.say(""+win+"")
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
		if (count > 0) {
		player.showSystemMessage( "餘額增加了 " + count + "");
	} else if (count < 0) {
		player.showSystemMessage( "餘額減少了 " + (-count) + "");
}
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
