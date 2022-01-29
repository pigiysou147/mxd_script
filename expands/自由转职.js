var jobData = new Array(
	Array("林之灵", 11212 ,0),
	
	Array("炼狱黑客4转", 6312 ,0),
	Array("影魂异人(4转)", 15512, 0),
	Array("圣晶使徒(4转)", 15212, 0),
	Array("魔链影士(4转)", 6412, 0),
	Array("暗影双刀", 434,  1),
	Array("神炮王", 532,  2),
	Array("英雄", 112, 0),
	Array("圣骑士", 122, 0),
	Array("黑骑士", 132, 0),
	Array("火毒魔导士", 212, 0),
	Array("冰雷魔导士", 222, 0),
	Array("主教", 232, 0),
	Array("神射手", 312, 0),
	Array("箭神", 322, 0),
	Array("隐士", 412, 0),
	Array("侠盗", 422, 0),
	Array("冲锋队长", 512, 0),
	Array("船长", 522, 0),
	/*骑士团联盟------------------*/
	Array("魂骑士（四转）", 1112, 0),
	Array("炎术士（四转）", 1212, 0),
	Array("风灵使者（四转）", 1312, 0),
	Array("夜行者（四转）", 1412, 0),
	Array("奇袭者（四转）", 1512, 0),
	/*骑士团联盟-------------------*/

	Array("战神（四转）", 2112, 0),
	Array("双弩精灵（四转）", 2312, 0),
	Array("幻影（四转）", 2412, 0),
	Array("夜光法师（四转）", 2712, 0),
	/*恶魔联盟--------------------------*/
	Array("恶魔猎手（四转）", 3112, 0),
	Array("恶魔复仇者（四转）", 3122, 0),
	/*恶魔联盟--------------------------*/

	/*反抗者联盟--------------------------*/
	Array("豹弩游侠（四转）", 3312, 0),
	Array("唤灵斗师（四转）", 3212, 0),
	Array("机械师（四转）", 3512, 0),
	Array("爆破手（四转）", 3712, 0),
	/*反抗者联盟--------------------------*/

	/*尖兵联盟--------------------------*/
	Array("尖兵（四转）", 3612, 0),
	/*尖兵联盟--------------------------*/

	/*米哈尔联盟--------------------------*/
	Array("米哈尔（四转）", 5112, 0),
	/*米哈尔联盟--------------------------*/

	Array("狂龙战士（四转）", 6112, 0),
	Array("爆莉萌天使（四转）", 6512, 0),
	Array("隐月（四转）", 2512, 0),
	Array("剑豪（四转）", 4112, 0),

	Array("阴阳师（四转）", 4212, 1),
	Array("超能力者（四转）", 14212, 1),
	Array("龙神（四转）", 2217, 0),
	Array("古迹猎人（四转）", 332, 3),
	Array("虎影(4转)", 16412, 0),
	Array("御剑(4转)", 15112, 0),
	//Array("神之子", 10112, 0),
	
	Array("墨玄(4转)", 17512, 0)
	
	

);
var flag = false;
var needYE = 50; //需要余额数量
var needLevel = 0; //需要的等级
var text = "请选择您要自由转职的职业(需要" + needYE + "余额)：\r\n#r  每人可以免费3次哦\r\n";

for(var i = 0; i < jobData.length; i++) {
	text += "#L" + i + "#" + jobData[i][0] + "#l\r\n"
}
var selected = npc.askMenu(text);
if(player.getLevel() < needLevel) {
	npc.say("#b您的等级不足！需要" + needLevel + "级");
} else {
	var txt="#r#e是否转职成为" + jobData[selected][0];
	var count =3-player.getPQLog("免费转职");
	if(count>0 ){
		txt+="\r\n#r当前剩余免费转职次数"+count+"次";
	}
	if(getHyPay(1) < needYE && count<=0 ) {
		npc.say("#b您的余额不足！");
	}else{
		txt+="\r\n\r\n";
		if(jobData[selected][1]==3122){
			//特殊处理白毛。
			txt+="#b请注意，转职成为恶魔复仇者之后，最大血量会强行降低到10W以下，点券不会退回,转职完成之后请小退更新一下角色~\r\n";
		}
		if(jobData[selected][1]==10112){
			//特殊处理白毛。
			txt+="\r\n#r#e神之子转职请一定要脱下身上除了武器以外的所有装备，不然会出现装备消失的情况。\r\n";
		}
		
		var YN = npc.askYesNo(txt);
		if(YN == 1) {
			player.addPQLog("免费转职",1,999);
			if(jobData[selected][1]==3122){
				//特殊处理白毛
				var maxHp=player.customSqlResult("select maxHp from characters where id =?",player.getId()).get(0).get("maxHp");
				if(maxHp>=100000){
					player.increaseMaxHp(-(maxHp-100000));
				}
				player.gainAp(player.getLevel()*5+5);
			}
			player.setJob(jobData[selected][1]);
			player.setSubJob(jobData[selected][2]);
			if(count<=0){
				addHyPay(needYE);
			}
			player.resetHyperSkill();
			player.resetHyperStatSkill();
			//重置技能
			var sql = "SELECT * from characters_skills where skillid>80000000 and skillid<80100000 and skilllevel >0 and characters_id=? and teachId=0";
			var resultList =player.customSqlResult(sql,player.getId());
			
			
			player.resetSkills();
			//学习丢失的技能
			for(var i=0;i<resultList.size();i++){
				player.setSkillLevel(resultList.get(i).get("skillid"),1,15,true);
			}
			player.maxSkills();
			player.resetStats(4, 4, 4, 4);
			player.resetVSkills();
			player.gainItem(2431305, 1);
			player.maxSkills();
			npc.say("转职成功！");
		}
	} 
	
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