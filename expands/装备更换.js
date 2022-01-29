/**
* 装备更换（自主选择属性） CC jili 
**/

let allEquip = Array(
	//每一个数组里面代表的是一类装备，这一类装备可以相互转换，系统自动识别第一格装备
	
	//FFN
	Array(1212063,1382208,1003799,1003800,1003801),
	Array(1003797,1003798,1003799,1003800,1003801),
	Array(1042254,1042255,1042256,1042257,1042258),
	Array(1062165,1062166,1062167,1062168,1062169),
	//SM
	Array(1004808,1004809,1004810,1004811,1004812),
	Array(1073158,1073159,1073160,1073161,1073162),
	Array(1053063,1053064,1053065,1053066,1053067),
	Array(1102940,1102941,1102942,1102943,1102944),
	Array(1082695,1082696,1082697,1082698,1082699),
	Array(1152196,1152197,1152198,1152199,1152200),
	//AS
	Array(1004422,1004423,1004424,1004425,1004426),
	Array(1073030,1073032,1073033,1073034,1073035),
	Array(1052882,1052887,1052888,1052889,1052890),
	Array(1102775,1102794,1102795,1102796,1102797),
	Array(1082636,1082637,1082638,1082639,1082640),
	Array(1152174,1152176,1152177,1152178,1152179),
	
	//BJ
	Array(1132174,1132175,1132176,1132177,1132178),
	Array(1072743,1072744,1072745,1072746,1072747),
	Array(1102481,1102482,1102483,1102484,1102485),
	Array(1332279,1452257)
);
let YE = Array(20,20,20,400,400,400,400,400,400,200,200,200,200,200,200,100,100,100,100);//所需#v4310175# 对应上面的种类

let sx = Array();



let str = "装备更换，需要#v4310175#\r\n"
str += "请把需要更换的装备放到第一格，系统自动识别可更换的装备\r\n是否需要使用功能？\r\n#r确定使用后中途取消可能会发生不友好的事情哦！";
let YN = npc.askYesNo(str);
if(YN == 1){
	let toDrop = player.getInventorySlot(1, 1);
	if(toDrop == null){
		npc.say("您的第一格装备栏没有装备！无法识别！");
	}else{
		let toDropId = toDrop.getDataId();
		let type = -1;//记录类型
		for(let i = 0; i < allEquip.length;i++){
			for(let j = 0;j<allEquip[i].length;j++){
				if(allEquip[i][j] == toDropId){
					type = i;
				}
			}
		}
		if(type == -1){
			npc.say("您的装备无法使用该功能");
		}else{
			str = "#b你想要将你的#v"+toDropId+"#换成什么呢？\r\n";
			str = "#b所需#v4310175#：#r"+YE[type]+"\r\n";
			for(let j = 0;j<allEquip[type].length;j++){
				str += "#b#L"+j+"#"+(j+1)+". 更换成 #r#v"+allEquip[type][j]+"##z"+allEquip[type][j]+"##l\r\n"
			}
			let selected = npc.askMenu(str);
			str = "#r#e下面开始选择属性！\r\n";
			str += "#n说明：请在下方输入框，输入对应属性的排序\r\n"
			str += "1=力量,2=敏捷,3=智力,4=运气\r\n"
			str += "当前装备属性为#b力量#r"+toDrop.getStr()+"#b,敏捷#r"+toDrop.getDex()+"#b,智力#r"+toDrop.getInt()+"#b,运气"+toDrop.getLuk()+"\r\n"
			str += "例如：填写4321,所获得的装备的力量将与原来运气一致,敏捷将与原来智力一致...(1,2,3,4均只能输入一次)"
			let wtype = true;
			let number;
			let numberChar;
			while(wtype){
				number = npc.askNumber(str,"1234",1234,4321).toString();
				numberChar = number.split('');
				if(number.indexOf("1") == -1 || number.indexOf("2") == -1|| number.indexOf("3") == -1|| number.indexOf("4") == -1){
					npc.say("您的输入有误，请重新输入");
					continue;
				}
				wtype = false;
			}
			let YN1 = npc.askYesNo("是否互换装备的攻击力("+toDrop.getPad()+")魔法力("+toDrop.getMad()+")?")
			str = "#b请确定所获得新装备#v"+allEquip[type][selected]+"##r#z"+allEquip[type][selected]+"##b属性:\r\n";
			str += "#r力量 : " + (numberChar[0].toString() == "1" ? toDrop.getStr():numberChar[0].toString() == "2" ? toDrop.getDex():numberChar[0].toString() == "3" ? toDrop.getInt():toDrop.getLuk());
			str += "\r\n敏捷 : " + (numberChar[1].toString() == "1" ? toDrop.getStr():numberChar[1].toString() == "2" ? toDrop.getDex():numberChar[1].toString() == "3" ? toDrop.getInt():toDrop.getLuk());
			str += "\r\n智力 : " + (numberChar[2].toString() == "1" ? toDrop.getStr():numberChar[2].toString() == "2" ? toDrop.getDex():numberChar[2].toString() == "3" ? toDrop.getInt():toDrop.getLuk());
			str += "\r\n运气 : " + (numberChar[3].toString() == "1" ? toDrop.getStr():numberChar[3].toString() == "2" ? toDrop.getDex():numberChar[3].toString() == "3" ? toDrop.getInt():toDrop.getLuk());
			if(YN1 == 1){
				str += "\r\n#r并且互换装备的攻击力("+toDrop.getPad()+")魔法力("+toDrop.getMad()+")"
			}else{
				str += "\r\n#r不互换装备的攻击力("+toDrop.getPad()+")魔法力("+toDrop.getMad()+")"
			}
			for(let i = 0;i<4;i++){
				sx[i]=numberChar[i].toString() == "1" ? toDrop.getStr():numberChar[i].toString() == "2" ? toDrop.getDex():numberChar[i].toString() == "3" ? toDrop.getInt():toDrop.getLuk();
			}
			YN = npc.askYesNo(str);
			if(YN == 1){
				if(player.hasItem(4310175,YE[type])){
					npc.say("#v4310175#不足");
				}else{
					toDrop.setItemId(allEquip[type][selected]);
					toDrop.setStr(sx[0]);
					toDrop.setDex(sx[1]);
					toDrop.setInt(sx[2]);
					toDrop.setLuk(sx[3]);
					if(YN1 == 1){
						var xxx = toDrop.getPad();
						toDrop.setPad(toDrop.getMad())
						toDrop.setMad(xxx)
					}
					player.updateItem(1, toDrop);
					player.lossItem(4310175,-YE[type])
					npc.say("更换成功！");
				}
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