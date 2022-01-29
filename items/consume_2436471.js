
//装备箱子 需要box CC 835456564 
//*
let boxId = 2436471;//箱子ID

let equips = Array(
	//词条 0不要动 装备ID 装备名 四围 攻击力 BOSS 所属 无视 是否上锁1上0不上 破功
    Array("漩涡古弓	",0,1592032,"",300,300,30,1,30,1,50000000),
    Array("漩涡拳炮",0,1582025,"",300,300,30,1,30,1,50000000),
    Array("漩涡之风",0,1552072,"",300,300,30,1,30,1,50000000),
    Array("漩涡武士之剑",0,1542072,"",300,300,30,1,30,1,50000000),
    Array("漩涡手炮",0,1532118,"",300,300,30,1,30,1,50000000),
    Array("漩涡双翼弩",0,1522113,"",300,300,30,1,30,1,50000000),
    Array("漩涡手铳",0,1492199,"",300,300,30,1,30,1,50000000),
    Array("漩涡冲拳",0,1482189,"",300,300,30,1,30,1,50000000),
    Array("漩涡拳甲",0,1472235,"",300,300,30,1,30,1,50000000),
    Array("漩涡弩",0,1462213,"",300,300,30,1,30,1,50000000),
    Array("漩涡弓",0,1452226,"",300,300,30,1,30,1,50000000),
    Array("漩涡戟",0,1442242,"",300,300,30,1,30,1,50000000),
    Array("漩涡矛",0,1432187,"",300,300,30,1,30,1,50000000),
    Array("漩涡巨锤",0,1422158,"",300,300,30,1,30,1,50000000),
    Array("漩涡双手战斧",0,1412152,"",300,300,30,1,30,1,50000000),
    Array("漩涡双手剑",0,1402220,"",300,300,30,1,30,1,50000000),
    Array("漩涡长杖",0,1382231,"",300,300,30,1,30,1,50000000),
    Array("漩涡短杖",0,1372195,"",300,300,30,1,30,1,50000000),
    Array("漩涡手杖",0,1362109,"",300,300,30,1,30,1,50000000),
    Array("漩涡刀",0,1342090,"",300,300,30,1,30,1,50000000),
    Array("漩涡匕首",0,1332247,"",300,300,30,1,30,1,50000000),
    Array("漩涡锤",0,1322223,"",300,300,30,1,30,1,50000000),
    Array("漩涡斧",0,1312173,"",300,300,30,1,30,1,50000000),
    Array("漩涡剑",0,1302297,"",300,300,30,1,30,1,50000000),
    Array("漩涡扇子",0,1292035,"",300,300,30,1,30,1,50000000),
    Array("漩涡魔力手套",0,1282028,"",300,300,30,1,30,1,50000000),
    Array("漩涡锁链",0,1272028,"",300,300,30,1,30,1,50000000),
    Array("漩涡ESP限制器",0,1262029,"",300,300,30,1,30,1,50000000),
    Array("漩涡虎梳魔法棒",0,1252033,"",300,300,30,1,30,1,50000000),
    Array("漩涡锁链剑",0,1242090,"",300,300,30,1,30,1,50000000),
    Array("漩涡恶魔剑",0,1232084,"",300,300,30,1,30,1,50000000),
    Array("漩涡灵魂手铳",0,1222084,"",300,300,30,1,30,1,50000000),
    Array("漩涡双头杖",0,1212089,"",300,300,30,1,30,1,50000000)

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
        newItem.setLimitBreak(equips[selected][10]);//破功
		newItem.setStatR(equips[selected][7]);// 所有属性
		newItem.setBossDamageR(equips[selected][6]);// BOSS伤 
		newItem.setIgnorePDR(equips[selected][8]);// 无视防御
		newItem.setAttribute(equips[selected][9]);
		
		
		//如果需要潜能星星那些，请自己在这里写代码 但是这个脚本就会都给装备这些属性了哦
		
		newItem.setGrade(20); //给S潜能
		newItem.setOption(1, 60056, false);
		newItem.setOption(2, 60056, false);
		newItem.setOption(3, 60056, false);
		newItem.setOption(1, 60056, true);
		newItem.setOption(2, 60056, true);
		newItem.setOption(3, 60056, true);
		newItem.setCHUC(25);  //星星
		
		player.gainItem(newItem);
		npc.say("领取成功！");
	}
}