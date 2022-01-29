/*  
 *  贡献度购买
 *  QQ12796161 
 */


var eff = "#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";
var z = "#fMap/MapHelper.img/weather/starPlanet2/7#";//"+z+"//美化
var zz = "#fEffect/CharacterEff/1082565/2/0#";//
var kkk = "#fMap/MapHelper.img/weather/thankyou/7#";
var eff1 = "#fEffect/CharacterEff/1112905/0/1#";//小红心
var icon = "#fUI/Basic.img/BtMin2/normal/0#";
var iconEvent = "#fUI/UIToolTip.img/Item/Equip/Star/Star#";
var ttt = "#fUI/UIWindow/Quest/icon2/7#";//"+ttt+"//美化1
var ttt2 = "#fUI/UIWindow/Quest/icon6/7#";////美化2
var ttt3 = "#fUI/UIWindow/Quest/icon3/6#";//"+ttt3+"//美化圆
var ttt4 = "#fUI/UIWindow/Quest/icon5/1#";//"+ttt4+"//美化New
var ttt5 = "#fUI/UIWindow/Quest/icon0#";////美化!
var ttt6 = "#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";//"+ttt6+"//美化会员
var z1 = "#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";//"+z+"//美化
var tt = "#fEffect/ItemEff/1112811/0/0#";//音符
var wi8 = "#fUI/StarCityUI.img/Board_GameRank/user/myrank#";  //黄色条
var feng = "#v4032733#"

		var selStr = "  "+wi8+"\r\n\r\n";
		selStr += "\t\t#d#L1#点券购买#l#k";
		selStr += "\t\t\t#r#L2#余额购买#l#k\r\n\r\n";
		
		let selection =npc.askMenuS(selStr);
		
        switch (selection) {
        case 2: // 金币
            
			player.runScript( "元宝贡献");
            break;
		case 1: // 点券
			player.runScript( "点券贡献");
			break;
		
         }
 