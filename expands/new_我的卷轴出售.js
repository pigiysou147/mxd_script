var discount = 1;
start();

function start() {
	var sql = "SELECT ";
	sql += " (select name from characters b where b.id = a.characters_id) sale, ";
	sql += " (select name from characters b where b.id = a.buy_id) buy,status,  ";
	sql += " a.itemid,a.meso,a.iid,a.number FROM zz_js_sale_history a where characters_id = ? order by iid desc "
	
	var resultList = player.customSqlResult(sql, player.getId());
	var text = "道具\t\t价格\t\t出售\t\t购买\t\t操作\r\n";
	for(var i = 0; i < resultList.size(); i++) {
		var result = resultList.get(i);
		if(result == null) {
			break;
		}
		if(result.get("status") == "已售出") {
			text += "#r#L" + result.get("iid") + "#" + result.get("iid") + "#v" + result.get("itemid") + "#\t￥" + result.get("meso") + "\t\t" + result.get("sale") + "\t   " + (result.get("buy") == null ? "-" : result.get("buy")) + "\t#b领取现金#k#l\r\n";
		} else if(result.get("status") == "正在出售") {
			text += "#r#L" + result.get("iid") + "#" + result.get("iid") + "#v" + result.get("itemid") + "#\t￥" + result.get("meso") + "\t\t" + result.get("sale") + "\t   " + (result.get("buy") == null ? "-" : result.get("buy")) + "\t#r装备下架#k#l\r\n";
		} else if(result.get("status") == "已下架") {
			text += "#r#L" + result.get("iid") + "#" + result.get("iid") + "#v" + result.get("itemid") + "#\t￥" + result.get("meso") + "\t\t" + result.get("sale") + "\t   " + (result.get("buy") == null ? "-" : result.get("buy")) + "\t#r已下架#k#l\r\n";
		} else if(result.get("status") == "领过现金") {
			text += "#r#L" + result.get("iid") + "#" + result.get("iid") + "#v" + result.get("itemid") + "#\t￥" + result.get("meso") + "\t\t" + result.get("sale") + "\t   " + (result.get("buy") == null ? "-" : result.get("buy")) + "\t#r领过现金#k#l\r\n";

		}
	}
	var iid = npc.askMenu(text)
	findEquipAttr(iid);
}

function findEquipAttr(iid) {
	var text = "";
	var sql = " SELECT * from zz_js_sale_history where iid = ? limit 1 ";
	var resultList = player.customSqlResult(sql, iid);
	if(resultList.size() > 0) {
		var result = resultList.get(0);
		if(result.get("buy_id") > 0 && 　result.get("status") == "已售出") {
			text = "装备售出价格：#r" + Math.floor(result.get("meso") * 100) / 100 + "#k\r\t扣除系统手续费#r" + Math.floor((result.get("meso") * (1 - discount)) * 100) / 100 + "#k\r\n可得[#r" + Math.floor((result.get("meso") * 1) * 100) / 100 + "#k]\r\n您是否要领取?";
			var yes = npc.askYesNo(text);
			if(yes == 1) {
				//修改状态
				modifyBuyIdRMB(iid);
				//增加现金
				gainRMB(result.get("meso") * 1, iid);
				npc.say("成功领取现金：" + Math.floor((result.get("meso") * 1) * 100) / 100);
			}
		} else if(result.get("status") == "正在出售") {

			text += "您是否要下架:#v" + result.get("itemid") + "# x " + result.get("number");
			var sel = npc.askYesNo(text);
			if(sel == 1) {
				if(player.canGainItem(result.get("itemid"), result.get("number"))) {
					var sql = " SELECT * from zz_js_sale where iid = ? limit 1 ";
					var resultList = player.customSqlResult(sql, iid);
					if(resultList.size() < 1) {
						npc.say("该物品已经售出.")
					} else {
						//删除寄售表
						removeSale(iid);
						modifyBuyIdStatus(iid);
						player.gainItem(result.get("itemid"), result.get("number"));
						npc.say("下架成功!");
					}
					
					
					
				} else {
					npc.say("请整理下背包!");
				}
			}
		} else {
			npc.say("#v" + result.get("itemid") + "# x " + result.get("number") + " " + result.get("status"));
		}
	}else{
		npc.say("表为空");
	}

}

function removeSale(iid) {
	var sql = " delete from zz_js_sale where iid = ? ";
	player.customSqlUpdate(sql, iid);
}

function modifyBuyIdRMB(iid) {
	var sql = " update zz_js_sale_history set status = '领过现金' where iid = ? ";
	player.customSqlUpdate(sql, iid);
}

function modifyBuyIdStatus(iid) {
	var sql = " update zz_js_sale_history set status = '已下架' where iid = ? ";
	player.customSqlUpdate(sql, iid);
}

function gainRMB(rmb, id) {
	var myAccountName =player.getAccountName();
	var sql = "insert into zz_rmb(account, rmb, paytime,remark) values('" + myAccountName + "'," + rmb + ",now(),'出售道具id:" + id + "')";
	player.customSqlInsert(sql);

	var sql = " update hypay set cash=cash+? where accountid=? ";
	player.customSqlUpdate(sql, rmb, player.getAccountId());
	
	var remark="交易行完成交易,道具ID："+id;
	var cashSql="insert into cash_log  values(0,"+player.getAccountId()+",'"+player.getName()+"',"+rmb*1+",'"+remark+"',now())";
	player.customSqlInsert(cashSql);
}

function getAccountName() {
	var sql = "select name from accounts where id = (select accounts_id from characters where id = " + player.getId() + ");";
	var resultList = player.customSqlResult(sql);
	var accountName = 0;
	for(var i = 0; i < resultList.size(); i++) {
		var result = resultList.get(i);
		if(result == null) {
			break;
		}
		accountName = result.get("name");
	}
	return accountName;
}