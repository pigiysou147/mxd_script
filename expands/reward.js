/*  This is mada by Jackson    
 *  This source is made by Funms Team
 *  
 *  功能：命令测试
 *  
 *  @Author Jackson 
 */


if (Player.isGm()) {
		var map = npc.getMap(npc.getMapId());
		var allPlayers = map.getCharacters();//取得当前地图上面的所有玩家
		allPlayers = allPlayers.iterator();
		while (allPlayers.hasNext()) {//循环每一个玩家
			var player = allPlayers.next();
			player.openNpc(0, "活動獎勵發放");
		}
		player.getMap().startMapEffect("感謝在場所有玩家對我們的支持與配合,請收下管理的獎勵", 5121052);
	}


