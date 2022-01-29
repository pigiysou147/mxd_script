
var mapid = map.getId();
switch(mapid) {
	case 861000050:
		party.changeMap(861000100);
		portal.showHint("击杀满100只怪物我就能前往下一关了！", 250, 5);
		break;
	case 861000100:
		if(player.hasItem(4001008,1)){
			party.loseItem(4001008);
			party.changeMap(861000200);
			portal.showHint("击杀满100只怪物我就能前往下一关了！", 250, 5);
		}else{
			portal.showHint("击杀满100只怪物,获取通行证才能进入下一关", 250, 5);
		}
		break;
	case 861000200:
	
		if(player.hasItem(4001008,1)){
			party.loseItem(4001008);
			party.changeMap(861000300);
			portal.showHint("击杀BOSS我就能前往下一关了！", 250, 5);
		}else{
			portal.showHint("击杀满100只怪物,获取通行证才能进入下一关", 250, 5);
		}
		break;
	case 861000300:
		if(player.hasItem(4001008,1)){
			party.loseItem(4001008);
			party.changeMap(861000400);
			portal.showHint("击杀满100只怪物我就能前往下一关了！", 250, 5);
		}else{
			portal.showHint("击杀BOSS获取通行证才能进入下一关", 250, 5);
		}
		break;
	case 861000400:
	
		if(player.hasItem(4001008,1)){
			party.loseItem(4001008);
			party.changeMap(861000500);
			portal.showHint("击杀BOSS我就能前往下一关了！", 250, 5);
		}else{
			portal.showHint("击杀满100只怪物,获取通行证才能进入下一关", 250, 5);
		}
		break;
	case 861000500:
		if(player.hasItem(4001008,1)){
			party.loseItem(4001008);
			party.changeMap(861000001);
			portal.showHint("通关啦！", 250, 5);
		}
		break;
}
		
portal.abortWarp();
