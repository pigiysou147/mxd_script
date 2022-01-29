/**
* 新端腳本-戒指系統  QQ:739977676 
**/
var bts = "#fEffect/ItemEff/1102874/effect/ladder/0#";//藍色天使戒指
var menuList = Array(
	Array("#r系統說明" , 1),
	Array("#b初階戒指" , 2),
	Array("#r戒指升級" , 3)
        );
		
var nowLevel = 0; //當前戒指階段

var chibangList = Array(
	// 階段 裝備代碼 屬性值 材料ID 材料數量 請按照順序填寫
	Array(1 ,1112446,20  ,4009005,50),
	Array(2 ,1112447,40  ,4009005,50),
	Array(3 ,1112448,60  ,4009005,50),
	Array(4 ,1112449,80  ,4009005,50),
	Array(5 ,1112450,100 ,4009005,50),
	Array(6 ,1112451,120 ,4009005,50),
	Array(7 ,1112452,140 ,4009005,50),
	Array(8 ,1112453,160 ,4009005,50),
	Array(9 ,1112454,180 ,4009005,50),
	Array(10,1112455,200 ,4009005,75),
	Array(11,1112456,220 ,4009005,75),
	Array(12,1112457,240 ,4009005,75),
	Array(13,1112458,260 ,4009005,75),
	Array(14,1112459,280 ,4009005,75),
	Array(15,1112460,300 ,4009005,75),
	Array(16,1112461,320 ,4009005,75),
	Array(17,1112462,340 ,4009005,75),
	Array(18,1112463,360 ,4009005,75),
	Array(19,1112464,380 ,4009005,75),
	Array(20,1112465,400 ,4009005,100),
	Array(21,1112466,420 ,4009005,100),
	Array(22,1112467,440 ,4009005,100),
	Array(23,1112468,460 ,4009005,100),
	Array(24,1112469,480 ,4009005,100),
	Array(25,1112470,500 ,4009005,100),
	Array(26,1112471,520 ,4009005,100),
	Array(27,1112472,540 ,4009005,100),
	Array(28,1112473,560 ,4009005,100),
	Array(29,1112474,580 ,4009005,100),
	Array(30,1112475,600 ,4009005,125),
	Array(31,1112476,620 ,4009005,125),
	Array(32,1112477,640 ,4009005,125),
	Array(33,1112478,660 ,4009005,125),
	Array(34,1112479,680 ,4009005,125),
	Array(35,1112480,700 ,4009005,125),
	Array(36,1112481,720 ,4009005,125),
	Array(37,1112482,740 ,4009005,125),
	Array(38,1112483,760 ,4009005,125),
	Array(39,1112484,780 ,4009005,125),
	Array(40,1112485,800 ,4009005,150),
	Array(41,1112486,820 ,4009005,150),
	Array(42,1112487,840 ,4009005,150),
	Array(43,1112488,860 ,4009005,150),
	Array(44,1112489,880 ,4009005,150),
	Array(45,1112490,900 ,4009005,150),
	Array(46,1112491,920 ,4009005,150),
	Array(47,1112492,940 ,4009005,150),
	Array(48,1112493,960 ,4009005,150),
	Array(49,1112494,980 ,4009005,150),
	Array(50,1112495,1000,4009005,150)
)                    
		
let selStr = "";
for(var i = 0; i < menuList.length ; i++){
	if(i%4 == 0){
		selStr += ""+bts+"#fs16#戒指系統#k\r\n#fs12#";
	}
	selStr += "#L" + menuList[i][1] + "#" + menuList[i][0] + "#l" + "  ";
}

let selected = npc.askMenu(selStr);

switch (selected){
	case 1:
		var ddd = "";
		ddd += "\t#g#n各階段戒指屬性，升級所需材料如下\r\n"
		ddd += "\t#r#e#fs14##v4009005#獲得方式：無限火力副本#fs12#\r\n"
		ddd += "#b1階戒指#v"+chibangList[i][1]+"#全屬+"+chibangList[i][2]+",#r免費領取\r\n";
		ddd += "－－－－－－－－－－－－－－－－－－－－－－－－\r\n";
		for(let i = 1; i<chibangList.length ;i++){
			ddd += "#b"+(i+1)+"階戒指︱#v"+chibangList[i][1]+"︱#全屬+"+chibangList[i][2]+"︱#r所需#v"+chibangList[i][3]+"# x"+chibangList[i][4]+"︱#d約"+Math.round((chibangList[i][4]/3))+"關\r\n";
			ddd += "－－－－－－－－－－－－－－－－－－－－－－－－\r\n";
		}
		npc.say(ddd);
		break;
	case 2:
		//領取初級戒指
		if(player.getPQLog("戒指系統")>0){
			npc.say("領取失敗，你已經領取過一次，如果丟失，請聯系管理員");
		}else{
			let newItem = player.makeItemWithId(chibangList[0][1]);
			newItem.setTitle("1階戒指");
			newItem.setDex(chibangList[0][2]);
			newItem.setStr(chibangList[0][2]);
			newItem.setInt(chibangList[0][2]);
			newItem.setLuk(chibangList[0][2]);
			newItem.setMad(chibangList[0][2]);
			newItem.setPad(chibangList[0][2]);
			newItem.setAttribute(1);
			player.gainItem(newItem);
			player.addPQLog("戒指系統",1,1500);
			npc.say("領取成功，如果不慎失去了戒指，請聯系管理員獲取");
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
				let ttt = "您的戒指當前處于第 #r"+nowLevel+" #k階#v"+chibangList[nowLevel-1][1]+"#\r\n升級到 #r"+(nowLevel+1)+" #k階#v"+chibangList[nowLevel][1]+"#,需要#v"+chibangList[nowLevel][3]+"# x"+chibangList[nowLevel][4];
				let YN = npc.askYesNo(ttt);
				if(YN == 1){
					if(player.hasItem(chibangList[nowLevel][3], chibangList[nowLevel][4])){
						
						player.loseItem(chibangList[nowLevel][3], chibangList[nowLevel][4]);
						toDrop.setTitle((nowLevel+1)+"階戒指");
						toDrop.setDex(chibangList[nowLevel][2]);
						toDrop.setStr(chibangList[nowLevel][2]);
						toDrop.setInt(chibangList[nowLevel][2]);
						toDrop.setLuk(chibangList[nowLevel][2]);
						toDrop.setMad(chibangList[nowLevel][2]);
						toDrop.setPad(chibangList[nowLevel][2]);
						toDrop.setItemId(chibangList[nowLevel][1]);
						toDrop.setAttribute(1);
						player.updateItem(1, toDrop);
						
						npc.broadcastNoticeWithoutPrefix(player.getName() + "：我成功將戒指進化到 階段" + (nowLevel+1));
						npc.say("升級成功");
						
					}else{
						npc.say("您的材料不足，無法升級");
					}
				}
			}
		}
		break;
}
