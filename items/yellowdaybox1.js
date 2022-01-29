var selStr = "#b歡迎回來#r夏戀谷SummerStory#k#n\r\n";
			selStr += "#r親愛的 #b#e" + player.getName() + "#n\r\n"
			selStr += "#r在線時間為 : #b" + player.getOnlineTime() + " #b分鐘\r\n";
			selStr += "#r當前點券為 : #b" + player.getCashShopCurrency(1) + "點\r\n";
			selStr += "#r當前抵用為 : #b" + player.getCashShopCurrency(2) + "\r\n";
			selStr += "#r當前餘額為 : #b" + getHyPay(1) + "\r\n";
			//selStr += "#r累積贊助為 : #b" + getHyPay(3) + "\r\n";
			selStr += "#r#k玩家指令請 #b@幫助\r\n";
player.addPopupSay(9111007, 6000, selStr, "");

function getHyPay(type) {
    let sql = "select * from hypay where accname = '" + getAccountName() + "'";
    let push = player.customSqlResult(sql);
	let pay = "";
    if (push.size() > 0) {
        let result = push.get(0);
        if (type == 1) {
            pay = result.get("pay");
        } else if (type == 2) {
            pay = result.get("payUsed");
        } else if (type == 3) {
            pay = result.get("Cumulative");
        }
    } else {
        player.customSqlInsert("INSERT INTO `hypay` (`accname`, `name`) VALUES ('" + getAccountName() + "', '" + player.getName() + "')");
        return getHyPay(1);
    }

    return pay;
}
function getAccountName() {
    let i = -1;
    let sql = "select name,id from accounts where id=" + player.getAccountId() + " order by name limit 1;";
    let push = player.customSqlResult(sql);
	let name = "";
    if (push.size() > 0) {
        let result = push.get(0);
        name = result.get("name");
    }
    return name;
}

function getAccountId() {
    var sql = "select name,id from accounts where id=" + player.getAccountId() + " order by name limit 1;";
    var push = player.customSqlResult(sql);
	var id = -1;
    if (push.size() > 0) {
        var result = push.get(0);
        id = result.get("id");
    }
    return id;
}