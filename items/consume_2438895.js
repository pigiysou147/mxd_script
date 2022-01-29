var itemList = Array(
	1353606,
	1354017,
	1099015,
	1354007,
	1099011,
	1099012,
	1342095,
	1352009,
	1353505,
	1352109,
	1098009,
	1352206,
	1352216,
	1352226,
	1353807,
	1352236,
	1352246,
	1352256,
	1352266,
	1352276,
	1352286,
	1352296,
	1352406,
	1352506,
	1352606,
	1352707,
	1352815,
	1353707,
	1352906,
	1352916,
	1352928,
	1352935,
	1352945,
	1352957,
	1352967,
	1352975,
	1353006,
	1353105,
	1353405,
	1353706,
	1352807,
	1352824,
	1098006,
	1353306
);

var text = "";
for(var i = 0; i < itemList.length; i++) {
	text += "#L" + i + "##v" + itemList[i] + "##z" + itemList[i] + "##l\r\n";
}
let selection = npc.askMenuS("请选择你想要的道具\r\n\r\n" + text);

//var chance = Math.floor(Math.random()*itemList.length)
var itemid = itemList[selection];

var item = player.makeItemWithId( itemid);
item.setStr(item.getStr()+200); //装备力量
item.setDex(item.getDex()+200); //装备敏捷
item.setInt(item.getInt()+200); //装备智力
item.setLuk(item.getLuk()+200); //装备运气
item.setPad(item.getPad()+200); //物理攻击
item.setMad(item.getMad()+200); //魔法攻击
item.setGrade(20);
item.setOption(1, 40650, false);
item.setOption(2, 40650, false);
item.setOption(3, 40650, false);
var day = 1;
if(getEventCount("金率装备2")>0){
	day=7;
}
item.setCHUC(20);
item.setExpiration(new Date().getTime() + 1000 * 60 * 60 * 24 * day);
item.setLimitBreak(200000000);
player.gainItem(item);
player.loseItem(npc.getItemId(), 1);
npc.say("恭喜您，获得了#b#z" + itemid + "# X 1");

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
