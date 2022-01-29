/**
* 武器破功潜能转移-QQ:739977676
**/
let password = "确定"
let needYE = 1000;//需要的餘额
let itemid = Array(
1212120,1222113,1232113,1242121,1242122,1252098,1262039,1302343,1312203,1322255,1332279,1342104,1362140,1372228,1382265,1402259,1412181,1422189,1432218,1442274,1452257,1462243,1472265,1482221,1492235,1522143,1532150,1542117,1552119,1582023,1262017,1212115,1282016,1272016,1222109,1232109,1402251,1242116,1302333,1312199,1322250,1332274,1342101,1362135,1372222,1382259,1412177,1422184,1432214,1442268,1452252,1462239,1472261,1482216,1492231,1522138,1532144,1552110,1252093,1542108,1262016,1542063,1262016,1212063,
1403036,1272015,1282015,1222058,1232057,1242060,1302275,1312153,1322203,1332225,1342082,1362090,1372177,1382208,1402196,1412135,1422140,1432167,1442223,1452205,1462193,1472214,1482168,1492179,1522094,1532098,1252015,1542063,1552063,1212129,1222122,1232122,1242139,1242141,1252106,1262051,1302355,1312213,1332289,1342104,1372237,1382274,1402268,1412189,1422197,1432227,1442285,1452266,1462252,1472275,1482232,1492245,1532157,1542128,1552130,1582044,1272040,1282040,1272017,1592020,1592018,1592019,1592022,1522152,1302355,1482180);
	
var Icon = Array(
		Array("方框", "#fUI/UIWindow.img/Item/New/inventory/0#"),
		Array("方框", "#fUI/UIWindow.img/Item/activeExpChairIcon#"),
		Array("锤子", "#fUI/Basic.img/Cursor/32/0#"),
		Array("数值", "#fUI/Basic.img/LevelNo/0#"),
		Array("数值", "#fUI/Basic.img/LevelNo/1#"),
		Array("数值", "#fUI/Basic.img/LevelNo/2#"),
		Array("数值", "#fUI/Basic.img/LevelNo/3#"),
		Array("数值", "#fUI/Basic.img/LevelNo/4#"),
		Array("数值", "#fUI/Basic.img/LevelNo/5#"),
		Array("数值", "#fUI/Basic.img/LevelNo/6#"),
		Array("数值", "#fUI/Basic.img/LevelNo/7#"),
		Array("数值", "#fUI/Basic.img/LevelNo/8#"),
		Array("数值", "#fUI/Basic.img/LevelNo/9#"),
		Array("确认", "#fUI/CashShop.img/CSCoupon/BtOK/disabled/0#"),
		Array("箭头", "#fUI/Basic.img/icon/arrow#"),
		Array("箭头", "#fUI/UIWindow.img/Quest/icon2/0#"),
		Array("确认", "#fUI/CashShop.img/CSCoupon/BtOK/normal/0#"),
		Array("王冠", "#fUI/GuildMark/Mark/Etc/00009023/11#"),
		Array("王冠", "#fUI/GuildMark/Mark/Etc/00009023/10#")

		);
		
let str = "#b┏　　　　　　　　" + Icon[17][1] + "  #r#e属性传承#b#n  " + Icon[17][1] + "　　　　　　　　┓#k\r\n\r\n";
str += Icon[15][1] + " #d第一个栏放入#r剥离道具#d，第二栏放入#b传承道具#k\r\n";
str += Icon[15][1] + " #d传承系统仅对#r神祕系列、航海系列&深渊系列武器#k\r\n";
str += Icon[15][1] + " #d该功能目前限定转移 #r武器#k\r\n";
str += Icon[15][1] + " #d传承结束 转移的装备 #r会被删除 #r会被删除 #r会被删除#k\r\n";
str += Icon[15][1] + " #d道具传承结束 已剥离道具消失 属性(武器包含破功)将传承到新道具中#k\r\n\r\n";
str += Icon[15][1] + " #d#r注意:#b此功能是将#r剥离道具#b的属性「覆盖」到#r传承道具#b上，不是「累积」。#k\r\n\r\n";
str += Icon[15][1] + " #g重点说明#r:您需要 "+needYE+" 餘额才可以使用这个功能\r\n"
str += Icon[15][1] + " #r#e您是否需要使用该功能？";

let YN = npc.askYesNo(str);
if(YN == 1){
	if(getHyPay(1) < needYE){
		npc.say("餘额不足");
	}else{
		//获取装备
		let toDrop1 = player.getInventorySlot(1, 1);
		let toDrop2 = player.getInventorySlot(1, 2);
		
		if(toDrop1 == null || toDrop2 == null){
			npc.say("请将需要转换的两把武器放到装备栏#r第一格#k和#r第二格");
		}else if(itemid.indexOf(toDrop1.getDataId()) == -1|| itemid.indexOf(toDrop2.getDataId()) == -1){
			npc.say("#b您其中一个装备不是#r#e深渊、航海、神秘、创世，#b#n请加以确认再使用本功能");
		}else{
			str = "#b请确定您要更换的装备:\r\n";
			str += "您的第一格装备：#r#v"+toDrop1.getDataId()+"##r#e此為剥离道具，传承成功后删除";
			str += "\r\n#b#n您的第二格装备：#r#v"+toDrop2.getDataId()+"##r#b#e此為传承道具，会继承第一格装备";
			str += "\r\n\r\n#b请输入#r确定#b以确保确认传承？如有失误#r无法补偿。"
			YN = npc.askText(str,"",0,999);
			if(YN == password){
				//更换破功
				toDrop2.setLimitBreak(toDrop1.getLimitBreak());//破功
				toDrop2.setRUC(toDrop1.getRUC());//卷轴
				toDrop2.setCUC(toDrop1.getCUC());//卷轴
				toDrop2.setStr(toDrop1.getStr());//力量
				toDrop2.setDex(toDrop1.getDex());//敏捷
				toDrop2.setInt(toDrop1.getInt());//智力
				toDrop2.setLuk(toDrop1.getLuk());//幸运				
				toDrop2.setPad(toDrop1.getPad());//AD
				toDrop2.setMad(toDrop1.getMad());//AP
				toDrop2.setJump(toDrop1.getJump());//跳跃力
				toDrop2.setTitle(toDrop1.getTitle());//抬头
				toDrop2.setCHUC(toDrop1.getCHUC());//星力
				
				temp = toDrop1.getGrade();//浅能等级
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
				npc.say("转换成功");
				npc.broadcastGachaponMsgEx("[属性转移]:恭喜 "+player.getName()+" 使用1000餘额转移了装备的属性",toDrop2);
			}else{
				npc.say("你不确定那我也没办法囉~");
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