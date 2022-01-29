/**
** 點裝搜索名字 新端腳本 QQ:739977676
**/

let needMoney = 10000; //所需點券
let banItems = Array(
	//手動ban物品
	1999999,1999999,1114400
);
let autoBan = true; //是否開啟自動ban物品 （帶4圍的就ban掉） true開啟 false關閉

let text = "#h0#，歡迎來到#e#r自選點裝商城#n#k\r\n#b您需要輸入裝備名字進行模糊搜索\r\n#r#1.請你確保您輸入的名字正確無誤\r\n#2.必須是現金裝備才可以購買\r\n";
let YN = npc.askYesNo(text);
if(YN == 1){
	while(true){
		let selectText = npc.askText("請輸入您要搜索的點裝名字，可以進行模糊查詢\r\n#e#r搜索過程緩慢，請耐心等待",0, 1, 16);
		let items = Array();
		for(let i = 1000000; i < 1999999; i++){
			if(banItems.indexOf(i) == -1){
				let toDrop = player.makeItemWithId(i);
				if(toDrop != null && toDrop.getSn()!=-1){
					if(autoBan && (toDrop.getStr() > 0 || toDrop.getDex() > 0 || toDrop.getInt() > 0 || toDrop.getLuk() > 0 || toDrop.getMad() > 0|| toDrop.getPad() > 0)){
					}else if(null != toDrop.getItemName() && toDrop.getItemName().indexOf(selectText)){
						items.push(i);
					}
				}
			}
		}
		npc.say(items);
		
	}
}else{
	npc.say("下次再見！");
}
