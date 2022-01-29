


var item =2430624;



var text = " 尊贵的客人#r" + player.getName() + "#k你好\r\n" ;
text += "本店新茶刚到，赶快挑选一位吧~~ \r\n对了，这本夫妻床上三千问我就暂时借给你看24小时\r\n";


let selection =npc.askYesNo(text);

if(selection==1){
	if(player.hasItem(item,1)){
		npc.say("你身上已经有#v"+item+"#了。");
	}else{
		var toDrop = player.makeItemWithId(item);
		var timeStamp = java.lang.System.currentTimeMillis();
		var expirationDate = timeStamp + 60*60*24*1000;
		toDrop.setExpiration(expirationDate);
		player.gainItem(toDrop);
		npc.broadcastNotice( "『幸福里三温暖』： " + player.getName() + " 男宾两位楼上请~。");
		npc.say("恭喜您获得 #r夫妻床上三千问#k 。");
	}
	
}


	
	