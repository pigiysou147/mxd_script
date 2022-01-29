var 帐号;

var 帐号 = npc.askText("请输入查询的账号","",4,16);
let selStr = "#b账号 : #g" + 帐号 + "\r\n\r\n";
selStr += "#d封锁状态 : #r" + getBan(1,帐号) + "\r\n\r\n";
selStr += "#dIP位置  : #r" + getBan(2,帐号) + "\r\n\r\n";
selStr += "#dMac码 : #r" + getBan(3,帐号) + "\r\n\r\n";
selStr += "#d登入状态 : #r" +online(帐号) + "\r\n\r\n";
selStr += "#L0#查看被封日志#l\r\n";
selStr += "#L1#账号解封#l\r\n";
selStr += "#L2#登陆解卡#l\r\n";

let YN = npc.askMenuS(selStr);
var accountid=player.customSqlResult("select * from accounts where name=?",帐号).get(0).get("id");
if(YN == 0){
	
	var logList = player.customSqlResult("select * from zlog_infractions where accounts_id=?",accountid);
	var txt="";
	for(var i=0;i<logList.size();i++){
		let date = new Date(parseInt(logList.get(i).get("receivedate")));
		let seperator1 = "";
		let year = date.getFullYear();
		let month = date.getMonth() + 1;
		let strDate = date.getDate();
		if (month >= 1 && month <= 9) {
			month = "0" + month;
		}
		if (strDate >= 0 && strDate <= 9) {
			strDate = "0" + strDate;
		}
		let currentdate = year +"年"+seperator1 + month+"月" + seperator1+strDate+"日" +date.getHours()+"时"+date.getMinutes()+"分"+date.getSeconds()+"秒";
		
		txt+=currentdate+"\r\n";
		txt+=logList.get(i).get("assignercomment")+"\r\n";
	}
	npc.say(txt);
}else if(YN==1){
	if(getBan(1, 帐号) == null){
		npc.say("该帐号没有被封号!!!")
	}else{
		player.customSqlUpdate("DELETE FROM bans WHERE ip='"+ getBan(2,帐号) +"'");
		player.customSqlUpdate("DELETE FROM zlog_infractions where accounts_id=?",accountid);
		player.customSqlUpdate("UPDATE `accounts` SET `loggedin`= '0',banned=0 WHERE `name`='" + 帐号 + "'");
		
		npc.say("#b已解除#r#e"+帐号+"#b#n的封锁，请通知玩家");
	}
}else if(YN==2){
	player.customSqlUpdate("UPDATE `accounts` SET `loggedin`= '0' WHERE `name`='" + 帐号 + "'");
	npc.say("#b已解卡#r#e"+帐号+"#b#n的登陆状态，请通知玩家");
}
		

			
function getBan(type, accounts) {
	let sql = "SELECT accounts.`name` as name, bans.ip as ip, accounts.recentmacs FROM bans ,accounts WHERE accounts.`name` = '"+accounts+"' AND bans.ip = accounts.recentip";
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