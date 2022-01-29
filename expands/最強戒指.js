/**
* 新端腳本-最強戒指  QQ:739977676 
**/
var menuList = Array(
	Array("#r系統說明" , 1),
	Array("#b初級戒指" , 2),
	Array("#r戒指升級" , 3),
	Array("#b隨機潛能" , 4)
        );
		
var nowLevel = 0; //當前戒指階段

var chibangList = Array(
	// 階段 裝備代碼 屬性值 所需金幣
	Array(1 ,1190401,10  ,1000000,
		//所需材料 材料ID 數量
		Array(
			Array(4000000,5),
			Array(4000001,10)
		)
	),
	Array(2 ,1190403,20  ,2000000,
		//所需材料 材料ID 數量
		Array(
			Array(4000000,15),
			Array(4000001,20)
		)
	),
	Array(3 ,1190405,30  ,3000000,
		//所需材料 材料ID 數量
		Array(
			Array(4000000,25),
			Array(4000001,30)
		)
	),
	Array(4 ,1190407,40  ,4000000,
		//所需材料 材料ID 數量
		Array(
			Array(4000000,35),
			Array(4000001,40)
		)
	),
	Array(5 ,1190401,50  ,4000000,
		//所需材料 材料ID 數量
		Array(
			Array(4000000,35),
			Array(4000001,40)
		)
	)
);

var giveItems = Array(
	//每日福利，按照階段來寫
	Array( //一階段
		5000000,//金幣
		Array(  //道具 物品ID 數量
			Array(4000000,10),
			Array(4000001,10),
			Array(4000002,10)
		)
	),
	Array( //二階段
		15000000,//金幣
		Array(  //道具 物品ID 數量
			Array(4000000,110),
			Array(4000001,110),
			Array(4000002,110)
		)
	),
	Array( //三階段
		25000000,//金幣
		Array(  //道具 物品ID 數量
			Array(4000000,210),
			Array(4000001,210),
			Array(4000002,210)
		)
	),
	Array( //四階段
		35000000,//金幣
		Array(  //道具 物品ID 數量
			Array(4000000,410),
			Array(4000001,410),
			Array(4000002,410)
		)
	)
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
		var ddd = "";
		ddd += "\t#g#n各階段戒指，升級所需材料如下\r\n"
		ddd += "#r\t1. #v"+chibangList[0][1]+"# "+chibangList[0][0]+"階戒指 "+chibangList[0][2]+" 屬性 \r\n";
		for(let i = 1; i<chibangList.length ;i++){
			ddd += "#r\t"+(i+1)+". #v"+chibangList[i][1]+"# "+chibangList[i][0]+"階戒指 "+chibangList[i][2]+" 屬性 ,所需\r\n";
			for(let j = 0; j < chibangList[i][4].length;j++){
				ddd += "\t#v"+chibangList[i][4][j][0]+"# x " + chibangList[i][4][j][1]+","
			}
			ddd += "金幣 x "+chibangList[i][3]+"\r\n";
		}
		npc.say(ddd);
		break;
	case 2:
		//領取初級戒指
		if(player.getPQLog("戒指系統")>0){
			npc.say("領取失敗，你已經領取過一次，如果丟失，請聯系管理員");
		}else{
			if(player.hasItem(4000000,100) && player.hasItem(4000016,100) && player.hasItem(4001126,100) && player.hasMesos(100000000)){
				let newItem = player.makeItemWithId(chibangList[0][1]);
				newItem.setTitle("1階戒指");
				newItem.setDex(chibangList[0][2]);
				newItem.setStr(chibangList[0][2]);
				newItem.setInt(chibangList[0][2]);
				newItem.setLuk(chibangList[0][2]);
				newItem.setMad(chibangList[0][2]);
				newItem.setPad(chibangList[0][2]);
				player.gainItem(newItem);
				player.addPQLog("戒指系統");
				
				
				player.loseItem(4000000, 100);
				player.loseItem(4000016, 100);
				player.loseItem(4001126, 100);
				player.loseMesos(100000000);
				
				npc.say("領取成功，如果不慎失去了戒指，請聯系管理員獲取");
			}else{
				npc.say("材料不足，需要#v4000000#x100,#v4000016#x100,#v4001126#x100，冒險幣1E");
			}
			
		}
		break;
	case 3:
		//獲取第一格裝備
		var toDrop = player.getInventorySlot(1, 1);
		//判斷第一格裝備是否存在
		if(toDrop == null){
			npc.say("請將您的戒指放到第一格！");
		}else if(toDrop.getTitle().indexOf("階戒指") == -1){
			//判斷是否是戒指
			npc.say("您的第一格裝備不是該系統所需戒指");
		}else{
			//判斷階段
			nowLevel = parseInt(toDrop.getTitle().substring(0,toDrop.getTitle().length-3));//獲取階段
			if(nowLevel >= chibangList.length ){
				npc.say("已頂級，無法繼續升級！");
			}else{
				//通知玩家需要材料
				let ttt = "您的戒指當前處于第 #r"+nowLevel+" #k階#v"+chibangList[nowLevel-1][1]+"#\r\n升級到 #r"+(nowLevel+1)+" #k階#v"+chibangList[nowLevel][1]+"#,需要:\r\n";
				let PD = 0; //判斷材料是否足夠
				for(let j = 0; j < chibangList[nowLevel][4].length;j++){
					ttt += "\t#v"+chibangList[nowLevel][4][j][0]+"# x " + chibangList[nowLevel][4][j][1]+","
					if(!player.hasItem(chibangList[nowLevel][4][j][0],chibangList[nowLevel][4][j][1])){
						PD++;
					}
				}
				ttt += "金幣 x "+chibangList[nowLevel][3]+"\r\n#r是否升級？";
			
				let YN = npc.askYesNo(ttt);
				if(YN == 1){
					//判斷材料
					if(PD == 0 && player.hasMesos(chibangList[nowLevel][3])){
						for(let j = 0; j < chibangList[nowLevel][4].length;j++){
							player.loseItem(chibangList[nowLevel][4][j][0], chibangList[nowLevel][4][j][1]);
						}
						player.loseMesos(chibangList[nowLevel][3]);
						toDrop.setTitle((nowLevel+1)+"階戒指");
						toDrop.setDex(chibangList[nowLevel][2]);
						toDrop.setStr(chibangList[nowLevel][2]);
						toDrop.setInt(chibangList[nowLevel][2]);
						toDrop.setLuk(chibangList[nowLevel][2]);
						toDrop.setMad(chibangList[nowLevel][2]);
						toDrop.setPad(chibangList[nowLevel][2]);
						toDrop.setItemId(chibangList[nowLevel][1]);
						player.updateItem(1, toDrop);
						
						npc.broadcastNoticeWithoutPrefix(player.getName() + "：我成功將戒指進化到 階段" + (nowLevel+1));
						npc.say("升級成功");
					}else{
						npc.say("您的金幣或材料不足，無法升級");
					}
				}
			}
		}
		break;
		case 4:
			player.runScript("最強戒指潛能");
			break;
}