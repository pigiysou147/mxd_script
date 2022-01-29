/*
 脚本功能：商店
 */

var a = 0;
var icon = "#fUI/Basic.img/BtMin2/normal/0#";
var aaa ="#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";
var aaa = "#fUI/UIWindow/AriantMatch/characterIcon/5#";
var yun = "#fUI/UIWindow/Megaphone/2#";////红沙漏
var yun2 = "#fUI/UIWindow/Quest/icon8/0#";////蓝指标
var yun8 = "#fUI/UIWindow/MonsterBook/arrowLeft/normal/0#";////金左指标
var yun9 = "#fUI/UIWindow/MonsterBook/arrowRight/normal/0#";////金右指标
var yun4 = "#fUI/UIWindow/Quest/reward#";////奖励
var ttt = "#fUI/UIWindow/Quest/icon2/7#";//"+ttt+"//美化1
var ttt2 = "#fUI/UIWindow/Quest/icon6/7#";////美化2
var ttt3 = "#fUI/UIWindow/Quest/icon3/6#";//"+ttt3+"//美化圆
var ttt4 = "#fUI/UIWindow/Quest/icon5/1#";//"+ttt4+"//美化New
var ttt5 = "#fUI/UIWindow/Quest/icon0#";////美化!
var ttt7 = "#fUI/Basic/BtHide3/mouseOver/0#";//"+ttt6+"//美化会员
var ttt6 = "#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";
var epp = "#fEffect/CharacterEff/1082312/0/0#";  //彩光
var eff = "#fCharacter/Weapon/01702523.img/48/straight/0/effect#"; //彩虹带
var eff = "#fEffect/CharacterEff/1112905/0/1#"; //
var epp = "#fEffect/SetItemInfoEff/297/8#";  //彩光
var epp1 = "#fEffect/CharacterEff/1082312/2/0#"; //彩光1
var axx = "#fEffect/CharacterEff/1051294/0/0#";  //爱心
var xxx = "#fEffect/CharacterEff/1082565/2/0#"; //星系
var ppp = "#fEffect/CharacterEff/1112907/4/0#"; //泡炮 
var epp3 = "#fEffect/CharacterEff/1112908/0/1#";  //彩光3
var axx1 = "#fEffect/CharacterEff/1062114/1/0#";  //爱心
var zs = "#fEffect/CharacterEff/1112946/2/0#";  //砖石粉
var zs1 = "#fEffect/CharacterEff/1112946/1/1#";  //砖石蓝
var dxxx = "#fEffect/CharacterEff/1102232/2/0#"; //星系
var tz = "#fEffect/CharacterEff/1082565/2/0#";  //兔子蓝
var tz1 = "#fEffect/CharacterEff/1082565/4/0#";  //兔子粉
var tz7 = "#fEffect/CharacterEff/1112900/3/1#";  //音符红
var tz8 = "#fEffect/CharacterEff/1112900/4/1#";  //音符绿
var tz88 = "#fEffect/CharacterEff/1112900/5/1#";  //音符绿!
var yun1 = "#fUI/UIWindow/Quest/icon7/10#";////红色圆
var tz9 = "#fEffect/CharacterEff/1112902/0/0#";  //蓝心
var tz10 = "#fEffect/CharacterEff/1112903/0/0#";  //红心
var tz11 = "#fEffect/CharacterEff/1112904/0/0#";  //彩心
var tz12 = "#fEffect/CharacterEff/1112924/0/0#";  //黄星
var tz13 = "#fEffect/CharacterEff/1112925/0/0#";  //蓝星
var tz14 = "#fEffect/CharacterEff/1112926/0/0#";  //红星
var tz15 = "#fEffect/CharacterEff/1112949/0/0#";  //花样音符
var tz16 = "#fEffect/CharacterEff/1112949/1/0#";  //花样音符
var tz17 = "#fEffect/CharacterEff/1112949/2/0#";  //花样音符
var tz18 = "#fEffect/CharacterEff/1112949/3/0#";  //花样音符
var tz19 = "#fEffect/CharacterEff/1112949/4/0#";  //花样音符
var tz20 = "#fEffect/CharacterEff/1114000/1/0#";  //红星花
var xx = "#fEffect/CharacterEff/1082565/4/0#";
var c = "#fEffect/CharacterEff/1112905/0/0#"; //篮心
var t3 ="#fEffect/ItemEff/1112811/0/0#"//美化圆

			var selStr = "\r\n#d#r\t\t\t\t龙骑士萌新乐园#k\r\n\r\n";
            var x = 0;
        selStr += "#L132#" + yun2 + "#d #r新手礼包#d#l　　#k";
        selStr += "#L1#" + yun2 + "#d #r引导简介#d#l#k\r\n";
        selStr += "#L2#" + yun2 + "#d #b外星武器#d#l　　#k";
        selStr += "#L100#" + yun2 + "#d #b等级送礼#d#l#k\r\n";
        selStr += "#L5#" + yun2 + "#d #b爆率箱子#d#l　　#k";
		selStr += "#L9#" + yun2 + "#d #b拍卖箱子#d#l\r\n#k";
		selStr += "#L12#" + yun2 + "#d #b新手符号#d#l　　#k";
        selStr += "#L13#" + yun2 + "#d #r学习技能#d#l#k\r\r";
		selStr += "#L99#" + yun2 + "#d #b六格神秘#d#l　　#k";
		selStr += "#L101#" + yun2 + "#d #r强化套装#d#l#k\r\r";
		//selStr += "#L10#" + yun2 + "#d #r新手戒指#d#l　　#k";
              //selStr += "#L131#" + yun2 + "#d #r新人七天乐#d#l#k\r\r";
        //txt += "#L1#" + c + "　#d #b躲避陷阱#d 　" + c + "#l#k";
        selStr += "#d\r\n\r\n#r#k\r\n\r\n";
        let selection =npc.askMenu(selStr);

		