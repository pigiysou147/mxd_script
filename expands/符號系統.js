/**
* 新端腳本-符號系統  QQ:739977676 
**/
var menuList = Array(
	Array("#r系統說明" , 1),
	Array("#b初階符號" , 2),
	Array("#r符號升級" , 3),
	Array("#b每日福利" , 4)
        );
		
var nowLevel = 0; //當前符號階段

var chibangList = Array(
	// 階段 裝備代碼 屬性值 所需金幣
	Array(1 ,1190400,10  ,1000000,
		//所需材料 材料ID 數量
		Array(
			Array(4000000,5),
			Array(4000001,10)
		)
	),
	Array(2 ,1190401,100  ,10000000,
		//所需材料 材料ID 數量
		Array(
			Array(4000000,1000),
			Array(4000016,1000),
			Array(4001024,20),
			Array(4000385,20)
		)
	),
	Array(3 ,1190402,200  ,100000000,
		//所需材料 材料ID 數量
		Array(
			Array(4000002,2000),
			Array(4000622,2000),
			Array(4001024,50),
			Array(4000385,50)
		)
	),
	Array(4 ,1190403,400  ,200000000,
		//所需材料 材料ID 數量
		Array(
			Array(4000035,3333),
			Array(4000036,3333),
			Array(4001024,80),
			Array(4000385,80)
		)
	),
	Array(5 ,1190404,700  ,250000000,
		//所需材料 材料ID 數量
		Array(
			Array(4000111,4444),
			Array(4000112,4444),
			Array(4001024,120),
			Array(4000385,120)
			)
	),
	Array(6 ,1190405,1000  ,300000000,
		//所需材料 材料ID 數量
		Array(
			Array(4000711,5000),
			Array(4000712,5000),
			Array(4001024,180),
			Array(4000385,180)
		)
	),
	Array(7 ,1190406,1280  ,400000000,
		//所需材料 材料ID 數量
		Array(
			Array(4000727,5555),
			Array(4000728,5555),
			Array(4000731,5555),
			Array(4001024,200),
			Array(4000385,200)
		)
	),
	Array(8 ,1190407,1688  ,500000000,
		//所需材料 材料ID 數量
		Array(
			Array(4000379,5000),
			Array(4000380,5000),
			Array(4000382,5000),
			Array(4000383,5000),
			Array(4001024,220),
			Array(4000385,220)
		)
	),
	Array(9 ,1190302,2080  ,0,
		//所需材料 材料ID 數量
		Array(
			Array(4110010,1)
		)
	)
);

var giveItems = Array(
	//每日福利，按照階段來寫
	Array( //一階段
		500000,//金幣
		Array(  //道具 物品ID 數量
			Array(4031997,100)
		)
	),
	Array( //二階段
		5000000,//金幣
		Array(  //道具 物品ID 數量
			Array(4031997,500)
		)
	),
	Array( //三階段
		10000000,//金幣
		Array(  //道具 物品ID 數量
			Array(4031997,800)
		)
	),
	Array( //四階段
		20000000,//金幣
		Array(  //道具 物品ID 數量
			Array(4031997,1000)
		)
	),
	Array( //五階段
		50000000,//金幣
		Array(  //道具 物品ID 數量
			Array(4031997,1500)
		)
	),
	Array( //六階段
		100000000,//金幣
		Array(  //道具 物品ID 數量
			Array(4033247,1000),
			Array(2435153,1)
		)
	),
	Array( //七階段
		200000000,//金幣
		Array(  //道具 物品ID 數量
			Array(5220040,1),
			Array(2435153,2),
			Array(4033247,3000)
		)
	),
	Array( //八階段
		300000000,//金幣
		Array(  //道具 物品ID 數量
			Array(5220040,2),
			Array(2435153,3),
			Array(4033247,5000),
			Array(3994424,1),
			Array(2430210,1)
		)
	),
	Array( //九階段
		350000000,//金幣
		Array(  //道具 物品ID 數量
			Array(5220040,2),
			Array(2435153,3),
			Array(4033247,10000),
			Array(3994424,1),
			Array(2430210,1)
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
		ddd += "\t#g#n各階段符號，升級所需材料如下\r\n"
		ddd += "#r\t1. #v"+chibangList[0][1]+"# "+chibangList[0][0]+"階符號 "+chibangList[0][2]+" 屬性 ,免費領取\r\n";
		for(let i = 1; i<chibangList.length ;i++){
			ddd += "#r\t"+(i+1)+". #v"+chibangList[i][1]+"# "+chibangList[i][0]+"階符號 "+chibangList[i][2]+" 屬性 ,所需\r\n";
			for(let j = 0; j < chibangList[i][4].length;j++){
				ddd += "\t#v"+chibangList[i][4][j][0]+"# x " + chibangList[i][4][j][1]+","
			}
			ddd += "金幣 x "+chibangList[i][3]+"\r\n";
		}
		npc.say(ddd);
		break;
	case 2:
		//領取初級符號
		if(player.getPQLog("符號系統")>0){
			npc.say("領取失敗，你已經領取過一次，如果丟失，請聯系管理員");
		}else{
			let newItem = player.makeItemWithId(chibangList[0][1]);
			newItem.setTitle("1階符號");
			newItem.setDex(chibangList[0][2]);
			newItem.setStr(chibangList[0][2]);
			newItem.setInt(chibangList[0][2]);
			newItem.setLuk(chibangList[0][2]);
			newItem.setMad(chibangList[0][2]);
			newItem.setPad(chibangList[0][2]);
			player.gainItem(newItem);
			player.addPQLog("符號系統");
			npc.say("領取成功，如果不慎失去了符號，請聯系管理員獲取");
		}
		break;
	case 3:
		//獲取第一格裝備
		var toDrop = player.getInventorySlot(1, 1);
		//判斷第一格裝備是否存在
		if(toDrop == null){
			npc.say("請將您的符號放到第一格！");
		}else if(toDrop.getTitle().indexOf("階符號") == -1){
			//判斷是否是符號
			npc.say("您的第一格裝備不是該系統所需符號");
		}else{
			//判斷階段
			nowLevel = parseInt(toDrop.getTitle().substring(0,1));//獲取階段
			if(nowLevel >= chibangList.length ){
				npc.say("已頂級，無法繼續升級！");
			}else{
				//通知玩家需要材料
				let ttt = "您的符號當前處于第 #r"+nowLevel+" #k階#v"+chibangList[nowLevel-1][1]+"#\r\n升級到 #r"+(nowLevel+1)+" #k階#v"+chibangList[nowLevel][1]+"#,需要:\r\n";
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
						toDrop.setTitle((nowLevel+1)+"階符號");
						toDrop.setDex(chibangList[nowLevel][2]);
						toDrop.setStr(chibangList[nowLevel][2]);
						toDrop.setInt(chibangList[nowLevel][2]);
						toDrop.setLuk(chibangList[nowLevel][2]);
						toDrop.setMad(chibangList[nowLevel][2]);
						toDrop.setPad(chibangList[nowLevel][2]);
						toDrop.setItemId(chibangList[nowLevel][1]);
						player.updateItem(1, toDrop);
						
						npc.broadcastNoticeWithoutPrefix(player.getName() + "：我成功將符號進化到 階段" + (nowLevel+1));
						npc.say("升級成功");
					}else{
						npc.say("您的金幣或材料不足，無法升級");
					}
				}
			}
		}
		break;
		case 4:
			//每日福利
			//獲取第一格裝備
			var toDrop = player.getInventorySlot(1, 1);
			//判斷第一格裝備是否存在
			if(toDrop == null){
				npc.say("請將您的符號放到第一格！");
			}else if(toDrop.getTitle().indexOf("階符號") == -1){
				//判斷是否是符號
				npc.say("您的第一格裝備不是該系統所需符號");
			}else{
				if(player.getPQLog("符號系統每日福利")>0){
					npc.say("你今天已經領過了！");
				}else{
					nowLevel = parseInt(toDrop.getTitle().substring(0,1));//獲取階段
					let str = "恭喜你獲得今日福利：\r\n金幣 x " + giveItems[nowLevel-1][0];
					player.gainMesos(giveItems[nowLevel-1][0]);
					for(let i = 0; i < giveItems[nowLevel-1][1].length ;i++){
						str += "\r\n#v"+giveItems[nowLevel-1][1][i][0]+"# x "+giveItems[nowLevel-1][1][i][1]+"\r\n"
						player.gainItem(giveItems[nowLevel-1][1][i][0],giveItems[nowLevel-1][1][i][1]);
					}
					player.addPQLog("符號系統每日福利",1,1);
					npc.say(str);
				}
			}
			break;
}
