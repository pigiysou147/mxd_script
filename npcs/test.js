/**
* 链接NPC  QQ:739977676 
**/
var dtb = "#fEffect/CharacterEff.img/1112949/3/0#"
var n = "#fEffect/CharacterEff/1082229/0/0#"
var i = "#fEffect/CharacterEff.img/1112900/3/1#"
var Icon = "#fEffect/CharacterEff/1112904/2/1#";
var menuList = Array(
	Array("　開通五行　" , 1),
	Array("　五行強化　" , 2),
	Array("領取五行武器" , 3),
	Array("領取五行防具" , 4),
	Array("前往五行副本" , 8),
	Array("五行金元抽獎" , 9),
	Array("　寶石兌換　" , 7),
	Array("　門票兌換　" , 10),
	Array("五行防具轉職" , 5),
	Array("五行武器轉職" , 6)
	

        );
		
let selStr = "\t\t  " + dtb + " #e#r五行系統#n " + dtb + "\r\n";
	selStr += "" + i + "" + i + "" + i + "" + i + "" + i + "" + i + "" + i + "" + i + "" + i + "" + i + "" + i + "" + i + "" + i + "" + i + "" + i + "" + i + "" + i + "" + i + "" + i + "" + i + "" + i + "" + i + "" + i + "" + i + "" + i + "" + i + "" + i + "" + i + "" + i + "";
for(var i = 0; i < menuList.length ; i++){
	if(i%2 == 0){
		selStr += "\r\n";
	}
	selStr +="#fs13##d#L" + menuList[i][1] + "#"+n + menuList[i][0] + "#l" + "  ";
}


let selected = npc.askMenu(selStr);

switch (selected){
	case 1:
		player.runScript("選擇仙魔")
		break;
	case 2:
		player.runScript("五行修練")
		break;
	case 3:
		player.runScript("五行武器")
		break;
	case 4:
		player.runScript("五行防具")
		break;
	case 5:
		player.runScript("五行防具轉職")
		break;
	case 6:
		player.runScript("五行武器轉職")
		break;
	case 7:
		player.runScript("寶石兌換")
		break;
	case 8:
		player.changeMap(913070000);
		break;
	case 9:
		player.runScript("五行寶石抽獎")
		break;
	case 10:
		player.runScript("五行門票兌換")
		break;
	case 11:
		player.runScript("裝備更換")
		break;
	case 12:
		player.runScript("自由轉職")
		break;
	case 13:
		player.resetSkills()
		break;
	case 14:
		player.runScript("時裝換型")
		break;
	case 15:
		player.runScript("補償禮包")
		break;
	case 16:
		player.runScript("股市系統")
		break;
	case 17:
		player.runScript("成就系统")
		break;
	case 18:
		player.runScript("猜拳系統")
		break;
	case 19:
		player.runScript("答題npc")
		break;
	case 20:
		player.runScript("衝等禮包")
		break;
	case 21:
		player.runScript("師徒系統")
		break;
	case 22:
		player.runScript("餘額月光")
		break;
	case 23:
		player.runScript("Boss擊殺排行")
		break;
	case 24:
		player.runScript("裝備評分")
		break;
}