var aaa = "#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";

var sel = 0;
var rmb = 0;
var Gift = "#fUI/UIWindow2/crossHunterUI/reward/button/normal/0#";

var selStr = "#d#e请选择您所需要的卷轴：#n#k\r\n\r\n";
selStr += "#L1#" + aaa + " 领取 1张#i2049122##r#t2049122##l#k\r\n";
selStr += "#L2#" + aaa + " 领取 1张#i2049135##r#t2049135##l#k\r\n"
selStr += "#L3#" + aaa + " 领取 3 张#i2340000##r#t2340000##l#k\r\n";
selStr += "#L4#" + aaa + " 领取 1张#i2613000##r#t2613000##l#k\r\n";
selStr += "#L5#" + aaa + " 领取 1张#i2613001##r#t2613001##l#k\r\n";
selStr += "#L6#" + aaa + " 领取 1张#i2612010##r#t2612010##l#k\r\n";
selStr += "#L7#" + aaa + " #d[试试运气]#k 抽取#i2613050##r#t2613050##l#k\r\n";
selStr += "#L8#" + aaa + " #d[试试运气]#k 抽取#i2613051##r#t2613051##l#k\r\n";
selStr += "#L9#" + aaa + " #d[试试运气]#k 抽取#i2612061##r#t2612061##l#k\r\n";
selStr += "#L10#" + aaa + " #d[试试运气]#k 抽取#i2612062##r#t2612062##l#k\r\n";
selStr += "#L11#" + aaa + " #d[试试运气]#k 抽取#i2616061##r#t2616061##l#k\r\n";
selStr += "#L12#" + aaa + " #d[试试运气]#k 抽取#i2616062##r#t2616062##l#k\r\n";
selStr += "#L13#" + aaa + " #d[试试运气]#k 抽取#i2615031##r#t2615031##l#k\r\n";
selStr += "#L14#" + aaa + " #d[试试运气]#k 抽取#i2615032##r#t2615032##l#k\r\n";
let selection = npc.askMenuS(selStr);
let choose=0;
if(selection == 1) {
	sel = 1;
	choose = npc.askYesNo("#b您是否想要领取#t2049122# x 1，您是否想要领取？");
} else if(selection == 2) {
	sel = 2;
	choose = npc.askYesNo("#b您是否想要领取#t2049135# x 1，您是否想要领取？");
} else if(selection == 3) {
	sel = 3;
	choose = npc.askYesNo("#b您是否想要领取#t2340000# x 1，您是否想要领取？");
} else if(selection == 4) {
	sel = 4;
	choose = npc.askYesNo("#b您是否想要领取#t2613000# x 1卷轴增加攻击力+7~11，该卷轴只实用于单手武器上面，如果领错无法领取其他卷轴，您是否想要领取？");
} else if(selection == 5) {
	sel = 5;
	choose = npc.askYesNo("#b您是否想要领取#t2613001# x 1卷轴增加魔法攻击力+7~11，该卷轴只实用于单手武器上面，如果领错无法领取其他卷轴，您是否想要领取？");
} else if(selection == 6) {
	sel = 6;
	choose = npc.askYesNo("#b您是否想要领取#t2612010# x 1卷轴增加攻击力+7~11，该卷轴只实用于双手武器上面，如果领错无法领取其他卷轴，您是否想要领取？");
} else if(selection == 7) {
	sel = 7;
	choose = npc.askYesNo("#b您是否想要抽取#t2613050# x 1，请先确保您消耗栏位有空间，否则抽中无法获取。40/100的几率祝您好运！");
} else if(selection == 8) {
	sel = 8;
	choose = npc.askYesNo("#b您是否想要抽取#t2613051# x 1，请先确保您消耗栏位有空间，否则抽中无法获取。40/100的几率祝您好运！");
} else if(selection == 9) {
	sel = 9;
	choose = npc.askYesNo("#b您是否想要抽取#t2612061# x 1，请先确保您消耗栏位有空间，否则抽中无法获取。40/100的几率祝您好运！");
} else if(selection == 10) {
	sel = 10;
	choose = npc.askYesNo("#b您是否想要抽取#t2612062# x 1，请先确保您消耗栏位有空间，否则抽中无法获取。40/100的几率祝您好运！");
} else if(selection == 11) {
	sel = 11;
	choose = npc.askYesNo("#b您是否想要抽取#t2616061# x 1，请先确保您消耗栏位有空间，否则抽中无法获取。50/100的几率祝您好运！");
} else if(selection == 12) {
	sel = 12;
	choose = npc.askYesNo("#b您是否想要抽取#t2612062# x 1，请先确保您消耗栏位有空间，否则抽中无法获取。50/100的几率祝您好运！");
} else if(selection == 13) {
	sel = 13;
	choose = npc.askYesNo("#b您是否想要抽取#t2615031# x 1，请先确保您消耗栏位有空间，否则抽中无法获取。50/100的几率祝您好运！");
} else if(selection == 14) {
	sel = 14;
	choose = npc.askYesNo("#b您是否想要抽取#t2615032# x 1，请先确保您消耗栏位有空间，否则抽中无法获取。50/100的几率祝您好运！");
}
if(choose == 1) {

	if(sel == 1) {
		if(player.getFreeSlots(2) >= 1) {
			player.gainItem(2049122, 1);
			player.loseItem(npc.getItemId(), 1);
			npc.say("恭喜您成功领取了#t2049122# x 1.");
			npc.broadcastNotice( "『情人节卷轴箱』 :  " + player.getName() + " 领取了 正向卷轴 x 1.");

		} else {
			npc.say("领取失败：\r\n\r\n#r1). 背包消耗栏位不够1个位置,请清理.");

		}
	} else if(sel == 2) {
		if(player.getFreeSlots(2) >= 1) {
			player.gainItem(2049135, 1);
			player.loseItem(npc.getItemId(), 1);
			npc.say("恭喜您成功领取了#t2049135# x 1.");
			npc.broadcastNotice( "『情人节卷轴箱』 : 恭喜 " + player.getName() + " 领取了 惊人正义卷轴 x 1.");

		} else {
			npc.say("领取失败：\r\n\r\n#r1). 背包消耗栏位不够1个位置,请清理.");

		}
	} else if(sel == 3) {
		if(player.getFreeSlots(2) >= 1) {
			player.gainItem(2340000, 3);
			player.loseItem(npc.getItemId(), 1);
			npc.say("恭喜您成功领取了#t2340000# x 1.");
			npc.broadcastNotice( "『情人节卷轴箱』 : 恭喜 " + player.getName() + " 领取了 祝福卷轴 x 3.");

		} else {
			npc.say("领取失败：\r\n\r\n#r1). 背包消耗栏位不够1个位置,请清理.");

		}
	} else if(sel == 4) {
		if(player.getFreeSlots(2) >= 1) {
			player.gainItem(2613000, 1);
			player.loseItem(npc.getItemId(), 1);
			npc.say("恭喜您成功领取了#t2613000# x 1.");
			npc.broadcastNotice( "『情人节卷轴箱』 : 恭喜 " + player.getName() + " 领取了 星火单手武器攻击力卷轴 x 1.");

		} else {
			npc.say("领取失败：\r\n\r\n#r1). 背包消耗栏位不够1个位置,请清理.");

		}
	} else if(sel == 5) {
		if(player.getFreeSlots(2) >= 1) {
			player.gainItem(2613001, 1);
			player.loseItem(npc.getItemId(), 1);
			npc.say("恭喜您成功领取了#t2613001# x 1.");
			npc.broadcastNotice( "『情人节卷轴箱』 : 恭喜 " + player.getName() + " 领取了 星火单手武器魔法攻击力卷轴 x 1.");

		} else {
			npc.say("领取失败：\r\n\r\n#r1). 背包消耗栏位不够1个位置,请清理.");

		}
	} else if(sel == 6) {
		if(player.getFreeSlots(2) >= 1) {
			player.gainItem(2612010, 1);
			player.loseItem(npc.getItemId(), 1);
			npc.say("恭喜您成功领取了#t2612010# x 1.");
			npc.broadcastNotice( "『情人节卷轴箱』 : 恭喜 " + player.getName() + " 领取了 星火双手武器攻击力卷轴 x 1.");

		} else {
			npc.say("领取失败：\r\n\r\n#r1). 背包消耗栏位不够1个位置,请清理.");

		}
	} else if(sel == 7) {
		var xxx = Math.floor(Math.random() * 4);
		if(xxx == 1) {
			player.gainItem(2613050, 1);
			player.loseItem(npc.getItemId(), 1);
			npc.say("恭喜您成功领取了#t2613050# x 1.");
			npc.broadcastNotice( "『情人节卷轴箱』 : 恭喜 " + player.getName() + " 抽取了 X单手武器攻击力卷轴 x 1.");

		} else {
			player.loseItem(npc.getItemId(), 1);
			npc.say("领取失败：\r\n\r\n#r1). 抱歉您没有抽中.");

		}
	} else if(sel == 8) {
		var xxx = Math.floor(Math.random() * 4);
		if(xxx == 1) {
			player.gainItem(2613051, 1);
			player.loseItem(npc.getItemId(), 1);
			npc.say("恭喜您成功领取了#t2613051# x 1.");
			npc.broadcastNotice( "『情人节卷轴箱』 : 恭喜 " + player.getName() + " 抽取了 X单手武器魔力卷轴 x 1.");

		} else {
			player.loseItem(npc.getItemId(), 1);
			npc.say("领取失败：\r\n\r\n#r1). 抱歉您没有抽中.");

		}
	} else if(sel == 9) {
		var xxx = Math.floor(Math.random() * 4);
		if(xxx == 1) {
			player.gainItem(2612061, 1);
			player.loseItem(npc.getItemId(), 1);
			npc.say("恭喜您成功领取了#t2612061# x 1.");
			npc.broadcastNotice( "『情人节卷轴箱』 : 恭喜 " + player.getName() + " 抽取了 X双手武器攻击力卷轴 x 1.");

		} else {
			player.loseItem(npc.getItemId(), 1);
			npc.say("领取失败：\r\n\r\n#r1). 抱歉您没有抽中.");

		}
	} else if(sel == 10) {
		var xxx = Math.floor(Math.random() * 4);
		if(xxx == 1) {
			player.gainItem(2612062, 1);
			player.loseItem(npc.getItemId(), 1);
			npc.say("恭喜您成功领取了#t2612062# x 1.");
			npc.broadcastNotice( "『情人节卷轴箱』 : 恭喜 " + player.getName() + " 抽取了 X双手武器魔力卷轴 x 1.");

		} else {
			player.loseItem(npc.getItemId(), 1);
			npc.say("领取失败：\r\n\r\n#r1). 抱歉您没有抽中.");

		}
	} else if(sel == 11) {
		var xxx = Math.floor(Math.random() * 3);
		if(xxx == 1) {
			player.gainItem(2616061, 1);
			player.loseItem(npc.getItemId(), 1);
			npc.say("恭喜您成功领取了#t2616061# x 1.");
			npc.broadcastNotice( "『情人节卷轴箱』 : 恭喜 " + player.getName() + " 抽取了 X防具攻击力卷轴 x 1.");

		} else {
			player.loseItem(npc.getItemId(), 1);
			npc.say("领取失败：\r\n\r\n#r1). 抱歉您没有抽中.");

		}
	} else if(sel == 12) {
		var xxx = Math.floor(Math.random() * 3);
		if(xxx == 1) {
			player.gainItem(2616062, 1);
			player.loseItem(npc.getItemId(), 1);
			npc.say("恭喜您成功领取了#t2616062# x 1.");
			npc.broadcastNotice( "『情人节卷轴箱』 : 恭喜 " + player.getName() + " 抽取了 X防具魔力卷轴 x 1.");

		} else {
			player.loseItem(npc.getItemId(), 1);
			npc.say("领取失败：\r\n\r\n#r1). 抱歉您没有抽中.");

		}
	} else if(sel == 13) {
		var xxx = Math.floor(Math.random() * 3);
		if(xxx == 1) {
			player.gainItem(2615031, 1);
			player.loseItem(npc.getItemId(), 1);
			npc.say("恭喜您成功领取了#t2615031# x 1.");
			npc.broadcastNotice( "『情人节卷轴箱』 : 恭喜 " + player.getName() + " 抽取了 X饰品攻击力卷轴 x 1.");

		} else {
			player.loseItem(npc.getItemId(), 1);
			npc.say("领取失败：\r\n\r\n#r1). 抱歉您没有抽中.");

		}
	} else if(sel == 14) {
		var xxx = Math.floor(Math.random() * 3);
		if(xxx == 1) {
			player.gainItem(2615032, 1);
			player.loseItem(npc.getItemId(), 1);
			npc.say("恭喜您成功领取了#t2615032# x 1.");
			npc.broadcastNotice( "『情人节卷轴箱』 : 恭喜 " + player.getName() + " 抽取了 X饰品魔力卷轴 x 1.");

		} else {
			player.loseItem(npc.getItemId(), 1);
			npc.say("领取失败：\r\n\r\n#r1). 抱歉您没有抽中.");

		}
	}

}