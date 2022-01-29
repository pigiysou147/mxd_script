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
var kkkbak1 = "#fMap/MapHelper.img/weather/rose/0#"; ////美化2
var bk1 = "#fEffect/ItemEff.img/1004532/effect/default/4#"
var bk2 = "#fEffect/ItemEff.img/1004475/effect/jump/0#"
var bk3 = "#fEffect/ItemEff.img/1004435/effect/alert/0#"
var bk4 = "#fEffect/ItemEff.img/1004477/effect/prone/1#"
var bk5 = "#fEffect/ItemEff.img/1004436/effect/default/3#"
var bk6 = "#fEffect/ItemEff.img/1004437/effect/walk1/0#"
var sg1 = "#fEffect/ItemEff.img/2022109/1#"
var sg2 = "#fEffect/ItemEff.img/2022109/2#"
var zx = "#fEffect/ItemEff.img/1003492/effect/default/1#"
var lj = "#fEffect/ItemEff.img/1003493/effect/default/1#"
var dq = "#fEffect/ItemEff.img/1003494/effect/default/1#"
var ye = "#fEffect/ItemEff.img/1003495/effect/default/0#"
var fg = "#fEffect/ItemEff.img/1004124/effect/ladder/1#"
var dtb = "#fEffect/CharacterEff.img/1112949/3/0#"
var xtb1 = "#fEffect/CharacterEff.img/1003249/0/0#" //第一排
var xtb2 = "#fEffect/CharacterEff.img/1003249/1/0#" //第二排
var xtb3 = "#fEffect/CharacterEff.img/1003252/0/0#" //第三排
var xtb4 = "#fEffect/CharacterEff.img/1112900/3/1#" //第四排
var zzz = "#fUI/UIWindowGL.img/FeedbackSystem/backgrnd3#"
var 黄星 = "#fEffect/CharacterEff/1112924/0/0#"
var icon = "#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#"
var hii = "#fEffect/BasicEff/MainNotice/BlockBuster/Default/3#"
var a1 = "#fEffect/ItemEff/1070069/effect/walk1/0#"
var a2 = "#fEffect/ItemEff/1070069/effect/walk1/1#"
var a3 = "#fEffect/ItemEff/1070069/effect/walk1/2#"
var a4 = "#fEffect/ItemEff/1070069/effect/walk1/3#"
var a5 = "#fEffect/ItemEff/1070069/effect/walk1/4#"
var a6 = "#fEffect/ItemEff/1070069/effect/walk1/5#"
var a7 = "#fEffect/ItemEff/1070069/effect/walk1/6#"
var a8 = "#fEffect/ItemEff/1070069/effect/walk1/7#"
var ee="#fEffect/CharacterEff/1003252/1/0#";
var eff1 = "#fEffect/CharacterEff/1112905/0/1#"; //小红心
var xxx = "#fEffect/CharacterEff/1082565/2/0#"; //星系




let selStr ="\t\t\t\t\t" + sss + " 美发中心 " + sss + "#e\r\n\r\n";

selStr +="\t\t\t   #L6#"+eff1+"#b更换脸型 #k"+eff1+"#l\r\n\r\n";
selStr +="\t\t\t   #L4#"+eff1+"#b头发染色#k "+eff1+"#l\r\n\r\n";
//selStr +="\t\t\t   #L3#"+eff1+"#b发型拯救 #k"+eff1+"#l\r\n\r\n";
selStr +="  #L5#"+eff1+"#b机器造型 #k"+eff1+"#l\t";
selStr +="\t\t#L8#"+eff1+"#b更换肤色 #k"+eff1+"#l\r\n\r\n";

selStr +="#L2#"+eff1+"#r代码自选发型#k "+eff1+"#l\t";
selStr += "\t#L7#"+eff1+"#r代码自选脸型 #k"+eff1+"#l\r\n";



let selected = npc.askMenu(selStr);

switch (selected){
	case 1://副本组队
		player.runScript("自选发型")
		break;
	case 2://返回市场
		player.runScript("代码发型")
		break;
	case 3://提升中心
		player.runScript("发型拯救")
		break;
	case 4://美容美发
		player.runScript("hair_henesys1")
		break;
 	case 5://万能传送
		player.runScript("androidBeautyshop_CN")
		break;
	case 6://万能传送
		player.runScript("face_henesys1")
		break;
	case 7://万能传送
		player.runScript("自选脸型")
		break;
	case 8://万能传送
		player.runScript("skin_henesys1")
		break;
}