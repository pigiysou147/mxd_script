var random = Math.floor(Math.random() * 4);
var eff = "#fEffect/CharacterEff/1082565/2/0#";
var vvv = "#fUI/Basic/BtHide3/mouseOver/0#";
var vvv4 = "#fEffect/CharacterEff/1112926/0/0#"; //红星
var z1 = "#fEffect/ItemEff/1112811/0/0#"; //黄金音符
var z5 = "#fEffect/CharacterEff/1112904/2/1#"; //五角花
var eff = "#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";
var icon6 = "#fUI/GuildBBS/GuildBBS/Emoticon/Cash/1#"; //大笑
var cztp = 0;
var vver="#fEffect/ItemEff/1102877/effect/default/1#";
var icon1="#fMap/MapHelper.img/weather/rose/0#";
var ok="#fUI/UIWindowGL.img/FeedbackSystem/backgrnd3#";
var txt = "\r\n#d"+vver+icon1+"充值中心"+icon1+"#k\r\n";
txt += "　#L6#" + vvv4 + " #r赞助礼包#k#l　#L2#" + vvv4 + " #r累计奖励#k#l　#L7#" + vvv4 + " #r购买会员#k#l\r\n\r\n";
txt += "　#L4#" + vvv4 + " #r赞助商城#k#l　\r\n\r\n";
txt += "  #L13#" + vvv4 + "#r 充值链接#l#k　#L15#" + vvv4 + " #r每日首充#k#l　#L18#" + vvv4 + " #r现金兑换#k#l　  \r\n\r\n";

txt += "#r\t\t\t#L100#"+ok+" #l\r\n";
txt += "#d#k\r\n\r\n";
let selection = npc.askMenu(txt);

switch(selection) {
	case 12: //抽奖

		player.runScript("buchang");
		break;
	case 18: //抽奖

		player.runScript("xianjin");
		break;
	case 100: //抽奖
	player.openURL("http://wpa.qq.com/msgrd?v=3&uin=82375887&site=qq&menu=yes");	
	//npc.say("请联系客服");
	break;
	case 13: //抽奖
		
		player.openURL("http://www2.shoukabao.com/Payment/Service/086b24fca614d48ce0a9f38a97c877ee");
		break;
	case 15: //抽奖

	player.runScript("meiri");
	break;
	case 1: //充值

		player.runScript("labi");
		break;
	case 2: //累计消费

		//player.runScript("leijijl");
		let sel=npc.askMenu("\r\n#L0##v3994059# #r累计突破#k#l\t#L1##v3994060##r累计充值奖励#k#l\r\n\r\n");
		if(sel==0){
			player.runScript("leijitupo");
		}else{
			player.runScript("leijijl");
		}
		
		break;

	case 4: //金额点卷

		player.runScript("yelb");
		break;
	case 6: //理财系统
		//npc.say("         本服新开,开服将会推出折扣永久会员礼包,             超超超划算每日首冲50元一定不要错过哦!(充50得100现金点)");
		player.runScript("2074021");
		break;
	case 7:

		player.runScript("VIP");
		break;
	case 0:

		player.runScript("leijitupo");
		break;
}
		function getHyPay() {
			var sql = "select pay from hypay where accountid = ? ";
			var result = player.customSqlResult(sql, player.getPlayer().getAccountID());
			if(result.size() > 0) {
				if(result[0] != null) {
					return result[0].get("pay");
				}
			} else {
				return 0;
			}

		}

		function addHyPay(price) {
			var sql = "update hypay set pay=pay-?,payused=payused+"+price+" where accountId=?";
			var result = player.customSqlUpdate(sql, price, player.getPlayer().getAccountID());

		}