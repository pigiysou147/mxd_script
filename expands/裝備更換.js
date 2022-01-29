/**
* 裝備更換（自主選擇屬性）  QQ:739977676 
**/

let allEquip = Array(
	//每一個數組里面代表的是一類裝備，這一類裝備可以相互轉換，系統自動識別第一格裝備
	Array(1004808,1004809,1004810,1004811,1004812),//神秘之影帽
	Array(1073158,1073159,1073160,1073161,1073162),//神秘之影鞋
	Array(1053063,1053064,1053065,1053066,1053067),//神秘之影套裝
	Array(1102940,1102941,1102942,1102943,1102944),//神秘之影披風
	Array(1082695,1082696,1082697,1082698,1082699),//神秘之影手套
	Array(1152196,1152197,1152198,1152199,1152200)//神秘之影護肩
);
let YE = Array(10,20,30,40,50,60);//所需余額 對應上面的種類

let sx = Array();



let str = "裝備更換，需要余額\r\n"
str += "請把需要更換的裝備放到第一格，系統自動識別可更換的裝備\r\n是否需要使用功能？\r\n#r確定使用后中途取消可能會發生不友好的事情哦！";
let YN = npc.askYesNo(str);
if(YN == 1){
	let toDrop = player.getInventorySlot(1, 1);
	if(toDrop == null){
		npc.say("您的第一格裝備欄沒有裝備！無法識別！");
	}else{
		let toDropId = toDrop.getDataId();
		let type = -1;//記錄類型
		for(let i = 0; i < allEquip.length;i++){
			for(let j = 0;j<allEquip[i].length;j++){
				if(allEquip[i][j] == toDropId){
					type = i;
				}
			}
		}
		if(type == -1){
			npc.say("您的裝備無法使用該功能");
		}else{
			str = "#b你想要將你的#v"+toDropId+"#換成什麼呢？\r\n";
			str = "#b所需余額：#r"+YE[type]+"\r\n";
			for(let j = 0;j<allEquip[type].length;j++){
				str += "#b#L"+j+"#"+(j+1)+". 更換成 #r#v"+allEquip[type][j]+"##z"+allEquip[type][j]+"##l\r\n"
			}
			let selected = npc.askMenu(str);
			str = "#r#e下面開始選擇屬性！\r\n";
			str += "#n說明：請在下方輸入框，輸入對應屬性的排序\r\n"
			str += "1=力量,2=敏捷,3=智力,4=運氣\r\n"
			str += "當前裝備屬性為#b力量#r"+toDrop.getStr()+"#b,敏捷#r"+toDrop.getDex()+"#b,智力#r"+toDrop.getInt()+"#b,運氣"+toDrop.getLuk()+"\r\n"
			str += "例如：填寫4321,所獲得的裝備的力量將與原來運氣一致,敏捷將與原來智力一致...(1,2,3,4均只能輸入一次)"
			let wtype = true;
			let number;
			let numberChar;
			while(wtype){
				number = npc.askNumber(str,"1234",1234,4321).toString();
				numberChar = number.split('');
				if(number.indexOf("1") == -1 || number.indexOf("2") == -1|| number.indexOf("3") == -1|| number.indexOf("4") == -1){
					npc.say("您的輸入有誤，請重新輸入");
					continue;
				}
				wtype = false;
			}
			let YN1 = npc.askYesNo("是否互換裝備的攻擊力("+toDrop.getPad()+")魔法力("+toDrop.getMad()+")?")
			str = "#b請確定所獲得新裝備#v"+allEquip[type][selected]+"##r#z"+allEquip[type][selected]+"##b屬性:\r\n";
			str += "#r力量 : " + (numberChar[0].toString() == "1" ? toDrop.getStr():numberChar[0].toString() == "2" ? toDrop.getDex():numberChar[0].toString() == "3" ? toDrop.getInt():toDrop.getLuk());
			str += "\r\n敏捷 : " + (numberChar[1].toString() == "1" ? toDrop.getStr():numberChar[1].toString() == "2" ? toDrop.getDex():numberChar[1].toString() == "3" ? toDrop.getInt():toDrop.getLuk());
			str += "\r\n智力 : " + (numberChar[2].toString() == "1" ? toDrop.getStr():numberChar[2].toString() == "2" ? toDrop.getDex():numberChar[2].toString() == "3" ? toDrop.getInt():toDrop.getLuk());
			str += "\r\n運氣 : " + (numberChar[3].toString() == "1" ? toDrop.getStr():numberChar[3].toString() == "2" ? toDrop.getDex():numberChar[3].toString() == "3" ? toDrop.getInt():toDrop.getLuk());
			if(YN1 == 1){
				str += "\r\n#r並且互換裝備的攻擊力("+toDrop.getPad()+")魔法力("+toDrop.getMad()+")"
			}else{
				str += "\r\n#r不互換裝備的攻擊力("+toDrop.getPad()+")魔法力("+toDrop.getMad()+")"
			}
			for(let i = 0;i<4;i++){
				sx[i]=numberChar[i].toString() == "1" ? toDrop.getStr():numberChar[i].toString() == "2" ? toDrop.getDex():numberChar[i].toString() == "3" ? toDrop.getInt():toDrop.getLuk();
			}
			YN = npc.askYesNo(str);
			if(YN == 1){
				if(getHyPay(1) < YE[type]){
					npc.say("余額不足");
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
					gainHyPay(-YE[type])
					npc.say("更換成功！");
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