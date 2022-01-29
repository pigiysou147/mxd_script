if(player.hasItem(2432022,1)){
	player.runScript("AA_Auction")
}else{
	npc.sayNextE("#e系統檢測到您沒有#b#v2432022##z2432022##g\r\n請收下我送您的#b#v2432022##z2432022#。")
	player.gainItem(2432022, 1);
}