
let mapId = map.getId();
           
if(mapId == 993000714){
	if(player.hasItem(4009340,1)){
		player.changeMap(350110600, 1);
		player.loseItem(4009340,1);
		portal.showHint("因异世界传送力量太强大,冰雪仗碎片无法承受而毁坏。冰雪杖剩余的魔力已经依附在你身上。", 250, 5);
	}else{
		portal.showHint("没有 冰雪杖 , 无法通过异世界之门。", 250, 5);
	}
}
portal.abortWarp();