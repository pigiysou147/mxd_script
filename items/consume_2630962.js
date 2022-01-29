


//51121006 灵魂之怒 最终伤害提高30% 最终伤害+30%
//1311015  交叉锁链 最终伤害提高20% 最终伤害+20%
//65121004 灵魂凝视 暴击伤害+45%
//5320008  超级猴子魔法  力敏智运提高 60%
//15121005 急速领域 攻击速度+2

//11101022 月光洒落 攻击段数*2 暴击几率+20% 攻击伤害降低40%
//5321054  散弹炮   攻击段数*3 攻击伤害降低55%

//22001012 魔法盾   受到的伤害降低85% 降低部分由MP替代
//4201011  金钱盾   受到的伤害降低50% 降低部分由金币替代
//61121009 水盾     伤害降低30%
//31211003 驱邪     伤害降低30%
//61121009 强健护甲 伤害降低30%
//21101005 生命吸收 每次攻击吸取生命值上限1%的HP
//31211004 恶魔恢复 最大生命值增加25% 每4秒恢复5%生命值 
//400011066 钢铁之躯  不会被击退和击飞
//5821009 极速领域	消耗魔量，在一定时间内使全体队员的攻击速度提高2级。
var skill = Array(
	Array("冲锋队长", 512, 
		//技能id     cd
		Array(61121009,10)
	),
	Array("圣经", 15212, 
		Array(11101022,10),
		Array(61121009,10)
	), 
	Array("夜行者", 1412, 
		Array(14121055,1),
		Array(400041008,1)
	), 
	Array("双刀", 434, 
		Array(24100003,1)
	), 
	Array("隐月", 2512, 
		Array(11101022,10)
	),
	Array("幻影", 2412, 
		Array(400041022,1)
	),
	Array("御剑骑士", 15112, 
		Array(400011136,1)
	)
	
	

);

var job = player.getJob();
var name = "";
var id = "";
if(map.getId() == 910000000) {
	npc.say("不能在市场开启BUFF");

} else {
	var now = new Date().getTime();
	for(var i = 0; i < skill.length; i++) {
		if(job == skill[i][1]) {
			//职业匹配上了
			//使用BUFF
			name = skill[i][0];
			for(var j = 2; j < skill[i].length; j++) {
				var skillId = skill[i][j][0];
				var cd = skill[i][j][1]*1000;
				
				if(player.getPQLog("秘籍") < 1) {
					id += "#s" + skill[i][j] + "#";
					
				}
				if( player.getKeyValue(skillId)==null){
					player.setKeyValue(skillId,now-100);
				}
				
				if(now-player.getKeyValue(skillId)>cd){
					id+="(释放成功)";
					player.setKeyValue(skillId,now);
					player.useSkillEffect(skillId, 30);
				} else{
					id+="(cd未冷却)"+(cd-(now-player.getKeyValue(skillId)))/1000+" 秒后释放 ";
				}
				
			}

		}
	}
	//10310
	if(player.getPQLog("秘籍") < 1) {
		npc.say("你的职业是：#r" + name + " #k \r\n你获得了你的职业专属BUFF:" + id + "\r\n~\r\n");
		
	}else{
		player.dropMessage(1,id);
	}
}