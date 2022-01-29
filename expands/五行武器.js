/**
* 裝備補領 需要點券 幾裡 315342975 
**/

let equips = Array(
	//詞條 所需點券 裝備ID 裝備名 四圍 攻擊力 BOSS 所屬 無視 是否上鎖1上0不上
	Array("五行修煉青龍",0,1302316,"青龍+1",10,5,0,0,0,1),
	Array("五行修煉青龍",0,1402237,"青龍+1",10,5,0,0,0,1),
	Array("五行修煉青龍",0,1312186,"青龍+1",10,5,0,0,0,1),
	Array("五行修煉青龍",0,1412179,"青龍+1",10,5,0,0,0,1),
	Array("五行修煉青龍",0,1322237,"青龍+1",10,5,0,0,0,1),
	Array("五行修煉青龍",0,1422186,"青龍+1",10,5,0,0,0,1),
	Array("五行修煉青龍",0,1432201,"青龍+1",10,5,0,0,0,1),
	Array("五行修煉青龍",0,1442255,"青龍+1",10,5,0,0,0,1),
	Array("五行修煉青龍",0,1232096,"青龍+1",10,5,0,0,0,1),
	Array("五行修煉青龍",0,1382246,"青龍+1",10,5,0,0,0,1),
	Array("五行修煉青龍",0,1372208,"青龍+1",10,5,0,0,0,1),
	Array("五行修煉青龍",0,1452239,"青龍+1",10,5,0,0,0,1),
	Array("五行修煉青龍",0,1462226,"青龍+1",10,5,0,0,0,1),
	Array("五行修煉青龍",0,1342099,"青龍+1",10,5,0,0,0,1),
	Array("五行修煉青龍",0,1332261,"青龍+1",10,5,0,0,0,1),
	Array("五行修煉青龍",0,1472248,"青龍+1",10,5,0,0,0,1),
	Array("五行修煉青龍",0,1492213,"青龍+1",10,5,0,0,0,1),
	Array("五行修煉青龍",0,1482203,"青龍+1",10,5,0,0,0,1),
	Array("五行修煉青龍",0,1532131,"青龍+1",10,5,0,0,0,1),
	Array("五行修煉青龍",0,1362122,"青龍+1",10,5,0,0,0,1),
	Array("五行修煉青龍",0,1272012,"青龍+1",10,5,0,0,0,1),
	Array("五行修煉青龍",0,1552103,"青龍+1",10,5,0,0,0,1),
	Array("五行修煉青龍",0,1542102,"青龍+1",10,5,0,0,0,1),
	Array("五行修煉青龍",0,1252087,"青龍+1",10,5,0,0,0,1),
	Array("五行修煉青龍",0,1212102,"青龍+1",10,5,0,0,0,1),
	Array("五行修煉青龍",0,1522125,"青龍+1",10,5,0,0,0,1),
	Array("五行修煉青龍",0,1242103,"青龍+1",10,5,0,0,0,1),
	Array("五行修煉青龍",0,1262014,"青龍+1",10,5,0,0,0,1),
	Array("五行修煉青龍",0,1282012,"青龍+1",10,5,0,0,0,1),
	Array("五行修煉青龍",0,1222096,"青龍+1",10,5,0,0,0,1),
	Array("五行修煉青龍",0,1592013,"青龍+1",10,5,0,0,0,1),
	Array("五行修煉青龍",0,1582014,"青龍+1",10,5,0,0,0,1)
);



let selStr = "裝備補領(補領的裝備可以用於修煉)\r\n";

for(let i = 0;i<equips.length;i++){
	selStr += "#L"+i+"##r"+equips[i][0]+" #v"+equips[i][2]+"#" + " #b補領所需點券 #r"+equips[i][1] + "#l\r\n"
}


let selected = npc.askMenu(selStr);


selStr = "請確認補領物品:\r\n"
selStr += "#r"+equips[selected][0]+" #v"+equips[selected][2]+"#" + " #b補領所需點券 #r"+equips[selected][1] + "\r\n"

let YN = npc.askYesNo(selStr);

if(YN == 1){
	
	if(player.getCashShopCurrency(1) < equips[selected][1]){
		npc.say("你沒有" + equips[selected][1] + " 點卷");	
	}else if(!player.canGainItem(1004234,1)){
		npc.say("請清理背包");	
	}else{
		player.modifyCashShopCurrency(1,-equips[selected][1]);
		let newItem = player.makeItemWithId(equips[selected][2]);
		newItem.setStr(equips[selected][4]); //裝備力量
		newItem.setDex(equips[selected][4]); //裝備敏捷
		newItem.setInt(equips[selected][4]); //裝備智力
		newItem.setLuk(equips[selected][4]); //裝備運氣

		newItem.setMad(equips[selected][5]);
		newItem.setPad(equips[selected][5]);
		newItem.setTitle(equips[selected][3]);

		newItem.setStatR(equips[selected][7]);// 所有屬性
		newItem.setBossDamageR(equips[selected][6]);// BOSS傷 
		newItem.setIgnorePDR(equips[selected][8]);// 無視防禦
		newItem.setAttribute(equips[selected][9]);
		player.gainItem(newItem);
		npc.say("補領成功！");
	}
}
