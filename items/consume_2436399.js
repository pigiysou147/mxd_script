/**
* 商城-QQ:739977676
**/
var aaa ="#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";
let typed = 0;
let str = "#d#e請選擇您所需要的200全屬性神秘之影套裝：#n#k\r\n\r\n";
	str += "#L1#"+aaa+" 領取 戰士 神秘之影套裝一套，全屬性+200#l#k\r\n";
	str += "#L2#"+aaa+" 領取 法師 神秘之影套裝一套，全屬性+200#l#k\r\n"
	str += "#L3#"+aaa+" 領取 弓箭 神秘之影套裝一套，全屬性+200#l#k\r\n"; 
	str += "#L4#"+aaa+" 領取 飛俠 神秘之影套裝一套，全屬性+200#k\r\n";
	str += "#L5#"+aaa+" 領取 海盜 神秘之影套裝一套，全屬性+200#l#k\r\n";
let selected = npc.askMenu(str);

switch (selected){
	case 1://戰士
		YN = npc.askYesNo("#b您是否想要領取戰士職業神秘之影套裝一套 ，全屬性+200，您是否想要現在就領取？");
		if(YN == 1){
			if (player.getFreeSlots(1) >= 6) {
			var toDrop = player.makeItemWithId(1004808); // 帽子   
	    			toDrop.setStr(200); //裝備力量
					toDrop.setDex(200); //裝備敏捷
					toDrop.setInt(200); //裝備智力
					toDrop.setLuk(200); //裝備運氣
					toDrop.setPad(200); //物理攻擊
					toDrop.setMad(200); //魔法攻擊
					player.gainItem(toDrop);  
				var toDrop = player.makeItemWithId(1053063); // 套服   
	    			    toDrop.setStr(200); //裝備力量
					toDrop.setDex(200); //裝備敏捷
					toDrop.setInt(200); //裝備智力
					toDrop.setLuk(200); //裝備運氣
					toDrop.setPad(200); //物理攻擊
					toDrop.setMad(200); //魔法攻擊
					player.gainItem(toDrop);             
				var toDrop = player.makeItemWithId(1073158); // 鞋子   
	    			    toDrop.setStr(200); //裝備力量
					toDrop.setDex(200); //裝備敏捷
					toDrop.setInt(200); //裝備智力
					toDrop.setLuk(200); //裝備運氣
					toDrop.setPad(200); //物理攻擊
					toDrop.setMad(200); //魔法攻擊
					player.gainItem(toDrop);     
				var toDrop = player.makeItemWithId(1082695); // 手套   
	    			    toDrop.setStr(200); //裝備力量
					toDrop.setDex(200); //裝備敏捷
					toDrop.setInt(200); //裝備智力
					toDrop.setLuk(200); //裝備運氣
					toDrop.setPad(200); //物理攻擊
					toDrop.setMad(200); //魔法攻擊
					player.gainItem(toDrop);      
				var toDrop = player.makeItemWithId(1102940); // 披風   
	    			    toDrop.setStr(200); //裝備力量
					toDrop.setDex(200); //裝備敏捷
					toDrop.setInt(200); //裝備智力
					toDrop.setLuk(200); //裝備運氣
					toDrop.setPad(200); //物理攻擊
					toDrop.setMad(200); //魔法攻擊
					player.gainItem(toDrop);     
				var toDrop = player.makeItemWithId(1152196); // 護肩   
	    			    toDrop.setStr(200); //裝備力量
					toDrop.setDex(200); //裝備敏捷
					toDrop.setInt(200); //裝備智力
					toDrop.setLuk(200); //裝備運氣
					toDrop.setPad(200); //物理攻擊
					toDrop.setMad(200);//魔法攻擊
					toDrop.set
					player.gainItem(toDrop);    
					player.loseItem(2436399,1);
					npc.broadcastPlayerNotice(15,"『神秘之影防具箱』 : 恭喜 " + player.getName() + " 領取了 全屬性２００神秘之影戰士套裝.");
					npc.say("恭喜您成功領取了戰士職業神秘之影套裝一套.");
					break;
				} else {
					npc.say("領取失敗：\r\n\r\n#r1). 背包裝備欄位不夠6個位置,請清理.");
				}
		}
		break;
				
	case 2:
		YN = npc.askYesNo("#b您是否想要領取法師職業神秘之影套裝一套 ，全屬性+200，您是否想要現在就領取？");
		if(YN == 1){
			if (player.getFreeSlots(1) >= 6) {
				var toDrop = player.makeItemWithId(1004809); // 帽子   
	    			toDrop.setStr(200); //裝備力量
					toDrop.setDex(200); //裝備敏捷
					toDrop.setInt(200); //裝備智力
					toDrop.setLuk(200); //裝備運氣
					toDrop.setPad(200); //物理攻擊
					toDrop.setMad(200); //魔法攻擊
					player.gainItem(toDrop);  
				var toDrop = player.makeItemWithId(1053064); // 套服   
	    			    toDrop.setStr(200); //裝備力量
					toDrop.setDex(200); //裝備敏捷
					toDrop.setInt(200); //裝備智力
					toDrop.setLuk(200); //裝備運氣
					toDrop.setPad(200); //物理攻擊
					toDrop.setMad(200); //魔法攻擊
					player.gainItem(toDrop);            
				var toDrop = player.makeItemWithId(1073159); // 鞋子   
	    			    toDrop.setStr(200); //裝備力量
					toDrop.setDex(200); //裝備敏捷
					toDrop.setInt(200); //裝備智力
					toDrop.setLuk(200); //裝備運氣
					toDrop.setPad(200); //物理攻擊
					toDrop.setMad(200); //魔法攻擊
					player.gainItem(toDrop);    
				var toDrop = player.makeItemWithId(1082696); // 手套   
	    			    toDrop.setStr(200); //裝備力量
					toDrop.setDex(200); //裝備敏捷
					toDrop.setInt(200); //裝備智力
					toDrop.setLuk(200); //裝備運氣
					toDrop.setPad(200); //物理攻擊
					toDrop.setMad(200); //魔法攻擊
					player.gainItem(toDrop);        
				var toDrop = player.makeItemWithId(1102941); // 披風   
	    			    toDrop.setStr(200); //裝備力量
					toDrop.setDex(200); //裝備敏捷
					toDrop.setInt(200); //裝備智力
					toDrop.setLuk(200); //裝備運氣
					toDrop.setPad(200); //物理攻擊
					toDrop.setMad(200); //魔法攻擊
					player.gainItem(toDrop);     
				var toDrop = player.makeItemWithId(1152197); // 護肩   
	    			    toDrop.setStr(200); //裝備力量
					toDrop.setDex(200); //裝備敏捷
					toDrop.setInt(200); //裝備智力
					toDrop.setLuk(200); //裝備運氣
					toDrop.setPad(200); //物理攻擊
					toDrop.setMad(200); //魔法攻擊
					player.gainItem(toDrop);     
					player.loseItem(2436399,1);
					npc.say("恭喜您成功領取了法師職業神秘之影套裝一套.");
					npc.broadcastPlayerNotice(15,"『神秘之影防具箱』 : 恭喜 " + player.getName() + " 領取了 全屬性２００神秘之影法師套裝.");
					
				} else {
					npc.say("領取失敗：\r\n\r\n#r1). 背包裝備欄位不夠6個位置,請清理.");
					
				}
			}
		break;
	case 3:
		YN = npc.askYesNo("#b您是否想要領取弓手職業神秘之影套裝一套 ，全屬性+200，您是否想要現在就領取？");
		if(YN == 1){
			if (player.getFreeSlots(1) >= 6) {
				var toDrop = player.makeItemWithId(1004810); // 帽子   
	    			    toDrop.setStr(200); //裝備力量
					toDrop.setDex(200); //裝備敏捷
					toDrop.setInt(200); //裝備智力
					toDrop.setLuk(200); //裝備運氣
					toDrop.setPad(200); //物理攻擊
					toDrop.setMad(200); //魔法攻擊
					player.gainItem(toDrop); 
				var toDrop = player.makeItemWithId(1053065); // 套服   
	    			    toDrop.setStr(200); //裝備力量
					toDrop.setDex(200); //裝備敏捷
					toDrop.setInt(200); //裝備智力
					toDrop.setLuk(200); //裝備運氣
					toDrop.setPad(200); //物理攻擊
					toDrop.setMad(200); //魔法攻擊
					player.gainItem(toDrop);            
				var toDrop = player.makeItemWithId(1073160); // 鞋子   
	    			    toDrop.setStr(200); //裝備力量
					toDrop.setDex(200); //裝備敏捷
					toDrop.setInt(200); //裝備智力
					toDrop.setLuk(200); //裝備運氣
					toDrop.setPad(200); //物理攻擊
					toDrop.setMad(200); //魔法攻擊
					player.gainItem(toDrop);   
				var toDrop = player.makeItemWithId(1082697); // 手套   
	    			    toDrop.setStr(200); //裝備力量
					toDrop.setDex(200); //裝備敏捷
					toDrop.setInt(200); //裝備智力
					toDrop.setLuk(200); //裝備運氣
					toDrop.setPad(200); //物理攻擊
					toDrop.setMad(200); //魔法攻擊
					player.gainItem(toDrop);       
				var toDrop = player.makeItemWithId(1102942); // 披風   
	    			    toDrop.setStr(200); //裝備力量
					toDrop.setDex(200); //裝備敏捷
					toDrop.setInt(200); //裝備智力
					toDrop.setLuk(200); //裝備運氣
					toDrop.setPad(200); //物理攻擊
					toDrop.setMad(200); //魔法攻擊
					player.gainItem(toDrop);     
				var toDrop = player.makeItemWithId(1152198); // 護肩   
	    			    toDrop.setStr(200); //裝備力量
					toDrop.setDex(200); //裝備敏捷
					toDrop.setInt(200); //裝備智力
					toDrop.setLuk(200); //裝備運氣
					toDrop.setPad(200); //物理攻擊
					toDrop.setMad(200); //魔法攻擊
					player.gainItem(toDrop);     
					player.loseItem(2436399,1);
					npc.say("恭喜您成功領取了弓箭職業神秘之影套裝一套.");
					npc.broadcastPlayerNotice(15,"『神秘之影防具箱』 : 恭喜 " + player.getName() + " 領取了 全屬性２００神秘之影弓手套裝.");
					
				} else {
					npc.say("領取失敗：\r\n\r\n#r1). 背包裝備欄位不夠6個位置,請清理.");
					
				}
			}
		break;
	case 4:
		YN = npc.askYesNo("#b您是否想要領取盜賊職業神秘之影套裝一套 ，全屬性+200，您是否想要現在就領取？");
		if(YN == 1){
			if (player.getFreeSlots(1) >= 6) {
				var toDrop = player.makeItemWithId(1004811); // 帽子   
	    			  toDrop.setStr(200); //裝備力量
					toDrop.setDex(200); //裝備敏捷
					toDrop.setInt(200); //裝備智力
					toDrop.setLuk(200); //裝備運氣
					toDrop.setPad(200); //物理攻擊
					toDrop.setMad(200); //魔法攻擊
					player.gainItem(toDrop);   
				var toDrop = player.makeItemWithId(1053066); // 套服   
	    			    toDrop.setStr(200); //裝備力量
					toDrop.setDex(200); //裝備敏捷
					toDrop.setInt(200); //裝備智力
					toDrop.setLuk(200); //裝備運氣
					toDrop.setPad(200); //物理攻擊
					toDrop.setMad(200); //魔法攻擊
					player.gainItem(toDrop);            
				var toDrop = player.makeItemWithId(1073161); // 鞋子   
	    			    toDrop.setStr(200); //裝備力量
					toDrop.setDex(200); //裝備敏捷
					toDrop.setInt(200); //裝備智力
					toDrop.setLuk(200); //裝備運氣
					toDrop.setPad(200); //物理攻擊
					toDrop.setMad(200); //魔法攻擊
					player.gainItem(toDrop);    
				var toDrop = player.makeItemWithId(1082698); // 手套   
	    			    toDrop.setStr(200); //裝備力量
					toDrop.setDex(200); //裝備敏捷
					toDrop.setInt(200); //裝備智力
					toDrop.setLuk(200); //裝備運氣
					toDrop.setPad(200); //物理攻擊
					toDrop.setMad(200); //魔法攻擊
					player.gainItem(toDrop);       
				var toDrop = player.makeItemWithId(1102943); // 披風   
	    			    toDrop.setStr(200); //裝備力量
					toDrop.setDex(200); //裝備敏捷
					toDrop.setInt(200); //裝備智力
					toDrop.setLuk(200); //裝備運氣
					toDrop.setPad(200); //物理攻擊
					toDrop.setMad(200); //魔法攻擊
					player.gainItem(toDrop);    
				var toDrop = player.makeItemWithId(1152199); // 護肩   
	    			    toDrop.setStr(200); //裝備力量
					toDrop.setDex(200); //裝備敏捷
					toDrop.setInt(200); //裝備智力
					toDrop.setLuk(200); //裝備運氣
					toDrop.setPad(200); //物理攻擊
					toDrop.setMad(200); //魔法攻擊
					player.gainItem(toDrop);     
					player.loseItem(2436399,1);
					npc.say("恭喜您成功領取了盜賊職業神秘之影套裝一套.");
					npc.broadcastPlayerNotice(15,"『神秘之影防具箱』 : 恭喜 " + player.getName() + " 領取了 全屬性２００神秘之影盜賊套裝.");
					
				} else {
					npc.say("領取失敗：\r\n\r\n#r1). 背包裝備欄位不夠6個位置,請清理.");
					
				}
			}
		break;
	case 5:
		YN = npc.askYesNo("#b您是否想要領取海盜職業神秘之影套裝一套 ，全屬性+200，您是否想要現在就領取？");
		if(YN == 1){
			if (player.getFreeSlots(1) >= 6) {
				var toDrop = player.makeItemWithId(1004812); // 帽子   
	    			toDrop.setStr(200); //裝備力量
					toDrop.setDex(200); //裝備敏捷
					toDrop.setInt(200); //裝備智力
					toDrop.setLuk(200); //裝備運氣
					toDrop.setPad(200); //物理攻擊
					toDrop.setMad(200); //魔法攻擊
					player.gainItem(toDrop);   
				var toDrop = player.makeItemWithId(1053067); // 套服   
	    			    toDrop.setStr(200); //裝備力量
					toDrop.setDex(200); //裝備敏捷
					toDrop.setInt(200); //裝備智力
					toDrop.setLuk(200); //裝備運氣
					toDrop.setPad(200); //物理攻擊
					toDrop.setMad(200); //魔法攻擊
					player.gainItem(toDrop);           
				var toDrop = player.makeItemWithId(1073162); // 鞋子   
	    			    toDrop.setStr(200); //裝備力量
					toDrop.setDex(200); //裝備敏捷
					toDrop.setInt(200); //裝備智力
					toDrop.setLuk(200); //裝備運氣
					toDrop.setPad(200); //物理攻擊
					toDrop.setMad(200); //魔法攻擊
					player.gainItem(toDrop);    
				var toDrop = player.makeItemWithId(1082699); // 手套   
	    			    toDrop.setStr(200); //裝備力量
					toDrop.setDex(200); //裝備敏捷
					toDrop.setInt(200); //裝備智力
					toDrop.setLuk(200); //裝備運氣
					toDrop.setPad(200); //物理攻擊
					toDrop.setMad(200); //魔法攻擊
					player.gainItem(toDrop);        
				var toDrop = player.makeItemWithId(1102944); // 披風   
	    			    toDrop.setStr(200); //裝備力量
					toDrop.setDex(200); //裝備敏捷
					toDrop.setInt(200); //裝備智力
					toDrop.setLuk(200); //裝備運氣
					toDrop.setPad(200); //物理攻擊
					toDrop.setMad(200); //魔法攻擊
					player.gainItem(toDrop);     
				var toDrop = player.makeItemWithId(1152200); // 護肩   
	    			    toDrop.setStr(200); //裝備力量
					toDrop.setDex(200); //裝備敏捷
					toDrop.setInt(200); //裝備智力
					toDrop.setLuk(200); //裝備運氣
					toDrop.setPad(200); //物理攻擊
					toDrop.setMad(200); //魔法攻擊
					player.gainItem(toDrop);     
					player.loseItem(2436399,1);
					npc.broadcastPlayerNotice(15,"『神秘之影防具箱』 : 恭喜 " + player.getName() + " 領取了 全屬性２００神秘之影海盜套裝.");
					npc.say("恭喜您成功領取了海盜神秘之影套裝一套.");
				} else {
					npc.say("領取失敗：\r\n\r\n#r1). 背包裝備欄位不夠6個位置,請清理.");
				}
           }
		break;
}