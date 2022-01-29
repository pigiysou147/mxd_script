
var account;
var accountid;
var date;
var time;

while(true){
		var accountid = npc.askText("請輸入168跟帖的ID","",0,4);
			account = getAccountName(accountid);
		let selStr = "#b請輸入 [ #d" + account + "#b ] 的回帖時間,";
			selStr += "\r\n#r#e請認真檢查日期格式\r\n"
			selStr += "\r\n例 : 2019-01-01 00:00 (可復制168帖子上的時間)"
		let date = npc.askText(selStr,"",0,999);
		let time = date + ":00.0";
		let	text = "#r#e請你再三確定以下信息是否正確...#n\r\n\r\n";
			text += "#b遊戲帳號 : " + account + "\r\n";
			text += "#b回帖時間 : " + date + "\r\n";
			text += "#d格式對比 : 2019-01-01 00:00(可復制168帖子上的時間)\r\n";
			YN = npc.askYesNo(text);
			if(YN == 1){
			if ((new Date().getTime() - getDate(account).getTime()) > 1000 * 60 * 60 * 24 * 3) {//判斷距離上個帖子時間
				
				Update168(account, time);
				npc.say("添加成功...");
			} else {
				player.dropAlertNotice("添加失敗\r\n該帳號距離上個推文時間未超過72小時");
				break;
			}
	}
}		
function getAccountName(accountid) {
	var sql = "select name,id from accounts where id = " + accountid + " order by name limit 1;";
	var push = player.customSqlResult(sql);
	if (push.size() > 0) {
		var result = push.get(0);
		var name = result.get("name");
	}
	return name;
}

function Update168(account, date) {
	var sql = "select * from log_168 where account = '" + account + "'";
	var push = player.customSqlResult(sql);
	if (push.size() > 0) {
		var sql = "update log_168 set count = 1 where account = '" + account + "';";
		var sql1 = "update log_168 set date ='" + date + "' where account = '" + account + "';";
		var sql2 = "update log_168 set ip ='' where ip = '" + getAccountIp() + "';";
		player.customSqlUpdate(sql); //更新權限
		player.customSqlUpdate(sql1); //更新時間
		player.customSqlUpdate(sql2); //更新IP
	} else {
		player.customSqlInsert("INSERT INTO log_168(account,count,date) VALUES ('" + account + "',0,'2019-01-01 00:00:00.0')");
		return Update168(account, date);
	}
}

function getNull(account) {
	var sql = "select * from log_168 where account='" + account + "'";
	var push = player.customSqlResult(sql);
	if (push.size() > 0) {
		var result = push.get(0);
		var date = result.get("date");
	} else {
		player.customSqlInsert("INSERT INTO log_168(account,count,date) VALUES ('" + account + "',0,'2019-01-01 00:00:00.0')");
		return getDate(account);
	}
	return date;
}

function getAccountIp() {
    let i = -1;
    let sql = "select * from accounts where id=" + player.getAccountId() + " order by name limit 1;";
    let push = player.customSqlResult(sql);
	let name = "";
    if (push.size() > 0) {
        let result = push.get(0);
        name = result.get("recentip");
    }
    return name;
}	

function getDate(account) {
	var sql = "select * from log_168 where account='" + account + "'";
	var push = player.customSqlResult(sql);
	if (push.size() > 0) {
		var result = push.get(0);
		var date = result.get("date");
	} else {
		player.customSqlInsert("INSERT INTO log_168(account,count,date) VALUES ('" + account + "',0,'2019-01-01 00:00:00.0')");
		return getDate(account);
	}
	return date;
}