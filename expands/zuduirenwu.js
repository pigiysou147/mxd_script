var ttt6 = "#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";
var tz12 = "#fUI/GuildMark/Mark/Etc/00009020/8#"; //红星

var selStr = "组队任务奖励丰厚，大量点卷/组队点数/活力值/活跃都等你来拿唷！\r\n";
selStr += "#L111##r 组队任务一条龙奖励（奖励轮回石碑一天使用权哦）#k      	  #l\r\n\r\n";
selStr += "#L1#"+ tz12 +"#r组队任务大厅 #b" + "      	  #l\r\n\r\n";
//selStr += "#L888#"+ tz12 +"[组队]家族任务 #b\t #l\r\n\r\n";
selStr += "#L988#"+ tz12 +"[组队]超级绿水灵 #b\t #l\r\n\r\n";
selStr += "#L987#"+ tz12 +"[组队]玩具组队 #b\t#l\r\n\r\n";
selStr += "#L7#"+ tz12 +"[组队]毒雾森林 #b\t#l\r\n\r\n";
selStr += "#L986#"+ tz12 +"[组队]逃脱任务 #b\t #l\r\n\r\n";
selStr += "#L985#"+ tz12 +"[组队]御 龙 魔 #b\t #l\r\n\r\n";
selStr += "#L993#"+ tz12 +"[组队] 海盗船！#b\t#l\r\n\r\n";
//selStr += "#L992#"+ tz12 +"[单人] 武陵道场！#k" + tz12 + "        进入次数" + player.getPQLog("dojang_N") + "/2#l\r\n\r\n";
let selection = npc.askMenuS(selStr);

if(selection == 994) {
	player.changeMap(610030020);
} else if(selection == 993) {

	player.runScript("davyJohn_enter");
	//cm.openNpc(2094000);
} else if(selection == 111) {

	player.runScript("组队一条龙");
	//cm.openNpc(2094000);
} else if(selection == 992) {
	player.changeMap(925020000);

} else if(selection == 988) {
	player.runScript("party1_enter");
	//player.changeMap(103000000, 2); //TODO: shouldn't this be a random portal in Kerning?

	//cm.openNpc(1540100);
} else if(selection == 888) {
	player.runScript("guildquest1_enter");
	//player.changeMap(103000000, 2); //TODO: shouldn't this be a random portal in Kerning?

	//cm.openNpc(1540100);
} else if(selection == 1) {
	player.changeMap(910002000, 0);

	//cm.openNpc(1540100);
} else if(selection == 987) {

	player.changeMap(221023300, 0);

	//cm.openNpc(1500016);
} else if(selection == 986) {
	player.runScript("prisonBreak_enter");

} else if(selection == 985) {

	player.runScript("sky_gate");
} else if(selection == 7) {

	player.changeMap(100030301, 0);
} else if(selection == 6) {

	player.changeMap(933030000, 0);
} 