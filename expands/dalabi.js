/*
QQ:423283141
*/
var status = 0;
var typed = 0;
var itemUsed = Array(
	Array(4001332, 1),
	Array(4001332, 2),
	Array(4001332, 3),
	Array(4001332, 1),
	Array(4001332, 2),
	Array(4001332, 3)

);

var potList = Array(

	Array(40603, "40%BOSS伤害", 1),
	Array(40051, "12%攻击力", 1),
	Array(60002, "20%所有属性", 1),
	Array(40052, "12%魔法攻击力", 1),
	Array(40650, "金币获取量+20%", 2),
	Array(60059, "最大血量+20%", 2),
	Array(40055, "12%暴击率", 1));

potId = 0;

//拿到第一件装备
var item = player.getInventorySlot(1, 1);
var txt = "#r亲爱的 #h ##k 您好 欢迎使用#r大蜡笔系统#k \r\n";
txt += "在这里您可以使用大蜡笔一键 #rSS#k 潜能功能\r\n";

for(var i = 0; i <= 5; i++) {
	txt += "#L" + i + "# 使用 #v" + itemUsed[i] + "# 可以修改第#r" + (i + 1) + "条潜能#k #l \r\n";
}
let number = npc.askMenuS(txt);
var text = "您选择了使用#v" + itemUsed[number] + "# 来修改第" + (number + 1) + "条潜能 \r\n";
if(item == null) {
	text += "#r您当前没有选择装备 请把要强化的装备放到装备栏的第一格！！！#k\r\n"
}else if(item.getData().isCash()){
	npc.say("蜡笔系统不可以对点装使用哦~");
} else {
	text += "您当前选择的装备为 :#v" + item.getDataId() + "# 请确认是否为您选择的装备！！！\r\n";
	text += "如果确认无误请点是  点击否可以退出本次强化\r\n";
	let sel = npc.askYesNoS(text );
	if(sel == 1) {

		var txt = "请选择想要强化的潜能:\r\n";
		for(var i = 0; i < potList.length; i++) {
			txt += "#L" + i + "#" + potList[i][1] + "#l\r\n";
		}
		let qianneng = npc.askMenuS(txt);

		potId = potList[qianneng][0];
		
		var name =potList[qianneng][1];
		var qua=potList[qianneng][2];
		var text = "请确认您的选择:\r\n";
		text += "你将要消耗掉 " +qua+ "个 #v" + itemUsed[number][0] + "# 来强化 #v" + item.getDataId() + "# 改变的是该物品的第" + (number + 1) + "条潜能\r\n";
		text += "改变之后的潜能为 :" + potList[qianneng][1] + "\r\n";
		text += "#r如果确定请点是 退出请点否#k\r\n";
		let chooose = npc.askYesNoS(text);
		if(chooose == 1) {
			//点击是
			//如果装备没有潜能 必须先设置装备的潜能属性的等级  
			if(player.getAmountOfItem(itemUsed[number][0]) < qua) {
				npc.say("你没有#v" + itemUsed[number][0] + "# X "+qua);
			} else {
				
				
				if(40650==potId && number>=3){
					npc.say("当前潜能不能应用于附加潜能上.");
				}else{
					item.setGrade(20);
					if(number < 3) {
						//如果装备没有潜能 必须先设置装备的潜能属性的等级  
						item.setPotential(potId,itemUsed[number][1],  false);
					} else {
						item.setPotential(potId,itemUsed[number][1],  true);
					}
					player.loseItem(itemUsed[number][0], qua);
					player.updateItem(1, item);
					npc.broadcastGachaponMsgEx("[蜡笔系统] : 恭喜大佬 "+player.getName()+" 对装备使用了蜡笔修改了超厉害的潜能   ("+name+")，大家快来围观啊",item);
					npc.broadcastWeatherEffectNotice(2,"[蜡笔系统] : 恭喜大佬 "+player.getName()+" 对装备使用了蜡笔修改了超厉害的潜能   ("+name+")，大家快来围观啊",10000);
					
					npc.say("潜能修改成功");
				}
				
			}

		}
	}
}
