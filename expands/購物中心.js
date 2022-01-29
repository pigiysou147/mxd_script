/**
* 鏈接NPC  QQ:739977676
**/
var dtb = "#fEffect/CharacterEff.img/1112949/3/0#"
var icon4 = "#fEffect/CharacterEff.img/1003249/0/0#"			//第一排
var n = "#fEffect/CharacterEff.img/1003249/1/0#"			//第二排
var icon3 = "#fEffect/CharacterEff.img/1003252/0/0#"			//第三排
var i = "#fEffect/CharacterEff.img/1112900/3/1#"			//第四排
var icon5 = "#fEffect/CharacterEff.img/1082312/0/0#"
var i1 = "#fEffect/CharacterEff.img/1082312/1/0#"
var i2 = "#fEffect/CharacterEff.img/1082312/2/0#"
var i3 = "#fEffect/CharacterEff.img/1082312/0/0#"
var kkk = "#fUI/UIWindow2.img/itemPot/icon/enabled/2#"
var qq1 = "#fMap/MapHelper.img/weather/balloon/4#"
var text;
let selStr = "\t" + dtb + "#e#d#fs15#歡 迎 使 用 點 券 商 店#n" + dtb + "\r\n#fs12#";
			selStr +=i + i + i + i + i + i + i + i + i + i + i + i + i + i + i + i + i + i + i + i + i + i + i + i + i + i + i + i + i + "\r\n";
			selStr += "#L1##b" + n + " 消耗捲軸" + n + "#l #L2#" + n + " 功能道具" + n + "#l #L3#" + n + " 經驗爆率" + n + "#l\r\n\r\n"
			selStr += "#L5##r" + n + " 副手商店" + n + "#l #L6#" + n + " 雜貨商店" + n + "#l #L7#" + n + " 時尚喇叭" + n + "#l\r\n\r\n"
			selStr += "#L4##d" + n + " 寵物商店" + n + "#l #L9#" + n + " 傷害字型" + n + "#l #L8#" + n + " 玩具商城" + n + "#l\r\n\r\n"
			selStr += "#L10##b" + n + " 楓幣商店" + n + "#l #L11#" + n + " 兌換中心" + n + "#l #L12#" + n + " 椅子商城" + n + "#l\r\n\r\n"
			selStr += "#L13##r" + n + " 飛鏢商店" + n + "#l \r\n\r\n"
			selStr +=i + i + i + i + i + i + i + i + i + i + i + i + i + i + i + i + i + i + i + i + i + i + i + i + i + i + i + i + i + "\r\n";


let selected = npc.askMenu(selStr);

switch (selected){
	case 1:
		player.runScript("AS_消耗卷轴")
		break;
	case 2:
		player.runScript("AS_功能道具")
		break;
	case 3:
		player.runScript("AS_經驗爆率")
		break;
	case 4:
		player.runScript("寵物商店")
		break;	
	case 5:
		npc.sendShop(9072100);
		break;	
	case 6:
		npc.sendShop(9071001);
		break;	
	case 7:
		player.runScript("AS_時尚喇叭")
		break;	
	case 8:
		player.runScript("AS_玩具商店")
		break;
	case 9:
		player.runScript("傷害字型")
		break;
	case 10:
		player.runScript("AS_楓幣商城")
		break;
	case 11:
		player.runScript("兌換中心")
		break;
	case 12:
		player.runScript("椅子商城")
		break;
	case 13:
		player.runScript("飛鏢商店")
		break;
}