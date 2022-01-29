var aaa ="#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";
var epp1 = "#fEffect/CharacterEff/1082312/2/0#"; //彩光1
var eff = "#fCharacter/Weapon/01702523.img/48/straight/0/effect#"; //彩虹
var bts = "#fEffect/ItemEff/1102511/effect/ladder/7#";//蓝色天使翅膀
var ax = "#fEffect/CharacterEff/1112902/0/1#";  //蓝色爱心
var epp = "#fEffect/SetEff/11/effect/3#"; 
var xx = "#fEffect/CharacterEff/1032054/0/0#";  //选项两边
var xxcb = "#fEffect/ItemEff/1102537/effect/ladder/0#";//星星翅膀
var xh = "#fEffect/ItemEff/1048001/0/0#";//雪花
var xxx = "#fUI/UIWindow4/PQRank/rank/gold#";


var typed=0;
var rmb = 0;
var t3 ="#fEffect/ItemEff/1048001/0/0#";

var selStr = "\t\t\t" + bts + "#l\r\n"
selStr += "" + epp1 + "" + epp1+ "" + epp1+ "" + epp1+ "\r\n"
selStr +="\t#b您当前余额为：  #r"+getHyPay()+" #b 点  点券为：  #r"+player.getCashShopCurrency(1)+" #b 点#n#k\r\n";
selStr +="\t#e#d您好,这里可以选购非卖神器时装哦.请选择你要兑换的方式查看详情,想购买余额武器可以先联系GM修改成自己想要的时装武器,再购买哦\r\n";
selStr +="#e#r#L1#"+xxx+" 余额兑换 "+xxx+"#l\r\n";
selStr += "\r\n" + epp1+ "" + epp1+ "" + epp1+ "" + epp1+ ""
let selection =npc.askMenu(selStr);	

	if (selection == 1) {
		
	player.runScript("xjdzf");
} else if (selection == 2) {
		
	player.runScript("dqzf");

}
	
function getHyPay() {
	var sql = "select pay from hypay where accountid = ? ";
	var result = player.customSqlResult(sql, player.getAccountId());
	if(result.size() > 0) {
		if(result.get(0) != null) {
			return result.get(0).get("pay");
		}
	} else {
		return 0;
	}

}

function addHyPay(price) {
	var sql = "update hypay set pay=pay-?,payused=payused+"+price+" where accountId=?";
	var result = player.customSqlUpdate(sql, price, player.getAccountId());

}