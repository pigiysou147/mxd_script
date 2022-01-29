var iid ;
let itemList = Array(
	1214018,//神秘之影龙息臂箭
		1403018, //神秘之影拳炮
		1213018, //- 神秘之影调谐器 等级要求：200
		1592020, //- 神秘之影远古弓 等级要求：200
		1212120, //- 神秘之影双头杖 等级要求：200
		1222113, //- 神秘之影灵魂手铳 等级要求：200
		1232113, //- 神秘之影亡命剑 等级要求：200
		1242121, //- 神秘之影能量剑 等级要求：200
		1242122, //- 神秘之影能量剑 等级要求：200
		1252098, //- 神秘之影魔法槌 等级要求：200
		1262039, //- 神秘之影ESP限制器 等级要求：200
		1302343, //- 神秘之影单手剑 等级要求：200
		1312203, //- 神秘之影斧 等级要求：200
		1322255, //- 神秘之影锤 等级要求：200
		1332279, //- 神秘之影匕首 等级要求：200
		1342104, //- 神秘之影刃 等级要求：200
		1362140, //- 神秘之影手杖 等级要求：200
		1372228, //- 神秘之影短杖 等级要求：200
		1382265, //- 神秘之影长杖 等级要求：200
		1402259, //- 神秘之影双手剑 等级要求：200
		1412181, //- 神秘之影双手战斧 等级要求：200
		1422189, //- 神秘之影双手锤 等级要求：200
		1432218, //- 神秘之影长枪 等级要求：200
		1442274, //- 神秘之影矛 等级要求：200
		1452257, //- 神秘之影弓 等级要求：200
		1462243, //- 神秘之影弩 等级要求：200
		1472265, //- 神秘之影拳套 等级要求：200
		1482221, //- 神秘之影指节 等级要求：200
		1492235, //- 神秘之影短枪 等级要求：200
		1522143, //- 神秘之影双弩枪 等级要求：200
		1532150, //- 神秘之影攻城炮 等级要求：200
		1542117, //- 神秘之影武士刀 等级要求：200
		1552119, //-  神秘之影折扇  等级要求：200
		1582023, //- 神秘之影机甲枪 等级要求：200
		1272017, //- 神秘之影锁链 等级要求：200
		1282017  //- 神秘之影魔力手套 等级要求：200
);


var mac =getmac();
var ip =getip();

var txt="\r\n#r#e尊敬的各位玩家，因为近期维护了挺长时间，特此发放维护补偿奖励、奖励内容如下:\r\n\r\n"
	txt+="点券20W  神秘武器随机X 1  \r\n突破8000万（直接加在武器上，一把武器只能领一次）   小蜡笔随机 X3 余额300\r\n\r\n";
	txt+="限定账号机器码领武器码 禁止小号多领\r\n";
	txt+="目前不开放领取，具体领取时间请关注群消息哦\r\n";
	var sel =npc.askYesNo(txt);
	if(sel==3){
		var item =player.getInventorySlot(-1,-11);
		if(item==null){
			npc.say("请佩戴武器再来领取；");
		}else{
			
			iid =item.toString().substr(item.toString().indexOf("EntId") + 6, 18);
			
			if(getAccountCount()>0){
				npc.say("当前账号已经领取过补偿了.");
			}else if(getItemCount(iid)>0){
				npc.say("当前武器已经领取过补偿了.");
			}else if(getMacCount(mac)>0){
				npc.say("当前机器码已经领取过补偿了.");
			}else if(getipCount(ip)>0){
				npc.say("当前ip已经领取过补偿了.");
			}else{
				setEventCount(iid);
				
				item.setLimitBreak(item.getLimitBreak()+80000000);
				player.updateItem(-11,item);
				player.gainItem(2431142,3);
				//增加余额
				addHyPay(300);
				var chance = Math.floor(Math.random()*itemList.length)
				player.gainItem(itemList[chance],1);
				player.modifyCashShopCurrency(1,200000);
				
				npc.say("领取成功");
			}
			
			
		}
	}
function addHyPay(price) {
	var sql = "update hypay set pay=pay+? where accountId=?";
	player.customSqlUpdate(sql, price, player.getAccountId());

}	
	
function getmac(){
	var sql = "SELECT con.sign_code recentmacs from qqmxd_connect_log as con,qqmxd_login_log as loggin where con.id=loggin.key_id and loggin.`name`=? ORDER BY con.connect_time desc LIMIT 1";
	var result = player.customSqlResult(sql,player.getAccountName());
	mac =result.get(0).get("recentmacs");
	player.customSqlUpdate("update accounts_event set mac = ? where accounts_id=?",mac,player.getAccountId());
	return mac;
}	
function getip(){
	var sql = "select recentip from accounts where id =?";
	var result = player.customSqlResult(sql,player.getAccountId());
	ip =result.get(0).get("recentip");
	return ip;
}	
function getAccountCount() {

	var sql = "select * from weihu where accid = ?  ";

	var result = player.customSqlResult(sql, player.getAccountId());

	if(result.size() > 0) {
		if(result.get(0) != null) {
			return result.get(0).get("status");
		}
	} else {
		var sql = "insert into  weihu (accid,itemid,mac,ip,status) values(?,?,?,?,?)";
		var result = player.customSqlInsert(sql, player.getAccountId(), "0", mac,ip, 0);
		return 0;
	}

}

function getItemCount(iid) {

	var sql = "select * from weihu where itemid = ?  ";

	var result = player.customSqlResult(sql, iid);

	if(result.size() > 0) {
		if(result.get(0) != null) {
			return result.get(0).get("status");
		}else{
			return 0;
		}
	}else{
		return 0;
	}

}

function getMacCount(mac) {

	var sql = "select * from weihu where mac = ?  ";

	var result = player.customSqlResult(sql, mac);

	if(result.size() > 0) {
		if(result.get(0) != null) {
			return result.get(0).get("status");
		}else{
			return 0;
		}
	}else{
		return 0;
	}

}
function getipCount(ip) {

	var sql = "select * from weihu where ip = ?  ";

	var result = player.customSqlResult(sql, ip);

	if(result.size() > 0) {
		if(result.get(0) != null) {
			return result.get(0).get("status");
		}else{
			return 0;
		}
	}else{
		return 0;
	}

}

function setEventCount(iid) {

	var sql = "update weihu set status=1,itemid=? where accid=? ";

	var result = player.customSqlUpdate(sql, iid,player.getAccountId());


}