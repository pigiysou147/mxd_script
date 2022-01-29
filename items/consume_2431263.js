var status = 0;
var minLevel = 180;
var maxLevel = 255;
var minPartySize = 1;
var maxPartySize = 1;
var result;
var count = 0;
var price = 0;

result = player.customSqlResult("select everytime,totalcount from buchang where accountid=?", player.getAccountId());
if(result.size() != 0) {
	count = result.get(0).get("totalcount");
	price = result.get(0).get("everytime");
	var txt = "#e#d<余额补领>#n\r\n#k";
	txt += "在我这里你可以领取老服的赞助余额.一充永流传\r\n";
	txt += "#b#L0#领取余额#l\r\n";
	txt += "#L1#查看我剩余的余额#l\r\n";
	let selection =npc.askMenuS(txt);
	if(selection == 0) {
		if(count > 0) {
			if(getEventCount("补偿余额") > 0) {
				npc.say("请明天再来吧 ~");
			} else {
				//可以领取次数不为零
				addHyPay(price);
				//次数减1
				player.customSqlUpdate("update buchang set totalcount=totalcount-1 where accountid=?", player.getAccountId());
				setEventCount("补偿余额", 1,1);
				npc.say("成功领取了" + price + "余额");
			}

		} else {
			npc.say("你没有可以领取的余额和累计哦");
		}
	}else{
		npc.say("你还可以领取的余额为：" + (count * price));
	}
} else {
	npc.say("请联系管理员~");
}

function addHyPay(price) {
	var sql = "update hypay set pay=pay+?,leiji=leiji+? where accountId=?";
	var result = player.customSqlUpdate(sql, price, price, player.getAccountId());

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

	var sql = "update accounts_event set type=?,value=value+? where accounts_id=? and event=?";

	var result = player.customSqlUpdate(sql, type, value, player.getAccountId(), eventName);

}