/**
* 消耗一個道具， 為指定裝備增加 XXX屬性值 【要求裝備剩余次數必須為XX，星星必須超過XX才可以使用】  QQ:739977676 
**/
let eff1 = "#fEffect/CharacterEff/1112924/0/0#"
let eff2 = "#fEffect/CharacterEff/1112925/0/0#";
let eff3 = "#fEffect/CharacterEff/1112924/0/0#";
var eff = "#fEffect/CharacterEff/1051296/1/0#";
//這裡面放可以使用本系統的裝備代碼
let needItem = 2438450;

let toDrop = player.getInventorySlot(1, 1);
let str = "#d#e#fs15#裝備總傷害加成道具#k\r\n\r\n#fs12#";
	str +="#b"+eff+"100%將任何裝備額外提升裝備總傷害+1%\r\n";
	str +="#b"+eff+"可重複使用、累積疊加\r\n";
	str +="#b"+eff+"點裝、寵物裝備也可使用\r\n";
	str +="#b"+eff+"請將您需要打造的裝備放到第一格！\r\n\r\n";
	str +="#r"+eff+"#e是否強化下列物品\r\n";
	str +="#r"+eff+"#i"+toDrop.getDataId()+"##t"+toDrop.getDataId()+"";

let YN = npc.askYesNo(str);

if(YN ==1){
if(toDrop == null){
	npc.say("請將您需要打造的裝備放到第一格！");
}else{
		if(player.hasItem(needItem,1)){
						player.loseItem(needItem,1);
						toDrop.setDamR((toDrop.getDamR()+1))
						player.updateItem(1, toDrop);
						npc.say("恭喜你，強化成功!")
		}else{npc.say("你沒有#v"+needItem+"#")}
}
}else{
	npc.say("下次見")
}




