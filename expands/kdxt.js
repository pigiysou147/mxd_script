/* 口袋 648215571*/
var status = 0;

var eff = "#fEffect/CharacterEff/1112905/0/1#"; //
var epp = "#fEffect/CharacterEff/1082312/0/0#"; //彩光
var epp1 = "#fEffect/CharacterEff/1082312/2/0#"; //彩光1
var axx = "#fEffect/CharacterEff/1051294/0/0#"; //爱心
var xxx = "#fEffect/CharacterEff/1082565/2/0#"; //星系
var ppp = "#fEffect/CharacterEff/1112907/4/0#"; //泡炮 
var epp3 = "#fEffect/CharacterEff/1112908/0/1#"; //彩光3
var axx1 = "#fEffect/CharacterEff/1062114/1/0#"; //爱心
var zs = "#fEffect/CharacterEff/1112946/2/0#"; //砖石粉
var zs1 = "#fEffect/CharacterEff/1112946/1/1#"; //砖石蓝
var dxxx = "#fEffect/CharacterEff/1102232/2/0#"; //星系
var tz = "#fEffect/CharacterEff/1082565/2/0#"; //兔子蓝
var tz1 = "#fEffect/CharacterEff/1082565/4/0#"; //兔子粉
var tz5 = "#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#";
var iconEvent = "#fUI/UIToolTip.img/Item/Equip/Star/Star#";
var ttt2 = "#fUI/UIWindow/Quest/icon6/7#"; ////美化2
var yun = "#fUI/UIWindow/Quest/icon7/0#"; ////红沙漏
var yun1 = "#fUI/UIWindow/Quest/icon7/10#"; ////红色圆
var yun2 = "#fUI/UIWindow/Quest/icon8/0#"; ////蓝指标
var yun3 = "#fUI/UIWindow/Quest/prob#"; ////机率获得
var yun4 = "#fUI/UIWindow/Quest/reward#"; ////奖励
var yun5 = "#fUI/UIWindow/Quest/summary#"; ////任务简洁
var yun6 = "#fUI/UIWindow/PartySearch2/BtPrev/mouseOver/0#"; ////左指标
var yun7 = "#fUI/UIWindow/PartySearch2/BtNext/mouseOver/0#"; ////右指标
var yun8 = "#fUI/UIWindow/MonsterBook/arrowLeft/normal/0#"; ////金左指标
var yun9 = "#fUI/UIWindow/MonsterBook/arrowRight/normal/0#"; ////金右指标
var yun12 = "#fUI/UIWindow/Megaphone/2#"; ////骷髅
var xiaoyun1 = "#fUI/UIWindow/AriantMatch/characterIcon/0#"; ////红方
var xiaoyun2 = "#fUI/UIWindow/AriantMatch/characterIcon/1#"; ////蓝方
var xiaoyun3 = "#fUI/UIWindow/AriantMatch/characterIcon/2#"; ////绿方
var xiaoyun4 = "#fUI/UIWindow/AriantMatch/characterIcon/3#"; ////黄方
var xiaoyun5 = "#fUI/UIWindow/AriantMatch/characterIcon/4#"; ////紫方
var xiaoyun6 = "#fUI/UIWindow/AriantMatch/characterIcon/5#"; ////橙方
var xiaoyun7 = "#fUI/UIWindow/Minigame/Common/btStart/mouseOver/0#"; ////开始
var xiaoyun8 = "#fUI/UIWindow/Minigame/Common/mark#"; ////冒险岛图标

var selStr = "\t  " + xiaoyun1 + "" + xiaoyun2 + "" + xiaoyun3 + "" + xiaoyun4 + "" + xiaoyun5 + "" + xiaoyun5 + "" + xiaoyun5 + "" + xiaoyun1 + "" + xiaoyun2 + "" + xiaoyun3 + "" + xiaoyun4 + "" + xiaoyun5 + "" + xiaoyun2 + "" + xiaoyun3 + "" + xiaoyun4 + "" + xiaoyun5 + "\r\n";
selStr += "\t  " + xiaoyun1 + "\t\t\t#e#r口袋系统\t\t\t  " + xiaoyun5 + "\r\n";
selStr += "\t " + xiaoyun1 + "" + xiaoyun2 + "" + xiaoyun3 + "" + xiaoyun4 + "" + xiaoyun5 + "" + xiaoyun5 + "" + xiaoyun6 + "" + xiaoyun1 + "" + xiaoyun2 + "" + xiaoyun3 + "" + xiaoyun4 + "" + xiaoyun5 + "" + xiaoyun2 + "" + xiaoyun3 + "" + xiaoyun4 + "" + xiaoyun5 + "\r\n";
selStr += "\t\t\t #L0##d" + zs + "口袋介绍" + zs + "#l#k\r\n";
selStr += "\t\t\t #d#L4#" + zs1 + "升级口袋" + zs1 + "#l\r\n";
selStr += "\t\t #r#L7#  " + zs1 + "顶级徽章潜能" + zs1 + "#l";

let selection = npc.askMenuS(selStr);
if(selection == 0) {
	var selStr = "#e#r本服特殊的口袋系统，下面是口袋的属性介绍以及需要的材料.。\r\n\r\n";
	selStr += "#e#r基础的口袋#z1162025##v1162025#可以在废弃任务当中获得哦~。\r\n";
	selStr += "#b#z1162032##v1162032# 全属性X10 需要材料:#r" + xiaoyun8 + "\r\n";
	selStr += "#k#e#r#v4001618# X 20 1000W金币 \r\n\r\n";

	selStr += "#b#z1162035##v1162035# 全属性X20 需要材料:#r" + xiaoyun8 + "\r\n";
	selStr += "#k#e#r#v4001618# X 30 1000W金币\r\n\r\n";

	selStr += "#b#z1162037##v1162037# 全属性X30 需要材料:#r" + xiaoyun8 + "\r\n";
	selStr += "#k#e#r#v4001618# X 60 1000W金币\r\n\r\n";

	selStr += "#b#z1162071##v1162071# 全属性X40 需要材料:#r" + xiaoyun8 + "\r\n";
	selStr += "#k#e#r#v4001618# X 100 1000W金币\r\n\r\n";


	npc.say(selStr);
} else if(selection == 4) {
	
	player.runScript("sjkd");
	
} else if(selection == 7) {
	
	player.runScript("kdqn");
	
}