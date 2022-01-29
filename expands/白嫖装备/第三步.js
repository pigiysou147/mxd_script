
//这里面放可以使用得装备代码
var equips = [1003976,
	1102623,
	1082556,
	1072870,
	1113073,
	1132244,
	1032221,
	1122265,
	1012478,
	1022277,
	1162025,
	1152170];

var itemId = 4310060; //所需材料ID
var itemNum = 60; //所需材料数量
while(1==1){
var str = "强化装备\r\n"
str += "\r\n#d请将您想要强化的装备放到第一格\r\n";


var toDrop = player.getInventorySlot(1, 1);
if(toDrop == null){
	npc.say(str+"\r\n第一格没有装备");
}else if(toDrop.getRUC() <= 0){
	npc.say(str+"\r\n第一格装备无法再次进行砸卷了");
}else if(equips.indexOf(toDrop.getDataId()) == -1){
	npc.say(str+"\r\n第一格装备不是白嫖装备不可用")
}else{
	str += "是否为#v"+toDrop.getDataId()+"#上卷？ 每次需要#v"+itemId+"# x "+itemNum;
	 npc.sayNext(str);
	
		
			
		if(player.hasItem(itemId,itemNum)){
			player.loseItem(itemId,itemNum);
			
			toDrop.setStr(toDrop.getStr()+2)
			toDrop.setDex(toDrop.getDex()+2)
			toDrop.setInt(toDrop.getInt()+2)
			toDrop.setLuk(toDrop.getLuk()+2)
			toDrop.setPad(toDrop.getPad()+4)
			toDrop.setMad(toDrop.getMad()+4)
			
			//成功
			toDrop.setRUC(toDrop.getRUC()-1);
			toDrop.setCUC(toDrop.getCUC()+1);
			player.updateItem(1, toDrop);
			
			npc.say("砸卷成功！");
	
		}else{
			npc.say("材料不足")
		}
	
}
}