
let mapId = map.getId();
           
if(mapId == 993000705){
	if(player.hasItem(4009340,1)){
		player.changeMap(993000706, 1);
		player.loseItem(4009340,1);
		portal.showHint("因异世界传送力量太强大,冰雪仗碎片无法承受而毁坏。冰雪杖剩余的魔力已经依附在你身上。", 250, 5);
	}else{
		portal.showHint("没有 冰雪杖 , 无法通过异世界之门。", 250, 5);
	}
}else if(mapId == 993000706){
	player.changeMap(993000708, 1);
	portal.showHint("冰雪杖碎片的魔力剩余不多,冒险家抓紧时间了！", 250, 5);
}else if(mapId == 993000708){
	player.changeMap(993000709, 1);
	portal.showHint("冰雪杖碎片的魔力剩余不多,冒险家抓紧时间了！", 250, 5);
}else if(mapId == 993000709){
	player.changeMap(993000710, 1);
	portal.showHint("冰雪杖碎片的魔力剩余不多,冒险家抓紧时间了！", 250, 5);
}else if(mapId == 993000710){
	player.changeMap(993000711, 1);
	portal.showHint("冰雪杖碎片的魔力剩余不多,冒险家抓紧时间了！", 250, 5);
}else if(mapId == 993000711){
	player.changeMap(993000712, 1);
	portal.showHint("冰雪杖碎片的魔力剩余不多,冒险家抓紧时间了！", 250, 5);
}else if(mapId == 993000712){
	player.changeMap(993000714, 2);
	portal.showHint("冰雪杖碎片剩余的魔力已经消失殆尽了！", 250, 5);
}
portal.abortWarp();