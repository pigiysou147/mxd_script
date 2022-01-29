/**
* 武器更换 几里 315342975 
**/

let allEquip = Array(
//每一个数组里面代表的是一类装备，这一类装备可以相互转换，系统自动识别第一格装备
Array(
1302316,
1402237,
1312186,
1412179,
1322237,
1422186,
1432201,
1442255,
1232096,
1382246,
1372208,
1452239,
1462226,
1342099,
1332261,
1472248,
1492213,
1482203,
1532131,
1362122,
1272012,
1552103,
1542102,
1252087,
1212102,
1522125,
1242103,
1262014,
1282012,
1222096,
1582014
),//青龙武器

Array(
1302152,
1402095,
1312065,
1412065,
1322096,
1422066,
1432086,
1442116,
1232014,
1382104,
1372084,
1452111,
1462099,
1342036,
1332130,
1472122,
1492085,
1482084,
1532018,
1362019,
1272014,
1552015,
1542015,
1252014,
1212014,
1522018,
1242042,
1262015,
1282014,
1222014,
1582015
),//白虎武器

Array(
1302349,
1402265,
1312209,
1412186,
1322261,
1422194,
1432224,
1442282,
1232119,
1382271,
1372234,
1452263,
1462249,
1342109,
1332286,
1472271,
1492241,
1482229,
1532154,
1362146,
1272030,
1552126,
1542124,
1252102,
1212126,
1522149,
1242134,
1262046,
1282030,
1222119,
1582037
),//朱雀武器

Array(
1302333,
1402251,
1312199,
1412177,
1322250,
1422184,
1432214,
1442268,
1232109,
1382259,
1372222,
1452252,
1462239,
1342101,
1332274,
1472261,
1492231,
1482216,
1532144,
1362135,
1272016,
1552110,
1542108,
1252093,
1212115,
1522138,
1242120,
1262017,
1282016,
1222109,
1582017
),//玄武武器

Array(
1302343,
1402259,
1312203,
1412181,
1322255,
1422189,
1432218,
1442274,
1232113,
1382265,
1372228,
1452257,
1462243,
1342104,
1332279,
1472265,
1492235,
1482221,
1532150,
1362140,
1272017,
1552119,
1542117,
1252098,
1212120,
1522143,
1242122,
1262039,
1282017,
1222113,
1582023
),//麒麟武器

Array(
1353205 ,
1353505 ,
1353405 ,
1352807 ,
1352606 ,
1352266 ,
1352256 ,
1352246 ,
1352236 ,
1352928 ,
1353006 ,
1352975 ,
1352967 ,
1352957 ,
1352945 ,
1352935 ,
1352916 ,
1352906 ,
1352815 ,
1352707 ,
1352506 ,
1352406 ,
1352296 ,
1352286 ,
1352276 ,
1352226 ,
1352216 ,
1352206 ,
1352109 ,
1352009 ,
1342095 ,
1353105 ,
1099012 ,
1099011
),//银河副手

Array(
1302355,
1402268,
1312213,
1412189,
1322264,
1422197,
1432227,
1442285,
1232122,
1382274,
1372237,
1452266,
1462252,

1332289,
1472275,
1492245,
1482232,
1532157,
1362149,
1272040,
1552130,
1542128,
1252106,
1212129,
1522152,
1242139,
1262051,
1282040,
1222122,
1582044
) //创世武器

);

let Meso = Array(100,100,100,100,100,100,100);//所需余额 对应上面的种类

//潜能互换 在一个数组的两个潜能会发生互换 比如12%攻击力 会变成12%魔法力
let potList = Array( 
	Array(42051,40052),
	Array(32051,30052)
);

let sx = Array();

let sta = 1;// sta = 1时自动判断 额外攻击力/魔法力 并自动将最大值赋予对应的物理魔法武器



let str = "#e#r武器转职介绍：\r\n"
str += "#k1.把需要更换的武器放到第一格#b(点击YES自动识别)\r\n";
str += "#k2.转职需要花费#r100#k余额\r\n";
str += "#k3.使用后装备的初始值会变为新装备的初始值\r\n  (额外属性不变，包括：破功，潜能，星之力)\r\n";
str += "#k4.系统自动识别物理系/魔法系武器,并且做以下操作\r\n";
if(sta == 1){
	str += "#d原潜能为12%攻击力，如果转职的武器是魔法系，系统将自动改为12%魔法攻击力，其他潜能（包括四维）不变。\r\n\r\n";
	str += "#d原潜能为12%魔法攻击力，如果转职的武器是物理系，系统将自动改为12%攻击力，其他潜能（包括四维）不变。\r\n";
	str += "#k仅支持【五行修炼】-【银河副手】-【创世武器】系列\r\n";

	/*str += "#r #r4.1自动将额外攻击/魔法力其中最大值赋予对应武器所需\r\n";
	str += "#b  例如原武器为法系武器,额外攻击力50,额外魔法力80.转换为物理系武器.则会变为额外攻击力80,额外魔法力50\r\n";
	str += "#r #r4.2自动将9%/12%的攻击力/魔法力潜能进行互换\r\n";
	str += "#b   当原来武器和新武器的派系不同时才会进行更换(如法系武器转为物理系)\r\n"
	str += "#b  例如原武器潜能为9%攻击力,12%攻击力,9%魔法力,则新武器则为9%魔法力,12%魔法力,9%攻击力\r\n";
}else{
	str += "#r #r4.1自动将9%/12%的攻击力/魔法力潜能进行互换\r\n";
	str += "#b  当原来武器和新武器的派系不同时才会进行更换(如法系武器转为物理系)\r\n"
	str += "#b  例如原武器潜能为9%攻击力,12%攻击力,9%魔法力,则新武器则为9%魔法力,12%魔法力,9%攻击力\r\n";*/
}
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
					
					//判断是物理武器还是魔法武器
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
						//判断是否自动更换额外攻击魔法力 只有武器类型不一样才会换
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