





var txt="#e亲爱的#r" + player.getName() + " #k，你好：\r\n";
	txt+="欢迎来到 #b回忆岛\r\n#k当前拥有点券：#b" + player.getCashShopCurrency(1) + "\r\n";
	txt+="#k当前拥有抵用：#b" + player.getCashShopCurrency(2) + "\r\n";
	
	txt+="#k#r当前拥有直充点：#b"+ getCash1() +"\r\n";
	txt+="#k当前拥有余额：#b"+ getHyPay() +"\r\n";
	txt+="#k当前拥有累计：#b" + getLeiji() + "\r\n";
	txt+="#k当前拥有现金点：#b" + getCash() + "\r\n";
	txt+="#k当前拥有活力：#b" + player.getPQLog("活力") + "\r\n";
	txt+="#k当前在线时长：#b" + player.getOnlineTime() + "\r\n  ";

if (player.getOnlineTime() > 500){
	txt+="#r友情提示：你的在线时间过长，请注意休息爱护自己哦！  ";
}
player.addPopupSay(9001223,6000,txt,"");


function getHyPay() {
	var sql = "select pay from hypay where accountid = ? ";
	var result = player.customSqlResult(sql, player.getAccountId());
	if(result.size() > 0) {
		if(result.get(0) != null) {
			return result.get(0).get("pay");
		}
	} else {
		return 0;
	}

}
function getLeiji() {
	var sql = "select leiji from hypay where accountid = ? ";
	var result = player.customSqlResult(sql, player.getAccountId());
	if(result.size() > 0) {
		if(result.get(0) != null) {
			return result.get(0).get("leiji");
		}
	} else {
		return 0;
	}

}

function getCash() {
	var sql = "select paihangbang2 from hypay where accountid = ? ";
	var result = player.customSqlResult(sql, player.getAccountId());
	if(result.size() > 0) {
		if(result.get(0) != null) {
			return parseInt(result.get(0).get("paihangbang2")*0.35);
		}
	} else {
		return 0;
	}

}

function getCash1() {
	var sql = "select cash from hypay where accountid = ? ";
	var result = player.customSqlResult(sql, player.getAccountId());
	if(result.size() > 0) {
		if(result.get(0) != null) {
			return parseInt(result.get(0).get("cash")*1);
		}
	} else {
		return 0;
	}

}