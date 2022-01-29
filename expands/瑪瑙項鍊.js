/**
* 新端腳本-戒指系統  QQ:739977676 
**/
var bts = "#fEffect/ItemEff/1102874/effect/ladder/0#";//藍色天使戒指

var nowLevel = 0; //當前戒指階段

var chibangList = Array(
	// 階段 裝備代碼 屬性值 材料ID 材料數量 請按照順序填寫
			Array(1,1123001, 50, 2, Array(//需求物品
				Array(4000019, 1500, ""),
				Array(4000000, 1500, ""),
				Array(4000016, 1500, "")), 2),
		Array(2,1123002, 100, 5, Array(//需求物品
				Array(4000007, 1500, ""),
				Array(4000013, 1500, ""),
				Array(4000023, 1500, "")), 3),
		Array(3,1123003, 150,10, Array(//需求物品
				Array(4000059, 1500, ""),
				Array(4000060, 1500, ""),
				Array(4000061, 1500, "")), 4),
		Array(4,1123004, 200, 15, Array(//需求物品
				Array(4000069, 1500, ""),
				Array(4000079, 1500, ""),
				Array(4000080, 1500, "")), 5),
		Array(5,1123005, 250, 20, Array(//需求物品
				Array(4000032, 1500, ""),
				Array(4000297, 1500, ""),
				Array(4000296, 1500, "")), 6),
		Array(6,1123006, 300, 25, Array(//需求物品
				Array(4000226, 1500, ""),
				Array(4000228, 1500, ""),
				Array(4000227, 1500, ""),
				Array(4000229, 1500, ""),
				Array(4000230, 1500, "")), 7),
		Array(7,1123011, 350, 30, Array(//需求物品
				Array(4000363, 2000, ""),
				Array(4000364, 2000, ""),
				Array(4000365, 2000, ""),
				Array(4000361, 2000, ""),
				Array(4000354, 2000, "")), 8),
		Array(8,1123012, 400, 40, Array(//需求物品
				Array(4000445, 3000, ""),
				Array(4000450, 3000, ""),
				Array(4000455, 3000, ""),
				Array(4000151, 1000, "")), 9)
)                    

		//獲取第一格裝備
		var toDrop = player.getInventorySlot(1, 1);
		//判斷第一格裝備是否存在
		if(toDrop == null){
			npc.say("請將您的戒指放到第一格！");
		}else if(toDrop.getTitle().indexOf("階★") == -1){
			//判斷是否是戒指
			npc.say("您的第一格裝備不是該系統所需戒指");
		}else{
			//判斷階段
			nowLevel = parseInt(toDrop.getTitle().substring(0,1));//獲取階段
			if(nowLevel >= chibangList.length ){
				npc.say("已頂級，無法繼續升級！");
			}else{
				//通知玩家需要材料
				let text = "當前瑪瑙項鍊階級 : #r#e" + nowLevel + "#n\r\n";
					text += "#b晉升#r#e#v" + chibangList[nowLevel][1] + "##n#b后屬性為:\r\n";
					text += "力量 : " + chibangList[nowLevel][2] + "\t\t敏捷 : " + chibangList[nowLevel][2] + "\r\n";
					text += "智力 : " + chibangList[nowLevel][2] + "\t\t運氣 : " + chibangList[nowLevel][2] + "\r\n";
					text += "物攻 : " + chibangList[nowLevel][2] + "\t\t魔攻 : " + chibangList[nowLevel][2] + "\r\n";
					if (chibangList[nowLevel][3] > 0) {
						text += "\tBOSS傷害 : " + chibangList[nowLevel][3] + "\r\n";
					}
					if (chibangList[nowLevel][3] > 0) {
						text += "\t總傷害 : " + chibangList[nowLevel][3] + "";
					}
					if (chibangList[nowLevel][3] > 0) {
						text += "\t\t無視傷害 : " + chibangList[nowLevel][3] + "\r\n";
					}
					if (chibangList[nowLevel][3] > 0) {
						text += "\tBOSS傷害 : " + chibangList[nowLevel][3] + "\r\n";
					}
					text += "#b\t\t\t#e晉升所需物資：#n\r\n";
				let PD = 0;
				for(let j = 0;j<chibangList[nowLevel][4].length;j++){
					text += "#v"+chibangList[nowLevel][4][j][0]+"# x "+chibangList[nowLevel][4][j][1]+"\r\n "
					if(!player.hasItem(chibangList[nowLevel][4][j][0], chibangList[nowLevel][4][j][1])){
						PD++;
					}
				}
				let YN = npc.askYesNo(text);
				if(YN == 1){
					if(PD == 0){
						for(let j = 0;j<chibangList[nowLevel][4].length;j++){
							player.loseItem(chibangList[nowLevel][4][j][0], chibangList[nowLevel][4][j][1]);
						}
						toDrop.setTitle((nowLevel+1)+"階★");
						toDrop.setDex(chibangList[nowLevel][2]);
						toDrop.setStr(chibangList[nowLevel][2]);
						toDrop.setInt(chibangList[nowLevel][2]);
						toDrop.setLuk(chibangList[nowLevel][2]);
						toDrop.setMad(chibangList[nowLevel][2]);
						toDrop.setPad(chibangList[nowLevel][2]);
						toDrop.setItemId(chibangList[nowLevel][1]);
						toDrop.setDamR(chibangList[nowLevel][3]);
						toDrop.setStatR(chibangList[nowLevel][3]);// 所有屬性
						toDrop.setBossDamageR(chibangList[nowLevel][3]);// BOSS傷 
						toDrop.setIgnorePDR(chibangList[nowLevel][3]);// 無視防禦
						
						player.updateItem(1, toDrop);
						
						npc.broadcastNoticeWithoutPrefix(player.getName() + "：我成功將瑪瑙項鍊進化到 階段" + (nowLevel+1));
						npc.say("升級成功");
						
					}else{
						npc.say("您的材料不足，無法升級");
					}
				}
			}
		}
