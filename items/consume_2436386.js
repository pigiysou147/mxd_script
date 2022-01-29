let mapId = map.getId();
if(mapId == 701220700){
	let YN = npc.askYesNo("是否确定使用暴风秘药升级到200级？(超过200级不能使用)");
	if(YN == 1){
		if(player.getLevel()<200){
			player.loseItem(2436386,1);
			while(true){
				if(player.getLevel()<251){
					player.gainExp(5000000000);
				}else{
					break;
				}
			}
			npc.say("升级成功！")
		}else{
			npc.say("超过200级无法使用")
		}
	}
}else{
	npc.say("只能在#m701220710#使用升级秘药,点击确定传送过去")
	player.changeMap(701220700);
}