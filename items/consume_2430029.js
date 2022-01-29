/**
* 装备箱子 需要box 几里 315342975 
**/
let boxId = 2430029;//箱子ID

let equips = Array(
	//词条 0不要动 装备ID 装备名 所需点券 四围 攻击力 BOSS 所属 无视 是否上锁1上0不上
	Array("神秘之影战士帽",0,1004808,"可强化+11",200,200,0,0,0,0),
	Array("神秘之影战士套装",0,1053063,"可强化+12",200,200,0,0,0,0),
	Array("神秘之影战士鞋",0,1073158,"可强化+7",200,200,0,0,0,0),
	Array("神秘之影战士手套",0,1082695,"可强化+7",200,200,0,0,0,0),
	Array("神秘之影战士披风",0,1102940,"可强化+7",200,200,0,0,0,0),
	Array("神秘之影战士护肩",0,1152196,"可强化+1",200,200,0,0,0,0),
	Array("神秘之影法师帽",0,1004809,"可强化+11",200,200,0,0,0,0),
	Array("神秘之影法师套装",0,1053064,"可强化+12",200,200,0,0,0,0),
	Array("神秘之影法师鞋",0,1073159,"可强化+7",200,200,0,0,0,0),
	Array("神秘之影法师手套",0,1082696,"可强化+7",200,200,0,0,0,0),
	Array("神秘之影法师披风",0,1102941,"可强化+7",200,200,0,0,0,0),
	Array("神秘之影法师护肩",0,1152197,"可强化+1",200,200,0,0,0,0),
	Array("神秘之影弓箭手帽",0,1004810,"可强化+11",200,200,0,0,0,0),
	Array("神秘之影弓箭手套装",0,1053065,"可强化+12",200,200,0,0,0,0),
	Array("神秘之影弓箭手鞋",0,1073160,"可强化+7",200,200,0,0,0,0),
	Array("神秘之影弓箭手手套",0,1082697,"可强化+7",200,200,0,0,0,0),
	Array("神秘之影弓箭手披风",0,1102942,"可强化+7",200,200,0,0,0,0),
	Array("神秘之影弓箭手护肩",0,1152198,"可强化+1",200,200,0,0,0,0),
	Array("神秘之影飞侠帽",0,1004811,"可强化+11",200,200,0,0,0,0),
	Array("神秘之影飞侠套装",0,1053066,"可强化+12",200,200,0,0,0,0),
	Array("神秘之影飞侠鞋",0,1073161,"可强化+7",200,200,0,0,0,0),
	Array("神秘之影飞侠手套",0,1082698,"可强化+7",200,200,0,0,0,0),
	Array("神秘之影飞侠披风",0,1102943,"可强化+7",200,200,0,0,0,0),
	Array("神秘之影飞侠护肩",0,1152199,"可强化+1",200,200,0,0,0,0),
	Array("神秘之影海盗帽",0,1004812,"可强化+11",200,200,0,0,0,0),
	Array("神秘之影海盗套装",0,1053067,"可强化+12",200,200,0,0,0,0),
	Array("神秘之影海盗鞋",0,1073162,"可强化+7",200,200,0,0,0,0),
	Array("神秘之影海盗手套",0,1082699,"可强化+7",200,200,0,0,0,0),
	Array("神秘之影海盗披风",0,1102944,"可强化+7",200,200,0,0,0,0),
	Array("神秘之影海盗护肩",0,1152200,"可强化+1",200,200,0,0,0,0)
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
	}else if(!player.hasItem(boxId,1)) {
		
		npc.say("你没有#v"+boxId+"#");	
	}else{
		player.loseItem(boxId,1);
		let newItem = player.makeItemWithId(equips[selected][2]);
		newItem.setStr(newItem.getStr()+equips[selected][4]); //装备额外力量
		newItem.setDex(newItem.getDex()+equips[selected][4]); //装备额外敏捷
		newItem.setInt(newItem.getInt()+equips[selected][4]); //装备额外智力
		newItem.setLuk(newItem.getLuk()+equips[selected][4]); //装备额外运气

		newItem.setMad(newItem.getMad()+equips[selected][5]);
		newItem.setPad(newItem.getPad()+equips[selected][5]);
		newItem.setTitle(equips[selected][3]);

		newItem.setStatR(newItem.getStatR()+equips[selected][7]);// 所有属性
		newItem.setBossDamageR(newItem.getBossDamageR()+equips[selected][6]);// BOSS伤 
		newItem.setIgnorePDR(newItem.getIgnorePDR()+equips[selected][8]);// 无视防御
		newItem.setAttribute(equips[selected][9]);
		
		
		//如果需要潜能星星那些，请自己在这里写代码 但是这个脚本就会都给装备这些属性了哦
		/*newItem.setGrade(20); //给S潜能
		newItem.setOption(1, 40603, false);
		newItem.setOption(2, 40603, false);
		newItem.setOption(3, 40603, false);
		newItem.setOption(1, 40603, true);
		newItem.setOption(2, 40603, true);
		newItem.setOption(3, 40603, true);
		newItem.setCHUC(20);  //星星*/
		
		player.gainItem(newItem);
		npc.say("领取成功！");
	}
}