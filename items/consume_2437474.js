
    
	

var itemid=0;

	var 隨機數字 = Math.floor(Math.random()*20+1);// 1-20
	if(隨機數字 > 15){
		itemid=2614058;
	player.gainItem(itemid,1);
	}else{
		itemid=2614049;
    player.gainItem(itemid,1);
	}
	player.loseItem(npc.getItemId(),1);
    npc.broadcastPlayerNotice(0x01, " 公告 : 恭喜玩家[ " + player.getName() + " ]打开【突破任务箱子】 获得了突破石");
	npc.say("恭喜你获得了#v"+itemid+"##t"+itemid+"#");
