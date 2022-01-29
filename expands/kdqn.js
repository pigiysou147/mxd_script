var needList = Array(
	Array(4000313, 60),
	Array(2431190, 1),
	Array(4033356, 20)
);

var itemId = 1190301;

var qianneng = Array(
	Array(40041, "力量12%"),
	Array(40041, "力量12%"),
	Array(40042, "敏捷12%"),
	Array(40042, "敏捷12%"),
	Array(40044, "运气12%"),
	Array(40044, "运气12%"),
	Array(30052, "9%魔法攻击力"),
	Array(30051, "9%攻击力"),
	Array(42087 , "9%所有属性"),
	Array(40601 , "BOSS伤30%"),
	Array(40043, "智力12%"),
	Array(40043, "智力12%")
);
var selStr = "#e#r只要你给我以下材料:#l\r\n";
for(var i = 0; i < needList.length; i++) {
	selStr += "#v" + needList[i][0] + "#x" + needList[i][1];
}
selStr += "\r\n#e#r,我可以帮您的#v" + 1190301 + "##z" + 1190301 + "#"+"#v" + 1162032 + "##z" + 1162032 + "#"+"#v" + 1162035 + "##z" + 1162035 + "#"+"#v" + 1162037 + "##z" + 1162037 + "#"+"#v" + 1162071 + "##z" + 1162071 + "#";
selStr+="\r\n的指定位置加上一条随机的潜能。\r\n\r\n";

selStr += "请把要强化的装备放在装备栏的第一格。";

let s = npc.askYesNo(selStr);
if(s == 1) {
	var item = player.getInventorySlot(1, 1);
	if(item == null) {
		npc.say("第一个格子的装备为空~");
	} else if(item.getDataId() != 1162071) {
		npc.say("请把#v1162071# 放在装备栏的第一格。");
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