
let mapId = map.getId();
if(mapId == 350110600){
	npc.askMenu("你好呀，冒险家！\r\n\r\n\r\n#L100#你好啊，这里是?#l");
}else if(mapId == 350111000){
	npc.say("冒险家，这里面是否会有你追寻的东西呢？");
}else if(mapId == 350130500){
	npc.askMenu("你也到达了这里，摩柯给你加油！\r\n\r\n\r\n#L100#接下来，我该怎么走呢?#l");
	//cm.dispose();
	//cm.warp(350130500);
}else if(mapId == 350130700){
	npc.askMenu("快回到你自己的世界去吧！冒险家！\r\n\r\n\r\n#L100#再见！(请留空”其他栏“至少一格,领取通关文牒)#l");
	//cm.dispose();
	//cm.warp(350130500);
}

if(mapId == 350110600){
	npc.askMenu("#r穿过那个冰山吧，那里有你要的答案！\r\n\r\n\r\n#L100#好的，再见！#l");
}else if(mapId == 350130500){
	npc.askMenu("#r前面的#b传送口已经被摧毁#r了,我能帮到你的只有施展魔法将你传送出去了！\r\nmiamia，boom！\r\n\r\n\r\n#L100#谢谢你！摩柯！#l");
	player.changeMap(350130600);
}else if(mapId == 350130700){
	player.changeMap(993000800);
	player.gainItem(4032472,100);
}
