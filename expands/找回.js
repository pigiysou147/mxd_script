var txt="#r#e在这里你可以找回特殊道具.\r\n";
txt+="#L4#找回各种币#l";
txt+="#L5#找回椅子#l";


let type=npc.askMenu(txt);

txt="请选择要找回的物品.\r\n";
for(var i =10000;i<11000;i++){
	var it =player.getInventorySlot(type,i);
	if(it!=null){
		txt+="#L"+(i)+"##v"+it.getItemId()+"# #l\r\n";
	}

}
let selection =npc.askMenu(txt);
var item =player.getInventorySlot(type,selection);

var count=item.getQuantity();
txt="你要找回的道具为  :#v"+item.getItemId()+"#   数量为:"+count;
var se = npc.askYesNo(txt);
if(se==1){
	
	player.loseInvSlot(type, selection);
	player.gainItem(item.getItemId(),count);
	npc.say("找回成功，你获得了#v"+item.getItemId()+"#  X "+count);

}