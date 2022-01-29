
    if (map.getId() == 925100700) {
        party.loseItem(4001117);
        party.loseItem(4001120);
        party.loseItem(4001121);
        party.loseItem(4001122);
        player.changeMap(251010404, 0);

    }else{
		var em = npc.getEvent("Pirate");
		if (em == null) {
			npc.sayNext("配置文件出错,请联系管理员。");
		}else if (party.getLeader()!=player.getId()) {
			npc.sayNext("请你们的队长和我说话。");
		}else{
			switch (map.getId()) {
				case 925100000:
					npc.sayNext("你和你的队员即将进入海盗的船,现在你们必须消灭所有的怪物和打开所有的宝箱才可以进入下一阶段。");
					 
					break;
				case 925100100:
					var emp = em.getVariable("stage2");
					if (emp == null) {
						em.setVariable("stage2", "0");
						emp = "0";
					}
					if (emp.equals("0")) {
						if (player.hasItem(4001120, 20)) {
							npc.sayNext("非常好,现在抓紧时间收集20个#b#z4001121##k交给我吧。");
							player.loseItem(4001120);
							em.setVariable("stage2", "1");
						} else {
							npc.sayNext("你和你的队员即将进入海盗的船,现在你们必须收集20个#b#z4001120##k交给我,才可以开始下一个考验。");
						}
					} else if (emp.equals("1")) {
						if (player.hasItem(4001121, 20)) {
							npc.sayNext("非常好,现在抓紧时间收集20个#b#z4001122##k交给我吧。");
							player.loseItem(4001121);
							em.setVariable("stage2", "2");
						} else {
							npc.sayNext("你和你的队员即将进入海盗的船,现在你们必须收集20个#b#z4001121##k交给我,才可以开始下一个考验。");
						}
					} else if (emp.equals("2")) {
						if (player.hasItem(4001122, 20)) {
							npc.sayNext("非常好,抓紧时间前往下一阶段吧!");
							player.loseItem(4001122);
							em.setVariable("stage2", "3");
							map.screenEffect("quest/party/clear");
							map.soundEffect("Party1/Clear");
						} else {
							npc.sayNext("你和你的队员即将进入海盗的船,现在你们必须收集20个#b#z4001122##k交给我,才可以开始下一个考验。");
						}
					} else {
						npc.sayNext("时间大门已经打开,你们可以前往下一关了,抓紧时间。");
					}
					 
					break;
				case 925100200:
					npc.sayNext("海盗船的袭击,我们必须毁灭守卫第一。");
					 
					break;
				case 925100201:
					if (map.getEventMobCount() == 0) {
						npc.sayNext("Excellent.");
						if (em.getVariable("stage2a").equals("0")) {
							cm.getMap().setReactorState();
							em.setVariable("stage2a", "1");
						}
					} else {
						npc.sayNext("These bellflowers are in hiding. We must liberate them.");
					}
					 
					break;
				case 925100300:
					npc.sayNext("海盗船的袭击,我们必须毁灭守卫第一!!!");
					 
					break;
				case 925100301:
					if (map.getEventMobCount() == 0) {
						npc.sayNext("Excellent.");
						if (em.getVariable("stage3a").equals("0")) {
							cm.getMap().setReactorState();
							em.setVariable("stage3a", "1");
						}
					} else {
						npc.sayNext("These bellflowers are in hiding. We must liberate them.");
					}
					 
					break;
				case 925100202:
				case 925100302:
					npc.sayNext("These are the Captains and Krus which devote their whole life to Lord Pirate. Kill them as you see fit.");
					 
					break;
				case 925100400:
					npc.sayNext("消灭怪物收集骷髅钥匙来关上所有的门,进入下一阶段!");
					 
					break;
				case 925100500:
					if (map.getEventMobCount() == 0) {
						party.loseItem(4001117);
						party.loseItem(4001120);
						party.loseItem(4001121);
						party.loseItem(4001122);
						party.changeMap(925100600,0);
					} else {
						npc.sayNext("请击败红鼻子海盗团的船长老海盗！");
					}
					 
					break;
			}
		}
	}
