







var item =player.getInventorySlot(-1,-11);
var random =Math.floor(Math.random()*150+50);
if(item==null){
	npc.say("请先带上武器~");
}else{
	if(item.getLimitBreak()>=10000000000){
		random=random*8;
	
		//百E玩家
		item.setLimitBreak(item.getLimitBreak()+random*10000);
		player.updateItem(-11,item);
		
	}else{
		player.gainItem(2614056,random);
	}

}
player.loseItem(npc.getItemId(),1);
npc.say("你获得了突破:"+random*10000);

