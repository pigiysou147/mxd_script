/**
* 链接NPC  QQ:739977676 
**/
var dtb = "#fEffect/CharacterEff.img/1112949/3/0#"
var n = "#fEffect/CharacterEff.img/1003249/1/0#"
var i = "#fEffect/CharacterEff.img/1112900/3/1#"
var xin = "#fEffect/ItemEff/5110000/1#";

	var selStr = "\r\n#k#n  ┏━━━━━━━━━━━━━━━━━━━━━━━┓\r\n";
        //selStr += "#e#L1#"+xin+"使用#v2430006#强化微章"+xin+"#l#e#L2#"+xin+"使用#v2430078#强化微章"+xin+"#l\r\n";
       selStr += "#e#L3#"+xin+"使用#v2430006#强化符文"+xin+"#l#e#L4#"+xin+"使用#v2430078#强化符文"+xin+"#l\r\n";
	   selStr += "#e#L5#"+xin+"使用#v2430006#强化徽章"+xin+"#l#e#L6#"+xin+"使用#v2430078#强化徽章"+xin+"#l\r\n";
        //selStr += "#e#L7#"+xin+"使用#v2430006#强化符文"+xin+"#l#e#L8#"+xin+"使用#v2430078#强化符文"+xin+"#l\r\n";
		selStr += "\r\n#k#n  ┗━━━━━━━━━━━━━━━━━━━━━━━┛\r\n";
let selected = npc.askMenu(selStr,9310073);

switch (selected){
	case 1:
		player.runScript("洗血洗藍")
		break;
	case 2:
		player.runScript("破功中心")
		break;
	case 3:
		player.runScript("符文升级2")
		break;
	case 4:
		player.runScript("符文升级1")
		break;
	case 5:
		player.runScript("符文升级3")
		break;
	case 6:
		player.runScript("符文升级4")
		break;
	case 7:
		player.runScript("AB_潛能專區")
		break;
	case 8:
		player.runScript("50階戒指")
		break;
	case 9:
		player.runScript("兌換中心")
		break;
	case 10:
		player.runScript("傳承系統")
		break;
}