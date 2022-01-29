/**
* 链接NPC  QQ:739977676 
**/
var dtb = "#fEffect/CharacterEff.img/1112949/3/0#"
var n = "#fEffect/CharacterEff.img/1003249/1/0#"
var i = "#fEffect/CharacterEff.img/1112900/3/1#"
var menuList = Array(
	Array("#r武器屬性轉移(這邊只能轉移武器)" , 1),
	Array("#r裝備屬性轉移(這邊只能轉移裝備)" , 2)
        );
		
let selStr = "\t\t  " + dtb + " #e#r傳承系統#n " + dtb + "\r\n";
	selStr += "" + i + "" + i + "" + i + "" + i + "" + i + "" + i + "" + i + "" + i + "" + i + "" + i + "" + i + "" + i + "" + i + "" + i + "" + i + "" + i + "" + i + "" + i + "" + i + "" + i + "" + i + "" + i + "" + i + "" + i + "" + i + "" + i + "" + i + "" + i + "" + i + "";
for(var i = 0; i < menuList.length ; i++){
	if(i%1 == 0){
		selStr += "\r\n\r\n";
	}
	selStr += "#L" + menuList[i][1] + "#" + menuList[i][0] + "#l" + "";
}
let selected = npc.askMenu(selStr,9310073);

switch (selected){
	case 1:
		player.runScript("武器屬性轉移")
		break;
	case 2:
		player.runScript("裝備屬性轉移")
		break;
}