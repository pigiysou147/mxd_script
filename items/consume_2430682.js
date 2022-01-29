/* 
 *活动脚本 
 */

var eff = "#fEffect/ItemEff/1102877/effect/default/1#"; //云朵
var text = "";
text += eff + "#e#r首充礼包#k#n" + eff + "\r\n";
text += "#b超值新手礼包,亲,您心动了吗?往下看看这些物品,#r#e月光神宠，超强首饰~只要在三天内充值#k#e#r累计满200金额#n#k#b就可以全部#e#r免费#n#k#b带走哟!充值比例: 0.35折  比如充值100元*0.35只要35元即可计算100累计充值#k\r\n";
text += "#v5002079##e#dx1只,#v5002080##e#dx1只,#v5002081##e#dx1只\r\n";
text += "#v1132244##e#dx1个,#v1122265##e#dx1个,#v1032221##e#dx1个,#v1113073##e#dx1个\r\n";
text += "还有#r#t1114300##v1114300# : 全属性40，攻击力魔攻40,跳跃/移动+50.#k\r\n   ";
text += "#L1##r#e#fEffect/ItemEff/1048001/0/0#我要抢购这些限时物品#fEffect/ItemEff/1048001/0/0##k";
let selection = npc.askMenuS(text);
if(selection == 1) {
	var leiji = getHyPay();
	if(getEventCount("新手梦想大礼包")>5) {
		npc.say("#b一个账号只能领取4次");
	} else if(player.getFreeSlots(1) < 5) {
		npc.say("#b装备栏空间需要5个格子");
	} else if(leiji < 200) {
		player.adde
		npc.say("#b您当前的充值不够哦~还差" + (200 - leiji) + "就可以带走这个礼包里面的东西了哦");
	} else {
		player.loseItem(2430682, 1);
		if(getEventCount("新手梦想大礼包")>0){
			var toDrop = player.makeItemWithId(1114300); // 生成一个Equip类
			toDrop.setStr(40); //装备力量
			toDrop.setDex(40); //装备敏捷
			toDrop.setInt(40); //装备智力
			toDrop.setLuk(40); //装备运气
			toDrop.setPad(40); //物理攻击
			toDrop.setMad(40); //魔法攻击
			
			toDrop.setTitle("首充赞助");
			player.gainItem(toDrop);
		}else{
			player.gainItem(1132244, 1); //
			player.gainItem(1122265, 1); //
			player.gainItem(5002079, 1); //
			player.gainItem(5002080, 1); //
			player.gainItem(5002081, 1); //
			player.gainItem(1032221, 1); //
			player.gainItem(1113073, 1); //
			var toDrop = player.makeItemWithId(1114300); // 生成一个Equip类
			toDrop.setStr(40); //装备力量
			toDrop.setDex(40); //装备敏捷
			toDrop.setInt(40); //装备智力
			toDrop.setLuk(40); //装备运气
			toDrop.setPad(40); //物理攻击
			toDrop.setMad(40); //魔法攻击
			
			toDrop.setTitle("首充赞助");
			player.gainItem(toDrop);
		}
		
		setEventCount("新手梦想大礼包", 0, 1);
		
			
		//		im.getMap().startMapEffect("『首冲大礼包』" + " : " + "玩家 " + im.getPlayer().getName() + " 从限时3天充值累计200金额即可免费领取到中级贝勒德4件套.和梦想新手神器。", 5120012);
		//		im.worldSpouseMessage(0x0A, "『首冲大礼包』" + " : " + "玩家 " + im.getPlayer().getName() + " 从限时3天充值累计200金额即可免费领取到中级贝勒德4件套.和梦想新手神器。");
		//		im.worldSpouseMessage(0x15, "『首冲大礼包』" + " : " + "玩家 " + im.getPlayer().getName() + " 从限时3天充值累计200金额即可免费领取到中级贝勒德4件套.和梦想新手神器。");
		//		im.worldSpouseMessage(0x16, "『首冲大礼包』" + " : " + "玩家 " + im.getPlayer().getName() + " 从限时3天充值累计200金额即可免费领取到中级贝勒德4件套.和梦想新手神器。");
		//		
		npc.broadcastGachaponMsgEx(" 【首充大礼包】 :  玩家 " + player.getName() + "得到了首充专属道具大家一起恭喜我吧!", toDrop);
		npc.say("您已成功领取新手梦想大礼包,请到您背包查看");
	}
}

function getHyPay() {
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

function getEventCount(eventName) {

	var sql = "select value,time from accounts_event where accounts_id = ? and event =? ";

	var result = player.customSqlResult(sql, player.getAccountId(), eventName);

	if(result.size() > 0) {
		if(result.get(0) != null) {
			return result.get(0).get("value");
		}
	} else {
		var sql = "insert into  accounts_event (accounts_id,world,event,type,value) values(?,?,?,?,?)";

		var result = player.customSqlInsert(sql, player.getAccountId(), player.getWorld(), eventName, 0,0);
		return 0;
	}

}

function setEventCount(eventName,type,value) {

	var sql = "update accounts_event set type=?,value=value+? where accounts_id=? and event=?";

	var result = player.customSqlUpdate(sql, type,value,player.getAccountId(), eventName);


}