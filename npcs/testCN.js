/**
* 链接NPC  QQ:739977676 
**/
var menuList = Array(
	/*Array("搬磚入口" , 1),
	Array("花園系統" , 2),
	Array("無限入口" , 3),
	Array("師徒系統" , 4),
	Array("無限輪迴" , 5),
	Array("50階戒指" , 6),
	Array("經驗副本入口",7),
	Array("系統查ban" , 8),
	Array("外星訪客入口" , 9),
	Array("ADD168" , 10),
	Array("168禮包" , 11),
	*/
	Array("壽司專用" , 22),
	Array("仙魔修練" , 1),
	Array("仙魔選擇" , 2),
	Array("銀河強化" , 3),
	Array("星岩系統" , 12),
	Array("新人加入" , 13),
	Array("點裝升星" , 14),
	Array("軍銜系統" , 15),
	Array("符號系統",16),
	Array("碎片兌換",17),
	Array("強制副手",18),
	Array("素質累加",19),
	Array("五行禮包",20),
	Array("五行創世",21),
	Array("字母兌換",22)
        );
		
let selStr = " ";
for(var i = 0; i < menuList.length ; i++){
	if(i%4 == 0){
		selStr += "";
	}
	selStr += "#L" + menuList[i][1] + "#" + menuList[i][0] + "#l" + "\r\n  ";
}


let selected = npc.askMenu(selStr);

switch (selected){
	case 1:
		player.runScript("专属修炼")
		break;
	case 2:
		player.runScript("選擇仙魔")
		break;
	case 3:
		player.runScript("銀河副武強化")
		break;
	case 4:
		player.runScript("師徒系統")
		break;
	case 5:
		player.runScript("無限輪迴")
		break;
	case 6:
		player.runScript("50階戒指")
		break;
	case 7:
		player.runScript("經驗副本入口")
		break;
	case 8:
		player.runScript("系統查ban")
		break;
	case 9:
		player.runScript("外星訪客入口")
		break;
	case 10:
		player.runScript("168登記")
		break;
	case 11:
		player.runScript("168禮包")
		break;	
	case 12:
		player.runScript("星岩系統")
		break;
	case 13:
		player.runScript("新手加入")
		break;	
	case 14:
		player.runScript("點裝升星")
		break;
	case 15:
		player.runScript("軍銜系統")
		break;
	case 16:
		player.runScript("符號系統")
		break;
	case 17:
		player.runScript("碎片兌換")
		break;
	case 18:
		player.runScript("強制換副手")
		break;
	case 19:
		player.runScript("五行素質轉移")
		break;
	case 20:
		player.runScript("五行商城")
		break;
	case 21:
		player.runScript("五行創世")
		break;
	case 22:
		player.runScript("GM五行修練")
		break;
		
}