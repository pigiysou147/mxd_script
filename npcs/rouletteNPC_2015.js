var status = 0;
var random = Math.floor(Math.random() * 4);
var eff = "#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";
var eff1 = "#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#";
var ppp = "#fEffect/CharacterEff/1112908/0/1#"; //泡炮

var rand = Math.floor(Math.random() * 384);

var itemList = getItem();
var selStr = "#L0#" + ppp + ppp + ppp + ppp + ppp + "#d#e【点击抽取椅子】" + ppp + ppp + ppp + ppp + ppp + "#l\r\n\r\n\r\n";
selStr += "#L1#" + ppp + ppp + ppp + ppp + ppp + "#d#e【椅子抽奖贡献排行榜】" + ppp + ppp + ppp + ppp + ppp + "#l\r\n\r\n\r\n";
selStr += "         #r#e【全冒险岛所有椅子抽奖】\r\n\r\n";
for(var i = 0; i < itemList.size(); i++) {
	selStr += "#v" + itemList.get(i).get("itemid") + "#";
}

let selection = npc.askMenuS(selStr);

if(selection == 0) {
	let sel = npc.askYesNo("你如果拥有1500w金币,可以在我这里抽奖,我包包里面有各种炫酷的椅子是否想要试试手气，看您能获得什么?");
	if(sel == 1) {

		if(!player.hasMesos(15000000)) {
			npc.say("你没有1500W金币");
		} else if(player.getFreeSlots(1) < 1 || player.getFreeSlots(2) < 1 || player.getFreeSlots(3) < 1 || player.getFreeSlots(4) < 1 || player.getFreeSlots(5) < 1) {
			npc.say("你保证你背包的每一栏都有空位");
		} else {
			var itemId = itemList.get(rand).get("itemid");
			player.loseMesos(15000000);
			player.addPQLog("椅子抽奖");
			player.gainGachaponItem("『椅子抽奖』", itemId, 1, 3);
			npc.say("获取了#r#t" + itemId + "# #v" + itemId + "# X1个")
		}
	}
} else if(selection == 1) {
	var nameList = getRank();
	var text = "\t\t\t\t#e#d★ 椅子抽奖排行 ★#k#n\r\n\r\n";
	text += "\t#e名次#n\t#e玩家昵称#n\t\t\t\t#e#n#e消耗金钱#n\r\n";
	for(var i = 0; i < nameList.size(); i++) {
		var name = nameList.get(i).get("name");
		var count = nameList.get(i).get("value");
		text += "#r\t" + (i + 1) + "\t\t" + name + "\t\t\t\t\t" + ((count * 1.5) / 10 + "亿") + "\r\n";
	}
	npc.say(text);

}

function getRank() {
	var sql_a = "SELECT a.value,c.`name` from characters as c, (SELECT  p.value,p.characters_id from characters_pqlog as p where p.key='椅子抽奖'  order by p.value desc LIMIT 10) as a where c.id=a.characters_id";
	var result_a = player.customSqlResult(sql_a);
	return result_a;
}

function getItem() {
	var sql_a = "SELECT itemid FROM n_yizi ";
	var result_a = player.customSqlResult(sql_a);
	return result_a;
}