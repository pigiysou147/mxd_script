var itemList = Array(
	1572009,//拉兹丽9型
	4310300,
	1214018,//神秘之影龙息臂箭
	1403018, //神秘之影拳炮
	1213018, //- 神秘之影调谐器 等级要求：200
	1212120, //神秘之影双头杖
	1222113, //神秘之影灵魂手铳
	1232113, //神秘之影亡命剑
	1242121, //神秘之影能量剑
	1242122, //神秘之影能量剑
	1252098, //神秘之影魔法槌
	1592020, //神秘之影
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
	1292018,//神秘之影草扇
	1582023 //神秘之影机甲枪

);

var text = "";
for(var i = 0; i < itemList.length; i++) {
	text += "#L" + i + "##v" + itemList[i] + "##z" + itemList[i] + "##l\r\n";
}
let selection = npc.askMenuS("请选择你想要的武器\r\n\r\n" + text);

//var chance = Math.floor(Math.random()*itemList.length)
var itemid = itemList[selection];

var item = player.gainGachaponItem("神秘武器箱", itemid, 1, 3);
if(item > 0) {
	player.loseItem(npc.getItemId(), 1);
	npc.say("恭喜您，获得了#b#z" + itemid + "# X 1");
} else {
	npc.say("请清理背包~~");
}