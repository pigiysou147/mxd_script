

var text ="#L1#我要购买#l    #L2#我要寄售#l\r\n\r\n";
	text+="#L3#交易记录#l    #L4#我的出售#l\r\n\r\n";
	text+="#L5#提现申请#l    #L6#申请撤回#l\r\n\r\n";
var sel = npc.askMenu(text);
var commission=0.2;
if(sel == 1){
	var text = "请选择你要购买的道具类型:\r\n";
		text+= "#L1#装备#l #L2#卷轴#l";
	var type = npc.askMenu(text);
	if(type == 1){
		player.runScript("new_购买装备")
	}else if(type == 2){
		player.runScript("new_购买卷轴")
	}
}else if(sel == 2){
	var text = "请选择你要寄售的道具类型:\r\n";
		text+= "#L1#装备#l #L2#卷轴#l #L3#材料#l";
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
		text+= "#L1#装备#l #L2#卷轴#l";
	var type = npc.askMenu(text);
	if(type == 1){
		player.runScript("new_装备成交记录")
	}else if(type == 2){
		player.runScript("new_卷轴成交记录")
	}
}else if(sel == 4){
	var text = "请选择你要查看的交易类型:\r\n";
		text+= "#L1#装备#l #L2#卷轴#l";
	var type = npc.askMenu(text);
	if(type == 1){
		player.runScript("new_我的装备出售")
	}else if(type == 2){
		player.runScript("new_我的卷轴出售")
	}
	
}else if(sel ==5){
	var number = npc.askNumber("请输入你要提现的现金,您目前的现金为:"+getRMB()+"\r\n提现需要扣除"+commission*100+"%手续费。\r\n",1,1,getRMB());
	if(number <= getRMB()){
		var yes = npc.askYesNo("您是否要进行申请提现"+number+",\r\n扣除手续费"+parseInt(number*commission)+",\r\n可得"+number*(1-commission)+"RMB。");
		if(yes == 1){
			//loseRMB(-number,);
		}
	}else{
		npc.say("操作出现问题.");
	}
}


function loseRMB(rmb,coin){
	var myAccountName =getAccountName();
	var sql = "insert into zz_rmb(account, rmb, paytime,remark) values('"+myAccountName+"',"+rmb+",now(),'提现申请"+rmb+"现金为"+coin+"RMB')";
	player.customSqlInsert(sql);
}
 


function getRMB(){
	var sql = " select sum(rmb) rmb from zz_rmb where    account =  '"+getAccountName()+"' ";
	var resultList = player.customSqlResult(sql);
	var coin=0;
	if(null!=resultList){
		for (var i = 0; i < resultList.size(); i++) {
	    var result = resultList.get(i);
	    if (result == null) {
	        break;
	    }
			coin = result.get("rmb");
			break;
		}	
	}
	if(coin==null){
		coin =0;
	}	
	return coin;
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

