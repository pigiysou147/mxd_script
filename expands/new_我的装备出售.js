var potList = Array(
	Array(40041, "力量12%"),
	Array(40042, "敏捷12%"),
	Array(40047, "敏捷12%"),
	Array(40043, "智力12%"),
	Array(40044, "运气12%"),
	Array(40048, "运气12%"),
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
	Array(42057, "12%暴击率")
);

var discount = 1;
start();
function start() {
	var sql = " SELECT ";
	sql += " (select name from characters b where b.id = a.characters_id) sale, ";
	sql += " (select name from characters b where b.id = a.buy_id) buy, ";
	sql += " i.itemid, ";i
	sql += " a.meso, ";
	sql += " a.iid ,buy_id,characters_id,status ";
	sql += " FROM ";
	sql += "zz_js_log as a,inventory_equip as i   where a.characters_id = ? and a.id=i.id order by iid desc ";

	
	var resultList = player.customSqlResult(sql, player.getId());
	var text = "道具\t\t价格\t\t出售\t\t购买\t\t操作\r\n";
	for(var i = 0; i < resultList.size(); i++) {
		var result = resultList.get(i);
		if(result == null) {
			break;
		}
		if(result.get("status") == "已售出") {
			text += "#r#L" + result.get("iid") + "##v" + result.get("itemid") + "#\t￥" + result.get("meso") + "\t\t" + result.get("sale") + "\t   " + (result.get("buy") == null ? "-" : result.get("buy")) + "\t#b领取现金#k#l\r\n";
		} else if(result.get("status") == "正在出售") {
			text += "#r#L" + result.get("iid") + "##v" + result.get("itemid") + "#\t￥" + result.get("meso") + "\t\t" + result.get("sale") + "\t   " + (result.get("buy") == null ? "-" : result.get("buy")) + "\t#r装备下架#k#l\r\n";
		} else if(result.get("status") == "已下架") {
			text += "#r#L" + result.get("iid") + "##v" + result.get("itemid") + "#\t￥" + result.get("meso") + "\t\t" + result.get("sale") + "\t   " + (result.get("buy") == null ? "-" : result.get("buy")) + "\t#r已下架#k#l\r\n";
		} else if(result.get("status") == "领过现金") {
			text += "#r#L" + result.get("iid") + "##v" + result.get("itemid") + "#\t￥" + result.get("meso") + "\t\t" + result.get("sale") + "\t   " + (result.get("buy") == null ? "-" : result.get("buy")) + "\t#r领过现金#k#l\r\n";

		}

	}
	var iid = npc.askMenu(text)

	var text = "";
	var sql = " SELECT * from zz_js_log as a ,inventory_equip as i where a.iid = ? and a.id=i.id limit 1 ";
	var resultList = player.customSqlResult(sql, iid);

	if(resultList.size() > 0) {
		var result = resultList.get(0);
		if(result.get("buy_id") > 0 && 　result.get("status") == "已售出") {
			text = "装备售出价格：#r" + Math.floor(result.get("meso") * 100) / 100 + "#k\r\t扣除系统手续费#r" + Math.floor((result.get("meso") * (1 - discount)) * 100) / 100 + "#k\r\n可得[#r" + Math.floor((result.get("meso") * 1) * 100) / 100 + "#k]\r\n您是否要领取?";
			var yes = npc.askYesNo(text);
			if(yes == 1) {
				//修改状态
				modifyBuyIdRMB(iid);
				//增加现金
				gainRMB(result.get("meso") * 1, iid);

				text = "欢迎下次再来\r\n";
				text += "成功领取直充点#r：" + Math.floor((result.get("meso") * 1) * 100) / 100;
				npc.say(text);
			}
		} else if(result.get("status") == "正在出售") {
			//下架

			text += "#r#L99#下架装备#l\r\n\r\n";
			text += "#b#v" + result.get("itemid") + "##t" + result.get("itemid") + "#(火花属性可能无法保留)#k\r\n#e";

			text += "星之力：#r" + result.get("nCHUC") + "#k\r\n";
			text += "力量：#r" + result.get("str") + "#k   \r\n";
			text += "敏捷：#r" + result.get("dex") + "#k   \r\n";
			text += "智力：#r" + result.get("int") + "#k   \r\n";
			text += "运气：#r" + result.get("luk") + "#k\r\n";
			text += "生命：#r" + result.get("maxhp") + "#k   \r\n";
			text += "蓝量：#r" + result.get("maxmp") + "#k   \r\n";
			text += "攻击：#r" + result.get("pad") + "#k   \r\n";
			text += "法攻：#r" + result.get("mad") + "#k\r\n";
			text += "防御：#r" + result.get("pdd") + "#k   \r\n";
			text += "手艺：#r" + result.get("craft") + "#k   \r\n";
			text += "速度：#r" + result.get("speed") + "#k  \r\n";
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
			var sel = npc.askMenu(text);
			if(sel == 99) {
				if(player.canGainItem(result.get("itemid"), 1)) {
					var sql = " SELECT * from zz_js_sale where iid = ? limit 1 ";
					var resultList = player.customSqlResult(sql, iid);
					if(resultList.size() < 1) {
						npc.say("该物品已经售出.")
					} else {
						//删除交易表
						removeSale(iid);
						//删除装备表
						removeEquip(resultList.get(0).get("sn"));
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
						equip.setDurability(-1);
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
						equip.setCuttable(result.get("cuttable"));
						equip.setSocket(1, result.get("socket1"));
						equip.setSocket(2, result.get("socket2"));
						equip.setSocket(3, result.get("socket3"));
						equip.setExGradeOption(result.get("exgradeoption"));
						equip.setLimitBreak(result.get("limitBreak"));
						player.gainItem(equip);

						npc.say("下架成功!");
					}

				} else {

					npc.say("背包空间不足");
				}

			}
		} else {
			text += "#b#v" + result.get("itemid") + "##t" + result.get("itemid") + "#(火花属性可能无法保留)#k\r\n#e";

			text += "星之力：#r" + result.get("nCHUC") + "#k\r\n";
			text += "力量：#r" + result.get("str") + "#k   \r\n";
			text += "敏捷：#r" + result.get("dex") + "#k   \r\n";
			text += "智力：#r" + result.get("int") + "#k   \r\n";
			text += "运气：#r" + result.get("luk") + "#k\r\n";
			text += "生命：#r" + result.get("maxhp") + "#k   \r\n";
			text += "蓝量：#r" + result.get("maxmp") + "#k   \r\n";
			text += "攻击：#r" + result.get("pad") + "#k   \r\n";
			text += "法攻：#r" + result.get("mad") + "#k\r\n";
			text += "防御：#r" + result.get("pdd") + "#k   \r\n";
			text += "手艺：#r" + result.get("craft") + "#k   \r\n";
			text += "速度：#r" + result.get("speed") + "#k  \r\n";
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
			text += "#r#L99#上一步骤#l\r\n";
			var sel = npc.askMenu(text);
			if(sel == 99) {
				start();
			}
		}
	}
}

function findEquipAttr(iid) {

}

function removeEquip(iid) {
	var sql = " delete from zz_js_inventoryitems_equip where id = ? ";
	player.customSqlUpdate(sql, iid);
}

function removeSale(iid) {
	var sql = " delete from zz_js_sale where iid = ? ";
	player.customSqlUpdate(sql, iid);
}

function modifyBuyId(iid) {
	var sql = " update zz_js_log set status = '已下架' where iid = ? ";
	player.customSqlUpdate(sql, iid);
}

function modifyBuyIdRMB(iid) {
	var sql = " update zz_js_log set status = '领过现金' where iid = ? ";
	player.customSqlUpdate(sql, iid);
}

function gainRMB(rmb, id) {
	var myAccountName =player.getAccountName();
	var sql = "insert into zz_rmb(account, rmb, paytime,remark) values('" + myAccountName + "'," + rmb + ",now(),'出售道具id:" + id + "')";
	player.customSqlInsert(sql);

	var sql = " update hypay set cash=cash+? where accountid=? ";
	player.customSqlUpdate(sql, rmb, player.getAccountId());
	var remark="交易行完成交易,道具ID："+id;
	var cashSql="insert into cash_log  values(0,"+player.getAccountId()+",'"+player.getName()+"',"+rmb*1+",'"+remark+"',now())";
	player.customSqlInsert(cashSql);
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