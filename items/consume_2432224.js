



var fushou=Array(
1352500,
1352501,
1352502,
1352503,
1352504,
1352505,
1352507,
1352509

);


var txt="副手操作\r\n\r\n";
txt+="#L0#装备副手(将副手放在装备栏第一个格子)\r\n";
txt+="#L1#卸下副手";
let selection=npc.askMenu(txt);
if(selection==1){
	let sel = npc.askYesNo("是否要删除副手呢？（部分职业的副手无法取下，只能强制删除。）\r\n #r为了避免误操作，请不要乱点，否则副手消失不会进行补偿)", 2192025);
	if (sel == 1) {
		   let newItem =player.getInventorySlot(-1,-10);
		   
		   player.gainItem(newItem);
		   player.loseInvSlot(-1, -10)
		   npc.say("卸下成功");
	}
}else{
		
	let item =	player.getInventorySlot(1,1);

	var itemId=item.getDataId();

	var flag=0;
	for(var i=0;i<fushou.length;i++){
		if(itemId==fushou[i]){
			flag=1;
		}
	}
	if(flag==1){
		player.equip(-10,itemId);
		let newItem=player.getInventorySlot(-1,-10);
		
		//替换掉属性
		//力量
		newItem.setStr(item.getStr());
		//敏捷
		newItem.setDex(item.getDex());
		//智力
		newItem.setInt(item.getInt());
		//运气
		newItem.setLuk(item.getLuk());
		//攻击
		newItem.setPad(item.getPad());
		//魔法攻击
		newItem.setMad(item.getMad());
		
		newItem.setTitle(item.getTitle());
		
		newItem.setGrade(item.getGrade());
		
		newItem.setBossDamageR(item.getBossDamageR());
		
		newItem.setOption(1, item.getOption(1,false), false);
		newItem.setOption(2, item.getOption(2,false), false);
		newItem.setOption(3, item.getOption(3,false), false);
		newItem.setOption(1, item.getOption(1,true), true);
		newItem.setOption(2, item.getOption(2,true), true);
		newItem.setOption(3, item.getOption(3,true), true);
		
		player.updateItem(-10,newItem);
		player.loseInvSlot(1,1);
		npc.say("装备成功");
	}else{
		npc.say("请确认一下装备第一个格子的是否为规定的副手装备");
	}
}





