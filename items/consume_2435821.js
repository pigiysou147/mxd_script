/*
 *  
 *  
 *  功能：魅力香水
 *  
 *
 */

/* global im */
var 花費 = 78888;
var min = 90000;
var max = 150000;
var 餘額 = 0;
var boxid = 2435821;

text = "#fs16##b#e"+花費+"返利禮包#fs12#\r\n"
text += "#b歡迎使用餘額返利系統\r\n"
text += "是否確定花費"+花費+"餘額開啟此禮包?\r\n\r\n"
text += "#e#b最少可獲得#r"+min+"餘額\r\n"
text += "#e#b最多可獲得#r"+max+"餘額\r\n"
var YN = npc.askYesNo(text)

if(YN == 1){
if(getHyPay(1)>=花費){
var Random = Math.floor(Math.random() *99 + 1);

if(Random>=1&Random<=30){
	 餘額 = Math.floor(Math.random() *6000 + 90000)//20%
}else if (Random>30&Random<=99){
	 餘額 = Math.floor(Math.random() *3000 + 96000)//30%
}else{
	 餘額 = Math.floor(150000)//50%
}
player.loseItem(boxid,1);
gainHyPay(-花費);
gainHyPay(餘額);
npc.broadcastPlayerNotice(37,"【餘額返利】：恭喜玩家花費"+花費+"餘額使用返利禮包 " + player.getName() + " 獲得了 " + 餘額 + " 餘額。");
npc.say(" 獲得了 " + 餘額 + " 餘額。");
}else{
	npc.say("餘額不足，無法開啟禮包");
}
}else{
	npc.say("好吧，下次見");
}

	
function getHyPay(type) {
    var sql = "select * from hypay where accname = '" + getAccountName() + "'";
    var push = player.customSqlResult(sql);
    if (push.size() > 0) {
        var result = push.get(0);
        if (type == 1) {
            var pay = result.get("pay");
        } else if (type == 2) {
            var pay = result.get("payUsed");
        } else if (type == 3) {
            var pay = result.get("payReward");
        }
    } else {
        player.customSqlInsert("INSERT INTO `hypay` (`accname`, `name`) VALUES ('" + getAccountName() + "', '" + player.getName() + "')");
        return getHyPay(1);
    }

    return pay;
}
function getAccountName() {
    var i = -1;
    var sql = "select name,id from accounts where id=" + player.getAccountId() + " order by name limit 1;";
    var push = player.customSqlResult(sql);
    if (push.size() > 0) {
        var result = push.get(0);
        var name = result.get("name");
    }

    return name;
}
function gainHyPay(count) {
    var sql = "update hypay set pay =pay+? where accname = '" + getAccountName() + "';";   
    player.customSqlUpdate(sql, count);
}