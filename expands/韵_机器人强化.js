var needList = Array(

	Array(3994979, 20),
	Array(2431190, 1),
	Array(4033356, 20)
);

var itemIdList = Array(
1662151,
1662150,
1662149,
1662148,
1662147,
1662146,
1662145,
1662141,
1662140,
1662133,
1662132,
1662117,
1662118,
1662119,
1662120,
1662121,
1662122,
1662123,
1662124,
1662091,
1662090,
1662110,
1662109,
1662108,
1662107,
1662103,
1662102,
1662101,
1662100,
1662099,
1662098,
1662097,
1662096,
1662095,
1662094,
1662087,
1662086,
1662085,
1662084,
1662075,
1662074,
1662072,
1662073,
1662054,
1662061,
1662060,
1662038,
1662037,
1662034,
1662033,
1666000,
1662059,
1662139,
1662131,
1662130,
1662129,
1662128,
1662127,
1662126,
1662125,
1662116,
1662115,
1662114,
1662111,
1662093,
1662092,
1662089,
1662088,
1662083,
1662082,
1662077,
1662071,
1662070,
1662069,
1662068,
1662067,
1662066,
1662065,
1662064,
1662053,
1662046,
1662044,
1662043,
1662041,
1662039,
1662036,
1662035,
1662032,
1662027,
1662026,
1662025,
1662024,
1662022,
1662021,
1662020,
1662019,
1662018,
1662017,
1662016,
1662015,
1662014,
1662013,
1662012,
1662011,
1662010,
1662009,
1662008,
1662007,
1662006,
1662005,
1662004,
1662003,
1662002,
1662001,
1662000
);

var qianneng = Array(
	Array(60001, "总伤害:+12%"),
    Array(40055, "暴击率:+12%"),
    Array(40292, "无视怪物40%的防御率"),
    Array(42051, "攻击力：+6%"),
    Array(40052, "魔法攻击：+6%"),
    Array(40603, "攻击BOSS时伤害：+40%")
);
var selStr = "#e#r只要你给我以下材料:#l\r\n";
for(var i = 0; i < needList.length; i++) {
	selStr += "#v" + needList[i][0] + "#x" + needList[i][1];
}
selStr += "\r\n#e#r,我可以帮您的指定装备的指定位置加上一条随机的潜能。\r\n\r\n";
selStr += "\r\n#e#r,目前可以使用该功能的机器人有:\r\n\r\n";
for(var i = 0; i < itemIdList.length; i++) {
	selStr+="#v" + itemIdList[i] + "#"
}

selStr += "请把要强化的机器人放在装备栏的第一格。";

let s = npc.askYesNo(selStr);
if(s == 1) {
	var item = player.getInventorySlot(1, 1);
	var flag = 0;
	var name =item.getItemName();

	if(item == null) {
		npc.say("第一个格子的装备为空~");
	} else if(name.indexOf("机器")==-1) {
		npc.say("该装备不是可以用来特定强化的哦~ 装备名字为:"+name);
	} else {
		var txt = "请选择要上潜能的位置~\r\n\r\n";
		for(var i = 1; i <= 6; i++) {
			txt += "#L" + i + "# 选择随机第 " + i + " 条潜能  #l\r\n";
		}
		let selection = npc.askMenu(txt);

		var txt = "请确定你选择的潜能位置为 ： 第" + selection + "条";
		let sel = npc.askYesNo(txt);
		if(sel == 1) {
			var flag = 1;
			for(var i = 0; i < needList.length; i++) {
				if(!player.hasItem(needList[i][0], needList[i][1]))
					flag = 0
			}
			if(flag == 1) {

				var number = Math.floor(Math.random() * qianneng.length);
				var name = qianneng[number][1];
				var optionId = qianneng[number][0];
				//设置潜能等级
				item.setGrade(20);

				//设置潜能
				var qianghua = 1;
				if(selection == 1) {

					item.setOption(1, optionId, false);

				} else if(selection == 2) {
					if(item.getOption(1, false) > 0) {
						item.setOption(2, optionId, false);
					} else {
						qianghua = 0;
					}

				} else if(selection == 3) {
					if(item.getOption(2, false) > 0) {
						item.setOption(3, optionId, false);
					} else {
						qianghua = 0;
					}

				} else if(selection == 4) {
					if(item.getOption(3, false) > 0) {
						item.setOption(1, optionId, true);
					} else {
						qianghua = 0;
					}

				} else if(selection == 5) {
					if(item.getOption(1, true) > 0) {
						item.setOption(2, optionId, true);
					} else {
						qianghua = 0;
					}

				} else if(selection == 6) {
					if(item.getOption(2, true) > 0) {
						item.setOption(3, optionId, true);
					} else {
						qianghua = 0;
					}

				}
				if(qianghua == 0) {
					npc.say("请先开启上一条潜能");
				} else {
					player.updateItem(1, item)
					for(var i = 0; i < needList.length; i++) {
						player.loseItem(needList[i][0], needList[i][1]);
					}
					npc.say("你获得的潜能为: " + name);
				}

			} else {
				npc.say("你的材料不够哦,请检查一下！");
			}
		}

	}
}