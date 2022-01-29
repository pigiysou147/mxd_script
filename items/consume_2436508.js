/**
* 装备箱子 需要点券  QQ:739977676 
**/

let equips = Array(
	//词条  装备ID 装备名 四围 攻击力 BOSS 所属 无视 是否上锁1上0不上
	Array("全屬+100",0,1202161,"斗內",100,10,0,0,0,1),
	Array("全屬+100",0,1202162,"斗內",100,10,0,0,0,1),
	Array("全屬+100",0,1202163,"斗內",100,10,0,0,0,1)
);



let selStr = "装备箱子\r\n";

for(let i = 0;i<equips.length;i++){
	selStr += "#L"+i+"##r"+equips[i][0]+" #v"+equips[i][2]+"##l\r\n"
}


let selected = npc.askMenu(selStr);


selStr = "请确认领取物品:\r\n"
selStr += "#r"+equips[selected][0]+" #v"+equips[selected][2]+"#\r\n"

let YN = npc.askYesNo(selStr);

if(YN == 1){
	
	if(!player.canGainItem(1004234,1)){
		npc.say("请清理背包");	
	}else{
		player.modifyCashShopCurrency(1,-equips[selected][1]);
		let newItem = player.makeItemWithId(equips[selected][2]);
		newItem.setStr(equips[selected][4]); //装备力量
		newItem.setDex(equips[selected][4]); //装备敏捷
		newItem.setInt(equips[selected][4]); //装备智力
		newItem.setLuk(equips[selected][4]); //装备运气

		newItem.setMad(equips[selected][5]);
		newItem.setPad(equips[selected][5]);
		newItem.setTitle(equips[selected][3]);

		newItem.setStatR(equips[selected][7]);// 所有属性
		newItem.setBossDamageR(equips[selected][6]);// BOSS伤 
		newItem.setIgnorePDR(equips[selected][8]);// 无视防御
		newItem.setAttribute(equips[selected][9]);
		player.gainItem(newItem);
		player.loseItem(2436508);
		npc.say("领取成功！");
	}
}