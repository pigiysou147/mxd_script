/**
 
**/
var status = 0;
var random = Math.floor(Math.random() * 4);
var eff = "#fEffect/CharacterEff/1082565/2/0#";
var vvv = "#fUI/Basic/BtHide3/mouseOver/0#";
var sss = "#fEffect/CharacterEff/1112926/0/0#"; //红星
var z1 = "#fEffect/ItemEff/1112811/0/0#"; //黄金音符
var z5 = "#fEffect/CharacterEff/1112904/2/1#"; //五角花
var eff = "#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";
var icon6 = "#fUI/GuildBBS/GuildBBS/Emoticon/Cash/1#"; //大笑
var sss = "#fUI/UIWindow4/PQRank/rank/gold#";//皇冠
var ttt6 = "#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";
var tz12 = "#fEffect/CharacterEff/1112926/0/0#"; //红星
var ttt6 ="#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";
var tz21 = "#fUI/Basic.img/BtCoin/normal/0#";// 
var axx1 = "#fEffect/CharacterEff/1062114/1/0#";  //爱心
var a = "#fUI/UIWindow/MonsterBook/arrowLeft/normal/0#";////金左指标
var b = "#fUI/UIWindow/MonsterBook/arrowRight/normal/0#";////金右指标

let selStr = "#d#L1#"+sss+"自选脸型#l\r\n\r\n";
//selStr +="#L2#"+sss+"搬砖副本#l\r\n\r\n";
selStr +="#L2#"+sss+"自填代码选脸型#l\r\n\r\n";






let selected = npc.askMenu(selStr);

switch (selected){
	case 1://副本组队
		player.runScript("自选脸型")
		break;
	case 2://返回市场
		player.runScript("代码脸型")
		break;
	case 3://提升中心
		player.runScript("每日委托")
		break;
	case 4://美容美发
		player.runScript("每日跑环")
		break;
 	case 5://万能传送
		player.runScript("每日寻宝")
		break;
	case 6:
		player.runScript("理财购买")
		break;
	case 7:
		player.runScript("突破石便捷突破")
		break;
	case 11:
		player.runScript("点券超市")
		break;
    case 14:
        npc.sendShop(1012004) 
		break;
}