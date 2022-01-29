var aaa = "#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";

var status = 0;
var typed = 0;
var rmb = 0;
var weaponId = 0;
var weaponList = Array(
	1214018,//神秘之影龙息臂箭
	1403018, //神秘之影拳炮
	1213018, //神秘之影调谐器
	1212120, //神秘之影双头杖
	1222113, //神秘之影灵魂手铳
	1232113, //神秘之影亡命剑
	1242121, //神秘之影能量剑
	1242122, //神秘之影能量剑
	1252098, //神秘之影魔法槌
	1262039, //神秘之影ESP限制器
	1272017, //神秘之影锁链
	1282017, //神秘之影魔力手套
	1302343, //神秘之影单手剑
	1312203, //神秘之影斧
	1322255, //神秘之影锤
	1332279, //神秘之影匕首
	1342104, //神秘之影刃
	1362140, //神秘之影手杖
	1372228, //神秘之影短杖
	1382265, //神秘之影长杖
	1402259, //神秘之影双手剑
	1412181, //神秘之影双手战斧
	1422189, //神秘之影双手锤
	1432218, //神秘之影长枪
	1442274, //神秘之影矛
	1452257, //神秘之影弓
	1462243, //神秘之影弩
	1472265, //神秘之影拳套
	1482221, //神秘之影指节
	1492235, //神秘之影短枪
	1522143, //神秘之影双弩枪
	1532150, //神秘之影攻城炮
	1542117, //神秘之影武士刀
	1552119, //神秘之影折扇 
	1582023, //神秘之影机甲枪
	1562009,
	1572009,
	1592020 //神秘远古弓
);

var need = 4033911;
var meso = 3000000000;
huoli = player.getPQLog("活力");
var txt = "#e#r我这里可以使用神秘之影武器来兑换神秘之影自选箱子 \r\n\r\n";
	txt+="需要消耗#v4033911# X50。金币30E\r\n\r\n";
	txt+="请把你要兑换的神秘武器放在装备栏的第一个位置。\r\n";
var item=player.getInventorySlot(1,1);

var itemid=0;
var flag=0;
if(item!=null){
	itemid=item.getDataId();
	txt+="当前第一个格子的装备为:#v"+itemid+"#";
	for(var i=0;i<weaponList.length;i++){
		if(weaponList[i]==itemid){
			flag=1;
			
			break;
		}
	}
	if(flag==1){
		txt+="(符合)";
	}else{
		txt+="#g(不符合)";
	}
}
let selection = npc.askYesNoS(txt);
if(selection==1){
	if(flag == 1) {
		if(!player.canGainItem(2436263, 1)) {
			npc.say("装备栏空间不足，请整理后重新制作！");
			
		}else if(player.getAmountOfItem(4033911)<50){
			npc.say("#e#r材料不足，需要50个#v4033911#");
		}else if(!player.hasMesos(meso)){
			npc.say("金币不够，需要金币"+meso);
		} else {
			let sel =npc.askYesNo("#e#r一切材料都符合，请问是否确定要兑换呢？");
			if(sel==1){
				player.loseInvSlot(1,1);
				player.loseItem(4033911,50);
				player.loseMesos(meso);;
				player.gainGachaponItem("神秘自选兑换", 2436263, 1, 1);
				npc.say("兑换成功");
			}
			
		}

	} else {
		npc.say("#e#r需要的要求不符，请检查装备栏的第一个格子的装备是否符合要求！");
	}
}
