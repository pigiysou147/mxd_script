/*
Care-脚本调整-
脚本定制仿制脚本
唯一方式50009219
*/

var Care = [31800, 16018, 16020, 16022, 16880, 16024, 16026, 16028, 29900, 29901, 29902, 29903, 36102, 2646, 17035, 32240, 32241, 32242, 32243, 32244, 32245, 32246];

	if(player.getPQLog("去灯泡") < 10) {
		var sql = "SELECT * FROM characters_quest_status WHERE characters_id = ?;";
		var ret = player.customSqlResult(sql,player.getId());
		for(var i =0;i<ret.size();i++) {
			var signle = ret.get(i);
			if(null == signle) break;
			player.completeQuest(signle.get("quest"),9310362);
		}

		for(var ii in Care) {
			player.completeQuest(Care[ii],9310362);

		}
		player.addPQLog("去灯泡");
		npc.say( "灯泡去除完毕\r\n\r\n");


	} else {
		npc.say("你已经去除过灯泡了");
	}
