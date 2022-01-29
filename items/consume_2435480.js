//黑色羽毛 100個
while(true){
	npc.say("#r限時餘額抽獎－安慰獎\r\n#b你也太可憐了吧...看在服主佛心的份上，我讓你用20個安慰獎兌換星星包\r\n是否獲取 #v2434622# ?");
	if(player.hasItem(2435480,20)){
		if(player.getFreeSlots(2) < 1){
			npc.say("請清理背包");
		}else{
			player.loseItem(2435480,20);
			player.gainItem(2434622,1);
			npc.say("領取成功")
			break;
		}
	}else{
		npc.say("你的#v2435480#不足10個無法兌換");
		break;
	}
}