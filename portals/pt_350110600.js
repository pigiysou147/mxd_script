﻿

let mapId = map.getId();
if(mapId == 350110600){
	player.changeMap(350110700, 7);
	portal.showHint("登上雪山，逃离雪崩岛", 250, 5);
}
portal.abortWarp();