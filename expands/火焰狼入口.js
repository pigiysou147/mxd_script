/**
 *	副本：无限火力 作者： QQ:739977676
 **/

let npcModal = 9310060;
let minPlayers = 1;
let maxPlayers = 1;
let minLevel = [120];
let maxLevel = [300];
let maxenter = [1];
let BossName = ["无限火力"];
let PQLog = ["wxhl3"];
let event = ["wxhl3"];
let onlyOne = true;
var ip=""
var mac=getmac();
var macCount =getCount(mac);
let text = "";
text += "\r\n#r在线达到300分钟即可进入,  且不能换账号换电脑换武器到其它角色上刷突破,严查,查到封号处理.#k";
text += "\r\n#b#L0#开始挑战材料boss<简单>！(剩余 #r"+(maxenter-getEventCount("wxhl3"))+" #b次)#b#l#k";
text += "\r\n#b#L1#开始挑战材料boss<普通>！(剩余 #r"+(maxenter-getEventCount("wxhl3"))+" #b次)#b#l#k";
text += "\r\n#b#L2#开始挑战材料boss<困难>！(剩余 #r"+(maxenter-getEventCount("wxhl3"))+" #b次)#b#l#k";
let sel = npc.askMenu("#e<单人材料副本挑战>#n\r\n\r\n#b#h0# \n\#k准备好迎接挑战吧！#b\r\n" + text, npcModal);

var item =player.getInventorySlot(-1,-11);

if(item==null){
	npc.say("请佩戴武器进入");
}else{
	
	var tupo=item.getLimitBreak()/100000000;
	if (party == null || player.getId() != party.getLeader()) {
		npc.say("你需要有一个#r" + minPlayers + "~" + maxPlayers + "#k人的队伍.并且等级在" + minLevel[0] + "~" + maxLevel[0] + "范围,\r\n那麽请让你的组队长和我对话吧!", npcModal);
	} else if (party.numberOfMembersInChannel() < minPlayers || party.getMembersCount(map.getId(), 1, 300) > maxPlayers) {
		npc.say("你需要有一个#r" + minPlayers + "~" + maxPlayers + "#k人的队伍.!", npcModal);
	}else if(maxenter-getEventCount("wxhl3")<1){
		npc.say("当天进入次数已满");
	}else if(!player.hasMesos(30000000) ){
		npc.say("需要3000W金币");
	}else if (npc.makeEvent("wxhl3", true, [player,sel]) == null) {
		npc.say("已经有队伍在进行了,请更换其他频道尝试。", npcModal);
	}else{
			
		player.loseMesos(30000000);
		
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


