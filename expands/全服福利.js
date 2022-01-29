//全服福利 by 幾里


let str = "#b這裡可以領取管理員發放的全服在線福利哦!\r\n#r#e只有在發放福利的時候在線才可以領取！#n\r\n"
str += "#L1##r查看我可以領取的福利#l\r\n"
if(player.isGm()){
	str += "#L2#管理員發放福利#l";
}
let selected = npc.askMenu(str,9300011);

if(selected == 1){
	//領取福利
	while(true){
		let sql = "select * from jili_world_gifts where accountName = '"+getAccountName()+"' and state = 0";
		let push = player.customSqlResult(sql);
		if (push.size() == 0) {
			npc.say("#b暫無可領取福利！",9300011);
		}else{
			str = "#b請選擇領取哪一個福利:\r\n";
			for(let i = 0;i<push.size();i++){
				let signle = push.get(i);
				str += "#L"+i+"# #r福利 發放日期:"+signle.get("date").toString().substring(0,19)+"#l\r\n";
			}
			selected = npc.askMenu(str,9300011);
			let gift = push.get(selected);
			let giftId = gift.get("id");
			let giftItemId = gift.get("itemId");
			let giftItemNumber = gift.get("itemNumber");
			let giftDate = gift.get("date").toString().substring(0,19);
			
			player.customSqlUpdate("update jili_world_gifts set state = 1,getDate = now() where id = '" + giftId + "';");
			str = "是否領取#v"+giftItemId+"##z"+giftItemId+"# x "+giftItemNumber;
			let YN = npc.askYesNo(str);
			if(YN == 1){
				
				if(player.canGainItem(giftItemId,giftItemNumber)){
					player.gainItem(giftItemId,giftItemNumber);
					npc.broadcastPlayerNotice(20,"[全服福利]：玩家"+player.getName()+"在<全服福利>領取了管理員在"+giftDate+"發放的福利！")
					npc.say("領取成功。");
				}else{
					npc.say("請清理背包");
				}
				
			}else{
				npc.say("想好再來吧");
			}
		}
	}
}else{
	//發放福利
	while(true){
		str = "請輸入發放的物品代碼";
		let type = npc.askNumber(str,"1",1,9999999);
		let items = player.makeItemWithId(type);
		if(items == null){
			npc.say("物品代碼不存在 請重新輸入！");
			continue;
		}
		typeTxt = "#v"+type+"# #z"+type+"#"
		str = "請輸入發放"+typeTxt+"的每一份數量（每個人可以獲得多少個）";
		let num = npc.askNumber(str,"1",1,9999999);
        player.customSqlInsert("insert into jili_world_gifts (accountName,itemId,itemNumber,date) select `name` as accountName,'"+type+"' as itemId,'"+num+"' as itemNumber,now() as date from accounts where loggedin = 3 GROUP BY recentip");
		map.blowWeather(5120004,"趕緊去<綜合系統>-<全服福利>領取全服福利吧！");
		npc.broadcastPlayerNotice(37,"[全服福利]：管理員發放了全服福利！趕緊去<綜合系統>-<全服福利>領福利吧！")
		npc.broadcastPlayerNotice(37,"[全服福利]：管理員發放了全服福利！趕緊去<綜合系統>-<全服福利>領福利吧！")
		npc.broadcastPlayerNotice(37,"[全服福利]：管理員發放了全服福利！趕緊去<綜合系統>-<全服福利>領福利吧！")
		npc.say("發放成功！");
	}
}


function getAccountName() {
    var i = -1;
    var sql = "select name,id from accounts where id=" + player.getAccountId() + " order by name limit 1;";
    var push = player.customSqlResult(sql);
    if (push.size() > 0) {
        var result = push.get(0);
        var name = result.get("name");
    }

    return name;
}