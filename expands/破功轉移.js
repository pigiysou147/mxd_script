/**
* 武器破功潛能轉移-QQ:739977676
**/

let needYE = 100;//需要的餘額
let 圖示1 ="#fEffect/ItemEff/1070069/effect/walk1/1#";

let str = ""+圖示1+"#b#e#fs14#　　 武器破功轉移中心#k#n#fs12#　　"+圖示1+"\r\n\r\n";
str += "#b您需要轉換您兩件武器的屬性嗎？\r\n";
str += "說明：只支持武器轉換，請將兩把武器放到#r第一格#b和#r第二格\r\n"
str += "#b說明：只轉換破功，兩把武器均存在#r額外#b破功值\r\n"
str += "#b#e注意：此功能是將#r第一格#b和#r第二格#b的破功值#r對調#b不是累加\r\n"
str += "#g重點說明#r:您需要 "+needYE+" 餘額才可以使用這個功能\r\n"
str += "您是否需要使用該功能？";

let YN = npc.askYesNo(str);
if(YN == 1){
	if(getHyPay(1) < needYE){
		npc.say("餘額不足");
	}else{
		//獲取裝備
		let toDrop1 = player.getInventorySlot(1, 1);
		let toDrop2 = player.getInventorySlot(1, 2);
		
		if(toDrop1 == null || toDrop2 == null){
			npc.say("請將需要轉換的兩把武器放到裝備欄#r第一格#k和#r第二格");
		}else if(toDrop1.getLimitBreak() <= 0 || toDrop2.getLimitBreak() <= 0){
			npc.say("您的裝備中有不符合條件的裝備，無法使用！#r你的武器沒有破功哦~");
		}else{
			str = "#b請確定您要更換的裝備:\r\n";
			str += "您的第一格裝備：#r#v"+toDrop1.getDataId()+"#";
			str += "\r\n#b您的第二格裝備：#r#v"+toDrop2.getDataId()+"#";
			str += "\r\n是否確定轉換？"
			YN = npc.askYesNo(str);
			if(YN == 1){
				//更換破功
				let temp = toDrop1.getLimitBreak();
				toDrop1.setLimitBreak(toDrop2.getLimitBreak());
				toDrop2.setLimitBreak(temp);
				
				player.updateItem(1, toDrop1);
				player.updateItem(2, toDrop2);
				gainHyPay(-needYE)
				npc.broadcastPlayerNotice(15,"『破功轉移』 : 恭喜 " + player.getName() + " 花了100餘額轉移了武器的破功。");
				npc.say("轉換成功");
			}
		}
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