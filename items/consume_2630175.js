var status = -1;

var tz12 = "#fEffect/CharacterEff/1112905/0/1#"; //黄星

var kkkbak1 = "#fMap/MapHelper.img/weather/rose/0#"; ////美化2
var bk1 = "#fEffect/ItemEff.img/1004532/effect/default/4#"
var bk2 = "#fEffect/ItemEff.img/1004475/effect/jump/0#"
var bk3 = "#fEffect/ItemEff.img/1004435/effect/alert/0#"
var bk4 = "#fEffect/ItemEff.img/1004477/effect/prone/1#"
var bk5 = "#fEffect/ItemEff.img/1004436/effect/default/3#"
var bk6 = "#fEffect/ItemEff.img/1004437/effect/walk1/0#"
var sg1 = "#fEffect/ItemEff.img/2022109/1#"
var sg2 = "#fEffect/ItemEff.img/2022109/2#"
var zx = "#fEffect/ItemEff.img/1003492/effect/default/1#"
var lj = "#fEffect/ItemEff.img/1003493/effect/default/1#"
var dq = "#fEffect/ItemEff.img/1003494/effect/default/1#"
var ye = "#fEffect/ItemEff.img/1003495/effect/default/0#"
var fg = "#fEffect/ItemEff.img/1004124/effect/ladder/1#"
var dtb = "#fEffect/CharacterEff.img/1112949/3/0#"
var xtb1 = "#fEffect/CharacterEff.img/1003249/0/0#" //第一排
var xtb2 = "#fEffect/CharacterEff.img/1003249/1/0#" //第二排
var xtb3 = "#fEffect/CharacterEff.img/1003252/0/0#" //第三排
var xtb4 = "#fEffect/CharacterEff.img/1112900/3/1#" //第四排
var zzz = "#fUI/UIWindowGL.img/FeedbackSystem/backgrnd3#"
var 黄星 = "#fEffect/CharacterEff/1112924/0/0#"
var icon = "#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#"
var hii = "#fEffect/BasicEff/MainNotice/BlockBuster/Default/3#"
var a1 = "#fEffect/ItemEff/1070069/effect/walk1/0#"
var a2 = "#fEffect/ItemEff/1070069/effect/walk1/1#"
var a3 = "#fEffect/ItemEff/1070069/effect/walk1/2#"
var a4 = "#fEffect/ItemEff/1070069/effect/walk1/3#"
var a5 = "#fEffect/ItemEff/1070069/effect/walk1/4#"
var a6 = "#fEffect/ItemEff/1070069/effect/walk1/5#"
var a7 = "#fEffect/ItemEff/1070069/effect/walk1/6#"
var a8 = "#fEffect/ItemEff/1070069/effect/walk1/7#"
var ee="#fEffect/CharacterEff/1003252/1/0#";
var eff1 = "#fEffect/CharacterEff/1112905/0/1#"; //小红心
var xxx = "#fEffect/CharacterEff/1082565/2/0#"; //星系
var List = Array(
	Array(ee + "#w回到市场", 2, 1), //名称、NPC代码、模式
	Array(ee + "转职系统", 9310362, "zzxt"),
	Array(ee + "万能传送", 9310362, "chuansong"),
	Array(ee + "充值中心", 9310362, "chongzhijiangli"),
	//Array(ee + "活动地图", 9310362, "huodong"),
	Array(ee + "变强中心", 9310074, "bianqiang"),
	Array(ee + "物品回收", 2470018, "hszx"),
	Array(ee + "#g商店百货#k", 9310362, "shop"),
	//Array(ee + "特色系统", 9310362, "tsxt"),
	Array(ee + "点券兑换", 9310362, "zhongjie"),
	//Array(ee + "账户信息", 9310362, "cash"),
	//Array(dtb + "卡片联盟", 9310362, "card"),
	Array(ee + "日常中心", 9310561, "rczx"),
	Array(ee + "#b新手中心#k", 9900005, "xinshoufuli")
	//Array(ee + "榜单排名", 9310561, "rank")
)
var text = "\t\t" + a1 + "#v3994074##v3994059##v3994072##v3994062##v3994059#  #v3994071##v3994059##v3994074##v3994070##v3994063#" + a1 + "\r\n\r\n";
text += "" + lj + "现金点:#r" + getHyPay() + "#n#k ";
text += "" + lj + "在线时间:#r" + player.getOnlineTime() + "#n#k 分 " + lj + "当前点券:#k#r" + player.getCashShopCurrency(1) + "#n#k 点\r\n";
//text += "        " + lj + "当前点券:#k#r" + player.getCashShopCurrency(1) + "#n#k 点\t\t" + lj + "当前余额:#r" + getHyPay() + "#n#k 元#b#n\r\n"
text += "\r\n";

var x = 0;
for(var i = 0; i < List.length; i++) {
	if(x == 4) {
		text += "#L" + i + "#" + List[i][0] + "#l\r\n\r\n";
		x = 0;
	} else {
		text += "#L" + i + "#" + List[i][0] + "#l";
		x++;
	}
}

text += "  \r\n";
let sel = npc.askMenuA(text,9310514);

if(sel == 0) {
	player.changeMap(330000010, 0);
} else {
	var mode_ = List[sel][2];
	var npcid = List[sel][1];

	player.runScript(mode_);
}

function getLeiji() {

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

function getHyPay() {

	var sql = "select cash from hypay where accountid = ? ";

	var result = player.customSqlResult(sql, player.getAccountId());

	if(result.size() > 0) {
		if(result.get(0) != null) {
			return result.get(0).get("cash");
		}
	} else {
		return 0;
	}

}