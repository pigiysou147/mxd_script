





var txt="\t\t\t\t\t#r白金剪刀系统#k\r\n\r\n";
txt+="\t\t\t#L0##v5520001##b查看剪刀说明#k#v5520001##l\r\n\r\n";
txt+="\t\t#L1##v5520001##b查看物品剩余剪刀次数#k#v5520001##l\r\n\r\n";
txt+="\t\t\t#L2##v5520001##b购买剪刀#k#v5520001##l\r\n\r\n";
let selection =npc.askMenu(txt,9330190);
if(selection==0){
	txt="#e本服设置所有支持剪刀装备的可交易次数为 #r5#k 次\r\n";

	txt+="请在使用宿命剪刀之前通过该系统查看您的装备可剪刀次数\r\n";

	txt+="以免造成你的损失，查看的时候#r请把装备放在装备栏的第一格#k";
	
	npc.say(txt);
	
}else if(selection==1){
	
	var item =player.	getInventorySlot(1,1);
	//item.setCuttable(1);
	if(item==null){
		npc.say("请把装备放在装备栏的第一个格子用于查看剩余剪刀的次数哦");
	}else{
		npc.say("您的这件装备为:#v"+item.getDataId()+"# 还剩余的剪刀次数为 #r"+(5-item.getCuttable()) );
	}
	
	
}else if(selection==2){
	let sel = npc.askYesNo("是否要花费10W点券购买一个#v5520001#");
	if(sel==1){
		if(player.getCashShopCurrency(1)>=100000){
			player.gainItem(5520001,1);
			player.modifyCashShopCurrency(1,-100000)
			npc.say("购买成功");
		}else{
			npc.say("点券不足");
		}
	}
}