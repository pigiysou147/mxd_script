/**
* 箱子選擇道具 幾里 315342975 
**/

//送的物品
let items = Array(
    Array(2435184,1),
	Array(2437707,1),
	Array(2437708,1),
	Array(2437712,1),
	Array(2437768,1),
	Array(2437769,1),
	Array(2437846,1),
	Array(2437848,1),
	Array(2437849,1),
	Array(2437856,1),
	Array(2437877,1),
	Array(2438085,1),
	Array(2438087,1),
	Array(2438088,1),
	Array(2432465,1),
	Array(2432479,1),
	Array(2432526,1),
	Array(2432591,1),
	Array(2432592,1),
	Array(2432603,1),
	Array(2432695,1),
	Array(2432748,1),
	Array(2433038,1),
	Array(2433063,1),
	Array(2433104,1),
	Array(2433112,1),
	Array(2433252,1),
	Array(2433362,1),
	Array(2433568,1),
	Array(2433569,1),
	Array(2433570,1),
	Array(2433571,1),
	Array(2433587,1),
	Array(2433588,1),
	Array(2433715,1),
	Array(2433775,1),
	Array(2433776,1),
	Array(2433777,1),
	Array(2433829,1),
	Array(2433830,1),
	Array(2433831,1),
	Array(2433832,1),
	Array(2433833,1),
	Array(2434045,1),
	Array(2434051,1),
	Array(2434147,1),
	Array(2434157,1),
	Array(2434273,1),
	Array(2434289,1),
	Array(2434374,1),
	Array(2434375,1),
	Array(2434390,1),
	Array(2434519,1),
	Array(2434391,1),
	Array(2434530,1),
	Array(2434544,1),
	Array(2434545,1),
	Array(2434546,1),
	Array(2434574,1),
	Array(2434575,1),
	Array(2434655,1),
	Array(2434710,1),
	Array(2434734,1),
	Array(2434818,1),
	Array(2434824,1),
	Array(2434868,1),
	Array(2434950,1),
	Array(2435026,1),
	Array(2435028,1),
	Array(2435030,1),
	Array(2435043,1),
	Array(2435044,1),
	Array(2435046,1),
	Array(2435047,1),
	Array(2435140,1),
	Array(2435158,1),
	Array(2435166,1),
	Array(2435183,1),
	Array(2435184,1),
	Array(2435213,1),
	Array(2435222,1),
	Array(2435313,1),
	Array(2435356,1),
	Array(2435357,1),
	Array(2435358,1),
	Array(2435425,1),
	Array(2435427,1),
	Array(2435428,1),
	Array(2435433,1),
	Array(2435456,1),
	Array(2435489,1),
	Array(2435516,1),
	Array(2435523,1),
	Array(2435545,1),
	Array(2435567,1),
	Array(2435568,1),
	Array(2435670,1),
	Array(2435673,1),
	Array(2435802,1),
	Array(2435905,1),
	Array(2435906,1),
	Array(2435949,1),
	Array(2435972,1),
	Array(2436023,1),
	Array(2436024,1),
	Array(2436026,1),
	Array(2436027,1),
	Array(2436028,1),
	Array(2436029,1),
	Array(2436132,1),
	Array(2436133,1),
	Array(2436182,1),
	Array(2437049,1),
	Array(2437166,1),
	Array(2437238,1),
	Array(2437239,1),
	Array(2437484,1),
	Array(2437470,1),
	Array(2437702,1),
	Array(2437709,1),
	Array(2437711,1),
	Array(2437710,1),
	Array(2437712,1),
	Array(2437761,1),
	Array(2437846,1),
	Array(2437848,1),
	Array(2437849,1),
	Array(2437877,1),
	Array(2438089,1),
	Array(2438095,1),
	Array(2438158,1),
	Array(2438192,1),
	Array(2438247,1),
	Array(2438251,1),
	Array(2438254,1),
	Array(2438265,1),
	Array(2438266,1),
	Array(2438281,1),
	Array(2438293,1),
	Array(2438309,1),
	Array(2438347,1),
	Array(2438418,1),
	Array(2438420,1),
	Array(2438471,1),
	Array(2438473,1),
	Array(2438587,1),
	Array(2438594,1),
	Array(2438596,1),
	Array(2438655,1),
	Array(2438663,1),
	Array(2438676,1),
	Array(2438726,1),
	Array(2438755,1),
	Array(2438757,1),
	Array(2438759,1),
	Array(2438799,1),
	Array(2438802,1),
	Array(2438808,1),
	Array(2438823,1),
	Array(2438864,1),
	Array(2438823,1),
	Array(2438864,1),
	Array(2438885,1),
	Array(2438924,1),
	Array(2438925,1),
	Array(2438926,1),
	Array(2439277,1),
	Array(2439336,1),
	Array(2439337,1),
	Array(2439376,1),
	Array(2439381,1),
	Array(2439393,1),
	Array(2439396,1),
	Array(2439398,1),
	Array(2439407,1),
    Array(2439489,1),
	Array(2439554,1),
	Array(2439579,1),
	Array(2439697,1),
	Array(2439700,1),
	Array(2439711,1),
	Array(2439805,1),
	Array(2439894,1),
	Array(2630156,1),
	Array(2630301,1),
	Array(2630304,1)  

);

let boxId = 2435604;//箱子ID


let ss = "#b消耗#v"+boxId+"#,可選擇獲得道具:\r\n#n"
for(let i = 0 ; i < items.length;i++){
	if(i%6 == 0){
		ss += "\r\n"
	}
	ss += "#L"+i +"##r#v"+items[i][0]+"#"
	//ss += "#L"+i +"##r#v"+items[i][0]+"# x "+items[i][1]+" #l\r\n"
}

let selected = npc.askMenu(ss);

ss = "您是否確定獲取#v"+items[selected][0]+"# x "+items[selected][1];
let YN = npc.askYesNo(ss);
if(YN == 1){
	if(player.canGainItem(items[selected][0],items[selected][1])){
		if(player.hasItem(boxId,1)){
			player.gainItem(items[selected][0],items[selected][1]);
			player.loseItem(boxId,1);
			npc.say("兌換成功");
		}else{
			npc.say("你沒有#v"+boxId+"#");
		}
	}else{
		npc.say("請清理背包！");
	}
}else{
	npc.say("不想兌換嗎？下次再見。");
}