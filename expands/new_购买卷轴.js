start();
function start(){
	var itemArray = new Array();
	var sql = " SELECT iid, a.itemid, sn, a.meso,number FROM zz_js_sale a WHERE characters_id<>? and type = 2 AND buy_id IS NULL ORDER BY paytime DESC ";
	var resultList = player.customSqlResult(sql,player.getId());
	var text = "请选择你要购买的道具(#r#e不能拆分购买#k#n)\r\n";
	for (var i = 0; i < resultList.size(); i++) {
		var result = resultList.get(i);
		if (result == null) {
			break;
		}
		var itemobj = new Array();
		itemobj.push(result.get("iid"));
		itemobj.push(result.get("itemid"));
		itemobj.push(result.get("meso"));
		itemobj.push(result.get("number"));
		itemArray.push(itemobj);
		text += "#r#L"+i+"# "+result.get("iid")+" #v"+result.get("itemid")+"##t"+result.get("itemid")+"# x "+result.get("number")+" 直充价格￥"+result.get("meso")+"#l\r\n" 
	}
	var index = npc.askMenu(text);
	var iid = itemArray[index][0];
	var itemid = itemArray[index][1];
	var meso = itemArray[index][2];
	var number = itemArray[index][3];
	var yes = npc.askYesNo("您是否要购买#v"+itemid+"##t"+itemid+"# x "+""+number+"   直充价格￥"+meso+"?\r\n");
	if(yes == 1){
		if (!player.canGainItem(itemid, number)) {
			npc.say("请确定好背包是否有空余位置.");
		}else if(getRMB()<meso){
			npc.say("直充点不够，需要充值");
		}else{
			var sql = " SELECT * FROM zz_js_sale WHERE iid=? ";
			var resultList = player.customSqlResult(sql, iid);
			if(resultList.size() == 0) {
				npc.say("手太慢了，这件物品被人买走了");
			} else {
				//扣除现金
				loseRMB(-meso, iid);
				//删除寄售表
				removeSale(iid);
				//修改购买人
				modifyBuyId(iid);
				player.gainItem(itemid, number);
				npc.say("购买成功!");
			}
		}
		
	}
}


function loseRMB(rmb,id){
	var myAccountName =player.getAccountName();
	var sql = "insert into zz_rmb(account, rmb, paytime,remark) values('"+myAccountName+"',"+rmb+",now(),'购买道具id:"+id+"')";
	
	
	player.customSqlInsert(sql);
	
	var sql = " update hypay set cash=cash+? where accountid=? ";
	player.customSqlUpdate(sql,rmb,player.getAccountId()); 
	
	var remark="交易行完成交易,道具ID："+id;
	var cashSql="insert into cash_log  values(0,"+player.getAccountId()+",'"+player.getName()+"',"+rmb*1+",'"+remark+"',now())";
	player.customSqlInsert(cashSql);
	
}

function getRMB(){
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
	var sql = "select name from accounts where id = (select accounts_id from characters where id = "+player.getId()+");";
	var resultList = player.customSqlResult(sql);
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


function modifyBuyId(iid){
	var sql = " update zz_js_sale_history set buy_id = ?,status='已售出' where iid = ? ";
	player.customSqlUpdate(sql,player.getId(),iid); 
}


function removeSale(iid){
	var sql = " delete from zz_js_sale where iid = ? ";
	player.customSqlUpdate(sql,iid); 
}
