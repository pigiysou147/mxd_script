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
	Array(40070,"伤害12%"),
	Array(40051,"攻击12%"),
	Array(42051,"攻击12%"),
	Array(42052,"魔攻12%"),
	Array(40052,"魔攻12%"),
	Array(40292,"40%无视防御"),
	Array(40291,"35%无视防御"),
	Array(30291,"30%无视防御"),
	Array(40601,"30%boss伤害"),
	Array(40602,"35%boss伤害"),
	Array(40603,"40%boss伤害"),
	Array(40056,"最小暴12%"),
	Array(42061,"最大暴12%"),
	Array(42057,"12%暴击率")	
);
start();
function start(){
	var sql = " SELECT ";
		sql+=" (select name from characters b where b.id = a.characters_id) sale, ";
		sql+=" (select name from characters b where b.id = a.buy_id) buy, ";
		sql += " i.itemid, ";
		sql+=" a.meso, ";
		sql+=" a.iid,a.status ";
		sql+=" FROM ";
		
		sql += "zz_js_log as a,inventory_equip as i   where a.buy_id>0 and  a.id=i.id order by iid desc ";
		
		
	var resultList = player.customSqlResult(sql);
	var text = "道具\t\t价格\t\t出售\t\t购买\t\t操作\r\n";
	for (var i = 0; i < resultList.size(); i++) {
		var result = resultList.get(i);
		if (result == null) {
			break;
		}
		text += "#r#L"+result.get("iid")+"##v"+result.get("itemid")+"#\t￥"+result.get("meso")+"\t\t"+result.get("sale")+"\t   "+result.get("buy")+"\t查看#l\r\n";
	}
	var iid = npc.askMenu(text)
	var sel = npc.askMenu(findEquipAttr(iid));
	if(sel ==99){
		start();
	}
}


function findEquipAttr(id){
	var text = "";
	
	var sql = " SELECT * from zz_js_log as a ,inventory_equip as i where a.iid = ? and a.id=i.id limit 1 ";
	var resultList = player.customSqlResult(sql,id);
	
	for (var i = 0; i < resultList.size(); i++) {
		var result = resultList.get(i);
		if (result == null) {
			break;
		}
		//setExGradeOption
		text += "#b#v" + result.get("itemid") + "##t" + result.get("itemid") + "#(火花属性可能无法保留)#k\r\n#e";
			
			text += "星之力：#r" + result.get("nCHUC") + "#k\r\n";
			text += "力量：#r" + result.get("str") + "#k   ";
			text += "敏捷：#r"+ result.get("dex") + "#k   ";
			text += "智力：#r"+ result.get("int") + "#k   ";
			text += "运气：#r"+ result.get("luk") + "#k\r\n";
			text += "生命：#r"+ result.get("maxhp") + "#k   ";
			text += "蓝量：#r"+ result.get("maxmp") + "#k   ";
			text += "攻击：#r"+ result.get("pad") + "#k   ";
			text += "法攻：#r"+ result.get("mad") + "#k\r\n";
			text += "防御：#r"+ result.get("pdd") + "#k   ";
			text += "手艺：#r"+ result.get("craft") + "#k   ";
			text += "速度：#r"+ result.get("speed") + "#k  ";
			text += "跳跃：#r" + result.get("jump") + "#k\r\n";
			text += "BOSS伤害：#r" + result.get("bdr") + "#k              ";
			text += "无视防御：#r" + result.get("ipdr") + "#k\r\n";
			text += "总伤害：#r" + result.get("damr") + "#k                 ";
			text += "所有属性：#r" + result.get("statr") + "#k\r\n";
			text += "金锤子：#r" + result.get("nIUC") + "#k                 ";
			text += "到期:#r" + (result.get("expiredate") == '3439728000000' ? "永久" : '有期限') + "#k\r\n";
			text += "可强化次数:#r" + result.get("nRUC") + "#k\r\n";
			text += "已经强化次数：#r" + result.get("nCUC") + "#k\r\n";
			text += "潜能等级：#r" + (result.get("grade") == 20 ? 'SS' : 'SS以下') + "#k\r\n";
			text += "潜能1：#r" + optionText(result.get("option1")) + "#k   ";
			text += "潜能2：#r" + optionText(result.get("option2")) + "#k   ";
			text += "潜能3：#r" + optionText(result.get("option3")) + "#k\r\n";
			text += "潜能4：#r" + optionText(result.get("option4")) + "#k   ";
			text += "潜能5：#r" + optionText(result.get("option5")) + "#k   ";
			text += "潜能6：#r" + optionText(result.get("option6")) + "#k\r\n";
			text += "已剪刀次数:#r" + +result.get("cuttable") + "#k\r\n";
			
			text += "破功：#r" + result.get("limitBreak") + "#k\r\n";
	}
	text += "#r#L99#上一步骤#l\r\n";
	return text;
}
function optionText(optionVal){
	var text = optionVal;
	for(var i = 0;i<potList.length;i++){
		if(potList[i][0]==optionVal){
			text = potList[i][1];
			break;
		}
	}
	return text;
}