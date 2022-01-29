/**
* 商城-QQ:739977676
**/
var aaa ="#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";
let typed = 0;
let str = "#d#e請選擇您所需要的100全屬性航海套裝：#n#k\r\n\r\n";
	str += "#L1#"+aaa+" 領取 戰士 航海套裝一套，全屬性+100#l#k\r\n";
	str += "#L2#"+aaa+" 領取 法師 航海套裝一套，全屬性+100#l#k\r\n"
	str += "#L3#"+aaa+" 領取 弓箭 航海套裝一套，全屬性+100#l#k\r\n"; 
	str += "#L4#"+aaa+" 領取 飛俠 航海套裝一套，全屬性+100#k\r\n";
	str += "#L5#"+aaa+" 領取 海盜 航海套裝一套，全屬性+100#l#k\r\n";
let selected = npc.askMenu(str);

switch (selected){
	case 1://戰士
		YN = npc.askYesNo("#b您是否想要領取戰士職業航海套裝一套 ，全屬性+100，您是否想要現在就領取？");
		if(YN == 1){
			if (player.getFreeSlots(1) >= 6) {
			var toDrop = player.makeItemWithId(1004422); // 帽子   
	    			toDrop.setStr(100); //裝備力量
					toDrop.setDex(100); //裝備敏捷
					toDrop.setInt(100); //裝備智力
					toDrop.setLuk(100); //裝備運氣
					toDrop.setPad(100); //物理攻擊
					toDrop.setMad(100); //魔法攻擊
					player.gainItem(toDrop);  
				var toDrop = player.makeItemWithId(1052882); // 套服   
	    			    toDrop.setStr(100); //裝備力量
					toDrop.setDex(100); //裝備敏捷
					toDrop.setInt(100); //裝備智力
					toDrop.setLuk(100); //裝備運氣
					toDrop.setPad(100); //物理攻擊
					toDrop.setMad(100); //魔法攻擊
					player.gainItem(toDrop);             
				var toDrop = player.makeItemWithId(1073030); // 鞋子   
	    			    toDrop.setStr(100); //裝備力量
					toDrop.setDex(100); //裝備敏捷
					toDrop.setInt(100); //裝備智力
					toDrop.setLuk(100); //裝備運氣
					toDrop.setPad(100); //物理攻擊
					toDrop.setMad(100); //魔法攻擊
					player.gainItem(toDrop);     
				var toDrop = player.makeItemWithId(1082636); // 手套   
	    			    toDrop.setStr(100); //裝備力量
					toDrop.setDex(100); //裝備敏捷
					toDrop.setInt(100); //裝備智力
					toDrop.setLuk(100); //裝備運氣
					toDrop.setPad(100); //物理攻擊
					toDrop.setMad(100); //魔法攻擊
					player.gainItem(toDrop);      
				var toDrop = player.makeItemWithId(1102775); // 披風   
	    			    toDrop.setStr(100); //裝備力量
					toDrop.setDex(100); //裝備敏捷
					toDrop.setInt(100); //裝備智力
					toDrop.setLuk(100); //裝備運氣
					toDrop.setPad(100); //物理攻擊
					toDrop.setMad(100); //魔法攻擊
					player.gainItem(toDrop);     
				var toDrop = player.makeItemWithId(1152174); // 護肩   
	    			 toDrop.setStr(100); //裝備力量
					toDrop.setDex(100); //裝備敏捷
					toDrop.setInt(100); //裝備智力
					toDrop.setLuk(100); //裝備運氣
					toDrop.setPad(100); //物理攻擊
					toDrop.setMad(100);//魔法攻擊
					toDrop.set
					player.gainItem(toDrop);    
					player.loseItem(2437534,1);
					npc.broadcastPlayerNotice(15,"『航海防具箱』 : 恭喜 " + player.getName() + " 領取了 全屬性１００航海戰士套裝.");
					npc.say("恭喜您成功領取了戰士職業航海套裝一套.");
					break;
				} else {
					npc.say("領取失敗：\r\n\r\n#r1). 背包裝備欄位不夠6個位置,請清理.");
				}
		}
		break;
				
	case 2:
		YN = npc.askYesNo("#b您是否想要領取法師職業航海套裝一套 ，全屬性+100，您是否想要現在就領取？");
		if(YN == 1){
			if (player.getFreeSlots(1) >= 6) {
				var toDrop = player.makeItemWithId(1004423); // 帽子   
	    			toDrop.setStr(100); //裝備力量
					toDrop.setDex(100); //裝備敏捷
					toDrop.setInt(100); //裝備智力
					toDrop.setLuk(100); //裝備運氣
					toDrop.setPad(100); //物理攻擊
					toDrop.setMad(100); //魔法攻擊
					player.gainItem(toDrop);  
				var toDrop = player.makeItemWithId(1052887); // 套服   
	    			    toDrop.setStr(100); //裝備力量
					toDrop.setDex(100); //裝備敏捷
					toDrop.setInt(100); //裝備智力
					toDrop.setLuk(100); //裝備運氣
					toDrop.setPad(100); //物理攻擊
					toDrop.setMad(100); //魔法攻擊
					player.gainItem(toDrop);            
				var toDrop = player.makeItemWithId(1073032); // 鞋子   
	    			    toDrop.setStr(100); //裝備力量
					toDrop.setDex(100); //裝備敏捷
					toDrop.setInt(100); //裝備智力
					toDrop.setLuk(100); //裝備運氣
					toDrop.setPad(100); //物理攻擊
					toDrop.setMad(100); //魔法攻擊
					player.gainItem(toDrop);    
				var toDrop = player.makeItemWithId(1082637); // 手套   
	    			    toDrop.setStr(100); //裝備力量
					toDrop.setDex(100); //裝備敏捷
					toDrop.setInt(100); //裝備智力
					toDrop.setLuk(100); //裝備運氣
					toDrop.setPad(100); //物理攻擊
					toDrop.setMad(100); //魔法攻擊
					player.gainItem(toDrop);        
				var toDrop = player.makeItemWithId(1102794); // 披風   
	    			    toDrop.setStr(100); //裝備力量
					toDrop.setDex(100); //裝備敏捷
					toDrop.setInt(100); //裝備智力
					toDrop.setLuk(100); //裝備運氣
					toDrop.setPad(100); //物理攻擊
					toDrop.setMad(100); //魔法攻擊
					player.gainItem(toDrop);     
				var toDrop = player.makeItemWithId(1152176); // 護肩   
	    			    toDrop.setStr(100); //裝備力量
					toDrop.setDex(100); //裝備敏捷
					toDrop.setInt(100); //裝備智力
					toDrop.setLuk(100); //裝備運氣
					toDrop.setPad(100); //物理攻擊
					toDrop.setMad(100); //魔法攻擊
					player.gainItem(toDrop);     
					player.loseItem(2437534,1);
					npc.say("恭喜您成功領取了法師職業航海套裝一套.");
					npc.broadcastPlayerNotice(15,"『航海防具箱』 : 恭喜 " + player.getName() + " 領取了 全屬性１００航海法師套裝.");
					
				} else {
					npc.say("領取失敗：\r\n\r\n#r1). 背包裝備欄位不夠6個位置,請清理.");
					
				}
			}
		break;
	case 3:
		YN = npc.askYesNo("#b您是否想要領取弓手職業航海套裝一套 ，全屬性+100，您是否想要現在就領取？");
		if(YN == 1){
			if (player.getFreeSlots(1) >= 6) {
				var toDrop = player.makeItemWithId(1004424); // 帽子   
	    			    toDrop.setStr(100); //裝備力量
					toDrop.setDex(100); //裝備敏捷
					toDrop.setInt(100); //裝備智力
					toDrop.setLuk(100); //裝備運氣
					toDrop.setPad(100); //物理攻擊
					toDrop.setMad(100); //魔法攻擊
					player.gainItem(toDrop); 
				var toDrop = player.makeItemWithId(1052888); // 套服   
	    			    toDrop.setStr(100); //裝備力量
					toDrop.setDex(100); //裝備敏捷
					toDrop.setInt(100); //裝備智力
					toDrop.setLuk(100); //裝備運氣
					toDrop.setPad(100); //物理攻擊
					toDrop.setMad(100); //魔法攻擊
					player.gainItem(toDrop);            
				var toDrop = player.makeItemWithId(1073033); // 鞋子   
	    			    toDrop.setStr(100); //裝備力量
					toDrop.setDex(100); //裝備敏捷
					toDrop.setInt(100); //裝備智力
					toDrop.setLuk(100); //裝備運氣
					toDrop.setPad(100); //物理攻擊
					toDrop.setMad(100); //魔法攻擊
					player.gainItem(toDrop);   
				var toDrop = player.makeItemWithId(1082638); // 手套   
	    			    toDrop.setStr(100); //裝備力量
					toDrop.setDex(100); //裝備敏捷
					toDrop.setInt(100); //裝備智力
					toDrop.setLuk(100); //裝備運氣
					toDrop.setPad(100); //物理攻擊
					toDrop.setMad(100); //魔法攻擊
					player.gainItem(toDrop);       
				var toDrop = player.makeItemWithId(1102795); // 披風   
	    			    toDrop.setStr(100); //裝備力量
					toDrop.setDex(100); //裝備敏捷
					toDrop.setInt(100); //裝備智力
					toDrop.setLuk(100); //裝備運氣
					toDrop.setPad(100); //物理攻擊
					toDrop.setMad(100); //魔法攻擊
					player.gainItem(toDrop);     
				var toDrop = player.makeItemWithId(1152177); // 護肩   
	    			    toDrop.setStr(100); //裝備力量
					toDrop.setDex(100); //裝備敏捷
					toDrop.setInt(100); //裝備智力
					toDrop.setLuk(100); //裝備運氣
					toDrop.setPad(100); //物理攻擊
					toDrop.setMad(100); //魔法攻擊
					player.gainItem(toDrop);     
					player.loseItem(2437534,1);
					npc.say("恭喜您成功領取了弓箭職業航海套裝一套.");
					npc.broadcastPlayerNotice(15,"『航海防具箱』 : 恭喜 " + player.getName() + " 領取了 全屬性１００航海弓手套裝.");
					
				} else {
					npc.say("領取失敗：\r\n\r\n#r1). 背包裝備欄位不夠6個位置,請清理.");
					
				}
			}
		break;
	case 4:
		YN = npc.askYesNo("#b您是否想要領取盜賊職業航海套裝一套 ，全屬性+100，您是否想要現在就領取？");
		if(YN == 1){
			if (player.getFreeSlots(1) >= 6) {
				var toDrop = player.makeItemWithId(1004425); // 帽子   
	    			  toDrop.setStr(100); //裝備力量
					toDrop.setDex(100); //裝備敏捷
					toDrop.setInt(100); //裝備智力
					toDrop.setLuk(100); //裝備運氣
					toDrop.setPad(100); //物理攻擊
					toDrop.setMad(100); //魔法攻擊
					player.gainItem(toDrop);   
				var toDrop = player.makeItemWithId(1052889); // 套服   
	    			    toDrop.setStr(100); //裝備力量
					toDrop.setDex(100); //裝備敏捷
					toDrop.setInt(100); //裝備智力
					toDrop.setLuk(100); //裝備運氣
					toDrop.setPad(100); //物理攻擊
					toDrop.setMad(100); //魔法攻擊
					player.gainItem(toDrop);            
				var toDrop = player.makeItemWithId(1073034); // 鞋子   
	    			    toDrop.setStr(100); //裝備力量
					toDrop.setDex(100); //裝備敏捷
					toDrop.setInt(100); //裝備智力
					toDrop.setLuk(100); //裝備運氣
					toDrop.setPad(100); //物理攻擊
					toDrop.setMad(100); //魔法攻擊
					player.gainItem(toDrop);    
				var toDrop = player.makeItemWithId(1082639); // 手套   
	    			    toDrop.setStr(100); //裝備力量
					toDrop.setDex(100); //裝備敏捷
					toDrop.setInt(100); //裝備智力
					toDrop.setLuk(100); //裝備運氣
					toDrop.setPad(100); //物理攻擊
					toDrop.setMad(100); //魔法攻擊
					player.gainItem(toDrop);       
				var toDrop = player.makeItemWithId(1102796); // 披風   
	    			    toDrop.setStr(100); //裝備力量
					toDrop.setDex(100); //裝備敏捷
					toDrop.setInt(100); //裝備智力
					toDrop.setLuk(100); //裝備運氣
					toDrop.setPad(100); //物理攻擊
					toDrop.setMad(100); //魔法攻擊
					player.gainItem(toDrop);    
				var toDrop = player.makeItemWithId(1152178); // 護肩   
	    			    toDrop.setStr(100); //裝備力量
					toDrop.setDex(100); //裝備敏捷
					toDrop.setInt(100); //裝備智力
					toDrop.setLuk(100); //裝備運氣
					toDrop.setPad(100); //物理攻擊
					toDrop.setMad(100); //魔法攻擊
					player.gainItem(toDrop);     
					player.loseItem(2437534,1);
					npc.say("恭喜您成功領取了盜賊職業航海套裝一套.");
					npc.broadcastPlayerNotice(15,"『航海防具箱』 : 恭喜 " + player.getName() + " 領取了 全屬性１００航海盜賊套裝.");
					
				} else {
					npc.say("領取失敗：\r\n\r\n#r1). 背包裝備欄位不夠6個位置,請清理.");
					
				}
			}
		break;
	case 5:
		YN = npc.askYesNo("#b您是否想要領取海盜職業航海套裝一套 ，全屬性+100，您是否想要現在就領取？");
		if(YN == 1){
			if (player.getFreeSlots(1) >= 6) {
				var toDrop = player.makeItemWithId(1004426); // 帽子   
	    			toDrop.setStr(100); //裝備力量
					toDrop.setDex(100); //裝備敏捷
					toDrop.setInt(100); //裝備智力
					toDrop.setLuk(100); //裝備運氣
					toDrop.setPad(100); //物理攻擊
					toDrop.setMad(100); //魔法攻擊
					player.gainItem(toDrop);   
				var toDrop = player.makeItemWithId(1052890); // 套服   
	    			    toDrop.setStr(100); //裝備力量
					toDrop.setDex(100); //裝備敏捷
					toDrop.setInt(100); //裝備智力
					toDrop.setLuk(100); //裝備運氣
					toDrop.setPad(100); //物理攻擊
					toDrop.setMad(100); //魔法攻擊
					player.gainItem(toDrop);           
				var toDrop = player.makeItemWithId(1073035); // 鞋子   
	    			    toDrop.setStr(100); //裝備力量
					toDrop.setDex(100); //裝備敏捷
					toDrop.setInt(100); //裝備智力
					toDrop.setLuk(100); //裝備運氣
					toDrop.setPad(100); //物理攻擊
					toDrop.setMad(100); //魔法攻擊
					player.gainItem(toDrop);    
				var toDrop = player.makeItemWithId(1082640); // 手套   
	    			    toDrop.setStr(100); //裝備力量
					toDrop.setDex(100); //裝備敏捷
					toDrop.setInt(100); //裝備智力
					toDrop.setLuk(100); //裝備運氣
					toDrop.setPad(100); //物理攻擊
					toDrop.setMad(100); //魔法攻擊
					player.gainItem(toDrop);        
				var toDrop = player.makeItemWithId(1102797); // 披風   
	    			    toDrop.setStr(100); //裝備力量
					toDrop.setDex(100); //裝備敏捷
					toDrop.setInt(100); //裝備智力
					toDrop.setLuk(100); //裝備運氣
					toDrop.setPad(100); //物理攻擊
					toDrop.setMad(100); //魔法攻擊
					player.gainItem(toDrop);     
				var toDrop = player.makeItemWithId(1152179); // 護肩   
	    			    toDrop.setStr(100); //裝備力量
					toDrop.setDex(100); //裝備敏捷
					toDrop.setInt(100); //裝備智力
					toDrop.setLuk(100); //裝備運氣
					toDrop.setPad(100); //物理攻擊
					toDrop.setMad(100); //魔法攻擊
					player.gainItem(toDrop);     
					player.loseItem(2437534,1);
					npc.broadcastPlayerNotice(15,"『航海防具箱』 : 恭喜 " + player.getName() + " 領取了 全屬性１００航海海盜套裝.");
					npc.say("恭喜您成功領取了海盜航海套裝一套.");
				} else {
					npc.say("領取失敗：\r\n\r\n#r1). 背包裝備欄位不夠6個位置,請清理.");
				}
           }
		break;
}