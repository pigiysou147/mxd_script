var 帳號;
while(true){
			var 帳號 = npc.askText("請輸入查詢的賬號","",4,16);
			let selStr = "#b賬號 : #g" + 帳號 + "\r\n\r\n";
			selStr += "#d封鎖狀態 : #r" + getBan(1,帳號) + "\r\n\r\n";
			selStr += "#dIP位置  : #r" + getBan(2,帳號) + "\r\n\r\n";
			selStr += "#dMac碼 : #r" + getBan(3,帳號) + "\r\n\r\n";
			selStr += "#d登入狀態 : #r" +online(帳號) + "\r\n\r\n";
			selStr += "如需繼續操作請點擊下一步\r\n";
			YN = npc.askYesNo(selStr);
			if(YN == 1){
			if(getBan(1, 帳號) == null){
				npc.say("該帳號沒有被封號!!!")
				break;
			}else{
			player.customSqlUpdate("DELETE FROM bans WHERE ip='"+ getBan(2,帳號) +"'");
			player.customSqlUpdate("UPDATE `accounts` SET `loggedin`= '0' WHERE `name`='" + 帳號 + "'");
			npc.say("#b已解除#r#e"+帳號+"#b#n的封鎖，請通知玩家");
			break;
		}
		
	}
			}
			
function getBan(type, accounts) {
	let sql = "SELECT accounts.`name` as name, bans.ip as ip, accounts. FROM bans ,accounts WHERE accounts.`name` = '"+accounts+"' AND bans.ip = accounts.recentip";
	let push = player.customSqlResult(sql);
	let ban = "";
	if (push.size() > 0) {
		let result = push.get(0);
		if (type == 1) {
			ban = result.get("name");
			if (ban == null) {
				ban = "No";
			} else {
				ban = "Yes";
			}
		} else if (type == 2) {
			ban = result.get("ip");
		} else if (type == 3) {
			ban = result.get("");
		}
	}
	return ban;
}
function online(acc) {
    var i = -1;
    var sql = "SELECT accounts.loggedin FROM accounts WHERE accounts.`name` = '"+acc+"'";
    var push = player.customSqlResult(sql);
    if (push.size() > 0) {
        var result = push.get(0);
        var name = result.get("loggedin");
    }

    return name;
}