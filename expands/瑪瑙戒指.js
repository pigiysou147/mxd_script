/**
* 新端腳本-戒指系統  QQ:739977676 
**/
var bts = "#fEffect/ItemEff/1102874/effect/ladder/0#";//藍色天使戒指

var nowLevel = 0; //當前戒指階段

var chibangList = Array(
	// 階段 裝備代碼 屬性值 材料ID 材料數量 請按照順序填寫
			Array(1,1114201, 35, Array(//需求物品
				Array(4000001, 1500, ""),
				Array(4000009, 1500, ""),
				Array(4000012, 1500, "")), 2),
		Array(2,1114202, 70, 5,Array(//需求物品
				Array(4000028, 1500, ""),
				Array(4000046, 1500, ""),
				Array(4000027, 1500, "")), 3),
		Array(3,1114203, 105, 7, Array(//需求物品
				Array(4000071, 1500, ""),
				Array(4000072, 1500, ""),
				Array(4000070, 1500, "")), 4),
		Array(4,1114220, 140, 10,Array(//需求物品
				Array(4000288, 1500, ""),
				Array(4000282, 1500, ""),
				Array(4000289, 1500, "")), 5),
		Array(5,1114221, 175, 15, Array(//需求物品
				Array(4000357, 1500, ""),
				Array(4000359, 1500, ""),
				Array(4000360, 1500, "")), 6),
		Array(6,1114222, 210, 20, Array(//需求物品
				Array(4000238, 5000, ""),
				Array(4000241, 3000, ""),
				Array(4000242, 3000, "")), 7),
		Array(7,1114226, 245, 20, Array(//需求物品
				Array(4000268, 1500, ""),
				Array(4000269, 1500, ""),
				Array(4000270, 1500, ""),
				Array(4000273, 1500, ""),
				Array(4000274, 1500, "")), 8),
		Array(8,1114227, 280, 25,  Array(//需求物品
				Array(4000444, 2000, ""),
				Array(4000454, 2000, ""),
				Array(4000449, 2000, ""),
				Array(4000152, 1000, "")), 9),
		Array(9,1114228, 315, 30, Array(//需求物品
				Array(4000643, 1500, ""),
				Array(4000644, 1500, ""),
				Array(4000645, 1500, ""),
				Array(4000829, 1500, ""),
				Array(4000830, 1500, ""),
				Array(4000831, 1500, "")), 10),
		Array(10,1114207, 350, 30,  Array(//需求物品
				Array(4000826, 1500, ""),
				Array(4000827, 1500, ""),
				Array(4000828, 1500, ""),
				Array(4000832, 1500, ""),
				Array(4000833, 1500, ""),
				Array(4000834, 1500, "")), 11),
		Array(11,1114208, 385, 35, Array(//需求物品
				Array(4000651, 2000, ""),
				Array(4000649, 2000, ""),
				Array(4000642, 2000, ""),
				Array(4000653, 2000, ""),
				Array(4000650, 2000, "")), 12),
		Array(12,1114209, 420, 35, Array(//需求物品
				Array(4000654, 2500, ""),
				Array(4000655, 2500, ""),
				Array(4000656, 2500, ""),
				Array(4000657, 2500, ""),
				Array(4000658, 2500, "")), 13)
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
			nowLevel = parseInt(toDrop.getTitle().substring(0,4));//獲取階段
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
						
						npc.broadcastNoticeWithoutPrefix(player.getName() + "：我成功將瑪瑙戒指進化到 階段" + (nowLevel+1));
						npc.say("升級成功");
						
					}else{
						npc.say("您的材料不足，無法升級");
					}
				}
			}
		}
