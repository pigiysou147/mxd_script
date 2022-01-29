



var fushou=Array(
1352500,
1352702,
1352501,
1099015,
1352600,
1352601,
1352602,
1352502,
1352503,
1352504,
1352505,
1352507,
1352509,
1572000,
1562000,
1352606,
1562008,
1562009,
1572009,
1352975

);


var txt="以下副手需要在这里进行装备，如有缺漏，请联系管理员\r\n\r\n";
for(var i=0;i<fushou.length;i++){
	txt+="#v"+fushou[i]+"#";
}
txt+="\r\n#L0#装备副手(将副手放在装备栏第一个格子)\r\n";
txt+="#L1#卸下副手";
let selection=npc.askMenu(txt);
if(selection==1){
	
	   let newItem =player.getInventorySlot(-1,-10);
	   if(newItem==null){
		   npc.say("你身上没有副手，请不要乱点");
	   }else{
		   var flag=1;
			for(var i=0;i<fushou.length;i++){
				if(newItem.getDataId()==fushou[i]){
					flag=1;
				}
			}
			if(flag==1){
				player.gainItem(newItem);
			   player.loseInvSlot(-1, -10)
			   npc.say("卸下成功");
			}else{
				npc.say("卸下失败");
			}
	   }
	   
	   

}else{
		
	let item =	player.getInventorySlot(1,1);
	if(item==null){
		npc.say("请在第一个格子放上你要装备的副手");
	}else{
		var itemId=item.getDataId();

		var flag=0;
		for(var i=0;i<fushou.length;i++){
			if(itemId==fushou[i]){
				flag=1;
			}
		}
		if(flag==1){
			
			let old=player.getInventorySlot(-1,-10);
			if(old==null){
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
				npc.say("请先卸下副手再进行装备哦");
			}
		}else{
			npc.say("请确认一下装备第一个格子的是否为规定的副手装备");
		}
	}
	
}





