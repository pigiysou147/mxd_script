var potList = Array(
	Array(40041, "力量12%"),
	Array(40042, "敏捷12%"),
	Array(40047, "敏捷12%"),
	Array(40043, "智力12%"),
	Array(40044, "运气12%"),
	Array(40048, "运气12%"),
	
	Array(30041, "力量9%"),
	Array(30042, "敏捷9%"),
	Array(30047, "敏捷9%"),
	Array(30043, "智力9%"),
	Array(30044, "运气9%"),
	Array(30048, "运气9%"),
	
	Array(40045, "HP12%"),
	Array(40086, "全属性9%"),
	Array(42091, "角色每10级力量+2"),
	Array(42092, "角色每10级敏捷+2"),
	Array(42093, "角色每10级智力+2"),
	Array(42094, "角色每10级运气+2"),
	Array(42041, "力量+7%"),
	Array(42042, "敏捷+7%"),
	Array(42043, "智力+7%"),
	Array(42044, "运气+7%"),
	Array(42086, "全属性5%"),
	Array(42045, "HP10%"),
	Array(40070, "伤害12%"),
	Array(40051, "攻击12%"),
	Array(42051, "攻击12%"),
	Array(42052, "魔攻12%"),
	Array(40052, "魔攻12%"),
	Array(40292, "40%无视防御"),
	Array(40291, "35%无视防御"),
	Array(30291, "30%无视防御"),
	Array(40601, "30%boss伤害"),
	Array(40602, "35%boss伤害"),
	Array(40603, "40%boss伤害"),
	Array(40056, "最小暴12%"),
	Array(42061, "最大暴12%"),
	Array(10041,'3%力量'),
	Array(10042,'3%敏捷'),
	Array(10043,'3%智力'),
	Array(10044,'3%运气'),
	Array(10045,'3%maxHP'),
	Array(10046,'3%maxMp'),
	Array(10047,'3%命中率'),
	Array(10048,'3%回避率'),
	Array(10051,'3%攻击力'),
	Array(10052,'3%魔法攻击力'),
	Array(10053,'3%物理防御力'),
	Array(10054,'3%魔法防御力'),
	Array(10055,'3%暴击率'),
	Array(20041,'6%力量'),
	Array(20042,'6%敏捷'),
	Array(20043,'6%智力'),
	Array(20044,'6%运气'),
	Array(20045,'6%maxHP'),
	Array(20046,'6%maxMp'),
	Array(20047,'6%命中率'),
	Array(20048,'6%回避率'),
	Array(20051,'6%攻击力'),
	Array(20052,'6%魔法攻击力'),
	Array(20053,'6%物理防御力'),
	Array(20054,'6%魔法防御力'),
	Array(20055,'6%暴击率'),
	Array(30041,'9%力量'),
	Array(30042 ,'9%敏捷'),
	Array(30043,'9%智力'),
	Array(30044,'9%运气'),
	Array(30045,'9%maxHP'),
	Array(30046,'9%maxMp'),
	Array(30047,'9%命中率'),
	Array(30048,'9%回避率'),
	Array(30051,'9%攻击力'),
	Array(30052,'9%魔法攻击力'),
	Array(30053,'9%物理防御力'),
	Array(30054,'9%魔法防御力'),
	Array(30055,'9%暴击率'),
	Array(40041,'12%力量'),
	Array(40042,'12%敏捷'),
	Array(40043,'12%智力'),
	Array(40044,'12%运气'),
	Array(40045,'12%maxHP'),
	Array(40046,'12%maxMp'),
	Array(40047,'12%命中率'),
	Array(40048,'12%回避率'),
	Array(40051,'12%攻击力'),
	Array(40052,'12%魔法攻击力'),
	Array(40053,'12%物理防御力'),
	Array(40054,'12%魔法防御力'),
	Array(40055,'12%暴击率'),
	Array(40603,'40%BOSS伤害'),
	Array(40602,'35%Boss伤害'),
	Array(40601,'30%BOSS伤害'),
	Array(30602 ,'30%BOSS伤害'),
	Array(30601,'20%BOSS伤害'),
	Array(40292,'40%攻击时无视怪物的防御力'),
	Array(40291,'35%攻击时无视怪物的防御力'),
	Array(30291,'30%攻击时无视怪物的防御力'),
	Array(20291,'15%攻击时无视怪物的防御力'),
	Array(10291,'15%攻击时无视怪物的防御力'),
	Array(20086,'3%所有属性'),
	Array(22086,'2%所有属性'),
	Array(22087,'3%所有属性'),
	Array(30086,'6%所有属性'),
	Array(32086,'4%所有属性'),
	Array(32087,'6%所有属性'),
	Array(40086,'9%所有属性'),
	Array(42086,'5%所有属性'),
	Array(42087,'9%所有属性'),
	Array(60002,'20%所有属性'),
	Array(60004,'5%所有属性'),
	Array(60005,'10%所有属性'),
	Array(32054,'魔力1%'),
	
	Array(42057, "12%暴击率")
);
start();

function start() {
	var sql = " SELECT iid,a.itemid,sn,a.meso FROM zz_js_sale a WHERE type = 1 AND buy_id is NULL and characters_id<>?    order by meso desc  ";
	var resultList = player.customSqlResult(sql,player.getId());
	var text = "点击下列装备可以查看详细属性\r\n";
	for(var i = 0; i < resultList.size(); i++) {
		var result = resultList.get(i);
		if(result == null) {
			break;
		}
		text += "#r#L" + result.get("iid") + "# #v" + result.get("itemid") + "##t" + result.get("itemid") + "#  \t直充价格:  ￥" + result.get("meso") + "#l\r\n"
	}
	var iid = npc.askMenu(text)
	var sel1 = npc.askMenu(findEquipAttr(iid));
	if(sel1 == 1) {
		var text = askYesNoText(iid);
		text += "\r\n";
		var yes = npc.askYesNo(text);
		if(yes == 1) {
			buy(iid);
		}
	}else if(sel1== 2){
		//删除商品
		let yes = npc.askYesNo("确定要删除这个商品吗？"+iid);
		if(yes==1){
			var delSql="delete from zz_js_sale where iid="+iid;
			player.customSqlUpdate(delSql);
			npc.say("删除成功");
		}
	} else if(sel1 == 99) {
		start();
	}
}

function buy(iid) {
	var sql = " SELECT * FROM zz_js_sale a  LEFT JOIN  inventory_equip b on a.sn = b.id WHERE a.iid =? limit 1 ";
	var resultList = player.customSqlResult(sql, iid);
	if(resultList.size() == 0) {
		npc.say("手太慢了，这件装备被人买走了")
	} else {
		for(var i = 0; i < resultList.size(); i++) {
			var result = resultList.get(i);
			if(result == null) {
				break;
			}
			//判断价格
			var rmb = getRMB();
			var meso = parseInt(result.get("meso"));
			if(rmb < meso) {
				npc.say("您的现金不足,您目前现金为：" + rmb + ",需要消耗:" + meso + "现金.");
			} else if(!player.canGainItem(result.get("itemid"), 1)) {
				npc.say("请确定好背包是否有空余位置.");
			} else {
				//扣除现金
				loseRMB(-meso, iid);
				//删除交易表
				removeSale(iid);
				//删除装备表
				removeEquip(result.get("sn"));
				//修改流水购买人
				modifyBuyId(iid);

				var equip = player.makeItemWithId(result.get("itemid"));
				equip.setTitle(result.get("title"));
				equip.setStr(result.get("str"));
				equip.setDex(result.get("dex"));
				equip.setInt(result.get("int"));
				equip.setLuk(result.get("luk"));
				equip.setMaxHp(result.get("maxhp"));
				equip.setMaxMp(result.get("maxmp"));
				equip.setPad(result.get("pad"));
				equip.setMad(result.get("mad"));
				equip.setPdd(result.get("pdd"));
				equip.setCraft(result.get("craft"));
				equip.setSpeed(result.get("speed"));
				equip.setJump(result.get("jump"));
				equip.setBossDamageR(result.get("bdr"));
				equip.setIgnorePDR(result.get("ipdr"));
				equip.setDamR(result.get("damr"));
				equip.setStatR(result.get("statr"));
				equip.setAttribute(result.get("attribute"));
				equip.setCHUC(result.get("nCHUC"));
				equip.setIUC(result.get("nIUC"));
				equip.setDurability(result.get("durability"));
				equip.setExpiration((result.get("expiredate")));
				equip.setRUC(result.get("nRUC"));
				equip.setCUC(result.get("nCUC"));
				equip.setGrade(result.get("grade"));
				equip.setOption(1, result.get("option1"), false);
				equip.setOption(2, result.get("option2"), false);
				equip.setOption(3, result.get("option3"), false);
				equip.setOption(1, result.get("option4"), true);
				equip.setOption(2, result.get("option5"), true);
				equip.setOption(3, result.get("option6"), true);
				
				
				var jd=parseInt(result.get("cuttable"));
				if(jd==-1){
					
					equip.setCuttable(4);
				}else{
					equip.setCuttable(jd-1);
				}
				equip.setSocket(1, result.get("socket1"));
				equip.setSocket(2, result.get("socket2"));
				equip.setSocket(3, result.get("socket3"));
				equip.setExGradeOption(result.get("exgradeoption"));
				equip.setLimitBreak(result.get("limitBreak"));
				player.gainItem(equip);
				npc.say("购买成功,您剩余现金：" + (rmb - meso) + ".");
			}

		}
	}

}

function modifyBuyId(iid) {
	var sql = " update zz_js_log set buy_id = ?,status = '已售出' where iid = ? ";
	player.customSqlUpdate(sql, player.getId(), iid);
}

function removeEquip(iid) {
	var sql = " delete from zz_js_inventoryitems_equip where id = ? ";
	player.customSqlUpdate(sql, iid);
}

function removeSale(iid) {
	var sql = " delete from zz_js_sale where iid = ? ";
	player.customSqlUpdate(sql, iid);
}

function loseRMB(rmb, id) {
	var myAccountName =player.getAccountName();
	var sql = "insert into zz_rmb(account, rmb, paytime,remark) values('" + myAccountName + "'," + rmb + ",now(),'购买道具id:" + id + "')";

	player.customSqlInsert(sql);

	var sql = " update hypay set cash=cash+? where accountid=? ";
	player.customSqlUpdate(sql, rmb, player.getAccountId());
	
	var remark="交易行完成交易,道具ID："+id;
	var cashSql="insert into cash_log  values(0,"+player.getAccountId()+",'"+player.getName()+"',"+rmb*1+",'"+remark+"',now())";
	player.customSqlInsert(cashSql);

}

function getRMB() {
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

function getAccountName() {
	var sql = "select name from accounts where id = (select accounts_id from characters where id = " + player.getId() + ");";
	var resultList = player.customSqlResult(sql);
	var accountName = 0;
	for(var i = 0; i < resultList.size(); i++) {
		var result = resultList.get(i);
		if(result == null) {
			break;
		}
		accountName = result.get("name");
	}
	return accountName;
}

function askYesNoText(id) {
	var text = "你是否花费￥：#r#e";
	var sql = " SELECT * FROM zz_js_sale a  LEFT JOIN  inventory_equip b on a.sn = b.id WHERE a.iid =? limit 1  ";
	var resultList = player.customSqlResult(sql, id);
	if(resultList.size() == 0) {
		text="手太慢了，这件装备被人买走了";
	} else {
		for(var i = 0; i < resultList.size(); i++) {
			var result = resultList.get(i);
			if(result == null) {
				break;
			}
			text += result.get("meso") + "#k#n购买,您的现金#r#e" + getRMB() + "#k#n\r\n";
			
			
			text += "#b#v" + result.get("itemid") + "##t" + result.get("itemid") + "#(火花属性可能无法保留)#k\r\n#e";
			
			text += "星之力：#r" + result.get("nCHUC") + "#k\r\n";
			text += "力量：#r" + result.get("str") + "#k   \r\n";
			text += "敏捷：#r"+ result.get("dex") + "#k   \r\n";
			text += "智力：#r"+ result.get("int") + "#k   \r\n";
			text += "运气：#r"+ result.get("luk") + "#k\r\n";
			text += "生命：#r"+ result.get("maxhp") + "#k   \r\n";
			text += "蓝量：#r"+ result.get("maxmp") + "#k   \r\n";
			text += "攻击：#r"+ result.get("pad") + "#k   \r\n";
			text += "法攻：#r"+ result.get("mad") + "#k\r\n";
			text += "防御：#r"+ result.get("pdd") + "#k   \r\n";
			text += "手艺：#r"+ result.get("craft") + "#k   \r\n";
			text += "速度：#r"+ result.get("speed") + "#k  \r\n";
			text += "跳跃：#r" + result.get("jump") + "#k\r\n";
			text += "BOSS伤害：#r" + result.get("bdr") + "#k              \r\n";
			text += "无视防御：#r" + result.get("ipdr") + "#k\r\n";
			text += "总伤害：#r" + result.get("damr") + "#k                 \r\n";
			text += "所有属性：#r" + result.get("statr") + "#k\r\n";
			text += "金锤子：#r" + result.get("nIUC") + "#k                 \r\n";
			text += "到期:#r" + (result.get("expiredate") == '3439728000000' ? "永久" : '有期限') + "#k\r\n";
			text += "可强化次数:#r" + result.get("nRUC") + "#k\r\n";
			text += "已经强化次数：#r" + result.get("nCUC") + "#k\r\n";
			text += "潜能等级：#r" + (result.get("grade") == 20 ? 'SS' : 'SS以下') + "#k\r\n";
			text += "潜能1：#r" + optionText(result.get("option1")) + "#k   \r\n";
			text += "潜能2：#r" + optionText(result.get("option2")) + "#k   \r\n";
			text += "潜能3：#r" + optionText(result.get("option3")) + "#k\r\n";
			text += "潜能4：#r" + optionText(result.get("option4")) + "#k   \r\n";
			text += "潜能5：#r" + optionText(result.get("option5")) + "#k   \r\n";
			text += "潜能6：#r" + optionText(result.get("option6")) + "#k\r\n";
			text += "已剪刀次数:#r" + +result.get("cuttable") + "#k\r\n";
			
			text += "破功：#r" + result.get("limitBreak") + "#k\r\n";
		}
		
	}
	return text;
}

function findEquipAttr(id) {
	var text = "";
	var sql = "SELECT * FROM zz_js_sale a  LEFT JOIN  inventory_equip b on a.sn = b.id WHERE a.iid =? limit 1  ";
	var resultList = player.customSqlResult(sql, id);
	if(resultList.size() == 0) {
		text="手太慢了，这件装备被人买走了";
	} else {
			for(var i = 0; i < resultList.size(); i++) {
			var result = resultList.get(i);
			if(result == null) {
				break;
			}
			//setExGradeOption
			text += "#r#L99#上一步骤#l\r\n";
			text += "#L1#我要进行购买#l#k\r\n\r\n";
			if(player.isGm()){
				text += "#b#L2#管理员删除商品#l#k\r\n\r\n";
			}
			text += "#b#v" + result.get("itemid") + "##t" + result.get("itemid") + "#(火花属性可能无法保留)#k\r\n#e";
			
			text += "星之力：#r" + result.get("nCHUC") + "#k\r\n";
			text += "力量：#r" + result.get("str") + "#k   \r\n";
			text += "敏捷：#r"+ result.get("dex") + "#k   \r\n";
			text += "智力：#r"+ result.get("int") + "#k   \r\n";
			text += "运气：#r"+ result.get("luk") + "#k\r\n";
			text += "生命：#r"+ result.get("maxhp") + "#k   \r\n";
			text += "蓝量：#r"+ result.get("maxmp") + "#k   \r\n";
			text += "攻击：#r"+ result.get("pad") + "#k   \r\n";
			text += "法攻：#r"+ result.get("mad") + "#k\r\n";
			text += "防御：#r"+ result.get("pdd") + "#k   \r\n";
			text += "手艺：#r"+ result.get("craft") + "#k   \r\n";
			text += "速度：#r"+ result.get("speed") + "#k  \r\n";
			text += "跳跃：#r" + result.get("jump") + "#k\r\n";
			text += "BOSS伤害：#r" + result.get("bdr") + "#k              \r\n";
			text += "无视防御：#r" + result.get("ipdr") + "#k\r\n";
			text += "总伤害：#r" + result.get("damr") + "#k                 \r\n";
			text += "所有属性：#r" + result.get("statr") + "#k\r\n";
			text += "金锤子：#r" + result.get("nIUC") + "#k                 \r\n";
			text += "到期:#r" + (result.get("expiredate") == '3439728000000' ? "永久" : '有期限') + "#k\r\n";
			text += "可强化次数:#r" + result.get("nRUC") + "#k\r\n";
			text += "已经强化次数：#r" + result.get("nCUC") + "#k\r\n";
			text += "潜能等级：#r" + (result.get("grade") == 20 ? 'SS' : 'SS以下') + "#k\r\n";
			text += "潜能1：#r" + optionText(result.get("option1")) + "#k   \r\n";
			text += "潜能2：#r" + optionText(result.get("option2")) + "#k   \r\n";
			text += "潜能3：#r" + optionText(result.get("option3")) + "#k\r\n";
			text += "潜能4：#r" + optionText(result.get("option4")) + "#k   \r\n";
			text += "潜能5：#r" + optionText(result.get("option5")) + "#k   \r\n";
			text += "潜能6：#r" + optionText(result.get("option6")) + "#k\r\n";
			text += "已剪刀次数:#r" + +result.get("cuttable") + "#k\r\n";
			
			text += "破功：#r" + result.get("limitBreak") + "#k\r\n";
			var equip = player.makeItemWithId(result.get("itemid"));
				equip.setTitle(result.get("title"));
				equip.setStr(result.get("str"));
				equip.setDex(result.get("dex"));
				equip.setInt(result.get("int"));
				equip.setLuk(result.get("luk"));
				equip.setMaxHp(result.get("maxhp"));
				equip.setMaxMp(result.get("maxmp"));
				equip.setPad(result.get("pad"));
				equip.setMad(result.get("mad"));
				equip.setPdd(result.get("pdd"));
				equip.setCraft(result.get("craft"));
				equip.setSpeed(result.get("speed"));
				equip.setJump(result.get("jump"));
				equip.setBossDamageR(result.get("bdr"));
				equip.setIgnorePDR(result.get("ipdr"));
				equip.setDamR(result.get("damr"));
				equip.setStatR(result.get("statr"));
				equip.setAttribute(result.get("attribute"));
				equip.setCHUC(result.get("nCHUC"));
				equip.setIUC(result.get("nIUC"));
				equip.setDurability(result.get("durability"));
				equip.setExpiration((result.get("expiredate")));
				equip.setRUC(result.get("nRUC"));
				equip.setCUC(result.get("nCUC"));
				equip.setGrade(result.get("grade"));
				equip.setOption(1, result.get("option1"), false);
				equip.setOption(2, result.get("option2"), false);
				equip.setOption(3, result.get("option3"), false);
				equip.setOption(1, result.get("option4"), true);
				equip.setOption(2, result.get("option5"), true);
				equip.setOption(3, result.get("option6"), true);
				equip.setCuttable(parseInt(result.get("cuttable"))+1);
				equip.setSocket(1, result.get("socket1"));
				equip.setSocket(2, result.get("socket2"));
				equip.setSocket(3, result.get("socket3"));
				equip.setExGradeOption(result.get("exgradeoption"));
				equip.setLimitBreak(result.get("limitBreak"));
				npc.broadcastGachaponMsgEx("[道具选购查看] : 道具名字： "+equip.getItemName()+"   ",equip);
		}
		
		
	}
	return text;
}

function optionText(optionVal) {
	var text = optionVal;
	for(var i = 0; i < potList.length; i++) {
		if(potList[i][0] == optionVal) {
			text = potList[i][1];
			break;
		}
	}
	return text;
}