
	var pet = player.getInventorySlot(5,1);
var txt="#r#e如果你的宠物出现了问题，请放在栏位的第一个格子，我将对你的宠物进行修复;";
if(pet!=null)
txt+="你当前特殊栏的第一个格子的物品为:#v"+pet.getItemId()+"#";
var se= npc.askYesNo(txt);

if(se==1){
	if(pet!=null){
		if(pet.isPet()){
			//判断是宠物
			let ye = npc.askYesNo("是否要对#v"+pet.getItemId()+"#进行修复操作呢？");
			if(ye==1){
				player.loseInvSlot(5,1);
				player.gainItem(pet.getItemId(),1);
				
				npc.say("修复成功。");
			}
		}else{
			npc.say("请把要修复的宠物放在特殊栏的第一个格子哦");
		}
		
	}else{
		npc.say("请把要修复的宠物放在特殊栏的第一个格子哦");
	}
}
