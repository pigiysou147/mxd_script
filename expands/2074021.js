var status = 0;
var icon = "#fUI/Basic.img/BtMin2/normal/0#";
var iconX = "#fEffect/CharacterEff/1112905/0/1#";
var iconStar = "#fEffect/CharacterEff/1112904/2/1#";
var icon1 = "#fEffect/CharacterEff/1042176/0/0#";
var iconHR = "#fEffect/CharacterEff/1082565/0/0#"
var icon2 = "#fEffect/CharacterEff/1082565/2/0#";
var icon3 = "#fEffect/CharacterEff/1082565/4/0#";
var icon4 = "#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#";
var giftContent = Array( //后面写礼包内容道具的时候Array的前面都有逗号  一定要找规律  逗号不能少不能多 兄弟
	Array("[充值赞助礼包1]",
		100, Array(
			Array(2340000, 10, ""),
			Array(2049116, 5, ""),
			Array(2049604, 2, ""),
			Array(2048749, 1, ""),
			Array(2049137, 3, "注意配合防暴卷轴"),
			Array(2049323, 3, "")
		),
		150000
	),
	Array("[充值赞助礼包2]",
		500,
		Array(
			Array(4001326, 1, "修改潜能蜡笔"),
			Array(2430885, 1, "/FFN防具自选箱"),
			Array(2049604, 10, ""),
			Array(2048749, 5, ""),
			Array(2340000, 50, ""),
			Array(2049116, 25, ""),
			Array(2049137, 15, "注意配合防暴卷轴"),
			Array(2049384, 1, "")
		),
		750000
	),
	Array("[充值赞助礼包3]",
		1000,
		Array(
			Array(4001326, 2, "/修改潜能蜡笔"),
			Array(2431142, 1, "/随机蜡笔箱"),
			Array(2430885, 1, "/FFN防具自选箱"),
			Array(2432069, 1, "/暴君防具自选箱"),
			Array(2048749, 10, ""),
			Array(2049604, 20, ""),
			Array(2340000, 100, ""),
			Array(2049116, 50, ""),
			Array(2430683, 5, "/X卷抽取箱"),
			Array(2049323, 30, "")
		),
		1500000
	),
	Array("[充值赞助礼包4]",
		3000,
		Array(Array(2430885, 3, "/FFN防具自选箱"),
			Array(2432069, 3, "/暴君防具自选箱"),
			Array(5062024, 50, ""),
			Array(2048749, 30, ""),
			Array(2430683, 15, "X卷抽取箱"),
			Array(2340000, 100, ""),
			Array(2049323, 50, ""),
			Array(2049604, 35, ""),
			Array(2049005, 30, ""),
			Array(2049116, 100, ""),
			Array(2049137, 50, "注意配合防暴卷轴"),
			Array(3700486, 1, ""),
			Array(4001332, 1, "")
		),
		4500000
	),
	Array("[充值赞助礼包5]",
		6000,
		Array(
			Array(4001332, 3, "/大蜡笔"),
			Array(1202261, 1, "/毕业图腾三件套"),
			Array(1202262, 1, "/毕业图腾三件套"),
			Array(2630627, 2, "/神秘之影防具自选箱"),
			Array(1202260, 1, "/毕业图腾三件套"),
			Array(2432069, 5, "/暴君自选箱"),
			Array(1122267, 1, ""),
			Array(1122267, 1, ""),
			Array(2049604, 80, ""),
			Array(2430683, 20, "/X卷抽取箱"),
			Array(2049116, 150, ""),
			Array(2049323, 80, ""),
			Array(2049137, 150, "注意配合防暴卷轴"),
			Array(5062024, 100, ""),
			Array(2048749, 60, ""),
			Array(3992025, 10, "/20星以上强化所需道具"),
			Array(3700461, 1, "")
		),
		9000000
	)
	//  ,
	//  Array("[快乐源泉]",
    //      150,
    //      Array(
    //          Array(2436298, 1, "快乐源泉"),
    //          Array(2614064, 1, "500W突破")
    //      ),
    //          225000
    //  )	


	
	
);
var giftId = -1;
var gifts = null;
var price = 999;
var 送点卷;
var column = new Array("装备", "消耗", "設置", "其他", "商城");

var text = "欢迎来到冒险岛充值礼包商城,点击可以查看礼包内容哦!\r\n";
text += "" + icon2 + "您当前余额为：#r" + getHyPay() + "#k " + "#k\r\n";
text+="#L999##b充值链接#k#l\r\n\r\n";
for(var key in giftContent) {
	text += "#b#n#L" + key + "##r#e" + giftContent[key][0] + "#n#b #d消耗" + giftContent[key][1] + "余额,附赠点卷[#r" + giftContent[key][3] + "#d]#n#b#l#k\r\n";
}
let selection = npc.askMenu(text);
if(selection ==999){
	player.runScript("payurl");
}else{
	giftId = parseInt(selection);
	price = giftContent[giftId][1];
	gifts = giftContent[giftId][2];
	送点卷 = giftContent[giftId][3];
	
	let number =npc.askNumber("请输入要购买的数量:",1,1,1000);
	price=price*number;
	送点卷=送点卷*number;
	var text = "#r#e" + giftContent[giftId][0] + "#n#b\r\n#e#r格外附赠点卷:[" + 送点卷 + "]\r\n";
	for(var key in gifts) {
	var itemId = gifts[key][0];
	var itemQuantity = gifts[key][1];
		text += "#i" + itemId + ":##b" + (itemId == -1 ? "赠送点卷" : "#z" + itemId + "#") + "#k #rx " + itemQuantity + " " + gifts[key][2] + "#k\r\n";
	}
	

	text += "\r\n#d是否花費#e#r" + price + "#n#d余额购买 "+number+" 个e该礼包？#k";
	let sel = npc.askYesNo(text);

	if(sel == 1) {

	if(getHyPay() < price) {
		npc.say("您的余额不足，请先充值后再购买。");
	} else if(player.getFreeSlots(2) < 1 ) {
		npc.say("每一个格子都要保证有8个空间以上哦");
	} else {
		addHyPay(price);
		
		
		player.modifyCashShopCurrency(1, 送点卷);
		npc.broadcastNoticeWithoutPrefix("【余额礼包】 玩家  "+player.getName()+" 购买了"+price+"余额的礼包，获得了一系列珍贵的道具！");
		for(var key in gifts) {
			var itemId = gifts[key][0];
			var itemQuantity = gifts[key][1];
			player.gainItem(itemId, itemQuantity*number);
		}							
		npc.say("恭喜您，购买成功！");
	}

	}
}


function getHyPay() {
	var sql = "select pay from hypay where accountid = ? ";
	var result = player.customSqlResult(sql, player.getAccountId());
	if(result.size() > 0) {
		if(result.get(0) != null) {
			return result.get(0).get("pay");
		}
	} else {
		return 0;
	}

}

function addHyPay(price) {
	var sql = "update hypay set pay=pay-?,payused=payused+"+price+" where accountId=?";
	var result = player.customSqlUpdate(sql, price, player.getAccountId());

}