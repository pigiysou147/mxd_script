/**
* 裝備補領 需要點券 幾裡 315342975 
**/

let equips = Array(
	//詞條 所需點券 裝備ID 裝備名 四圍 攻擊力 BOSS 所屬 無視 是否上鎖1上0不上
	Array("五行修煉青龍",0,1592022,"青龍+1",215,215,0,0,0,1),
	Array("五行修煉青龍",0,1212129,"青龍+1",215,215,0,0,0,1),
	Array("五行修煉青龍",0,1222122,"青龍+1",215,215,0,0,0,1),
	Array("五行修煉青龍",0,1232122,"青龍+1",215,215,0,0,0,1),
	Array("五行修煉青龍",0,1242139,"青龍+1",215,215,0,0,0,1),
	Array("五行修煉青龍",0,1242141,"青龍+1",215,215,0,0,0,1),
	Array("五行修煉青龍",0,1252106,"青龍+1",215,215,0,0,0,1),
	Array("五行修煉青龍",0,1262051,"青龍+1",215,215,0,0,0,1),
	Array("五行修煉青龍",0,1302355,"青龍+1",215,215,0,0,0,1),
	Array("五行修煉青龍",0,1312213,"青龍+1",215,215,0,0,0,1),
	Array("五行修煉青龍",0,1322264,"青龍+1",215,215,0,0,0,1),
	Array("五行修煉青龍",0,1332289,"青龍+1",215,215,0,0,0,1),
	Array("五行修煉青龍",0,1342104,"青龍+1",215,215,0,0,0,1),
	Array("五行修煉青龍",0,1362149,"青龍+1",215,215,0,0,0,1),
	Array("五行修煉青龍",0,1372237,"青龍+1",215,215,0,0,0,1),
	Array("五行修煉青龍",0,1382274,"青龍+1",215,215,0,0,0,1),
	Array("五行修煉青龍",0,1402268,"青龍+1",215,215,0,0,0,1),
	Array("五行修煉青龍",0,1412189,"青龍+1",215,215,0,0,0,1),
	Array("五行修煉青龍",0,1422197,"青龍+1",215,215,0,0,0,1),
	Array("五行修煉青龍",0,1432227,"青龍+1",215,215,0,0,0,1),
	Array("五行修煉青龍",0,1442285,"青龍+1",215,215,0,0,0,1),
	Array("五行修煉青龍",0,1452266,"青龍+1",215,215,0,0,0,1),
	Array("五行修煉青龍",0,1462252,"青龍+1",215,215,0,0,0,1),
	Array("五行修煉青龍",0,1472275,"青龍+1",215,215,0,0,0,1),
	Array("五行修煉青龍",0,1482232,"青龍+1",215,215,0,0,0,1),
	Array("五行修煉青龍",0,1492245,"青龍+1",215,215,0,0,0,1),
	Array("五行修煉青龍",0,1522152,"青龍+1",215,215,0,0,0,1),
	Array("五行修煉青龍",0,1532157,"青龍+1",215,215,0,0,0,1),
	Array("五行修煉青龍",0,1542128,"青龍+1",215,215,0,0,0,1),
	Array("五行修煉青龍",0,1552130,"青龍+1",215,215,0,0,0,1),
	Array("五行修煉青龍",0,1582044,"青龍+1",215,215,0,0,0,1),
	Array("五行修煉青龍",0,1282040,"青龍+1",215,215,0,0,0,1),
	Array("五行修煉青龍",0,1272040,"青龍+1",215,215,0,0,0,1)
);                                           



let selStr = "裝備領取\r\n";

for(let i = 0;i<equips.length;i++){
	selStr += "#L"+i+"##r"+equips[i][0]+" #v"+equips[i][2]+"##l\r\n"
}


let selected = npc.askMenu(selStr);


selStr = "請確認領取物品:\r\n"
selStr += "#r"+equips[selected][0]+" #v"+equips[selected][2]+"#\r\n"

let YN = npc.askYesNo(selStr);

if(YN == 1){
	
	if(player.getCashShopCurrency(1) < equips[selected][1]){
		npc.say("你沒有" + equips[selected][1] + " 點卷");	
	}else if(!player.canGainItem(2430891,1)){
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
		newItem.setBossDamageR(30);// BOSS伤 
		newItem.setIgnorePDR(20);// 无视防御
		//newItem.setBossDamageR(equips[selected][6]);// BOSS傷 
		//newItem.setIgnorePDR(equips[selected][8]);// 無視防禦
		newItem.setAttribute(equips[selected][9]);
		player.gainItem(newItem);
		player.loseItem(2430891);
		npc.say("領取成功！");
	}
}
