/**
* 装备箱子 需要box CC 835456564 
**/
let boxId = 2430529;//箱子ID

let equips = Array(
	//词条 0不要动 装备ID 装备名 四围 攻击力 BOSS 所属 无视 是否上锁1上0不上
	Array("全属性100#v1182285# #z1182285#",0,1182285,"创世之巅",215,210,0,0,0,0)

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
		
		
		//如果需要潜能星星那些，请自己在这里写代码 但是这个脚本就会都给装备这些属性了哦
		
		newItem.setGrade(20); //给S潜能
		newItem.setOption(1, 30051, false);
		newItem.setOption(2, 30051, false);
		newItem.setOption(3, 30051, false);
		newItem.setOption(1, 30051, true);
		newItem.setOption(2, 30051, true);
		newItem.setOption(3, 30051, true);
		newItem.setCHUC(25);  //星星
		
		player.gainItem(newItem);
		npc.say("领取成功！");
	}
}