/* 点卷商店 */

var status = -1;
var weaponList = Array(
	1592020, //神秘远古弓
	1402259, //神秘之影双手剑
	1213018, //神秘之影调谐器
	1232113, //神秘之影亡命剑
	1403018, //神秘之影拳炮
	1302343, //神秘之影单手剑
	1212120, //神秘之影双头杖
	1452257, //神秘之影弓
	1332279, //神秘之影匕首
	1482221, //神秘之影指节
	1342104, //神秘之影刃
	1472265, //神秘之影拳套
	1312203, //神秘之影斧
	1222113, //神秘之影灵魂手铳
	1242121, //神秘之影能量剑
	1242122, //神秘之影能量剑
	1252098, //神秘之影魔法槌
	1262039, //神秘之影ESP限制器
	1272017, //神秘之影锁链
	1282017, //神秘之影魔力手套
	1322255, //神秘之影锤
	1362140, //神秘之影手杖
	1372228, //神秘之影短杖
	1382265, //神秘之影长杖
	1412181, //神秘之影双手战斧
	1422189, //神秘之影双手锤
	1432218, //神秘之影长枪
	1442274, //神秘之影矛
	1462243, //神秘之影弩
	1492235, //神秘之影短枪
	1522143, //神秘之影双弩枪
	1532150, //神秘之影攻城炮
	1542117, //神秘之影武士刀
	1552119, //神秘之影折扇 
	1582023 //神秘之影机甲枪
);

var fangju=Array(
	1152196,//	神秘之影战士护肩	
	1073158,//	神秘之影战士鞋	
	1053063,//	神秘之影战士套装	
	1082695,//	神秘之影战士手套	
	1102940,//	神秘之影战士披风	
	1004808,//	神秘之影战士帽
	1152198,//	神秘之影弓箭手护肩	
	1073160,//	神秘之影弓箭手鞋	
	1053065,//	神秘之影弓箭手套装	
	1082697,//	神秘之影弓箭手手套	
	1102942,//	神秘之影弓箭手披风	
	1004810,//	神秘之影弓箭手帽
	1152199,//	神秘之影飞侠护肩	
	1073161,//	神秘之影飞侠鞋	
	1053066,//	神秘之影飞侠套装	
	1082698,//	神秘之影飞侠手套	
	1102943,//	神秘之影飞侠披风	
	1004811,//	神秘之影飞侠帽
	1152197,//	神秘之影法师护肩	
	1073159,//	神秘之影法师鞋	
	1053064,//	神秘之影法师套装	
	1082696,//	神秘之影法师手套	
	1102941,//	神秘之影法师披风	
	1004809,//	神秘之影法师帽
	1152200,//	神秘之影海盗护肩	
	1073162,//	神秘之影海盗鞋	
	1053067,//	神秘之影海盗套装	
	1082699,//	神秘之影海盗手套	
	1102944,//	神秘之影海盗披风	
	1004812//	神秘之影海盗帽
);

var selectedItem = 1;
var selectedCost = 1;
var text;
var deleteSlot;
var deleteQuantity;
var typed = 0;
var beDeletedArr = new Array();
var wqCount = 0;
var fjCount = 0;
var text = "";

text = "\t\t#r#e你可以把多余的神秘装备在这里进行余额回收。\r\n\r\n\t\t#e- 以下是准备分解的装备,请核对仔细 \r\n PS ：为了防止误操作，只识别背包前32格的装备哦 -#n\r\n\r\n#b";

var item;
var newItemList = Array();
for(var i = 1; i < 32; i++) {
	item = player.getInventorySlot(1, i);
	if(item != null) {
		//武器计算个数
		for(var j = 0; j < weaponList.length; j++) {
			if(weaponList[j] == item.getDataId()) {
				newItemList[i - 1] = item.getDataId();
				beDeletedArr.push(i);
				wqCount++;
				if(j<12){
					wqCount+=1.5;
				}
			}
			
		}
		//防具计算个数
		for(var j = 0; j < fangju.length; j++) {
			if(fangju[j] == item.getDataId()) {
				newItemList[i - 1] = item.getDataId();
				beDeletedArr.push(i);
				fjCount++;
				if(j<12){
					fjCount+=2;
				}
			}

		}

	}

}
for(var i = 0; i < newItemList.length; i++) {
	text += "#v" + newItemList[i] + "#";
}
text += "\r\n#r#e分解操作不可逆，请确认是否要分解以上装备？";
text+="\r\n#L0#我要分解#l\r\n\r\n";
text+="#L1#分解详情说明#l\r\n\r\n#n#k";

let selection = npc.askMenu(text);
if(selection == 0) {
	if(player.getFreeSlots(2) < 2 || player.getFreeSlots(2) < 2) {
		npc.say("请清理背包");
	} else {
		for(var key in beDeletedArr) {
			player.loseInvSlot(1, beDeletedArr[key]);
		}
		var wuq=wqCount*20;
		addHyPay(wuq);
		var fjc=fjCount*60;
		addHyPay(fjc);
		
		
		text = "#r#e分解成功\r\n分解武器获得了余额 ："+wuq+" 分解防具获得了余额 ："+fjc;
		npc.say(text);
	}
}else{
	text="#r#e分解说明：";
	text+="\r\n\r\n贵重装备武器\r\n";
	for(var j = 0; j < 12; j++) {
		text+="#v"+weaponList[j]+"#";
		
	}
	text+="可以获得50余额，其余获得20余额\r\n";
	text+="\r\n\r\n贵重装备类\r\n";
	for(var j = 0; j < 12; j++) {
		text+="#v"+fangju[j]+"#";
		
	}
	text+="可以获得180余额，其余获得60余额";
	npc.say(text);
}
function addHyPay(price) {
	var sql = "update hypay set pay=pay+? where accountId=?";
	var result = player.customSqlUpdate(sql, price, player.getAccountId());

}

