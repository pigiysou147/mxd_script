/*
 * 
*/
var z = "#fEffect/ItemEff.img/1004124/effect/ladder/1#"; //"+z+"//美化
var ok="#fUI/CashShop.img/CSCoupon/BtOK/normal/0#";
var xianjin=getHyPay();


var priceList=Array(
			//名字		起购	比例
	Array("开服七天(1现金点比2余额)",1,2),
	Array("一元业务(1现金点比1余额)",1,1),
	Array("一百业务(1现金点比1.3余额)",100,1.3),
	Array("五百元业务(1现金点比1.5余额)",500,1.5),
	Array("一千元业务(1现金点比2余额)",1000,2),
	Array("万元业务(1现金点比2.5余额)",10000,2.5)

);


var txt = "";
txt += "" + z + z + z + z + z + z + z + z + z + z + z + z + z + z + z + z + z + z + z + "\r\n";
txt += "#d尊敬的「#h #」 请选择您需办理的业务\r\n";
txt += "#r当前现金点：#d" + xianjin + "#r\r\n";
for(var i=0;i<priceList.length;i++){
	txt+="#L"+i+"#"+priceList[i][0]+"   比例"+priceList[i][1]+":"+priceList[i][2]*priceList[i][1]+"#l\r\n";
}
let selection = npc.askMenuS(txt);

var qigou=priceList[selection][1];
var bili=priceList[selection][2];

var txt="#r#e★★★★★★★★★★『玩家』★★★★★★★★★★#d\r\n\r\n请入你需消耗的#r现金点#k的数量\r\n比例["+qigou+"现金点: "+(qigou*bili)+"余额  ]\r\n\r\n"
txt+="目前剩余的现金点为:#r"+xianjin+"#k";
let number = npc.askNumber(txt, qigou, qigou, xianjin);
if(xianjin>=number) {
	
	addHyPay(number,bili);
	
	npc.broadcastNotice("[ 现金兑换 ] 恭喜 " + player.getName() + " 用 " + number+ " 现金点兑换了 " + number*bili + " 余额");
	npc.say("#r#e[ #h # ]恭喜您\r\n\r\n您成功用"+number+"#k现金点\r\n兑换了#r " + number*bili+ " #k余额");
}else{
	npc.say("你的现金点不够");
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

function addHyPay(price,bili) {
	player.gainItem(4009398,price);
	var sql = "update hypay set cash=cash-?,pay=pay+? where accountId=?";
	var result = player.customSqlUpdate(sql, price, price*bili,player.getAccountId());

}