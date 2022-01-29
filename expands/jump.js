/*  This is mada by Jackson    
 *  This source is made by Funms Team
 *  
 *  功能:Custom 怪物地图引导
 *  
 *  @Author Jackson 
 */

/* global cm */

var icon = "#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#";
var head = "#fUI/UIWindow2.img/Quest/quest_info/summary_icon/summary#\r\n\r\n";

var g = "#fEffect/CharacterEff/1082565/0/0#"; //饼干兔子
var c = "#fEffect/CharacterEff/1114000/1/0#"; //篮心
var tz20 = "#fEffect/CharacterEff/1114000/1/0#"; //红星花
var tz88 = "#fEffect/CharacterEff/1112900/5/1#"; //音符绿!
var tz8 = "#fEffect/CharacterEff/1112900/4/1#"; //音符绿
var tz7 = "#fEffect/CharacterEff/1112900/3/1#"; //音符红

var tz0 = "#fEffect/ItemEff/1070069/effect/walk1/0#";
var tz1 = "#fEffect/CharacterEff/1082700/1/0#";
var tz2 = "#fEffect/CharacterEff/1082700/2/0#";
var tz3 = "#fEffect/CharacterEff/1082700/3/0#";
var tz4 = "#fEffect/CharacterEff/1082700/4/0#";
var tz5 = "#fEffect/CharacterEff/1082700/5/0#";

//"#fUI/Basic.img/BtMin2/normal/0#";
var monstermaps = Array(
	Array(100000202, "射手跳跳"),
	Array(220000006, "玩具城跳跳"),
	Array(280020000, "火山的心脏"),
	Array(867115800, "月色鹊桥"),
	Array(867115000, "密室咖啡厅"),
	Array(109040001, "共4阶段"),
	Array(910130000, "忍苦树林"),
	Array(109030001, "上楼找出口"),
	Array(109040001, "高地第1阶段"),
	Array(910360000, "地铁B1"),
	Array(910360100, "地铁B2"),
	Array(610020000, "英雄谷1"),
	Array(910360200, "地铁 B 3  第1区域"),
	Array(280020001, "火山心脏 第2阶段"),
	Array(910130100, "忍苦森林 第3阶段"),
	Array(910530000, "韧性之林 第1阶段"),
	Array(910530100, "韧性之林 第3阶段"),
	Array(910530200, "韧性之林 第5阶段")
);

var text = head + "请选择你要接连的地方(需要金币：5000)：\r\n#r";
for(var i = 0; i < monstermaps.length; i++) {
	text += "#L" + i + "# " + icon + " #m" + monstermaps[i][0] + "# #b" + monstermaps[i][1] + "#r\r\n";
}
let selection = npc.askMenu(text);
let sel = npc.askYesNo(head + "在这里的事情办完了吗？确定要出发到#e#b#m" + monstermaps[selection][0] + "##n#k这个地方了吗？", false);

if(sel == 1) {
	if(!player.hasMesos(5000)  ) {
		npc.say(head + "对不起,你的金币不足。\r\n需要5000金币才能进行。");
	} else {
		player.loseMesos(5000);
		player.changeMap(monstermaps[selection][0], 0);
	}
} else {
	npc.say(head + "那需要服务的时候再来找我哦！", false);
}