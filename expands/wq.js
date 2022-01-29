var status = 0;
var typed = 0;
//中介币的物品ID
var zjbid = 4031997;
var zmtid = 4310036;
var zyhzid = 4310143;
var zmtNum = Math.floor(Math.random() * 100001 + 100000);
var zyhzNum = Math.floor(Math.random() * 850000 + 600000);
var zjbNum = Math.floor(Math.random() * 1500001 + 500000);
var yeNum = Math.floor(Math.random() * 3000000 + 2000000);
var zjNum = 1000000;

var txt = "";

txt += "亲爱的#r#h ##k您好，我是伤害上限突破系统:\r\n#r#L999#伤害上限突破简介#l\r\n";
txt += "#L5#[武器]中介币突破 #b(#k目前状态：#r土豪推荐#b)#l\r\n";
txt += "#L4#[武器]余额突破 #b(#k目前状态：#r土豪推荐#b)#l\r\n";

txt += "#L3#[武器]1万突破石批量突破 #b(#k目前状态：#r强迫症福利#b)#l\r\n";
txt += "#L6#[武器]10万突破石批量突破 #b(#k目前状态：#r强迫症福利#b)#l\r\n";
//txt += "#L7#[武器]100万突破石批量突破 #b(#k目前状态：#r强迫症福利#b)#l\r\n";
//txt += "#L8#[武器]500万突破石批量突破 #b(#k目前状态：#r强迫症福利#b)#l\r\n";
//txt += "#L9#[武器]1000万突破石批量突破 #b(#k目前状态：#r强迫症福利#b)#l\r\n";
let selection = npc.askMenuS(txt);

if(selection == 3) {

	player.runScript("tuposhi");
} else if(selection == 4) {

	player.runScript("pogong");
} else if(selection == 5) {
	npc.askYesNo("是否花费100#b中介币#k对当前穿戴的武器进行伤害上限突破？");
	
	if(player.hasItem(4031997, 100)) {
		var item =player.getInventorySlot(-1,-11);
		if(item!=null) {
			item.setLimitBreak(item.getLimitBreak()+zjNum);
			player.updateItem(-11,item);
			player.loseItem(4031997, 100);
			npc.say("#b伤害上限突破成功.\r\n\r\n本次追加伤害为：#r" + zjNum + "#b.");
			npc.	broadcastPlayerNotice(0x15, "[伤害突破] 玩家 " + cm.getPlayer().getName() + " 使用 [ 100 ]中介币 让武器伤害上限突破成功 本次追加 " + zjNum + " 伤害值");
		} else {
			npc.say("#b突破失败.\r\n系统为检测到角色身上装备武器.");
		}
	} else {
		npc.say("#b突破失败.\r\n需要 100中介币 才可以突破.");
	}
} else if(selection == 6) {

	player.runScript("tuposhi10");
} else if(selection == 7) {

	player.runScript("tuposhi100");
} else if(selection == 8) {

	player.runScript("tuposhi500");
} else if(selection == 9) {

	player.runScript("tuposhi1000");
}

if(selection == 1) {
	
}