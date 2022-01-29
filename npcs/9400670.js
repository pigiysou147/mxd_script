let mapId = map.getId();
           
if(mapId == 993000705){
	npc.askMenu("               #r冒险家#k，雪龟岛岂是你能登陆的！\r\n\r\n\r\n     #L100#我...是被异世界黑洞吸引来的...我想逃离这个地方#l");
}else if(mapId == 993000714){
	npc.askMenu("               #r冒险家#k，又见面了！\r\n\r\n\r\n     #L100#上次真的非常感谢你！#l");
}else if(mapId == 993000715){
	npc.askMenu("               #r冒险家#k，又见面了！不过你好像#r误入歧途#k了。\r\n                回去吧！\r\n\r\n\r\n     #L100#谢谢你帮助我！#l");
}

if(mapId == 993000705){
	npc.askMenu("             在这条路的尽头,有搭乘回到#r冒险世界#k的飞船                                   \r\n             拿上#v4009340#回到你自己的世界吧！！\r\n             #v4009340#虽然是碎片，但是效力依旧！\r\n           #L100#谢谢你的帮助(#r请确保背包有剩余空间#k)#l");
}else if(mapId == 993000714){
	npc.askMenu("             上次的碎片魔力消失了吧？                                   \r\n             这里还有一个#v4009340#拿着吧！！\r\n          #L100#再次谢谢你的帮助(#r请确保背包有剩余空间#k)#l");
}else if(mapId == 993000715){
	player.changeMap(993000714,1);
}
     
if(mapId == 993000705){
	if (player.getPQLog("xueyuandao11") < 1) {
		player.gainItem(4009340,1);
		player.addPQLog("xueyuandao11",1,1);
		npc.say("#v4009340# 已经给你,快走吧!");
	}else{
		npc.say("#v4009340# 你已经拥有,快走吧!");
	}
}else if(mapId == 993000714){
	
	if (player.getPQLog("xueyuandao12") < 1) {
		if(player.canGainItem(4009340,1)){
			player.gainItem(4009340,1);
			player.addPQLog("xueyuandao12",1,1);
			npc.say("#v4009340# 已经给你,快走吧!");
		}else{
			npc.say("请清理背包~");
		}
		
	}else{
		
		npc.say("#v4009340# 你已经拥有,快走吧!");
	}
}else if(mapId == 993000715){
	npc.say("勇往向前吧！");
}else{
	npc.say("发生未知错误，请离开此地图！");
}

