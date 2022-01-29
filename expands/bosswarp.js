var ttt6 = "#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";
var tz12 = "#fUI/GuildMark/Mark/Etc/00009020/8#"; //红星

var ttt = "#fUI/UIWindow/Quest/icon2/7#"; //"+ttt+"//美化1
var ttt2 = "#fUI/UIWindow/Quest/icon6/7#"; ////美化2
var ttt3 = "#fUI/UIWindow/Quest/icon3/6#"; //"+ttt3+"//美化圆
var ttt4 = "#fUI/UIWindow/Quest/icon5/1#"; //"+ttt4+"//美化New
var ttt5 = "#fUI/UIWindow/Quest/icon0#"; ////美化!
var ttt7 = "#fUI/Basic/BtHide3/mouseOver/0#"; //"+ttt6+"//美化会员
var wi14 = "#fEffect/CharacterEff/1051294/1/4#"; //黄色星星
var ttt6 = "#fUI/UIWindowBT.img/WorldMap/BtQsearch/mouseOver/0#";

var nameList = Array(
	// - BOSS名字    PQ名字       限定次数   
	Array("品克缤", "Pinkbeen", 2),
	Array("混沌品克缤", "Pinkbeen_Chaos", 2),
	Array("森兰丸", "Ranmaru_Crazy", 2),
	Array("浓姬", "浓姬", 2),
	Array("希纳斯", "boss_shinas", 2),
	Array("普通血腥女王", "Bloody", 1),
	Array("进阶血腥女王", "Bloody", 1),
	Array("普通皮埃尔", "Pierre", 1),
	Array("进阶皮埃尔", "Pierre_CHAOS", 1),
	Array("普通半半", "Banban", 1),
	Array("进阶半半", "Banban_CHAOS", 1),
	Array("普通贝伦", "Bellum", 1),
	Array("进阶贝伦", "Bellum_CHAOS", 1),
	Array("贝勒德", "Beidler", 3),
	Array("卡雄", "Caoong", 1),
	Array("普通麦格纳斯", "Magnus", 1),
	Array("困难麦格纳斯", "Magnus_Hard", 1),
	Array("阿勒玛", "阿勒玛", 3),
	Array("调和精灵", "调和精灵", 3),
	Array("斯乌", "Siwu", 1),
	Array("困难斯乌", "Siwu_Chaos", 1),
	Array("桃乐丝", "taoalesi", 1),
	Array("乌鲁斯", "UrusBOSS", 1),
	Array("戴米安", "Demian", 1),
	Array("普通路西德", "Lucid", 1),
	Array("困难路西德", "Lucid_Hard", 1),
	Array("敦凯尔", "Dunkel", 1),
	Array("至暗魔晶", "Dusk", 1),
	Array("普通觉醒西拉", "JinHillah", 1),
	Array("困难觉醒西拉", "JinHillah_Hard", 1),
	Array("威尔", "Will", 1),
	Array("地狱威尔", "Will_hard", 1),
	Array("黑魔法师", "BlackMage", 1),
	Array("地狱黑魔法师", "BlackMage_hard", 1)

);
var pqName = "";
var need = 0;

var mapList = Array(
	//     					名称			 地图ID     消耗金额    获得物品 4个ID
	Array("#v2441003#[#g#e入门#k]闹钟", 220080000, 0, 2433813, 2433813, 2433814, 2433814),
	Array("#v2434657#[#g#e入门#k]扎昆", 211042300, 20000, 2433813, 2433813, 2433814, 2433814),
	Array("#v3010128#[#g#e入门#k]黑龙", 240050400, 20000, 1113084, 1122076, 2049116, 4310143),
	Array("#v2870846#[#g#e入门#k]阿卡", 272020110, 20000, 1152187, 2044603, 1402253, 4310143),
	Array("#v2870848#[#g#e入门#k]雷昂", 211070000, 20000, 1352977, 1542116, 1122306, 4310143),
	Array("#v3010355#[#g#e入门#k]钻机", 703020000, 20000, 1003893, 1032191, 1113038, 4310143),
	Array("#v5000332#[#g#e入门#k]希拉", 262030000, 20000, 2049752, 2048703, 2049603, 4310143),
	Array("#v2870379#[#g#e入门#k]品克缤", 270050000, 20000, 1022144, 2040853, 3010073, 2040349),
	Array("#v2870528#[#g#e入门#k]森兰丸", 807300100, 100000, 1232072, 1302229, 1312118, 1322164),
	Array("#v2870761#[#g#e入门#k]浓姬", 811000999, 100000, 1102456, 1152094, 1082472, 1052509),
	Array("#v2870485#[#g#e入门#k]希纳斯", 271040000, 20000, 1012319, 1022197, 2049603, 2048749),
	Array("#v2870577#[#b#e进阶#k]鲁塔比斯", 105200000, 100000, 1003722, 1003720, 1003719, 1003721),
	Array("#v5000345#[#b#e进阶#k]贝勒德", 863000100, 100000, 1113075, 1122267, 1032223),
	Array("#v2870699#[#b#e进阶#k]卡雄", 221030900, 100000, 1342090, 1302297, 1152160, 1022211),
	Array("#v2872018#[#b#e进阶#k]阿勒玛", 450001219, 100000, 1712001, 1712002, 1712000, 0),
	Array("#v2870842#[#b#e进阶#k]调和精灵", 450005000, 100000, 1712004, 1712003, 1712005, 0),
	Array("#v2870571#[#r#e困难#k]麦格纳斯", 401060000, 100000, 1082546, 1072746, 1102484, 1113231),
	Array("#v2870700#[#r#e困难#k]斯乌", 350060300, 100000, 1302333, 1522138, 1152174, 0),
	Array("#v2870863#[#r#e困难#k]桃乐斯", 992000000, 100000, 1382235, 1032217, 1152156, 1162018),
	Array("#v4009347#[#r#e困难#k]乌鲁斯", 970072200, 100000, 1332242, 1402180, 1402214, 0),
	Array("#v2870878#[#r#e困难#k]戴米安", 105300303, 100000, 1003797, 1003801, 1402260, 1142111),
	Array("#v2870943#[#r#e困难#k]觉醒希拉", 450011320, 100000,1102481,1232075,4036518,1402211),
	Array("#v2870698#[#r#e终极#k]露西德", 450004000, 100000, 1102940, 1152196, 1053066, 1073159),
	Array("#v4034839#[#r#e终极#k]至暗魔晶", 450009301, 100000, 1004637, 1102871, 1132296, 1202193),
	Array("#v2870950#[#r#e终极#k]敦凯尔", 450012200, 100000, 1004637, 1102871, 1132296, 1202193),
	Array("#v2870897#[#r#e终极#k]威尔", 450007240, 100000, 1402259, 1542117, 1242121, 1462243),
	Array("#v3018230#[#r#e地狱#k]#b最难BOSS--黑魔法师#k", 450012500, 100000, 1312213, 1522152, 2612078, 1113211)

);

var selStr = "\r\n#e#d您好，史诗BOSS副本系列,更多请期待添加..#n#l#k\r\n\r\n";
selStr += "#L123# " + ttt3 + ttt3 + ttt3 + ttt3 + ttt3 + "#r#e[BOSS次数查询]#n#b #k" + ttt3 + ttt3 + ttt3 + ttt3 + ttt3 + "#l#n\r\n";
selStr += "\r\n#d======================================================#k\r\n";
for(var i = 0; i < mapList.length; i++) {
	selStr += "#L" + i + "# #r#e#n#b" + mapList[i][0] + "#r#k#l#n";
	if(i % 2 == 1) {
		selStr += "\r\n";

	} else {
		selStr += "\t";
	}
}
selStr += "\r\n\r\n\r\n";
let selection = npc.askMenuS(selStr);
if(selection == 123) {
	var txt = "以下为boss次数\r\n";
	txt += "#rBOSS名称#k           #b进入次数#k      #e剩余次数#k\r\n";
	for(var i = 0; i < nameList.length; i++) {
		txt += "#r" + nameList[i][0] + "#k";
		// 填充名字空格
		for(var j = 0 ;j < 11-nameList[i][0].toString().length; j++) {
			txt += "  ";
		}

		txt += "#b" + player.getPQLog(nameList[i][1]) + "#k";

		txt += "\t\t\t#e";

		txt += nameList[i][2]-player.getPQLog(nameList[i][1]);
		txt += "#k\r\n";
	}
	npc.say(txt);

} else {
	//450004000
	
	
		var need = mapList[selection][2];
		var txt = "你选择的副本为：" + mapList[selection][0]
		txt += "\r\n该副本会掉落:\r\n";
		for(var i = 3; i < mapList[selection].length; i++) {
			txt += "#v" + mapList[selection][i] + "#";
		}
		let sel = npc.askYesNo(txt);
		if(sel == 1) {

			if(player.hasMesos(need)) { //判断你背包金币大于200000
				player.loseMesos(need); //扣去8888888
				player.changeMap(mapList[selection][1]); //传送地图
				npc.say("你已经到达目的地.\r\n祝你游戏愉快!");
			} else {
				npc.say("你没有" + need + "金币,我不能传送你过去");
			}

		}
	
}