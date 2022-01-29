/**
* 链接NPC  QQ:739977676 
**/
let 圖示1 ="#fEffect/ItemEff/1070069/effect/walk1/1#";
let 圖示2 ="#fUI/UIWindow2.img/Quest/quest_info/summary_icon/summary#";
let 圖示3 ="#fUI/piggyBarMinigame/crunch/5#";

var menuList = Array(
	Array("#b淺能轉移" , 1),
	Array("#b破功轉移" , 2)
        );
		
let selStr = ""+圖示1+"#b#e#fs14#　　 歡迎光臨裝備轉移中心#k#n#fs12#　　"+圖示1+"\r\n\r\n";
	selStr +="#r#e\t\t請選擇你想要轉移的功能#b";
for(var i = 0; i < menuList.length ; i++){
	if(i%4 == 0){
		selStr += "\r\n";
	}
	selStr += "\t"+圖示3+"#fs14##L" + menuList[i][1] + "#" + menuList[i][0] + "#l" + "  ";
}


let selected = npc.askMenu(selStr);

switch (selected){
	case 1:
		player.runScript("淺能轉移")
		break;
	case 2:
		player.runScript("破功轉移")
		break;
}