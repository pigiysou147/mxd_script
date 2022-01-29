/**
* 链接NPC  QQ:739977676 
**/
var dtb = "#fEffect/CharacterEff.img/1112949/3/0#"
var n = "#fEffect/CharacterEff.img/1003249/1/0#"
var i = "#fEffect/CharacterEff.img/1112900/3/1#"
var menuList = Array(
	Array("我要開通五行" , 1),
	Array("我要進行五行修練" , 2),
	Array("我要領取五行武器" , 3),
	Array("我要領取五行防具" , 4),
	Array("我的五行防具要轉職業" , 5),
	Array("我的五行武器要轉職葉" , 6)
	

        );
		
let selStr = "\t\t  " + dtb + " #fs16##e#r歡迎使用五行系統#n " + dtb + "\r\n";
	selStr += "" + i + "" + i + "" + i + "" + i + "" + i + "" + i + "" + i + "" + i + "" + i + "" + i + "" + i + "" + i + "" + i + "" + i + "" + i + "" + i + "" + i + "" + i + "" + i + "" + i + "" + i + "" + i + "" + i + "" + i + "" + i + "" + i + "" + i + "" + i + "" + i + "";
for(var i = 0; i < menuList.length ; i++){
	if(i%1 == 0){
		selStr += "#b#fs12#\r\n";
	}
	selStr += "#L" + menuList[i][1] + "#" + menuList[i][0] + "#l" + "";
}
let selected = npc.askMenu(selStr,9310073);

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
		player.runScript("搬磚入口")
		break;
	case 8:
		player.runScript("AB_賞金專區")
		break;
	case 9:
		player.runScript("AD_瑪瑙專區")
		break;
	case 10:
		player.runScript("裝備製作")
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