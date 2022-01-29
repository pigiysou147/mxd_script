var itemList = Array(
        1213034,1403034,1092113,1212080,1222075,1232075,1242081,1262030,1302290,1312166,1322216,1332239,1362102,1342086,1372189,1382223,1402211,1412148,
1422153,1432179,1442235,1452217,1462205,1472227,1592033,1482180,1492191,1522106,1532110,1252066,1542068,1552068,1582026

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
