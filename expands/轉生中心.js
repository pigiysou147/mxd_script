/**
* 链接NPC  QQ:739977676 
**/
var dtb = "#fEffect/CharacterEff.img/1112949/3/0#"
var n = "#fEffect/CharacterEff.img/1003249/1/0#"
var i = "#fEffect/CharacterEff.img/1112900/3/1#"
var menuList = Array(
	Array("#r我要轉生" , 1),
	Array("#r轉生獎勵" , 2)
        );
		
let selStr = "\t\t  " + dtb + " #e#r轉生中心#n " + dtb + "\r\n";
	selStr += "" + i + "" + i + "" + i + "" + i + "" + i + "" + i + "" + i + "" + i + "" + i + "" + i + "" + i + "" + i + "" + i + "" + i + "" + i + "" + i + "" + i + "" + i + "" + i + "" + i + "" + i + "" + i + "" + i + "" + i + "" + i + "" + i + "" + i + "" + i + "" + i + "";
for(var i = 0; i < menuList.length ; i++){
	if(i%4 == 0){
		selStr += "\r\n\r\n";
	}
	selStr += "#L" + menuList[i][1] + "#" + menuList[i][0] + "#l" + "";
}
let selected = npc.askMenu(selStr,9310073);

switch (selected){
	case 1:
		player.runScript("轉生")
		break;
	case 2:
		//player.runScript("破功中心")
		player.dropAlertNotice("獎勵規劃中，請耐心等待。")
		break;
}