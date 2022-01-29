




var bossName="威尔";
var pqlog="Will";
var txt="是否要增加一次"+bossName+"的挑战次数呢？";

let sel = npc.askYesNo(txt);
if(sel==1){
	player.addPQLog(pqlog,-1,1);
	player.loseItem(npc.getItemId(),1);
	setEventCount(pqlog,player.getAccountId(),5,1);
	setEventCount(pqlog+"today",player.getAccountId(),1,1);
	npc.say("成功增加"+bossName+"的一次挑战次数");
}

function setEventCount(eventName,accid, type, value) {

	var sql = "update accounts_event set type=?,value=value-? where accounts_id=? and event=?";

	var result = player.customSqlUpdate(sql, type, value, accid, eventName);

}