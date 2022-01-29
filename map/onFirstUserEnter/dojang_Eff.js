var mobList = new Array(
	//   关卡  怪物数量 怪物ID 怪物血量
	new Array(1, 3, 1140130, 500000000),
	new Array(2, 1, 3501005, 1500000000),
	new Array(3, 1, 9305303, 3000000000),
	new Array(4, 1, 9305304, 5000000000),
	new Array(5, 1, 9305305, 10000000000),
	new Array(6, 1, 9305305, 8000000000),
	new Array(7, 1, 8644503, 8000000000),
	new Array(8, 1, 9305308, 9000000000),
	new Array(9, 3, 9305309, 5000000000),
	new Array(10, 1, 9020029, 20000000000),
	new Array(11, 1, 9601011, 15000000000),
	new Array(12, 1, 9305312, 12000000000),
	new Array(13, 1, 9305313, 13000000000),
	new Array(14, 1, 9305314, 15000000000),
	new Array(15, 1, 9420562, 30000000000),
	new Array(16, 1, 9305316, 12000000000),
	new Array(17, 3, 9402133, 10000000000),
	new Array(18, 9, 9600020, 50000000000), //这层2种怪 9600020、9600023
	new Array(19, 3, 9309096, 30000000000),
	new Array(20, 1, 9305663, 80000000000),
	new Array(21, 1, 9410288, 40000000000),
	new Array(22, 1, 9410286, 50000000000),
	new Array(23, 1, 9402225, 60000000000),
	new Array(24, 5, 9402357, 50000000000),
	new Array(25, 10, 9010148, 50000000000), //小金币福利
	new Array(26, 1, 9803010, 70000000000),
	new Array(27, 1, 9402359, 80000000000),
	new Array(28, 1, 9410288, 90000000000),
	new Array(29, 1, 9601050, 100000000000),
	new Array(30, 1, 9601022, 300000000000), //大蛇丸
	new Array(31, 1, 9305232, 100000000000),
	new Array(32, 1, 9800065, 110000000000),
	new Array(33, 12, 9803018, 80000000000),
	new Array(34, 1, 8644505, 150000000000),
	new Array(35, 3, 9305338, 480000000000),
	new Array(36, 2, 9601016, 150000000000),
	new Array(37, 1, 9010120, 1000000), //福利固定伤害
	new Array(38, 1, 9601019, 200000000000),
	new Array(39, 1, 9830004, 250000000000),
	new Array(40, 1, 9500006, 3000000), //固定伤害兔子两公婆 9500007、9500006 2只怪
	new Array(41, 6, 9402047, 500000000000),
	new Array(42, 1, 8644406, 800000000000),
	new Array(43, 8, 9309096, 500000000000),
	new Array(44, 1, 9390911, 1000000000000),
	new Array(45, 1, 9601020, 500000000000),
	new Array(46, 3, 8641006, 3000000000000),
	new Array(47, 1, 9402023, 1000000000000), //福利大巴车
	new Array(48, 8, 9402022, 1000000000000),
	new Array(49, 1, 9400045, 3500000000000),
	new Array(50, 1, 9300955, 8000000000000), //小炮9300956x4 9300955 主舰x1
	new Array(51, 1, 8643005, 8000000000000),
	new Array(52, 1, 9400034, 11000000000000),
	new Array(53, 1, 9803014, 8000000000000),
	new Array(54, 1, 9402368, 8000000000000),
	new Array(55, 1, 9101078, 20000000000000),
	new Array(56, 1, 9390804, 15000000000000),
	new Array(57, 1, 8643004, 20000000000000),
	new Array(58, 1, 9402366, 20000000000000),
	new Array(59, 1, 9303085, 18000000000000),
	new Array(60, 10, 9600219, 8000000000000),
	new Array(61, 1, 8880100, 30000000000000),
	new Array(62, 1, 2600800, 38000000000000),
	new Array(63, 1, 9300350, 50000000000000)
);



	map.reset(); //清空地图
	map.setIndividualDrop(true)//设置个人掉落
	var em = npc.getEvent("pq_dojang");
	var stage = parseInt(em.getVariable("stage"));
	if(stage == 1) {
		var nowMillis = java.lang.System.currentTimeMillis();
		player.updateQuestRecordEx(7215, "sTime", nowMillis);
	}
	
	map.blowWeather(5120024,"限定时间15分钟, 要尽早打倒怪物, 到下一层去! ！");
	

	player.soundEffect("Dojang/start");
    player.screenEffect("dojang/start/stage");
    player.screenEffect("dojang/start/number/" + stage);
    player.showTrembleEffect(false, 1);
	//召唤怪物

	if( em != null) {
		var count = 0;
		var mobID = mobList[stage - 1][2];

		for(var i = 0; i < mobList[stage - 1][1]; i++) {
			
			let boss = map.makeMob(mobID);
			boss.setForcedMobStat(240);
			boss.changeBaseHp(mobList[stage - 1][3]);
			map.spawnMob(boss, 286,7);
			
			em.setVariable("Mob_" + mobID, mobList[stage - 1][1]);
			
			//cm.getMap().spawnMonsterOnGroundBelow(mob, new java.awt.Point(286, 7));
			
		}
		count+=mobList[stage - 1][1];

		if(stage == 18) {
			for(var i = 0; i < 9; i++) {
				let boss = map.makeMob(9600020);
				boss.setForcedMobStat(240);
		        boss.changeBaseHp(50000000000);
		        map.spawnMob(boss, 286,7);
		        
				count++;
			}
			count+=9;

		} else if(stage == 40) {
			let boss = map.makeMob(9500007);
			boss.setForcedMobStat(240);
	        boss.changeBaseHp(3000000);
	        map.spawnMob(boss, 286,7);
	        
			em.setVariable("Mob_" + mobID, "1");
			count+=1;
		} else if(stage == 50) {
			for(var i = 0; i < 3; i++) {
				let boss = map.makeMob(9300956);
				boss.setForcedMobStat(240);
		        boss.changeBaseHp(8000000000000);
		        map.spawnMob(boss, 286,7);
		        
				em.setVariable("Mob_" + mobID, "4");
				
			}
			count = 1;
		}
		//存储当前关卡应该打死的怪物总数
		em.setVariable(stage, count);
		player.dropMessage(1,"当前关卡: "+stage+" 应该打死数量为: "+count);

	}
