var Icon ="#fEffect/ItemEff/1112811/0/0#";//黄金音符GuildMark/Mark/Animal/00002006/16#";
var status = 0;
var 购买的属性装备 = 1702828;  var 全属性数值 = 100;var 附加伤害 = 10; var 自带破攻 = 3000;
var yue = 888;

var cash =getHyPay();
var txt = Icon + Icon + Icon + Icon + Icon + Icon + Icon + Icon + Icon + Icon + Icon + Icon + Icon + Icon + Icon + Icon + Icon + Icon + Icon + "\r\n";
txt += "#r [ #h # ] 您好 欢迎光临 #b余额道具商铺(不定期更新)可以联系GM选择自己想要的时装武器哦,修改后再购买~ #k\r\n";
txt += "#b  本期非卖道具全属性 [ 100 ] 分别 - 神品装备 #r#z"+购买的属性装备+"# #k\r\n"
txt += "#d       #b当前拥有余额#r" + cash + "点#b,支付888余额购买#d#k\r\n\r\n";
txt += "　　　　　　　　　　　　 #i"+购买的属性装备+"# 　　　　　　　　　　\r\n\r\n";
txt += "　　　　\t#b确认余额达标且#r装备栏有位置\r\n\t\t#g单击 [ #r下一步购买#g ] 不买单击 [ #r结束对话#g ]#k\r\n\r\n\r\n";
txt += Icon + Icon + Icon + Icon + Icon + Icon + Icon + Icon + Icon + Icon + Icon + Icon + Icon + Icon + Icon + Icon + Icon + Icon + Icon + "\r\n\r\n";
npc.sayNext(txt);

if (cash >= yue ) {
   
		
		var toDrop = player.makeItemWithId(1702828); // 生成一个Equip类 耳环
		toDrop.setStr(全属性数值); //装备力量
		toDrop.setDex(全属性数值); //装备敏捷
		toDrop.setInt(全属性数值); //装备智力
		toDrop.setLuk(全属性数值); //装备运气
		toDrop.setPad(全属性数值); //物理攻击
		toDrop.setMad(全属性数值); //魔法攻击
		toDrop.setCHUC(15); //
		toDrop.setStatR(1);
		
		toDrop.setSpeed(10);//移动速度
		toDrop.setJump(10);//跳跃
		toDrop.setBossDamageR(10);//Boss 攻击百分比%
		toDrop.setIgnorePDR(10);//无视怪物防御
		player.gainItem(toDrop);
		addHyPay(yue);
		npc.broadcastPlayerNotice(0x2, "[时装武器] : 玩家 "+player.getName()+" 使用888余额成功购买本期神品武器,简直壕无人性,感谢亲对回忆岛的大力的支持！村长表示非常开心");
		npc.broadcastPlayerNotice(0x2, "[时装武器] : 玩家 "+player.getName()+" 888余额成功购买本期神品武器,简直壕无人性,感谢亲对回忆岛的大力的支持！村长表示非常开心");
		npc.broadcastPlayerNotice(0x2, "[时装武器] : 玩家 "+player.getName()+" 888余额成功购买本期神品武器,简直壕无人性,感谢亲对回忆岛的大力的支持！村长表示非常开心");
		npc.say("\r\n\r\n\t#b恭喜 [ #r#h ##b ] 领到了极品道具\r\n\r\n　 如道具丢失请联系客服并且需交纳 [ #r100 #b] 金额");
		
 
} else {

	npc.say("余额不足!");

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
