


var item =player.getInventorySlot(-1,-11);
var txt ="\r\n请确认是否要把武器外观还原。";
let yes = npc.askYesNo(txt);
if(yes==1){
	if(item==null){
		npc.say("请穿上武器");
	}else{
		item.setItemSkin(0);
		player.loseItem(npc.getItemId(),1);
		player.updateItem(-11,item);
		npc.say("还原成功");
	}
}