
let sel = npc.askMenu("\r\n#L0#方式1#l \r\n#L1#方式2(方式一不可用的情况下，把要复活的宠物放在背包第一个格子)#l");

if(sel==0){
	let selection = npc.askPet("那么，你想复活哪只宠物？选择你最想要的宠物.");

	player.revivePet(selection);
	
	npc.say("操作成功"+selection);
	
}else{
	let pet=player.getInventorySlot(5,1);
	if(pet==null){
		npc.say("请把要复活的宠物放在特殊栏的第一个格子");
	}else{
		var sn=pet.getSn();
		
		player.revivePet(sn);
		npc.say("操作成功");
	}
}
player.loseItem(npc.getItemId(),1);
