/*
QQ:423283141
*/
var status = 0;
var typed = 0;
var itemUsed = Array(
	Array(4001119, 1),
	Array(4001119, 2),
	Array(4001119, 3),
	Array(4001119, 1),
	Array(4001119, 2),
	Array(4001119, 3)

);

var potList = Array(

	Array(40557, "所有技能的冷却时间-2s", 1),
	Array(40557, "所有技能的冷却时间-2s", 1)
	);

potId = 0;

//拿到第一件装备
var item = player.getInventorySlot(6, 1);
var txt = "#r亲爱的 #h ##k 您好 欢迎使用#r时装CD潜能#k \r\n";
txt += "在这里您可以使用CD时装碎片对点装附加CD潜能\r\n";
txt +="#L999##v4001118# X 100 航海图碎片兑换#v4001119#  x 1#l\r\n";
for(var i = 0; i <= 5; i++) {
	txt += "#L" + i + "# 使用 #v" + itemUsed[i] + "# 可以修改第#r" + (i + 1) + "条潜能#k #l \r\n";
}
let number = npc.askMenuS(txt);

if(number==999){
	let total = npc.askNumber("#r#e你当前拥有的航海碎片为："+player.getAmountOfItem(4001118)+"个\r\n请输入要兑换的航海图数量,兑换比例:\r\n #v4001118# X 100 兑换  #v4001119#  x 1",1,1,player.getAmountOfItem(4001118)/100);
	if(player.getFreeSlots(3)<total){
		npc.say("请整理背包");
	}else{
		player.loseItem(4001118,total*100);
		player.gainItem(4001119,total);
		
		npc.say("兑换成功,你获得了#v4001119#  x "+total+",总共消耗了 #v4001119#  x "+total*100);
		
	}
	
	
}else{
	
	var text = "您选择了使用#v" + itemUsed[number] + "# 来修改第" + (number + 1) + "条潜能 \r\n";
	if(item == null) {
		text += "#r您当前没有选择装备 请把要强化的装备放到装备栏的第一格！！！#k\r\n"
	}else if(!item.getData().isCash()){
		npc.say("时装潜能系统只可以对点装使用哦~");
	}else if(parseInt(item.getDataId()/100000)==18){
		npc.say("时装潜能系统不可以对宠物装备使用~");
	} else {
		text += "您当前选择的装备为 :#v" + item.getDataId() + "# 请确认是否为您选择的装备！！！\r\n";
		text += "如果确认无误请点是  点击否可以退出本次强化\r\n";
		let sel = npc.askYesNoS(text );
		if(sel == 1) {

			var txt = "请选择想要强化的潜能:\r\n";
			for(var i = 0; i < 1; i++) {
				txt += "#L" + i + "#" + potList[i][1] + "#l\r\n";
			}
			let qianneng = npc.askMenuS(txt);

			potId = potList[qianneng][0];
			
			var name =potList[qianneng][1];
			var text = "请确认您的选择:\r\n";
			text += "你将要消耗掉 "+potList[qianneng][2]+"个 #v" + itemUsed[number][0] + "# 来强化 #v" + item.getDataId() + "# 改变的是该物品的第" + (number + 1) + "条潜能\r\n";
			text += "改变之后的潜能为 :" + potList[qianneng][1] + "\r\n";
			text += "#r如果确定请点是 退出请点否#k\r\n";
			let chooose = npc.askYesNoS(text);
			if(chooose == 1) {
				//点击是
				//如果装备没有潜能 必须先设置装备的潜能属性的等级  
				if(player.getAmountOfItem(itemUsed[number][0]) < potList[qianneng][2]) {
					npc.say("你没有#v" + itemUsed[number][0] + "# X "+potList[qianneng][2]);
				} else {
					if(number < 3) {
						//如果装备没有潜能 必须先设置装备的潜能属性的等级  
						item.setGrade(0x14);
						item.setOption(itemUsed[number][1], potId, false);
						player.loseItem(itemUsed[number][0], potList[qianneng][2]);
						player.updateItem(1, item);
						npc.broadcastGachaponMsgEx("[时装CD潜能]: 伟大的航海家 "+player.getName()+" 打开了航海宝藏,发现一条极为珍贵的潜能  ("+name+")，大家快来围观啊",item)
						npc.broadcastWeatherEffectNotice(2,"[时装CD潜能]: 伟大的航海家 "+player.getName()+" 打开了航海宝藏,发现一条极为珍贵的潜能  ("+name+")，大家快来围观啊",10000);
						
						npc.say("潜能修改成功");
						
					} else {
						if(potId==40650){
							npc.say("该潜能不能应用于附加潜能");
						}else{
							
							//如果装备没有潜能 必须先设置装备的潜能属性的等级  
							item.setGrade(0x14);
							item.setOption(itemUsed[number][1], potId, true);
							player.loseItem(itemUsed[number][0], potList[qianneng][2]);
							player.updateItem(1, item);
							npc.broadcastGachaponMsgEx("[时装CD潜能] : 伟大的航海家 "+player.getName()+" 打开了航海宝藏,发现一条极为珍贵的潜能  ("+name+")，大家快来围观啊",item);
							npc.broadcastWeatherEffectNotice(2,"[时装CD潜能] : 伟大的航海家 "+player.getName()+" 打开了航海宝藏,发现一条极为珍贵的潜能  ("+name+")，大家快来围观啊",10000);
							
							npc.say("潜能修改成功");
						}
					}
					
				}

			}
		}
	}

}
