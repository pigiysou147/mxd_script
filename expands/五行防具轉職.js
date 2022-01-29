/**
* 防具更换 几里 315342975 
**/

let allEquip = Array(
//每一个数组里面代表的是一类装备，这一类装备可以相互转换，系统自动识别第一格装备
Array(
1004234,
1004235,
1004236,
1004237,
1004238
),//青龙防具(帽子)
Array(
1052804,
1052805,
1052806,
1052807,
1052808
),//青龙防具(套服)
Array(
1102713,
1102714,
1102715,
1102716,
1102717
),//青龙防具(披风)
Array(
1152149,
1152150,
1152151,
1152152,
1152116
),//青龙防具(肩章)
Array(
1082613,
1082614,
1082615,
1082616,
1082617
),//青龙防具(手套)
Array(
1072972,
1072973,
1072974,
1072975,
1072976
),//青龙防具(鞋子)

Array(
1003172,
1003173,
1003174,
1003175,
1003176
),//白虎防具(帽子)
Array(
1052314,
1052315,
1052316,
1052317,
1052318
),//白虎防具(套服)
Array(
1102275,
1102276,
1102277,
1102278,
1102279
),//白虎防具(披风)
Array(
1152108,
1152110,
1152111,
1152112,
1152113
),//白虎防具(肩章)
Array(
1082295,
1082296,
1082297,
1082298,
1082299
),//白虎防具(手套)
Array(
1072485,
1072486,
1072487,
1072488,
1072489
),//白虎防具(鞋子)

Array(
1003601,
1003603,
1003602,
1003604,
1003605
),//朱雀防具(帽子)
Array(
1052509,
1052511,
1052510,
1052512,
1052513
),//朱雀防具(套服)
Array(
1102456,
1102458,
1102457,
1102459,
1102460
),//朱雀防具(披风)
Array(
1152094,
1152096,
1152095,
1152097,
1152098
),//朱雀防具(肩章)
Array(
1082472,
1082474,
1082473,
1082475,
1082476
),//朱雀防具(手套)
Array(
1072711,
1072713,
1072712,
1072714,
1072715
),//朱雀防具(鞋子)

Array(
1004422,
1004423,
1004424,
1004425,
1004426
),//玄武防具(帽子)
Array(
1052882,
1052887,
1052888,
1052889,
1052890
),//玄武防具(套服)
Array(
1102775,
1102794,
1102795,
1102796,
1102797
),//玄武防具(披风)
Array(
1152174,
1152176,
1152177,
1152178,
1152179
),//玄武防具(肩章)
Array(
1082636,
1082637,
1082638,
1082639,
1082640
),//玄武防具(手套)
Array(
1073030,
1073032,
1073033,
1073034,
1073035
),//玄武防具(鞋子)

Array(
1004808,
1004809,
1004810,
1004811,
1004812
),//玄武防具(帽子)
Array(
1053063,
1053064,
1053065,
1053066,
1053067
),//玄武防具(套服)
Array(
1102940,
1102941,
1102942,
1102943,
1102944
),//玄武防具(披风)
Array(
1152196,
1152197,
1152198,
1152199,
1152200
),//玄武防具(肩章)
Array(
1082695,
1082696,
1082697,
1082698,
1082699
),//玄武防具(手套)
Array(
1073158,
1073159,
1073160,
1073161,
1073162
) //玄武防具(鞋子)

);

let Meso = Array(50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50);//所需余额 对应上面的种类

//潜能互换 在一个数组的两个潜能会发生互换 比如12%攻击力 会变成12%魔法力
let potList = Array( 
	Array(42051,40052),
	Array(32051,30052)
);

let sx = Array();

let sta = 1;// sta = 1时自动判断 额外攻击力/魔法力 并自动将最大值赋予对应的物理魔法防具



let str = "#e#r防具转职介绍：\r\n"
str += "#k1.把需要更换的防具放到第一格#b(点击YES自动识别)\r\n";
str += "#k2.转职需要花费#r50#k余额,仅支持【五行修炼】防具系列\r\n";
str += "#k3.使用后装备的初始值会变为新装备的初始值\r\n  (额外属性不变，包括：潜能，星之力)\r\n";
//str += "#k4.系统自动识别物理系/魔法系防具,并且做以下操作\r\n";
//if(sta == 1){
	//str += "#d原潜能为12%攻击力，如果转职的防具是魔法系，系统将自动改为12%魔法攻击力，其他潜能（包括四维）不变。\r\n\r\n";
	//str += "#d原潜能为12%魔法攻击力，如果转职的防具是物理系，系统将自动改为12%攻击力，其他潜能（包括四维）不变。\r\n";

	/*str += "#r #r4.1自动将额外攻击/魔法力其中最大值赋予对应防具所需\r\n";
	str += "#b  例如原防具为法系防具,额外攻击力50,额外魔法力80.转换为物理系防具.则会变为额外攻击力80,额外魔法力50\r\n";
	str += "#r #r4.2自动将9%/12%的攻击力/魔法力潜能进行互换\r\n";
	str += "#b   当原来防具和新防具的派系不同时才会进行更换(如法系防具转为物理系)\r\n"
	str += "#b  例如原防具潜能为9%攻击力,12%攻击力,9%魔法力,则新防具则为9%魔法力,12%魔法力,9%攻击力\r\n";
}else{
	str += "#r #r4.1自动将9%/12%的攻击力/魔法力潜能进行互换\r\n";
	str += "#b  当原来防具和新防具的派系不同时才会进行更换(如法系防具转为物理系)\r\n"
	str += "#b  例如原防具潜能为9%攻击力,12%攻击力,9%魔法力,则新防具则为9%魔法力,12%魔法力,9%攻击力\r\n";
}*/
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
			let oldDrop = player.makeItemWithId(toDropId);
			str = "#b你想要将你的#v"+toDropId+"#换成什么呢？\r\n";
			str = "#b所需余额：#r"+Meso[type]+"\r\n";
			for(let j = 0;j<allEquip[type].length;j++){
				if(toDropId != allEquip[type][j])
					str += "#b#L"+j+"#"+(j+1)+". 更换成 #r#v"+allEquip[type][j]+"##z"+allEquip[type][j]+"##l\r\n"
			}
			let selected = npc.askMenu(str);
			/*
			str = "#r#e下面开始选择额外属性！\r\n";
			str += "#n说明：请在下方输入框，输入对应《额外》属性的排序\r\n"
			str += "1=额外力量,2=额外敏捷,3=额外智力,4=额外运气\r\n"
			str += "当前装备额外属性为#b力量#r"+(toDrop.getStr()-oldDrop.getStr())+"#b,敏捷#r"+(toDrop.getDex()-oldDrop.getDex())+"#b,智力#r"+(toDrop.getInt()-oldDrop.getInt())+"#b,运气#r"+(toDrop.getLuk()-oldDrop.getLuk())+"\r\n"
			str += "例如：填写4321,所获得的装备的额外力量将与原来额外运气一致,额外敏捷将与原来额外智力一致...(1,2,3,4均只能输入一次)"
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
			*/
			let	number = "1234";
			let	numberChar = number.split('');
			str = "#b请确定所获得新装备#v"+allEquip[type][selected]+"##r#z"+allEquip[type][selected]+"##b额外属性:\r\n";
			//str += "#r力量 : " + (numberChar[0].toString() == "1" ? (toDrop.getStr()-oldDrop.getStr()):numberChar[0].toString() == "2" ? (toDrop.getDex()-oldDrop.getDex()):numberChar[0].toString() == "3" ? (toDrop.getInt()-oldDrop.getInt()):(toDrop.getLuk()-oldDrop.getLuk()));
			//str += "\r\n敏捷 : " + (numberChar[1].toString() == "1" ? (toDrop.getStr()-oldDrop.getStr()):numberChar[1].toString() == "2" ? (toDrop.getDex()-oldDrop.getDex()):numberChar[1].toString() == "3" ? (toDrop.getInt()-oldDrop.getInt()):(toDrop.getLuk()-oldDrop.getLuk()));
			//str += "\r\n智力 : " + (numberChar[2].toString() == "1" ? (toDrop.getStr()-oldDrop.getStr()):numberChar[2].toString() == "2" ? (toDrop.getDex()-oldDrop.getDex()):numberChar[2].toString() == "3" ? (toDrop.getInt()-oldDrop.getInt()):(toDrop.getLuk()-oldDrop.getLuk()));
			//str += "\r\n运气 : " + (numberChar[3].toString() == "1" ? (toDrop.getStr()-oldDrop.getStr()):numberChar[3].toString() == "2" ? (toDrop.getDex()-oldDrop.getDex()):numberChar[3].toString() == "3" ? (toDrop.getInt()-oldDrop.getInt()):(toDrop.getLuk()-oldDrop.getLuk()));
			for(let i = 0;i<4;i++){
				sx[i]=numberChar[i].toString() == "1" ? (toDrop.getStr()-oldDrop.getStr()):numberChar[i].toString() == "2" ? (toDrop.getDex()-oldDrop.getDex()):numberChar[i].toString() == "3" ? (toDrop.getInt()-oldDrop.getInt()):(toDrop.getLuk()-oldDrop.getLuk());
			}
			
			YN = npc.askYesNo(str);
			if(YN == 1){
				if(getHyPay(1) < Meso[type]){
					npc.say("余额不足");
				}else{
					let newDrop = player.makeItemWithId(allEquip[type][selected]);
					
					
					toDrop.setItemId(allEquip[type][selected]);
					toDrop.setStr(newDrop.getStr() + sx[0]); 
					toDrop.setDex(newDrop.getDex() + sx[1]); 
					toDrop.setInt(newDrop.getInt() + sx[2]); 
					toDrop.setLuk(newDrop.getLuk() + sx[3]); 
					//toDrop.setMad(newDrop.getMad() + toDrop.getMad() - oldDrop.getMad());
					//toDrop.setPad(newDrop.getPad() + toDrop.getPad() - oldDrop.getPad());
					
					//判断是物理防具还是魔法防具
					var oldEquipType = oldDrop.getMad() > oldDrop.getPad() ? 2:1;//1=物理 2=魔法
					var newEquipType = newDrop.getMad() > newDrop.getPad() ? 2:1;//1=物理 2=魔法
					if(oldEquipType != newEquipType){
						//只有类型不相等才更换 12攻击转换成12mofa
						//npc.say("需要转换潜能")
						for(var i = 1;i<=6;i++){
							//npc.say("第"+i+"个")
							var d = i;
							if(d>3){
								d = d-3;
							}
							var potId = 0;
							if(i>3){
								potId = toDrop.getOption(d,true);
							}else{
								potId = toDrop.getOption(d,false);
							}
							var eee = 0;
							for(var j = 0;j<potList.length;j++){
								var index1 = potList[j].indexOf(potId);
								//npc.say("开始搜索代码"+index1)
								if(index1 != -1){
									index1 = (index1 == 1?0:1);
									if(i>3){
										toDrop.setOption(d,potList[j][index1],true);
									}else{
										toDrop.setOption(d,potList[j][index1],false);
									}
									//npc.say("转换成功")
									eee = 1;
									break;
								}
							}
							if(eee == 1){
								continue;
							}else{
								//npc.say(i+"没有转换成功")
							}
						}
						//判断是否自动更换额外攻击魔法力 只有防具类型不一样才会换
						if(sta == 1){
							//npc.say("自动转")
							var mad = toDrop.getMad() - oldDrop.getMad()
							var pad = toDrop.getPad() - oldDrop.getPad()
							var max = (mad > pad ? mad : pad);
							var min = (mad > pad ? pad : mad);
							if(newEquipType == 1){
								toDrop.setPad(newDrop.getPad()+max);
								toDrop.setMad(newDrop.getMad()+min);
							}else{
								toDrop.setMad(newDrop.getMad()+max);
								toDrop.setPad(newDrop.getPad()+min);
							}
						}
					}else{
						var mad = toDrop.getMad() - oldDrop.getMad()
						var pad = toDrop.getPad() - oldDrop.getPad()
						toDrop.setPad(newDrop.getPad()+pad);
						toDrop.setMad(newDrop.getMad()+mad);
					}
		
					/*
					toDrop.setStr(100); 
					toDrop.setDex(200); 
					toDrop.setInt(300); 
					toDrop.setLuk(400); 
					toDrop.setMad(500);
					toDrop.setPad(600);
					*/
					toDrop.setAttribute(1);
					player.updateItem(1, toDrop);
					gainHyPay(- Meso[type]);
					//player.loseMesos(Meso[type]);
					//npc.say("老的是:"+oldEquipType+"  新的是+"+newEquipType)
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