/**
* 鏈接NPC  QQ:739977676 
**/
var menuList = Array(
	Array("#用代碼買點裝" , 1),
	Array("#b搜尋名字買點裝" , 2)
        );
		
let selStr = "";
for(var i = 0; i < menuList.length ; i++){
	if(i%4 == 0){
		selStr += "\r\n";
	}
	selStr += "#L" + menuList[i][1] + "#" + menuList[i][0] + "#l" + "  ";
}


let selected = npc.askMenu(selStr);

switch (selected){
	case 1:
		player.runScript("代碼點裝")
		break;
	case 2:
		player.runScript("名字點裝")
		break;
	case 3:
		player.runScript("自選點裝")
		break;
}