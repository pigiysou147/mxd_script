
var account;
var accountid;
var date;
var time;
var name;
var map;
		var accountid = npc.askText("請輸入玩家ID","",0,999);
			account = getAccountName(accountid);
		if (account == "undefined"){
			npc.say("你輸入的遊戲ID為錯誤，請查明後在輸入")
		}else{
			let sel = "請選擇你要執行的動作\r\n"
				sel += "#L1##r傳送到#e#b「"+account+"」#r#n玩家#l\r\n"
				sel += "#L2##r將玩家#e#b「"+account+"」#r#n傳送到你這#l\r\n"
		var selected = npc.askMenu(sel);
		}
switch (selected){
	case 1:
var text = "#r#e請你再三確定要傳送到這個玩家...#n\r\n\r\n";
	text += "#b遊戲帳號 : " + account + "\r\n";
	text += "#b如果是，請複製下方指令。\r\n";
	npc.askText(text,"#tp "+player.getName()+" "+account,2,99);
	break;
	case 2:
var text = "#r#e請你再三確定要將這個玩家傳送過來#n\r\n\r\n";
	text += "#b遊戲帳號 : " + account + "\r\n";
	text += "#b如果是，請複製下方指令。\r\n";
	npc.askText(text,"#tp "+account+" "+player.getName()+"",2,99);
	npc.broadcastPlayerNotice(10,"【管理員之召喚】「"+player.getName()+"」即將召喚「"+account+"」玩家。")
	break;

}



function getAccountName(accountid) {
	var sql = "SELECT characters.name FROM characters WHERE characters.`name` LIKE '%" + accountid + "%'";
	var push = player.customSqlResult(sql);
	if (push.size() > 0) {
		var result = push.get(0);
		var name = result.get("name");
	}
	return name;
}

function getmap(accountid) {
	var sql = "SELECT characters.map FROM characters WHERE characters.`name` LIKE '%" + accountid + "%'";
	var push = player.customSqlResult(sql);
	if (push.size() > 0) {
		var result = push.get(0);
		var map = result.get("map");
	}
	return map;
}