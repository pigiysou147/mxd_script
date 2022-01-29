
let toDrop = player.getInventorySlot(-1,-1600);
var stat = 60001
if(toDrop == null){
	npc.say("請將您需要打造的裝備放到第一格！");
}else{
/*toDrop.setMad(32767)
toDrop.setPad(32767)
toDrop.setBossDamageR(32767)
toDrop.setIgnorePDR(32767)
toDrop.setDamR(32767)*/
				/*toDrop.setGrade(20)
				toDrop.setOption(1, stat, false);
				toDrop.setOption(2, stat, false);
				toDrop.setOption(3, stat, false);
				toDrop.setOption(1, stat, true);
				toDrop.setOption(2, stat, true);
				toDrop.setOption(3, stat, true);*/
				//toDrop.setLimitBreak(7000000000000000);
				//toDrop.setArcLevel(1)
				toDrop.setArcExp(30000)
player.updateItem(-1600, toDrop);
player.loseItem(2630367,1)
}



