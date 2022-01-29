/*
QQ:423283141
*/
var status = 0;
var typed = 0;
var itemUsed = Array(
	Array(4001326, 1),
	Array(4001327, 2),
	Array(4001328, 3),
	Array(4001329, 1),
	Array(4001330, 2),
	Array(4001331, 3)

);

var potList = Array(

	Array(60002, 60, "20%所有属性"), //
	Array(42650, 90, "5%金钱掉落"), //
	
	Array(40051, 60, "12%攻击力"), //
	Array(40052, 60, "12%魔法攻击力"), //
	Array(40603, 60, "40%BOSS伤害"), //
	Array(40292, 60, "40%无视怪物防御力"), //
	Array(40041, 100, "12%力量"), //
	Array(40042, 100, "12%敏捷"), //
	Array(40043, 100, "12%智力"), //
	Array(40044, 100, "12%运气"), //
	Array(40045, 100, "12%maxHP"), //
	Array(40046, 100, "12%maxMp"), //
	Array(40047, 90, "12%命中率"), //
	Array(40055, 90, "12%暴击率") //

);
var banList=Array(

);
potId = 0;

//拿到第一件装备
var item = player.getInventorySlot(1, 1);
var txt = "#r亲爱的 #h ##k 您好 欢迎使用#r大蜡笔系统#k \r\n";
txt += "在这里您可以使用小蜡笔一键 #rSS#k 潜能功能\r\n";

for(var i = 0; i <= 5; i++) {
	txt += "#L" + i + "# 使用 #v" + itemUsed[i] + "# 可以修改第#r" + (i + 1) + "条潜能#k #l \r\n";
}
let number = npc.askMenuS(txt);
var text = "您选择了使用#v" + itemUsed[number] + "# 来修改第" + (number + 1) + "条潜能 \r\n";
if(item == null) {
	text += "#r您当前没有选择装备 请把要强化的装备放到装备栏的第一格！！！#k\r\n"
} else if(item.getData().isCash()) {
	npc.say("蜡笔系统不可以对点装使用哦~");
} else {
	text += "您当前选择的装备为 :#v" + item.getDataId() + "# 请确认是否为您选择的装备！！！\r\n";

	text += "#b如果确认无误请点是  点击否可以退出本次强化#k\r\n";
	text += "选择后将会随机以下其中一条潜能:\r\n";
	for(var i = 0; i < potList.length; i++) {
		text += "#r" + potList[i][2] + "\r\n"
	}

	let sel = npc.askYesNoS(text);
	if(sel == 1) {

		var chance = Math.floor(Math.random() * 100);
		var finalitem = Array();
		for (var i = 0; i < potList.length; i++) {
			if (potList[i][1] >= chance) {
				finalitem.push(potList[i]);
			}
		}
		if (finalitem.length == 0) {
			var potId = 40042;
		}
		var random = new java.util.Random();
		var finalchance = random.nextInt(finalitem.length);
		var potId = finalitem[finalchance][0];
		//点击是
		//如果装备没有潜能 必须先设置装备的潜能属性的等级  
		if(player.getAmountOfItem(itemUsed[number][0]) < 1) {
			npc.say("你没有#v" + itemUsed[number][0] + "#");
		} else {
			
			item.setGrade(20);
			if(number < 3) {
				//如果装备没有潜能 必须先设置装备的潜能属性的等级  
			
				//cm.changePotential(1, number+1, potId, false) 
				item.setPotential(potId,itemUsed[number][1],  false);
			} else {
				//如果装备没有潜能 必须先设置装备的潜能属性的等级  
				//cm.changePotential(1, number+1, potId, false) 
				item.setPotential(potId,itemUsed[number][1],  true);
			}
			player.loseItem(itemUsed[number][0], 1);
			player.updateItem(1, item);
			npc.say("潜能修改成功");
		}

	}
}