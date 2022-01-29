var typede = 0;
var text = "";
text = "#fMob/1210102.img/move/0##fMob/1210102.img/move/0##b回忆岛#fMob/1210102.img/move/0##fMob/1210102.img/move/0##k\r\n部分技能收取金币,请了解后在进行学习。\r\n";
text += "#L14##r了解以下技能特效(#e新人必看#n)#l\r\n";
text += "#L2##b学习群宠#l #L3##b学习锻造#l #L5##b学习匠人之魂#l\r\n";
text += "#L898##r一键满技能     (全职业150级可用)#l\r\n";
text += "#L9##b学习御龙魔飞行技能 (全职业可学)#l\r\n";

text += "#L99##b学习ARK异人二转技能     (ARK职业可学)#l\r\n";
text += "#L101##b学习墨玄技能     #l\r\n";
text += "#L100##b虎影学习飞翔、筋斗云等技能     (筋斗云)#l\r\n";

let selection = npc.askMenu(text);

if(selection == 14) {
	npc.say("#fMob/1210102.img/move/0##fMob/1210102.img/move/0##bAurora - MS#fMob/1210102.img/move/0##fMob/1210102.img/move/0##k\r\n技能特效如下:\r\n#b0、龙神技能-继承的意志特效如下:#k\r\n永久性提高魔法攻击力10、魔法防御力300、HP增加15%、所有属性加10、BOSS伤害增加5% 需要支付#b500万金币#k才可学习。\r\n#b1、战神技能-找回的记忆特效如下:#k\r\n永久性提高攻击力10、物理防御力300、移动速度10、暴击率%5、BOSS伤害增加5%、需要支付#b500万金币#k才可学习。\r\n#b2、骑士团技能-女皇的呼唤特效如下:#k\r\n在2小时内物理攻击力和魔法攻击力同时提高4%,需要支付#b500万金币#k才可学习。\r\n#b3、全职业技能-联盟的意志特效如下:#k\r\n永久性提高力量5点、敏捷5点、智力5点、运气5点、攻击力5点、魔法攻击力5、需要支付#b500万金币#k才可学习。\r\n#b4、骑士团技能-女皇的祈祷特效如下:#k\r\n永久性提高最大PH和MP%20,需要支付#b500万金币#k才可学习。\r\n#b5、全职业技能-英雄之回声特效如下:#k\r\n在40分钟内增加物理攻击力2%、增加魔法攻击力2%、冷却时间2小时、需要支付#b500万金币#k才可学习。\r\n#b6、全职业技能-好用的轻功特效如下:#k\r\n在200秒内移动速度提高20、跳跃力提高10、需要支付#b300金币#k才可学习。\r\n#b7、骑士团技能-高贵精神特效如下:#k\r\n提高女皇的祝福最高等级7、需要等级#b5级以上#k才可学习。");

} else if(selection == 898) {
	

	if(player.getJob()==10112){
		player.setSkillLevel(101101100,10,10,false);
	}
	player.maxSkills();
	npc.say("学习成功~。");
		
		
	

} else if(selection == 100) {
	if(player.getJob()==16412){
		player.setSkillLevel(164001004, 1, 1, false);
		player.setSkillLevel(160001026, 1,1, false);
		player.setSkillLevel(150011030, 20,20, false);		
		
		player.setSkillLevel(8, 1, 1, false);
		
		npc.say("学习成功~。");
	}else{
		npc.say("只有虎影可以在这里学习哦");
	}
	
	
		
		
	

} else if(selection == 101) {
	if(player.getJob()>=17000 && player.getJob()<=17512 ){
		player.setSkillLevel(175000001, 1, 1, false);
		player.setSkillLevel(175001003, 1,1, false);
		player.setSkillLevel(175000006, 20,20, false);
		
		player.setSkillLevel(8, 1, 1, false);
		
		npc.say("学习成功~。");
	}else{
		npc.say("只有虎影可以在这里学习哦");
	}
	
	
		
		
	

} else if(selection == 2) {
	if(player.getLevel() <= 50) {
		npc.say("您现在的等级条件还不能学习群宠技能,需要50级才可以学习。");
	} else {
		player.loseMesos(500000);
		if(player.getJob()==16412){
			player.setSkillLevel(8, 1, 1, false);
		}else{
			player.setSkillLevel(8, 1, 1, false);
			player.setSkillLevel(20011024, 1, 1, false);
			player.setSkillLevel(10000018, 1, 1, false);
			player.setSkillLevel(20000024, 1, 1, false);
		}
		
		npc.say("恭喜您学习技能成功,祝您游戏愉快。");
	}

} else if(selection == 3) {
	if(player.getLevel() <= 45) {
		npc.say("您现在的等级条件还不能学习锻造技能,需要45级才可以学习。");
	} else if(player.getJob() >= 100 && player.getJob() <= 512) { //冒险家	
		player.setSkillLevel(1007, 3, 1, false);
		npc.say("恭喜您学习技能成功,祝您游戏愉快。");
	} else if(player.getJob() >= 1000 && player.getJob() <= 1512) { //骑士团
		player.setSkillLevel(10001007, 3, 1, false);
		npc.say("恭喜您学习技能成功,祝您游戏愉快。");
	} else if(player.getJob() >= 2100 && player.getJob() <= 2112) { //战神
		player.setSkillLevel(20001007, 3, 1, false);
		npc.say("恭喜您学习技能成功,祝您游戏愉快。");
	} else if(player.getJob() >= 2200 && player.getJob() <= 2218) { //龙神
		player.setSkillLevel(20011007, 3, 1, false);
		npc.say("恭喜您学习技能成功,祝您游戏愉快。");
	} else if(player.getJob() >= 3000 && player.getJob() <= 3512) { //反抗者
		player.setSkillLevel(30001007, 3, 1, false);
		npc.say("恭喜您学习技能成功,祝您游戏愉快。");
	} else if(player.getJob() >= 5100 && player.getJob() <= 5112) { //米哈尔
		player.setSkillLevel(50001007, 3, 1, false);
		npc.say("恭喜您学习技能成功,祝您游戏愉快。");
	} else if(player.getJob() >= 6100 && player.getJob() <= 6112) { //狂龙战士
		player.setSkillLevel(60001007, 3, 1, false);
		npc.say("恭喜您学习技能成功,祝您游戏愉快。");
	} else if(player.getJob() >= 6500 && player.getJob() <= 6512) { //暴利萌天使
		player.setSkillLevel(60011007, 3, 1, false);
		npc.say("恭喜您学习技能成功,祝您游戏愉快。");
	} else if(player.getJob() >= 3600 && player.getJob() <= 3612) { //尖兵
		player.setSkillLevel(30021007, 3, 1, false);
		npc.say("恭喜您学习技能成功,祝您游戏愉快。");
	} else if(player.getJob() >= 2700 && player.getJob() <= 2712) { //夜光法师	
		player.setSkillLevel(20041007, 3, 1, false);
		npc.say("恭喜您学习技能成功,祝您游戏愉快。");
	} else if(player.getJob() >= 2300 && player.getJob() <= 2312) { //双弩精灵
		player.setSkillLevel(20021007, 3, 1, false);
		npc.say("恭喜您学习技能成功,祝您游戏愉快。");
	} else if(player.getJob() >= 2400 && player.getJob() <= 2412) { //幻影
		player.setSkillLevel(20031007, 3, 1, false);
		npc.say("恭喜您学习技能成功,祝您游戏愉快。");
	} else if(player.getJob() >= 3100 && player.getJob() <= 3112) { // 恶魔猎手
		player.setSkillLevel(30011007, 3, 1, false);
		npc.say("恭喜您学习技能成功,祝您游戏愉快。");
	} else {
		npc.say("学习此项技能中没有符合您的职业群,您可以尝试做官方任务获得该技能。");
	}

} else if(selection == 4) {
	if(!player.hasMesos(500000)) {
		npc.say("由于英雄之回声技能的特殊性需要支付#b500万金币#k才可以学习,您目前没有足够的金币。");
	} else if(player.getLevel() <= 100) {
		npc.say("您现在的等级条件还不能学习英雄之回声技能,需要100级才可以学习。");
	} else if(player.getJob() >= 100 && player.getJob() <= 512) { //冒险家	
		player.loseMesos(5000000);
		player.setSkillLevel(1005, 1, 1);
		npc.say("恭喜您学习技能成功,祝您游戏愉快。");
	} else if(player.getJob() >= 1000 && player.getJob() <= 1512) { //骑士团
		player.loseMesos(5000000);
		player.setSkillLevel(10001005, 1, 1);
		player.setSkillLevel(10001215, 1, 1);
		npc.say("恭喜您学习技能成功,祝您游戏愉快。");
	} else if(player.getJob() >= 2100 && player.getJob() <= 2112) { //战神
		player.loseMesos(5000000);
		player.setSkillLevel(20001005, 1, 1);
		npc.say("恭喜您学习技能成功,祝您游戏愉快。");
	} else if(player.getJob() >= 2200 && player.getJob() <= 2218) { //龙神
		player.loseMesos(5000000);
		player.setSkillLevel(20011005, 1, 1);
		npc.say("恭喜您学习技能成功,祝您游戏愉快。");
	} else if(player.getJob() >= 3000 && player.getJob() <= 3512) { //反抗者
		player.loseMesos(5000000);
		player.setSkillLevel(30001005, 1, 1);
		npc.say("恭喜您学习技能成功,祝您游戏愉快。");
	} else if(player.getJob() >= 5100 && player.getJob() <= 5112) { //米哈尔
		player.loseMesos(5000000);
		player.setSkillLevel(50001005, 1, 1);
		player.setSkillLevel(50001215, 1, 1);
		npc.say("恭喜您学习技能成功,祝您游戏愉快。");
	} else if(player.getJob() >= 3600 && player.getJob() <= 3612) { //尖兵
		player.loseMesos(5000000);
		player.setSkillLevel(30021005, 1, 1);
		npc.say("恭喜您学习技能成功,祝您游戏愉快。");
	} else if(player.getJob() >= 2700 && player.getJob() <= 2712) { //夜光法师
		player.loseMesos(5000000);
		player.setSkillLevel(20041005, 1, 1);
		npc.say("恭喜您学习技能成功,祝您游戏愉快。");
	} else if(player.getJob() >= 2300 && player.getJob() <= 2312) { //双弩精灵
		player.loseMesos(5000000);
		player.setSkillLevel(20021005, 1, 1);
		npc.say("恭喜您学习技能成功,祝您游戏愉快。");
	} else if(player.getJob() >= 2400 && player.getJob() <= 2412) { //幻影
		player.loseMesos(5000000);
		player.setSkillLevel(20031005, 1, 1);
		npc.say("恭喜您学习技能成功,祝您游戏愉快。");
	} else if(player.getJob() >= 3100 && player.getJob() <= 3112) { // 恶魔猎手
		player.loseMesos(5000000);
		player.setSkillLevel(30011005, 1, 1);
		npc.say("恭喜您学习技能成功,祝您游戏愉快。");

	} else {
		npc.say("学习此项技能中没有符合您的职业群,您可以尝试做官方任务获得该技能。");
	}

} else if(selection == 5) {
	if(player.getLevel() <= 150) {
		npc.say("您现在的等级条件还不能学习匠人之魂技能,需要150级才可以学习。");
	} else if(player.getJob() >= 100 && player.getJob() <= 512) { //冒险家
		player.setSkillLevel(1003, 1, 1,false);
		npc.say("恭喜您学习技能成功,祝您游戏愉快。");
	} else if(player.getJob() >= 1000 && player.getJob() <= 1512) { //骑士团
		player.setSkillLevel(10001005, 1, 1,false);
		player.setSkillLevel(10001215, 1, 1,false);
		npc.say("恭喜您学习技能成功,祝您游戏愉快。");
	} else if(player.getJob() >= 2100 && player.getJob() <= 2112) { //战神
		player.setSkillLevel(20001005, 1, 1,false);
		npc.say("恭喜您学习技能成功,祝您游戏愉快。");
	} else if(player.getJob() >= 2200 && player.getJob() <= 2218) { //龙神
		player.setSkillLevel(20011005, 1, 1,false);
		npc.say("恭喜您学习技能成功,祝您游戏愉快。");
	} else if(player.getJob() >= 3000 && player.getJob() <= 3512) { //反抗者
		player.setSkillLevel(30001005, 1, 1,false);
		npc.say("恭喜您学习技能成功,祝您游戏愉快。");
	} else if(player.getJob() >= 5100 && player.getJob() <= 5112) { //米哈尔
		player.setSkillLevel(50001005, 1, 1,false);
		player.setSkillLevel(50001215, 1, 1,false);
		npc.say("恭喜您学习技能成功,祝您游戏愉快。");
	} else if(player.getJob() >= 3600 && player.getJob() <= 3612) { //尖兵
		player.setSkillLevel(30021005, 1, 1,false);
		npc.say("恭喜您学习技能成功,祝您游戏愉快。");
	} else if(player.getJob() >= 2700 && player.getJob() <= 2712) { //夜光法师
		player.setSkillLevel(20041005, 1, 1,false);
		npc.say("恭喜您学习技能成功,祝您游戏愉快。");
	} else if(player.getJob() >= 2300 && player.getJob() <= 2312) { //双弩精灵
		player.setSkillLevel(20021005, 1, 1,false);
		npc.say("恭喜您学习技能成功,祝您游戏愉快。");
	} else if(player.getJob() >= 2400 && player.getJob() <= 2412) { //幻影
		player.setSkillLevel(20031005, 1, 1,false);
		npc.say("恭喜您学习技能成功,祝您游戏愉快。");
	} else if(player.getJob() >= 3100 && player.getJob() <= 3112) { // 恶魔猎手
		player.setSkillLevel(30011005, 1, 1,false);
		npc.say("恭喜您学习技能成功,祝您游戏愉快。");

	} else {
		npc.say("学习此项技能中没有符合您的职业群,您可以尝试做官方任务获得该技能。");
	}

} else if(selection == 6) {
	if(!player.hasMesos(500000)) {
		npc.say("由于联盟的意志技能的特殊性需要支付#b500万金币#k才可以学习.您目前没有足够的#b金币#k。");
	} else if(player.getLevel() <= 150) {
		npc.say("您现在的等级条件还不能学习联盟的意志技能,需要150级才可以学习。");
	} else if(player.getJob() >= 5100 && player.getJob() <= 5112) { //米哈尔
		player.loseMesos(5000000);
		player.setSkillLevel(50000190, 1, 1, false);
		npc.say("恭喜您学习技能成功,祝您游戏愉快。");
	} else if(player.getJob() >= 6100 && player.getJob() <= 6112) { //狂龙战士
		player.loseMesos(5000000);
		player.setSkillLevel(60000190, 1, 1, false);
		npc.say("恭喜您学习技能成功,祝您游戏愉快。");
	} else if(player.getJob() >= 6500 && player.getJob() <= 6512) { //暴利萌天使
		player.loseMesos(5000000);
		player.setSkillLevel(60010190, 1, 1, false);
		npc.say("恭喜您学习技能成功,祝您游戏愉快。");
	} else if(player.getJob() >= 3600 && player.getJob() <= 3612) { //尖兵
		player.loseMesos(5000000);
		player.setSkillLevel(30020190, 1, 1, false);
		npc.say("恭喜您学习技能成功,祝您游戏愉快。");
	} else if(player.getJob() >= 2700 && player.getJob() <= 2712) { //夜光法师
		player.loseMesos(5000000);
		player.setSkillLevel(20040190, 1, 1, false);
		npc.say("恭喜您学习技能成功,祝您游戏愉快。");
	} else if(player.getJob() >= 2400 && player.getJob() <= 2412) { //幻影
		player.loseMesos(5000000);
		player.setSkillLevel(20030190, 1, 1, false);
		npc.say("恭喜您学习技能成功,祝您游戏愉快。");
	} else if(player.getJob() >= 100 && player.getJob() <= 512) { //冒险家
		player.loseMesos(5000000);
		player.setSkillLevel(190, 1, 1, false);
		npc.say("恭喜您学习技能成功,祝您游戏愉快。");
	} else if(player.getJob() >= 1000 && player.getJob() <= 1512) { //骑士团
		player.loseMesos(5000000);
		player.setSkillLevel(10000190, 1, 1, false);
		npc.say("恭喜您学习技能成功,祝您游戏愉快。");
	} else if(player.getJob() >= 2100 && player.getJob() <= 2112) { //战神
		player.loseMesos(5000000);
		player.setSkillLevel(20000190, 1, 1, false);
		npc.say("恭喜您学习技能成功,祝您游戏愉快。");
	} else if(player.getJob() >= 2200 && player.getJob() <= 2218) { //龙神
		player.loseMesos(5000000);
		player.setSkillLevel(20010190, 1, 1, false);
		npc.say("恭喜您学习技能成功,祝您游戏愉快。");
	} else if(player.getJob() >= 3000 && player.getJob() <= 3512) { //反抗者
		player.loseMesos(5000000);
		player.setSkillLevel(30000190, 1, 1, false);
		npc.say("恭喜您学习技能成功,祝您游戏愉快。");
	} else if(player.getJob() >= 2300 && player.getJob() <= 2312) { //双弩精灵
		player.loseMesos(5000000);
		player.setSkillLevel(20020190, 1, 1, false);
		npc.say("恭喜您学习技能成功,祝您游戏愉快。");
	} else if(player.getJob() >= 3100 && player.getJob() <= 3112) { // 恶魔猎手
		player.loseMesos(5000000);
		player.setSkillLevel(30010190, 1, 1, false);
		npc.say("恭喜您学习技能成功,祝您游戏愉快。");

	} else {
		npc.say("学习此项技能中没有符合您的职业群,您可以尝试做官方任务获得该技能。");
	}

} else if(selection == 7) {
	if(player.getLevel() <= 5) {
		npc.say("您现在的等级条件还不能学习高贵精神技能,需要5级才可以学习。");
	} else if(player.getJob() >= 1000 && player.getJob() <= 1512) { // 骑士团
		player.setSkillLevel(10000202, 6, 1,false);
		npc.say("恭喜您学习技能成功,祝您游戏愉快。");
	} else {
		npc.say("学习高贵的精神技能只有骑士团职业群才可以学习。");
	}

} else if(selection == 8) {
	if(!player.hasMesos(3000000)) {
		npc.say("由于好用的轻功技能的特殊性需要支付#b300万金币#k才可以学习,您目前没有足够的金币。");
	} else if(player.getLevel() <= 70) {
		npc.say("您现在的等级条件还不能学习好用的轻功技能,需要70级才可以学习。");
	} else if(player.getJob() >= 100 && player.getJob() <= 512) { //冒险家
		player.loseMesos(3000000);
		player.setSkillLevel(8000, 1, 1, false);
		npc.say("恭喜您学习技能成功,祝您游戏愉快。");
	} else if(player.getJob() >= 1000 && player.getJob() <= 1512) { //骑士团
		player.loseMesos(3000000);
		player.setSkillLevel(10008000, 1, 1, false);
		npc.say("恭喜您学习技能成功,祝您游戏愉快。");
	} else if(player.getJob() >= 2100 && player.getJob() <= 2112) { //战神
		player.loseMesos(3000000);
		player.setSkillLevel(20008000, 1, 1, false);
		npc.say("恭喜您学习技能成功,祝您游戏愉快。");
	} else if(player.getJob() >= 2200 && player.getJob() <= 2218) { //龙神
		player.loseMesos(3000000);
		player.setSkillLevel(20018000, 1, 1, false);
		npc.say("恭喜您学习技能成功,祝您游戏愉快。");
	} else if(player.getJob() >= 3000 && player.getJob() <= 3512) { //反抗者
		player.loseMesos(3000000);
		player.setSkillLevel(30008000, 1, 1, false);
		npc.say("恭喜您学习技能成功,祝您游戏愉快。");
	} else if(player.getJob() >= 5100 && player.getJob() <= 5112) { //米哈尔
		player.loseMesos(3000000);
		player.setSkillLevel(50008000, 1, 1, false);
		npc.say("恭喜您学习技能成功,祝您游戏愉快。");
	} else if(player.getJob() >= 6100 && player.getJob() <= 6112) { //狂龙战士
		player.loseMesos(3000000);
		player.setSkillLevel(60008000, 1, 1, false);
		npc.say("恭喜您学习技能成功,祝您游戏愉快。");
	} else if(player.getJob() >= 6500 && player.getJob() <= 6512) { //暴利萌天使
		player.loseMesos(3000000);
		player.setSkillLevel(60018000, 1, 1, false);
		npc.say("恭喜您学习技能成功,祝您游戏愉快。");
	} else if(player.getJob() >= 3600 && player.getJob() <= 3612) { //尖兵
		player.loseMesos(3000000);
		player.setSkillLevel(30028000, 1, 1, false);
		npc.say("恭喜您学习技能成功,祝您游戏愉快。");
	} else if(player.getJob() >= 2700 && player.getJob() <= 2712) { //夜光法师
		player.loseMesos(3000000);
		player.setSkillLevel(20048000, 1, 1, false);
		npc.say("恭喜您学习技能成功,祝您游戏愉快。");
	} else if(player.getJob() >= 2300 && player.getJob() <= 2312) { //双弩精灵
		player.loseMesos(3000000);
		player.setSkillLevel(20028000, 1, 1, false);
		npc.say("恭喜您学习技能成功,祝您游戏愉快。");
	} else if(player.getJob() >= 2400 && player.getJob() <= 2412) { //幻影
		player.loseMesos(3000000);
		player.setSkillLevel(20038000, 1, 1, false);
		npc.say("恭喜您学习技能成功,祝您游戏愉快。");
	} else if(player.getJob() >= 3100 && player.getJob() <= 3112) { // 恶魔猎手
		player.loseMesos(3000000);
		player.setSkillLevel(30018000, 1, 1, false);
		npc.say("恭喜您学习技能成功,祝您游戏愉快。");
	} else {
		npc.say("学习此项技能中没有符合您的职业群,您可以尝试做官方任务获得该技能。");
	}

} else if(selection == 9) {
	if(!player.hasMesos(1000000)) {
		npc.say("由于飞翔技能的特殊性需要支付#b100万金币#k才可以学习,您目前没有足够的金币。");
	} else if(player.getLevel() <= 120) {
		npc.say("您现在的等级条件还不能学习飞翔技能,需要120级才可以学习。");
	} else if(player.getJob() >= 4100 && player.getJob() <= 4112) { // 剑豪
		player.loseMesos(1000000);
		player.setSkillLevel(40011026, 1, 1, false);
		npc.say("恭喜您学习技能成功,祝您游戏愉快。");	
	} else if(player.getJob() >= 100 && player.getJob() <= 512) { //冒险家
		player.loseMesos(1000000);
		player.setSkillLevel(1026, 1, 1, false);
		npc.say("恭喜您学习技能成功,祝您游戏愉快。");
	} else if(player.getJob() >= 1000 && player.getJob() <= 1512) { //骑士团
		player.loseMesos(1000000);
		player.setSkillLevel(10001026, 1, 1, false);
		npc.say("恭喜您学习技能成功,祝您游戏愉快。");
	} else if(player.getJob() >= 2100 && player.getJob() <= 2112) { //战神
		player.loseMesos(1000000);
		player.setSkillLevel(20001026, 1, 1, false);
		npc.say("恭喜您学习技能成功,祝您游戏愉快。");
	} else if(player.getJob() >= 2200 && player.getJob() <= 2218) { //龙神
		player.loseMesos(1000000);
		player.setSkillLevel(20011026, 1, 1, false);
		npc.say("恭喜您学习技能成功,祝您游戏愉快。");
	} else if(player.getJob() == 3512) { //反抗者
		player.loseMesos(1000000);
		player.setSkillLevel(30001026, 1, 1, false);
		npc.say("恭喜您学习技能成功,祝您游戏愉快。");
	} else if(player.getJob() >= 5100 && player.getJob() <= 5112) { //米哈尔
		player.loseMesos(1000000);
		player.setSkillLevel(50001026, 1, 1, false);
		npc.say("恭喜您学习技能成功,祝您游戏愉快。");
	} else if(player.getJob() >= 6100 && player.getJob() <= 6112) { //狂龙战士
		player.loseMesos(1000000);
		player.setSkillLevel(60001026, 1, 1, false);
		npc.say("恭喜您学习技能成功,祝您游戏愉快。");
	} else if(player.getJob() >= 6500 && player.getJob() <= 6512) { //暴利萌天使
		player.loseMesos(1000000);
		player.setSkillLevel(60011026, 1, 1, false);
		npc.say("恭喜您学习技能成功,祝您游戏愉快。");
	} else if(player.getJob() >= 3600 && player.getJob() <= 3612) { //尖兵
		player.loseMesos(1000000);
		player.setSkillLevel(30021026, 1, 1, false);
		npc.say("恭喜您学习技能成功,祝您游戏愉快。");
	} else if(player.getJob() >= 2700 && player.getJob() <= 2712) { //夜光法师
		player.loseMesos(1000000);
		player.setSkillLevel(20041026, 1, 1, false);
		npc.say("恭喜您学习技能成功,祝您游戏愉快。");
	} else if(player.getJob() >= 2300 && player.getJob() <= 2312) { //双弩精灵
		player.loseMesos(1000000);
		player.setSkillLevel(20021026, 1, 1, false);
		npc.say("恭喜您学习技能成功,祝您游戏愉快。");
	} else if(player.getJob() >= 2400 && player.getJob() <= 2412) { //幻影
		player.loseMesos(1000000);
		player.setSkillLevel(20031026, 1, 1, false);
		npc.say("恭喜您学习技能成功,祝您游戏愉快。");
	} else if(player.getJob() >= 3112 && player.getJob() <= 3122) { // 恶魔猎手
		player.loseMesos(1000000);
		player.setSkillLevel(30011026, 1, 1, false);
		npc.say("恭喜您学习技能成功,祝您游戏愉快。");
	}else if(player.getJob() >= 4200 && player.getJob() <= 4212){
		player.loseMesos(1000000);
		player.setSkillLevel(40021026, 1, 1, false);
		npc.say("恭喜您学习技能成功,祝您游戏愉快。");
	}else if(player.getJob() >= 15002 && player.getJob() <= 15112){
		player.loseMesos(1000000);
		player.setSkillLevel(150021026, 1, 1, false);
		npc.say("恭喜您学习技能成功,祝您游戏愉快。");
	} else if(player.getJob() ==10112) { // 恶魔猎手
		player.setSkillLevel(100001026, 3, 1, false);
		npc.say("恭喜您学习技能成功,祝您游戏愉快。");
	} else if(player.getJob() ==15512) { // 恶魔猎手
		player.setSkillLevel(150011026, 3, 1, false);
		npc.say("恭喜您学习技能成功,祝您游戏愉快。");
	} else if(player.getJob() ==2512) { // 恶魔猎手
		player.setSkillLevel(20051026, 3, 1, false);
		npc.say("恭喜您学习技能成功,祝您游戏愉快。");
	} else {
		npc.say("学习此项技能中没有符合您的职业群,您可以尝试做官方任务获得该技能。");
	}

} else if(selection == 10) {
	if(player.getLevel() <= 100) {
		npc.say("您现在的等级条件还不能学习女皇的呼唤技能,需要100级才可以学习。");
	} else if(!player.hasMesos(500000)) {
		npc.say("由于女皇的呼唤技能的特殊性需要支付#b500万金币#k才可以学习,您目前没有足够的#b金币#k。");
	} else if(player.getJob() >= 1000 && player.getJob() <= 1512) {
		player.loseMesos(5000000);
		player.setSkillLevel(10000074, 1, 1, false);
		npc.say("恭喜您学习技能成功,祝您游戏愉快。");
	} else {
		npc.say("学习女皇的呼唤技能只有骑士团职业群才可以学习。");
	}

} else if(selection == 11) {
	if(player.getLevel() <= 100) {
		npc.say("您现在的等级条件还不能学习女皇的祈祷技能,需要100级才可以学习。");
	} else if(!player.hasMesos(500000)) {
		npc.say("由于女皇的祈祷技能的特殊性需要支付#b500万金币#k才可以学习,您目前没有足够的金币。");
	} else if(player.getJob() >= 1000 && player.getJob() <= 1512) { //骑士团
		player.loseMesos(5000000);
		player.setSkillLevel(10001075, 1, 1, false);
		npc.say("恭喜您学习技能成功,祝您游戏愉快。");
	} else if(player.getJob() >= 5100 && player.getJob() <= 5112) { //米哈尔
		player.loseMesos(5000000);
		player.setSkillLevel(50001075, 1, 1, false);
		npc.say("恭喜您学习技能成功,祝您游戏愉快。");
	} else {
		npc.say("学习女皇的祈祷技能只有骑士团和米哈尔职业群才可以学习。");
	}

} else if(selection == 12) {
	if(player.getLevel() <= 100) {
		npc.say("您现在的等级条件还不能学习找回的记忆技能,需要100级才可以学习。");
	} else if(!player.hasMesos(500000)) {
		npc.say("由于找回的记忆技能的特殊性需要支付#b500万金币#k才可以学习,您目前没有足够的#b彩云币#k。");
	} else if(player.getJob() >= 2100 && player.getJob() <= 2112) {
		player.loseMesos(5000000);
		npc.say("恭喜您学习技能成功,祝您游戏愉快。");
	} else {
		npc.say("学习找回的记忆技能只有战神职业群才可以学习。");

	}

} else if(selection == 13) {
	if(player.getLevel() < 120) {
		npc.say("您现在的等级条件还不能学习继承的意志技能,需要120级才可以学习。");
	} else if(!player.hasMesos(500000)) {
		npc.say("由于继承的意志技能的特殊性需要支付#b500万金币#k才可以学习,您目前没有足够的#b彩云币#k。");
	} else if(player.getJob() >= 2200 && player.getJob() <= 2218) {
		player.loseMesos(5000000);
		player.setSkillLevel(20010194, 1, 1, false);
		npc.say("恭喜您学习技能成功,祝您游戏愉快。");
	} else {
		npc.say("学习继承的意志技能只有龙神职业群才可以学习。");
	}

} else if(selection == 99) {
	if(player.getJob() != 15510) {
		player.scriptProgressMessage("抱歉 2转才能学并且必须是ARK职业");

	}
	if(player.getSkillLevel(155101006) > 0) {
		player.scriptProgressMessage("抱歉 你已经学过这个技能了");

	}
	player.setSkillLevel(155101006, 1, 1, false);
	npc.say("恭喜您学习技能成功,祝您游戏愉快。");
} else if(selection == 14) {
	if(player.getSkillLevel(80001000) > 0) {
		npc.say("您已经学习过这个技能。");
	} else {
		if(player.getJob() >= 3000) {
			npc.say("对不起！该职业暂时无法学习这个技能。");

		}
		player.setSkillLevel(80001000, 1, 1, false);
		npc.say("恭喜您学习技能成功。");
	}

} else if(selection == 15) {
	if(player.getJob() == 2700 || player.getJob() == 2710 || player.getJob() == 2711 || player.getJob() == 2712) {
		player.setSkillLevel(27000106, 5, 5, false);
		player.setSkillLevel(27001100, 20, 20, false);
		npc.say("恭喜您技能学习成功");
	} else {
		npc.say("你不属于该职业群");
	}

}