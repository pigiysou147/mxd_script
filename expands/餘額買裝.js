/**
* 餘額購買屬性裝備  QQ:739977676 
**/
let items = Array(
	//物品ID 屬性 BOSS傷等 星星 需要餘額
	Array(1202190,300,20,25,15000),
	Array(1202191,300,20,25,15000),
	Array(1202192,300,20,25,15000)
);


let selStr = "#b\t\t\t\t  #fs14#極品裝備商城#fs12#\r\n#b屬性#r(力量,敏捷,智力,運氣)#b 百分比#r(BOSS,無視,所有屬性)";
for(let i = 0;i<items.length;i++){
	selStr += "\r\n#L"+i+"##v"+items[i][0]+"# "+(items[i][1]>0?("#b全屬:#r"+items[i][1]):"") + (items[i][2]>0?(" #b百分比:#r"+items[i][2]):"")+ (items[i][3]>0?(" #b星力:#r"+items[i][3]):"")+ " #b價格:#r"+items[i][4]+" 餘額";
}
let selected = npc.askMenu(selStr);
selStr = "#b是否確定花費 #r"+items[selected][4] +" #b餘額購買:\r\n";
selStr += "#v"+items[selected][0]+"# "+(items[selected][1]>0?("#b屬性:#r"+items[selected][1]):"") + (items[selected][2]>0?(" #b百分比:#r"+items[selected][2]):"")+ (items[selected][3]>0?(" #b星星:#r"+items[selected][3]):"");
let YN = npc.askYesNo(selStr);
if(YN == 1){
	if(getHyPay(1) < items[selected][4]){
		npc.say("購買失敗，你沒有" + items[selected][4] + " 餘額");	
	}else{
		gainHyPay(-items[selected][4])
		
		let newItem = player.makeItemWithId(items[selected][0]);
		newItem.setStr(items[selected][1]); //裝備力量
		newItem.setDex(items[selected][1]); //裝備敏捷
		newItem.setInt(items[selected][1]); //裝備智力
		newItem.setLuk(items[selected][1]); //裝備運氣

		newItem.setMad(items[selected][1]);
		newItem.setPad(items[selected][1]);

		newItem.setStatR(items[selected][2]);// 所有屬性
		newItem.setBossDamageR(items[selected][2]);// BOSS傷 
		newItem.setIgnorePDR(items[selected][2]);// 無視防禦
		player.gainItem(newItem);
		npc.broadcastGachaponMsgEx("[極品道具商城]:恭喜"+player.getName()+"使用餘額購買了極品裝備！"+newItem.getItemName(),newItem);
		npc.say("購買成功！");
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
