
var wi14 = "#fUI/UIPVP.img/MiniMapIcon/star#"; //黄星星
var wi15 = "#fUI/UIToolTip.img/Item/Equip/Star/Star1#"; //蓝星星
var wn60 = "#fMob/0100101.img/die1/1#"; //蜗牛
var yyun1 = "#fUI/UIWindow2.img/BingoUI/lineAni/0/5#"; ////红色玄
var yyun2 = "#fUI/UIWindow2.img/UserList/Main/Union/Btnotice/pressed/0#"; ///铅笔
var yyun3 = "#fUI/UIWindow2.img/UserInfo/character/married#"; ///大心
var yyun4 = "#fUI/UIWindow2.img/UserInfo/exception/BtMeso/pressed/0#"; ////金币
var yyun5 = "#fUI/UIWindow2.img/RpsGame2/gageCover#"; ////时间
var yyun6 = "#fUI/UIWindow2.img/MonsterCarnival/icon0#"; ///红枫叶方块
var yyun7 = "#fUI/UIWindow2.img/MonsterCarnival/icon1#"; ///兰枫叶方块
var yyun8 = "#fUI/UIWindow2.img/noticeWindow/Border/title#"; ///通知
var yyun8 = "#fUI/UIWindow2.img/PartyRace/State/Blue/effOther/0#"; ///红色圈
var yyun8 = "#fUI/UIWindow2.img/PartyRace/State/Red/effOther/0#"; ///蓝色圈
var yun8 = "#fUI/UIWindow/MonsterBook/arrowLeft/normal/0#"; ////金左指标
var yun9 = "#fUI/UIWindow/MonsterBook/arrowRight/normal/0#"; ////金右指标
var tz9 = "#fEffect/CharacterEff/1112902/0/0#"; //蓝心
var tz10 = "#fEffect/CharacterEff/1112903/0/0#"; //红心
var tz11 = "#fEffect/CharacterEff/1112904/0/0#"; //彩心
var tz12 = "#fEffect/CharacterEff/1112924/0/0#"; //黄星
var tz13 = "#fEffect/CharacterEff/1112925/0/0#"; //蓝星
var tz14 = "#fEffect/ItemEff/1102981/effect/proneStab/1#"; //红星
var nu2 = "#fEtc/ChatEmoticon.img/communication/11/3#"; //
var itemtk1 = Array( //getOnlyId的写这里 然后每日奖励 请看下面第99行
	Array("回忆"),
	Array("胖妃"),
	Array("火火"),
	Array("晚安"),
	Array("清明樱花祭")
);
var selStr = "   #e#r" + tz14 + "『女生getOnlyId』" + tz14 + "\r\n";
selStr += "#e#b\r\n#v2430685##v2430685##v2430685##v2430685##v2430685##v2430685##v2430685##v2430685##v2430685##v2430685##v2430685##v2430685#每天可领#v5062009#X50#v5062024#X10#v5062500#X50#v4001759#X10#v2430209#X1\r\n";
selStr += "  #n#d#L1#" + tz10 + "女生每日福利[getOnlyId请联系GM]#l\r\n";
selStr += "  #n#d#L4#" + tz10 + "领取getOnlyId勋章#l\r\n";
selStr += "  #d#L5#" + tz10 + "查看已getOnlyId的女生#l\r\n\r\n";
selStr += "    " + nu2 + "     " + nu2 + "\r\n";
let selection = npc.askMenu(selStr)

switch(selection) {
	case 1:
		if(getEventCount("女生奖励") < 1) {
			for(var i = 0; i < itemtk1.length; i++) {
				if(player.getName() == itemtk1[i][0]) {
					var ssss = 1;
				}
			}
			if(ssss == 1) {
				setEventCount("女生奖励",1,1);
				//以下是每日奖励 
				player.gainItem(5062009, 50);
				player.gainItem(5062024, 10);
				player.gainItem(5062500, 50);
				//player.gainItem(2430209, 1)
				player.gainMesos(10000000); //给金币
				addHyPay(-10);
				npc.broadcastPlayerNotice(0x15, "『女神福利』" + " : " + "女生getOnlyId玩家 " + player.getName() + " 成功领取每日女生福利.");
				npc.broadcastPlayerNotice(0x15,"【女神红包】：恭喜玩家 " + player.getName() + " 领取女神getOnlyId每日福利 " + 10 + " 余额。");

				npc.say("领取成功,你获得了#v5062009# X50 #v5062024# X10 #v5062500# X50 #v2430209# X1 \r\n祝你游戏愉快!!");
			} else {
				npc.say("#e#r你没有名字在女神榜单上！ 不能领取\r\n#r#e");
			}
		} else {
			npc.say("#e#r亲爱的女神你已经领取过了！\r\n#d\r\n#r#e"); //，你没有女生getOnlyId勋章！或者
		}
		break;
	case 4:
		if(getEventCount("女生勋章发放") == 0) {
			for(var i = 0; i < itemtk1.length; i++) {
				if(player.getName() == itemtk1[i][0]) {
					var sssss = 1;
				}
			}
			if(sssss == 1) {
				setEventCount("女生勋章发放", 0, 1);
				var toDrop = player.makeItemWithId(1142574); // 生成一个Equip类
				toDrop.setStr(50); //装备力量
				toDrop.setDex(50); //装备敏捷
				toDrop.setInt(50); //装备智力
				toDrop.setLuk(50); //装备运气
				toDrop.setPad(50); //物理攻击
				toDrop.setMad(50); //魔法攻击
				toDrop.setMaxHp(50); //血量
				toDrop.setBossDamageR(10);
				toDrop.setIgnorePDR(10);
				toDrop.setTitle("女生勋章");
				player.gainItem(toDrop);
				npc.say("亲爱的女神，恭喜您领取成功!!!请打开背包查看！");
			} else {
				npc.say("#e#r你没有名字在女神榜单上！ 不能领取\r\n#r#e");
			}
		} else {
			npc.say("领取失败！你已经领取过，或者你还没有getOnlyId！有问题请联系GMgetOnlyId！");
		}
		break;
	
	 case 5:
            var selStr = "" + tz10 + "" + tz10 + "" + tz10 + "" + tz10 + "" + tz10 + "" + tz10 + "" + tz10 + "" + tz10 + "" + tz10 + "" + tz10 + "" + tz10 + "" + tz10 + "" + tz10 + "" + tz10 + "" + tz10 + "" + tz10 + "" + tz10 + "" + tz10 + "" + tz10 + "" + tz10 + "" + tz10 + "" + tz10 + "" + tz10 + "" + tz10 + "" + tz10 + "" + tz10 + "" + tz10 + "" + tz10 + "" + tz10 + "\r\n";
            for (var i = 0; i < itemtk1.length; i++) {
                selStr += "#r#e" + tz10 + "名字：#n#g【#d" + itemtk1[i] + "#g】\r\n";
                selStr += "#r#e" + tz10 + "" + tz10 + "" + tz10 + "" + tz10 + "" + tz10 + "" + tz10 + "" + tz10 + "" + tz10 + "" + tz10 + "" + tz10 + "" + tz10 + "" + tz10 + "" + tz10 + "" + tz10 + "" + tz10 + "" + tz10 + "" + tz10 + "" + tz10 + "" + tz10 + "" + tz10 + "" + tz10 + "" + tz10 + "" + tz10 + "" + tz10 + "" + tz10 + "" + tz10 + "" + tz10 + "" + tz10 + "" + tz10 + "\r\n";
            }
           npc.say(selStr);
			break;
        
}
function addHyPay(price) {
	var sql = "update hypay set pay=pay-?,payused=payused+" + price + " where accountId=?";
	var result = player.customSqlUpdate(sql, price, player.getAccountId());

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