/**
* 链接NPC  QQ:739977676 
**/
var menuList = Array(
	Array("五行強化" , 1),
	Array("銀河副武" , 2),
	Array("猜猜數字" , 3),
	Array("分解系統" , 4),
	Array("禮品兌換" , 5),
	Array("Boss排行" , 6),
	Array("轉生獎勵" , 7),
	Array("道具分解" , 8),
	Array("貨幣兌換" , 9),
	Array("強化系統" , 10),
	Array("花園系統" , 11),
	Array("夏戀獎券" , 12),
	Array("夏戀獎券" , 13),
	Array("字母兌換" , 14)
        );
if(player.getName() == "Boss_cyz"){		
var selStr = "#fn微軟正黑體##b"
for(var i = 0; i < menuList.length ; i++){
	if(i%4 == 0){
		selStr += "\r\n";
	}
	selStr += "#L" + menuList[i][1] + "#" + menuList[i][0] + "#l" + "  ";
}

let selected = npc.askMenu(selStr);
switch (selected){
	case 1:
		player.runScript("GM五行修練")
		break;
	case 2:
		player.runScript("銀河副武強化")
		break;
	case 3:
		player.runScript("猜數字")
		break;
	case 4:
		player.runScript("裝備分解")
		break;
	case 5:
		player.runScript("禮品兌換")
		break;
	case 6:
		player.runScript("Boss排行")
		break;
	case 7:
		player.runScript("轉生禮包")
		break;
	case 8:
		player.runScript("道具分解")
		break;
	case 9:
		player.runScript("貨幣兌換")
		break;
	case 10:
		player.runScript("強化系統")
		break;
	case 11:
		player.runScript("花園系統")
		break;
	case 12:
		player.runScript("夏戀獎券")
		break;
	case 13:
var tt=npc.askNumber("","",0,99)
npc.say("阿萬的森77指數#B"+tt+"#")
		break;
	case 14:
		player.runScript("字母兌換")
		break;
}
}else{
	npc.say("無法使用")
	}

