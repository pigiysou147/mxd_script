/**
** 點裝搜索代碼 新端腳本 QQ:739977676
**/

let needMoney = 10000; //所需點券
let banItems = Array(
	//手動ban物品
	1999999,1999999,1114400,1114401,1113220,1033000
);
let autoBan = true; //是否開啟自動ban物品 （帶4圍的就ban掉） true開啟 false關閉

let text = "#h0#，歡迎來到#e#r自選點裝商城#n#k\r\n#b您需要輸入裝備代碼進行搜索\r\n#r#1.請你確保您輸入的代碼正確無誤\r\n#2.必須是現金裝備才可以購買\r\n";
let YN = npc.askYesNo(text);
if(YN == 1){
	while(true){
		let selectText = npc.askNumber("請輸入您要搜索的點裝代碼",0, 1000000, 1999999);
		let toDrop = player.makeItemWithId(selectText);
		if(banItems.indexOf(selectText) != -1){
			npc.say("該裝備已被管理員拉入小黑屋，不可購買！");
		}else if(null == toDrop){
			npc.say("您輸入的代碼不存在，請重新輸入");
		}else{
			if(toDrop.getSn()!=-1){
				if(autoBan && (toDrop.getStr() > 0 || toDrop.getDex() > 0 || toDrop.getInt() > 0 || toDrop.getLuk() > 0 || toDrop.getMad() > 0|| toDrop.getPad() > 0)){
					npc.say("#v"+selectText+"# 該裝備存在屬性,不可購買！");
				}else{
					let ss = "#b您是否想花費 #r"+needMoney+" #b點券購買 #v"+selectText+"#";
					YN = npc.askYesNo(ss);
					if(YN == 1){
						if(player.getCashShopCurrency(1) < needMoney){
							npc.say("你沒有" + needMoney + " 點卷");	
						}if(!player.canGainItem(selectText,1)){
							npc.say("請清理背包");	
						}else{
							player.gainItem(selectText,1);
							player.modifyCashShopCurrency(1,-needMoney);
							npc.say("購買成功!歡迎繼續選購！");
						}
					}else{
						npc.say("找錯了？那麼請繼續選購吧！");
					}
				}
			}else{
				npc.say("您輸入的不是現金裝備代碼！請重新輸入");
			}
		
		}
		
	}
}else{
	npc.say("下次再見！");
}
