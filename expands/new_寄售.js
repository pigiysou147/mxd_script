



var text="\r\n\t\t\t#v4034842##e#r直充交易所#k#v4034842#\r\n\r\n";
text+="#b我的直充点#k: #r"+getHyPay()+"#k\r\n";
text +="#L1##r我要购买#k#l\t\t#L2##b我要寄售#k#l\r\n\r\n";
text+="#L3#交易记录#l\t\t#L4#我的出售#l\r\n\r\n";
var sel = npc.askMenu(text);
var commission=0.2;
if(sel == 1){
	var text = "请选择你要购买的道具类型:\r\n";
		text+= "#e#r#L1##v1592037#装备#l\t#L2##v2612078#卷轴#l\t";
		text+= "#e#r#L3##v4001715#材料(包含金币)#l#l";
	var type = npc.askMenu(text);
	if(type == 1){
		player.runScript("new_购买装备")
	}else if(type == 2){
		player.runScript("new_购买卷轴")
	}else if(type == 3){
		player.runScript("new_购买材料")
	}
}else if(sel == 2){
	var text = "请选择你要寄售的道具类型:\r\n";
		text+= "#e#r#L1##v1592037#装备#l\t#L2##v2612078#卷轴#l\t";
		text+= "#e#r#L3##v4001715#材料#l#l";
	var type = npc.askMenu(text);
	if(type == 1){
		player.runScript("new_寄售装备")
	}else if(type == 2){
		player.runScript("new_寄售卷轴")
	}else if(type == 3){
		player.runScript("new_寄售材料")
	}
}else if(sel == 3){
	var text = "请选择你要查看的交易类型:\r\n";
		text+= "#e#r#L1##v1592037#装备#l\t#L2##v2612078#卷轴#l\t";
		text+= "#e#r#L3##v4001715#材料(包含金币)#l#l";
	var type = npc.askMenu(text);
	if(type == 1){
		player.runScript("new_装备成交记录")
	}else if(type == 2){
		player.runScript("new_卷轴成交记录")
	}else if(type == 3){
		player.runScript("new_材料成交记录")
	}
}else if(sel == 4){
	var text = "请选择你要查看的交易类型:\r\n";
		text+= "#e#r#L1##v1592037#装备#l\t#L2##v2612078#卷轴#l\t";
		text+= "#e#r#L3##v4001715#材料(包含金币)#l#l";
	var type = npc.askMenu(text);
	if(type == 1){
		player.runScript("new_我的装备出售")
	}else if(type == 2){
		player.runScript("new_我的卷轴出售")
	}else if(type == 3){
		player.runScript("new_我的材料出售")
	}
	
}else if(sel ==5){
	
}


function loseRMB(rmb,coin){
	var myAccountName =player.getAccountName();
	var sql = "insert into zz_rmb(account, rmb, paytime,remark) values('"+myAccountName+"',"+rmb+",now(),'提现申请"+rmb+"现金为"+coin+"RMB')";
	player.customSqlInsert(sql);
}
 


function getHyPay() {
	var sql = "select cash from hypay where accountid = ? ";
	var result = player.customSqlResult(sql, player.getAccountId());
	if(result.size() > 0) {
		if(result.get(0) != null) {
			return result.get(0).get("cash");
		}
	} else {
		return 0;
	}

}

function  getAccountName() {
	var sql = "select name from accounts where id = ?";
	var resultList = player.customSqlResult(sql,player.getAccountId());
	var accountName=0;
	for (var i = 0; i < resultList.size(); i++) {
    var result = resultList.get(i);
    if (result == null) {
        break;
    }
		var accountName = result.get("name");
	}
	return accountName;
}

