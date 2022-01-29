/**
* 武器破功潛能轉移-QQ:739977676
**/

let needYE = 500;//需要的餘額
let 圖示1 ="#fEffect/ItemEff/1070069/effect/walk1/1#";

let str = ""+圖示1+"#b#e#fs14#　　 裝備淺能轉移中心#k#n#fs12#　　"+圖示1+"\r\n\r\n";
str += "#b您需要轉換您兩件武器的屬性嗎？\r\n";
str += "說明：只支持武器轉換，請將兩件裝備放到#r第一格#b和#r第二格\r\n"
str += "#b說明：只轉換潛能，兩件裝備均#r#e不可為點裝\r\n"
str += "#b#e注意：此功能是將#r第一格#b和#r第二格#b的淺能#r對調\r\n"
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
		}else if(toDrop1.getSn()!=-1 || toDrop2.getSn()!=-1){
			npc.say("您的裝備中有不符合條件的裝備，無法使用！#r點裝商品無法轉移淺能");
		}else{
			str = "#b請確定您要更換的裝備:\r\n";
			str += "您的第一格裝備：#r#v"+toDrop1.getDataId()+"#";
			str += "\r\n#b您的第二格裝備：#r#v"+toDrop2.getDataId()+"#";
			str += "\r\n是否確定轉換？"
			YN = npc.askYesNo(str);
			if(YN == 1){
				//更換破功
				let temp = toDrop1.getGrade();
				toDrop1.setGrade(toDrop2.getGrade());
				toDrop2.setGrade(temp);
				
				temp = toDrop1.getOption(1,false);
				toDrop1.setOption(1,toDrop2.getOption(1,false),false);
				toDrop2.setOption(1,temp,false);
				
				temp = toDrop1.getOption(2,false);
				toDrop1.setOption(2,toDrop2.getOption(2,false),false);
				toDrop2.setOption(2,temp,false);
				
				temp = toDrop1.getOption(3,false);
				toDrop1.setOption(3,toDrop2.getOption(3,false),false);
				toDrop2.setOption(3,temp,false);
				
				temp = toDrop1.getOption(1,true);
				toDrop1.setOption(1,toDrop2.getOption(1,true),true);
				toDrop2.setOption(1,temp,true);
				
				temp = toDrop1.getOption(2,true);
				toDrop1.setOption(2,toDrop2.getOption(2,true),true);
				toDrop2.setOption(2,temp,true);
				
				temp = toDrop1.getOption(3,true);
				toDrop1.setOption(3,toDrop2.getOption(3,true),true);
				toDrop2.setOption(3,temp,true);
			
				player.updateItem(1, toDrop1);
				player.updateItem(2, toDrop2);
				gainHyPay(-needYE)
				npc.broadcastPlayerNotice(15,"『淺能轉移』 : 恭喜 " + player.getName() + " 花了500餘額轉移了裝備的淺能。");
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