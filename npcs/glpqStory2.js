  var event = npc.getEvent("CWKPQ"); 
	if (event != null) {
		if (event.getVariable("glpq6").equals("0")) {
			npc.sayNext("欢迎来到宗师议会大厅。我将是今晚的主持人……"); 
			npc.sayNext("今晚,我们有一个可怕的阵容 . .啊哈哈哈……"); 
			npc.sayNext("让我们受过专门训练的怪物陪同你!");
			map.broadcastEventNotice( "预备 !消灭地图上所有的怪物!");
			for (var i = 0; i < 10; i++) {
				var boss = map.makeMob(9400594); 
				map.spawnMob(boss,-1337 + (Math.random() * 1337), 276);
			}
			for (var i = 0; i < 20; i++) {
				var boss = map.makeMob(9400582); 
				map.spawnMob(boss,-1337 + (Math.random() * 1337), 276);
			}
			event.setVariable("glpq6", "1");
			 
		} else if (event.getVariable("glpq6").equals("1")) {
			if (map != null && map.getEventMobCount() == 0) {
				npc.sayNext("呃,这是什么?你已经击败他们吗?");
			 
				npc.sayNext("嗯,不管!绯红的主人会很高兴欢迎你。");
				map.broadcastEventNotice("绯红的主人的出现了!");

				var boss = map.makeMob(9400589); 
				boss.changeBaseHp(3000000000000);
				map.spawnMob(boss,-1000, 276); 
				
				var boss = map.makeMob(9400590); 
				boss.changeBaseHp(3000000000000);
				map.spawnMob(boss,-22, 1); 
				
				var boss = map.makeMob(9400591); 
				boss.changeBaseHp(3000000000000);
				map.spawnMob(boss,-22, 276);  
				
				var boss = map.makeMob(9400593); 
				boss.changeBaseHp(3000000000000);
				map.spawnMob(boss,496, 276);  
				
				var boss = map.makeMob(9400592); 
				boss.changeBaseHp(3000000000000);
				map.spawnMob(boss,-496, 276);  

				for (var i = 0; i < 50; i++) {
					var boss = map.makeMob(9309210);  
					map.spawnMob(boss,-1337 + (Math.random() * 3290), 276);  
				}
				event.setVariable("glpq6", "2");
			 
			} else {
				npc.say("地图上还有许多怪物呢！");
			}
		} else if (event.getVariable("glpq6").equals("2")) {
			if (map.getEventMobCount() == 0) {
				npc.say("什么?啊…这个不可能发生。你居然击败了他们。");
				map.screenEffect( "quest/party/clear");//通过
                //cm.playFieldSound("Party1/Clear");
				map.blowWeatherEffectNotice("门已经开启到下一个阶段了", 162, 15000);
				event.setVariable("glpq6", "3");
			} else {
				player.setHp(100000);
				//player.setMp(100000);
				npc.say("已为您恢复了10万生命值和10万蓝值，请加油对抗强大的绯红BOSS吧！");
				//cm.updateItevent(2000005);
				//cm.sendOk("已为您恢复了10万生命值和10万蓝值，请加油对抗强大的绯红BOSS吧！");
				//cm.dispose();
			}
		} else {
			npc.say("请移动到下一关卡。");
		}
	}

 
