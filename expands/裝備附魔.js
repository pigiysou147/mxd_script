/**
* 材料突破系統-新端腳本 幾裏 315342975 
**/
let eff1 = "#fEffect/CharacterEff/1112924/0/0#"
let eff2 = "#fEffect/CharacterEff/1112925/0/0#";
let eff3 = "#fEffect/CharacterEff/1112924/0/0#";
var eff = "#fEffect/CharacterEff/1051296/1/0#";
var tz15 = "#fEffect/CharacterEff/1112949/0/0#";  //花樣音符
let items = Array(
	//展示名字 最小破功 最大破功 所需金幣 所需材料數組
	Array("[裝備附魔]全屬性+369",10000,50000,0,
		Array(
	Array(3990001,1),//2
	Array(3990009,1),//0
	Array(3990000,1),//1
	Array(3990008,1),//9
	Array(3994047,1),//年
	Array(3990004,1),//5
	Array(3994048,1),//月
	Array(3990000,1),//1
	Array(3990005,1),//6
	Array(3994049,1)//日
		)
	)
);
let toDrop = player.getInventorySlot(1, 1);
let addAp = 369;//增加的屬性
if(toDrop == null){
	npc.say("請將您需要打造的裝備放到第一格！");
}else{
let str = "            #e" + tz15 + "#r#fs16#『369裝備附魔』#fs12# " + tz15 + "\r\n";
	str += "#k————————————————————————\r\n";
	str += "\t#v3990001##v3990009##v3990000##v3990008##v3994047##v3990004##v3994048##v3990000##v3990005##v3994049#\r\n";
	str += "\r\n#k\t\t搜集以上字符即可將指定裝備賦予#r369點#k屬性!\r\n";
	str +="\t\t#b"+eff+"可重複使用、累積疊加\r\n";
	str +="\t\t#b"+eff+"點裝、寵物裝備也可使用\r\n";
	str +="\t\t#b"+eff+"請將您需要打造的裝備放到第一格！\r\n";
	str +="#r"+eff+"請勿使用於瑪瑙、賞金、50階戒指、翅膀系統、五行系統之裝備\r\n";
	str +="\t\t#r"+eff+"不要使用之後跟GM說你上錯無法強化有BUG\r\n\r\n";
	str +="\t\t#r"+eff+"#fs16#一律不予補償#fs12#\r\n\r\n";
	str +="#e#k————————————————————————\r\n";
	str +="\t\t#r"+eff+"#e是否強化下列物品\r\n";
	str +="\t\t#r"+eff+"#i"+toDrop.getDataId()+"##t"+toDrop.getDataId()+"";

let YN = npc.askYesNo(str);
if(YN==1){
if(toDrop == null){
	npc.say("請將您需要打造的裝備放到第一格！");
}else{
	sel = "\r\n#r#n確認使用在下方裝備上？\r\n"
	sel +="#i"+toDrop.getDataId()+"##t"+toDrop.getDataId()+"";
	let YN = npc.askYesNo(sel);
	if(YN == 1){
		let PD = 0; //判斷材料是否足夠
		for(let j = 0; j < items[0][4].length;j++){
			if(!player.hasItem(items[0][4][j][0],items[0][4][j][1])){
				PD++;
			}
		}
		if(PD != 0 || !player.hasMesos(items[0][3])){
			npc.say("#b#e您的材料不足，無法附魔，請確認道具是否足夠");
		}else{
			for(let j = 0; j < items[0][4].length;j++){
				player.loseItem(items[0][4][j][0], items[0][4][j][1]);
			}
						toDrop.setStr(toDrop.getStr() + addAp); //裝備力量
						toDrop.setDex(toDrop.getDex() + addAp); //裝備敏捷
						toDrop.setInt(toDrop.getInt() + addAp); //裝備智力
						toDrop.setLuk(toDrop.getLuk() + addAp); //裝備運氣
						toDrop.setMad(toDrop.getMad() + addAp);
						toDrop.setPad(toDrop.getPad() + addAp);
						toDrop.setTitle("裝備附魔");
						player.updateItem(1, toDrop);
                        npc.broadcastGachaponMsgEx("【裝備附魔】: 恭喜玩家 " + player.getName() + "使用字母將 "+toDrop.getItemName()+" 成功附魔並且全屬性增加369！",toDrop);
						npc.say("恭喜你，附魔成功!")
		}
	}
}
}else if(YN == 0){
	npc.say("下次見");
}
}