
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



var lunhui =0;
var totalJl=0;
for(var i=0;i<potList.length;i++){
	var zb =player.getInventorySlot(-1,potList[i][0]);
	if(zb!=null){
        //识别轮回星级
        if(1202193==zb.getItemId()){
            lunhui=zb.getCHUC();
        }
		//3064442 20金率

		//3064441 15金率
		if(zb.getSocket1()==3064442){
			totalJl+=20;
		}else if(zb.getSocket1()==3064441){
			totalJl+=15;
		}

		if(zb.getSocket2()==3064442){
			totalJl+=20;
		}else if(zb.getSocket2()==3064441){
			totalJl+=15;
		}

		if(zb.getSocket3()==3064442){
			totalJl+=20;
		}else if(zb.getSocket3()==3064441){
			totalJl+=15;
		}

		//第1条
		if(zb.getOption(1,false)==40650){
			totalJl+=20;
		}else if(zb.getOption(1,false)==42650){
			totalJl+=5;
		}
		
		//第2条
		if(zb.getOption(2,false)==40650){
			totalJl+=20;
		}else if(zb.getOption(2,false)==42650){
			totalJl+=5;
		}
		
		//第3条
		if(zb.getOption(3,false)==40650){
			totalJl+=20;
		}else if(zb.getOption(3,false)==42650){
			totalJl+=5;
		}
		
		//第1条
		if(zb.getOption(1,true)==40650){
			totalJl+=20;
		}else if(zb.getOption(1,true)==42650){
			totalJl+=5;
		}
		
		//第2条
		if(zb.getOption(2,true)==40650){
			totalJl+=20;
		}else if(zb.getOption(2,true)==42650){
			totalJl+=5;
		}
		
		//第3条
		if(zb.getOption(3,true)==40650){
			totalJl+=20;
		}else if(zb.getOption(3,true)==42650){
			totalJl+=5;
		}

	}
}

let npcModal = 9310060;
let minPlayers = 1;
let maxPlayers = 1;
let minLevel = [120];
let maxLevel = [300];
let maxenter = 8;
let PQLog = ["jbfbb"];
let onlyOne = true;
var ip=""
var mac=getmac();
var macCount =getCount(mac);
var bl=1;

var eventt=npc.getEvent("jbfbb");
let text = "\r\n#r#e当前角色身上\r\n装备总金率为:"+totalJl+"%  轮回星级为: "+lunhui;
text += "\r\n\r\n账号副本次数共享.严禁虚拟机挂机刷金币副本#k";
//text+="\r\n#b#L2#金率装备租赁#l#k";
text += "\r\n#b#L0#普通刷金地图(剩余 #r"+(maxenter-getEventCount("jbfbb"))+" #b次)#b#l#k";
text += "\r\n#b#L1#V10会员专属刷金地图(剩余 #r"+(maxenter-getEventCount("jbfbb"))+" #b次)#b#l#k";

if(eventt!=null){
	var time =eventt.getVariable("endTime");
	time=(time-new Date().getTime())/1000;
	var minute = parseInt(time/60);
	var second = parseInt(time%60);
	
	text += "\r\n\r\n#r#e该副本已经有人了，请 "+minute+"分"+second+"秒之后再进入";
}
let sel = npc.askMenu("#e<单人刷金地图>#n\r\n\r\n#b#h0# \n\#k准备好迎接挑战吧！#b\r\n" + text);
if(sel==2){

	player.runScript("金率装备");
}else{

	var item =player.getInventorySlot(-1,-11);

	if(item==null){
		npc.say("请佩戴武器进入");
	}else{
		var name ="jbfbb";
		if(sel==1){
			name ="jbfbbb";
		}
		var vipLevel = new Array( 	
			100,
			500, 
			1000, 
			2000, 
			3000, 
			5000, 
			8000, 
			10000, 
			15000,
			20000,
			30000,
			40000,
			50000,
			90000,
			130000,
			190000,
			250000,
			310000
			);
	
		
		
		var leiji =getHyPay();
		
		var myLevel=0;
		//识别会员等级操作
		for(var i=0;i<vipLevel.length;i++){
			if(leiji>=vipLevel[i]){
				myLevel++;
			}else{
				break;
			}
		}
		
		
		if (party == null || player.getId() != party.getLeader()) {
			npc.say("你需要有一个#r" + minPlayers + "~" + maxPlayers + "#k人的队伍.并且等级在" + minLevel[0] + "~" + maxLevel[0] + "范围,\r\n那麽请让你的组队长和我对话吧!", npcModal);
		} else if (party.numberOfMembersInChannel() < minPlayers || party.getMembersCount(map.getId(), 1, 300) > maxPlayers) {
			npc.say("你需要有一个#r" + minPlayers + "~" + maxPlayers + "#k人的队伍.!", npcModal);
		}else if(maxenter-getEventCount("jbfbb")<1){
			npc.say("当天进入次数已满");
		}else if(sel==1 && myLevel<10){
			npc.say("会员地图只有V10等级以上才能进入");
		}else {
				
			if (npc.makeEvent(name, true, [player,totalJl,lunhui]) == null) {
				npc.say("已经有队伍在进行了,请更换其他频道尝试。", npcModal);
			}
		} 
		
	
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