/**
* 装备箱子 需要box CC 835456564 
**/
let boxId = 2439230;//箱子ID

let equips = Array(
	//词条 0不要动 装备ID 装备名 四围 攻击力 BOSS 所属 无视 是否上锁1上0不上
	Array("全属性100#v1113211# #z1113211#",0,1113211,"土豪专属",100,100,0,0,0,0)
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
		newItem.setOption(3, 40603, true);*/
		//newItem.setCHUC(25);  //星星
		
		player.gainItem(newItem);
		npc.say("领取成功！");
	}
}