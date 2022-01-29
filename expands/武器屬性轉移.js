/**
* 武器破功潛能轉移-QQ:739977676
**/
let password = "確定"
let needYE = 1000;//需要的餘額
let itemid = Array(
1212120,1222113,1232113,1242121,1242122,1252098,1262039,1302343,1312203,1322255,1332279,1342104,1362140,1372228,1382265,1402259,1412181,1422189,1432218,1442274,1452257,1462243,1472265,1482221,1492235,1522143,1532150,1542117,1552119,1582023,1262017,1212115,1282016,1272016,1222109,1232109,1402251,1242116,1302333,1312199,1322250,1332274,1342101,1362135,1372222,1382259,1412177,1422184,1432214,1442268,1452252,1462239,1472261,1482216,1492231,1522138,1532144,1552110,1252093,1542108,1262016,1542063,1262016,1212063,1272015,1282015,1222058,1232057,1242060,1302275,1312153,1322203,1332225,1342082,1362090,1372177,1382208,1402196,1412135,1422140,1432167,1442223,1452205,1462193,1472214,1482168,1492179,1522094,1532098,1252015,1542063,1552063,1212129,1222122,1232122,1242139,1242141,1252106,1262051,1302355,1312213,1332289,1342104,1372237,1382274,1402268,1412189,1422197,1432227,1442285,1452266,1462252,1472275,1482232,1492245,1532157,1542128,1552130,1582044,1272040,1282040,1272017,1592020,1592018,1592019,1592022,1522152,1302355,1482180);
	
var Icon = Array(
		Array("方框", "#fUI/UIWindow.img/Item/New/inventory/0#"),
		Array("方框", "#fUI/UIWindow.img/Item/activeExpChairIcon#"),
		Array("錘子", "#fUI/Basic.img/Cursor/32/0#"),
		Array("數值", "#fUI/Basic.img/LevelNo/0#"),
		Array("數值", "#fUI/Basic.img/LevelNo/1#"),
		Array("數值", "#fUI/Basic.img/LevelNo/2#"),
		Array("數值", "#fUI/Basic.img/LevelNo/3#"),
		Array("數值", "#fUI/Basic.img/LevelNo/4#"),
		Array("數值", "#fUI/Basic.img/LevelNo/5#"),
		Array("數值", "#fUI/Basic.img/LevelNo/6#"),
		Array("數值", "#fUI/Basic.img/LevelNo/7#"),
		Array("數值", "#fUI/Basic.img/LevelNo/8#"),
		Array("數值", "#fUI/Basic.img/LevelNo/9#"),
		Array("確認", "#fUI/CashShop.img/CSCoupon/BtOK/disabled/0#"),
		Array("箭頭", "#fUI/Basic.img/icon/arrow#"),
		Array("箭頭", "#fUI/UIWindow.img/Quest/icon2/0#"),
		Array("確認", "#fUI/CashShop.img/CSCoupon/BtOK/normal/0#"),
		Array("王冠", "#fUI/GuildMark/Mark/Etc/00009023/11#"),
		Array("王冠", "#fUI/GuildMark/Mark/Etc/00009023/10#")

		);
		
let str = "#b┏　　　　　　　　" + Icon[17][1] + "  #r#e屬性傳承#b#n  " + Icon[17][1] + "　　　　　　　　┓#k\r\n\r\n";
str += Icon[15][1] + " #d第一個欄放入#r剝離道具#d，第二欄放入#b傳承道具#k\r\n";
str += Icon[15][1] + " #d傳承系統僅對#r神祕系列、航海系列&深淵系列武器#k\r\n";
str += Icon[15][1] + " #d該功能目前限定轉移 #r武器#k\r\n";
str += Icon[15][1] + " #d傳承結束 轉移的裝備 #r會被刪除 #r會被刪除 #r會被刪除#k\r\n";
str += Icon[15][1] + " #d道具傳承結束 已剝離道具消失 屬性(武器包含破功)將傳承到新道具中#k\r\n\r\n";
str += Icon[15][1] + " #d#r注意:#b此功能是將#r剝離道具#b的屬性「覆蓋」到#r傳承道具#b上，不是「累積」。#k\r\n\r\n";
str += Icon[15][1] + " #g重點說明#r:您需要 "+needYE+" 餘額才可以使用這個功能\r\n"
str += Icon[15][1] + " #r#e您是否需要使用該功能？";

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
		}else if(itemid.indexOf(toDrop1.getDataId()) == -1|| itemid.indexOf(toDrop2.getDataId()) == -1){
			npc.say("#b您其中一個裝備不是#r#e深淵、航海、神秘、創世，#b#n請加以確認再使用本功能");
		}else{
			str = "#b請確定您要更換的裝備:\r\n";
			str += "您的第一格裝備：#r#v"+toDrop1.getDataId()+"##r#e此為剝離道具，傳承成功後刪除";
			str += "\r\n#b#n您的第二格裝備：#r#v"+toDrop2.getDataId()+"##r#b#e此為傳承道具，會繼承第一格裝備";
			str += "\r\n\r\n#b請輸入#r確定#b以確保確認傳承？如有失誤#r無法補償。"
			YN = npc.askText(str,"",0,999);
			if(YN == password){
				//更換破功
				toDrop2.setLimitBreak(toDrop1.getLimitBreak());//破功
				toDrop2.setRUC(toDrop1.getRUC());//卷軸
				toDrop2.setCUC(toDrop1.getCUC());//卷軸
				toDrop2.setStr(toDrop1.getStr());//力量
				toDrop2.setDex(toDrop1.getDex());//敏捷
				toDrop2.setInt(toDrop1.getInt());//智力
				toDrop2.setLuk(toDrop1.getLuk());//幸運				
				toDrop2.setPad(toDrop1.getPad());//AD
				toDrop2.setMad(toDrop1.getMad());//AP
				toDrop2.setJump(toDrop1.getJump());//跳躍力
				toDrop2.setTitle(toDrop1.getTitle());//抬頭
				toDrop2.setCHUC(toDrop1.getCHUC());//星力
				
				temp = toDrop1.getGrade();//淺能等級
				toDrop2.setGrade(temp);
				
				temp = toDrop1.getOption(1,false);
				toDrop2.setOption(1,temp,false);
				
				temp = toDrop1.getOption(2,false);
				toDrop2.setOption(2,temp,false);
				
				temp = toDrop1.getOption(3,false);
				toDrop2.setOption(3,temp,false);
				
				temp = toDrop1.getOption(1,true);
				toDrop2.setOption(1,temp,true);
				
				temp = toDrop1.getOption(2,true);
				toDrop2.setOption(2,temp,true);
				
				temp = toDrop1.getOption(3,true);
				toDrop2.setOption(3,temp,true);
				
				player.loseInvSlot(1, 1);
				player.updateItem(2, toDrop2);
				gainHyPay(-needYE)
				npc.say("轉換成功");
				npc.broadcastGachaponMsgEx("[屬性轉移]:恭喜 "+player.getName()+" 使用1000餘額轉移了裝備的屬性",toDrop2);
			}else{
				npc.say("你不確定那我也沒辦法囉~");
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