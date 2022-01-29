


	var maxd = 1000;
	var mind = 200;
	
	var ran2 = (Math.random() * (maxd - mind) + mind);

	
	
	var mesos = parseInt(ran2)*10000;
	player.gainMesos(mesos);
	player.loseItem(2430210,1);
	npc.say("恭喜你获得了 " + mesos + " 金币");