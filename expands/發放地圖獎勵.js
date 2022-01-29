
var map = cmd.getMap(cmd.getMapID());
var allPlayers = map.getPlayerCount();//取得当前地图上面的所有玩家
allPlayers = allPlayers.iterator();
		while (allPlayers.hasNext()) {//循环每一个玩家
			var player = allPlayers.next();
			player.runScript("活動獎勵發放");
		}
		map.blowWeather(5120043,"感謝在場所有玩家對我們的支持與配合,請收下管理的獎勵");
		break;

