/**
* 新端腳本-VIP勳章  QQ:739977676 
**/
var dtb = "#fEffect/CharacterEff.img/1112949/3/0#"
var n = "#fEffect/CharacterEff.img/1003249/1/0#"
var i = "#fEffect/CharacterEff.img/1112900/3/1#"
var menuList = Array(
	Array("#r系統說明" , 1),
	Array("#b初階VIP勳章" , 2),
	Array("#rVIP勳章升級" , 3),
	Array("#b每日福利" , 4)
        );
		
var nowLevel = 0; //當前VIP勳章階段
var needitem = Array(Array(4032521,1));
var chibangList = Array(
	// 階段 裝備代碼 屬性值 所需金幣
	Array(1 ,1142891,10  ,1000000,needitem),
	Array(2 ,1142178,20  ,2000000,needitem),
	Array(3 ,1142499,30  ,3000000,needitem),
	Array(4 ,1142742,40  ,4000000,needitem),
	Array(5 ,1142796,40  ,4000000,needitem),
	Array(6 ,1142741,40  ,4000000,needitem),
	Array(7 ,1142803,40  ,4000000,needitem),
	Array(8 ,1142802,40  ,4000000,needitem),
	Array(9 ,1142111,40  ,4000000,needitem),
	Array(10 ,1143059,40 ,4000000,needitem)
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
	),
		Array( //五階段
		25000000,//金幣
		Array(  //道具 物品ID 數量
			Array(4000000,210),
			Array(4000001,210),
			Array(4000002,210)
		)
	),
		Array( //六階段
		25000000,//金幣
		Array(  //道具 物品ID 數量
			Array(4000000,210),
			Array(4000001,210),
			Array(4000002,210)
		)
	),
		Array( //七階段
		25000000,//金幣
		Array(  //道具 物品ID 數量
			Array(4000000,210),
			Array(4000001,210),
			Array(4000002,210)
		)
	),
		Array( //八階段
		25000000,//金幣
		Array(  //道具 物品ID 數量
			Array(4000000,210),
			Array(4000001,210),
			Array(4000002,210)
		)
	),
		Array( //九階段
		25000000,//金幣
		Array(  //道具 物品ID 數量
			Array(4000000,210),
			Array(4000001,210),
			Array(4000002,210)
		)
	),
		Array( //十階段
		25000000,//金幣
		Array(  //道具 物品ID 數量
			Array(4000000,210),
			Array(4000001,210),
			Array(4000002,210)
		)
	),
);


		
let selStr = "\t\t  " + dtb + " #e#VIP勳章#n " + dtb + "\r\n";
selStr += "" + i + "" + i + "" + i + "" + i + "" + i + "" + i + "" + i + "" + i + "" + i + "" + i + "" + i + "" + i + "" + i + "" + i + "" + i + "" + i + "" + i + "" + i + "" + i + "" + i + "" + i + "" + i + "" + i + "" + i + "" + i + "" + i + "" + i + "" + i + "" + i + "";
for(var i = 0; i < menuList.length ; i++){
	if(i%4 == 0){
		selStr += "\r\n";
	}
	selStr += "#L" + menuList[i][1] + "#" + menuList[i][0] + "#l" + "  \r\n";
}


let selected = npc.askMenu(selStr);

switch (selected){
	case 1:
		var ddd = "";
		ddd += "\t#g#n各階段VIP勳章，升級所需材料如下\r\n"
		ddd += "#r\t1. #v"+chibangList[0][1]+"# "+chibangList[0][0]+"階VIP勳章 "+chibangList[0][2]+" 屬性 ,贊助500禮包取得\r\n";
		for(let i = 1; i<chibangList.length ;i++){
			ddd += "#r\t"+(i+1)+". #v"+chibangList[i][1]+"# "+chibangList[i][0]+"階VIP勳章 "+chibangList[i][2]+" 屬性 ,所需";
			for(let j = 0; j < chibangList[i][4].length;j++){
				ddd += "\t#v"+chibangList[i][4][j][0]+"# x " + chibangList[i][4][j][1]+"\r\n\r\n"
			}
		}
		npc.say(ddd);
		break;
	case 2:
		//領取初級VIP勳章
		if(player.hasItem(4032521,1)){
			if(player.getPQLog("VIP勳章")>0){
			npc.say("領取失敗，你已經領取過一次，如果丟失，請聯系管理員");
			}else{
			let newItem = player.makeItemWithId(chibangList[0][1]);
			newItem.setTitle("1階VIP勳章");
			newItem.setDex(chibangList[0][2]);
			newItem.setStr(chibangList[0][2]);
			newItem.setInt(chibangList[0][2]);
			newItem.setLuk(chibangList[0][2]);
			newItem.setMad(chibangList[0][2]);
			newItem.setPad(chibangList[0][2]);
			player.loseItem(4032521,1);
			player.gainItem(newItem);
			player.addPQLog("VIP勳章");
			npc.say("領取成功，如果不慎失去了VIP勳章，請聯系管理員獲取");
		}
		}else{
			npc.say("你沒有#v4032521，要累積贊助500餘額才拿得到哦");
		}
		break;
	case 3:
		//獲取第一格裝備
		var toDrop = player.getInventorySlot(1, 1);
		//判斷第一格裝備是否存在
		if(toDrop == null){
			npc.say("請將您的VIP勳章放到第一格！");
		}else if(toDrop.getTitle().indexOf("階VIP勳章") == -1){
			//判斷是否是VIP勳章
			npc.say("您的第一格裝備不是該系統所需VIP勳章");
		}else{
			//判斷階段
			nowLevel = parseInt(toDrop.getTitle().substring(0,1));//獲取階段
			if(nowLevel >= chibangList.length ){
				npc.say("已頂級，無法繼續升級！");
			}else{
				//通知玩家需要材料
				let ttt = "您的VIP勳章當前處于第 #r"+nowLevel+" #k階#v"+chibangList[nowLevel-1][1]+"#\r\n升級到 #r"+(nowLevel+1)+" #k階#v"+chibangList[nowLevel][1]+"#,需要:\r\n";
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
						toDrop.setTitle((nowLevel+1)+"階VIP勳章");
						toDrop.setDex(chibangList[nowLevel][2]);
						toDrop.setStr(chibangList[nowLevel][2]);
						toDrop.setInt(chibangList[nowLevel][2]);
						toDrop.setLuk(chibangList[nowLevel][2]);
						toDrop.setMad(chibangList[nowLevel][2]);
						toDrop.setPad(chibangList[nowLevel][2]);
						toDrop.setItemId(chibangList[nowLevel][1]);
						player.updateItem(1, toDrop);
						
						npc.broadcastNoticeWithoutPrefix(player.getName() + "：我成功將VIP勳章進化到 階段" + (nowLevel+1));
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
				npc.say("請將您的VIP勳章放到第一格！");
			}else if(toDrop.getTitle().indexOf("階VIP勳章") == -1){
				//判斷是否是VIP勳章
				npc.say("您的第一格裝備不是該系統所需VIP勳章");
			}else{
				if(player.getPQLog("VIP勳章每日福利")>0){
					npc.say("你今天已經領過了！");
				}else{
					nowLevel = parseInt(toDrop.getTitle().substring(0,1));//獲取階段
					let str = "恭喜你獲得今日福利：\r\n金幣 x " + giveItems[nowLevel-1][0];
					player.gainMesos(giveItems[nowLevel-1][0]);
					for(let i = 0; i < giveItems[nowLevel-1][1].length ;i++){
						str += "\r\n#v"+giveItems[nowLevel-1][1][i][0]+"# x "+giveItems[nowLevel-1][1][i][1]+"\r\n"
						player.gainItem(giveItems[nowLevel-1][1][i][0],giveItems[nowLevel-1][1][i][1]);
					}
					player.addPQLog("VIP勳章每日福利",1,1);
					npc.say(str);
				}
			}
			break;
}
