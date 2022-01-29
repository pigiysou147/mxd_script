



var potList = Array(
	Array(-1, "帽子", 0),
	Array(-2, "前额", 0),
	Array(-3, "脸饰", 0),
	Array(-4, "耳饰", 0),
	Array(-5, "衣服", 0),
	Array(-6, "短裤", 0),
	Array(-7, "鞋子", 0),
	Array(-8, "手套", 0),
	Array(-9, "披风", 0),
	Array(-29, "腰带", 0),
	Array(-30, "肩部", 0),
	Array(-37, "符号", 0),
	Array(-36, "徽章", 0),
	Array(-26, "奖牌", 0),
	Array(-17, "吊坠", 1),
	Array(-38, "吊坠", 2),
	Array(-10, "副手", 0),
	Array(-11, "武器", 0),
	Array(-12, "戒指", 1),
	Array(-13, "戒指", 2),
	Array(-15, "戒指", 3),
	Array(-16, "戒指", 4),
	Array(-27, "戒指", 5),
	Array(-28, "戒指", 6),
	Array(-33, "口袋", 0),
	Array(-34, "机器", 0),
	Array(-35, "心脏", 0),
	Array(-5000, "图腾", 1),
	Array(-5001, "图腾", 2),
	Array(-5002, "图腾", 3),
	Array(-1600, "神秘", 1),
	Array(-1601, "神秘", 2),
	Array(-1602, "神秘", 3),
	Array(-1603, "神秘", 4),
	Array(-1604, "神秘", 5),
	Array(-1605, "神秘", 6)
);




let npcModal = 9310060;
let minPlayers = 1;
let maxPlayers = 1;
let minLevel = [250];
let maxLevel = [300];
let maxenter = 2;
let PQLog = ["tradeking"];
let event = ["tradeking"];
let onlyOne = true;
var ip=""
var mac=getmac();
var macCount =getCount(mac);
let text = "#r#e";
text += "\r\n#在线达到300分钟即可进入  账号副本次数共享.严禁虚拟机挂机刷跑商#k";
text += "\r\n#b#L0#开始沙漠跑商！(剩余 #r"+(maxenter-getEventCount("tradeking"))+" #b次)#b#l#k";
let sel = npc.askMenu("#e<沙漠跑商>#n\r\n\r\n \n\#k#b" + text);

var item =player.getInventorySlot(-1,-11);

if(item==null){
	npc.say("请佩戴武器进入");
}else{
	var date = new Date();
	var hour=date.getHours();
	
	var week =date.getDay();
	if(week==0){
		week=7;
	}
	
	
		 if (npc.makeEvent("tradeking", false, player) == null) {
			npc.say("已经有队伍在进行了,请更换其他频道尝试。", npcModal);
		}else{
			npc.rememberMap("RETURN_MAP");	
			
		} 
		
	
	
	

}

function getHyPay() {

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

function getmac(){
	var sql = "SELECT con.sign_code recentmacs from qqmxd_connect_log as con,qqmxd_login_log as loggin where con.id=loggin.key_id and loggin.`name`=? ORDER BY con.connect_time desc LIMIT 1";
	var result = player.customSqlResult(sql,player.getAccountName());
	mac =result.get(0).get("recentmacs");
	player.customSqlUpdate("update accounts_event set mac = ? where accounts_id=?",mac,player.getAccountId());
	return mac;
}

function getCount(mac){
	
	
	var sql = "select sum(value) macCount from accounts_event where `event`='wxhl2' and mac =?";
	var result = player.customSqlResult(sql,mac);
	macCount =result.get(0).get("macCount");
	if(macCount==null){
		macCount= 0;
	}
	return macCount;
}

function getEventCount(eventName) {

	var sql = "select value,time from accounts_event where accounts_id = ? and event =? ";

	var result = player.customSqlResult(sql, player.getAccountId(), eventName);

	if(result.size() > 0) {
		if(result.get(0) != null) {
			return result.get(0).get("value");
		}
	} else {
		var sql = "insert into  accounts_event (accounts_id,world,event,type,value) values(?,?,?,?,?)";

		var result = player.customSqlInsert(sql, player.getAccountId(), player.getWorld(), eventName, 0, 0);
		return 0;
	}

}

function setEventCount(eventName, type, value) {
	
	var sql = "update accounts_event set type=?,value=value+?,mac=? where accounts_id=? and event=?";

	var result = player.customSqlUpdate(sql, type, value, mac,player.getAccountId(), eventName);

}




