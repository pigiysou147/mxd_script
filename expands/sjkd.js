var aaa = "#fUI/UIWindow/AriantMatch/characterIcon/5#";
var yun = "#fUI/UIWindow/Megaphone/2#"; ////红沙漏
var yun2 = "#fUI/UIWindow/Quest/icon8/0#"; ////蓝指标
var yun8 = "#fUI/UIWindow/MonsterBook/arrowLeft/normal/0#"; ////金左指标
var yun9 = "#fUI/UIWindow/MonsterBook/arrowRight/normal/0#"; ////金右指标
var yun4 = "#fUI/UIWindow/Quest/reward#"; ////奖励
var ttt = "#fUI/UIWindow/Quest/icon2/7#"; //"+ttt+"//美化1
var ttt2 = "#fUI/UIWindow/Quest/icon6/7#"; ////美化2
var ttt3 = "#fUI/UIWindow/Quest/icon3/6#"; //"+ttt3+"//美化圆
var ttt4 = "#fUI/UIWindow/Quest/icon5/1#"; //"+ttt4+"//美化New
var ttt5 = "#fUI/UIWindow/Quest/icon0#"; ////美化!
var ttt7 = "#fUI/Basic/BtHide3/mouseOver/0#"; //"+ttt6+"//美化会员
var ttt6 = "#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";
var epp = "#fEffect/CharacterEff/1082312/0/0#"; //彩光
var eff = "#fCharacter/Weapon/01702523.img/48/straight/0/effect#"; //彩虹带
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
var tz7 = "#fEffect/CharacterEff/1112900/3/1#"; //音符红
var tz8 = "#fEffect/CharacterEff/1112900/4/1#"; //音符绿
var tz88 = "#fEffect/CharacterEff/1112900/5/1#"; //音符绿!
var yun1 = "#fUI/UIWindow/Quest/icon7/10#"; ////红色圆
var tz9 = "#fEffect/CharacterEff/1112902/0/0#"; //蓝心
var tz10 = "#fEffect/CharacterEff/1112903/0/0#"; //红心
var tz11 = "#fEffect/CharacterEff/1112904/0/0#"; //彩心
var tz12 = "#fEffect/CharacterEff/1112924/0/0#"; //黄星
var tz13 = "#fEffect/CharacterEff/1112925/0/0#"; //蓝星
var tz14 = "#fEffect/CharacterEff/1112926/0/0#"; //红星
var tz15 = "#fEffect/CharacterEff/1112949/0/0#"; //花样音符
var tz16 = "#fEffect/CharacterEff/1112949/1/0#"; //花样音符
var tz17 = "#fEffect/CharacterEff/1112949/2/0#"; //花样音符
var tz18 = "#fEffect/CharacterEff/1112949/3/0#"; //花样音符
var tz19 = "#fEffect/CharacterEff/1112949/4/0#"; //花样音符
var tz20 = "#fEffect/CharacterEff/1114000/1/0#"; //红星花
var a = 0;
var selStr = "#d把#z1162025#取下放背包，请选择当前需要晋级的符号：#n#k\r\n";
selStr += "#e#r#L0#" + zs1 + "晋级到『#z1162032#』#k#d全属性+10#l#n\r\n\r\n";
selStr += "#e#r#L1#" + zs1 + "晋级到『#z1162035#』#k#d全属性+20#l#n\r\n\r\n";
selStr += "#e#r#L2#" + zs1 + "晋级到『#z1162037#』#k#d全属性+35#l#n\r\n\r\n";
selStr += "#e#r#L3#" + zs1 + "晋级到『#z1162071#』#k#d全属性+40#l#n\r\n\r\n";
let selection = npc.askMenuS(selStr);
switch(selection) {
	case 0:

		player.runScript("koudai1");
		break;
	case 1:

		player.runScript("koudai2");
		break;
	case 2:

		player.runScript("koudai3");
		break;
	case 3:

		player.runScript("koudai4");
		break;
}