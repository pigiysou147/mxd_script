
var selectedItem = -1;
var selectedCost = -1;
var reward = new Array(

//Array(名次, 物品ID, 数量,"说明")   2435795
    Array(1,2630091,5),
	Array(1,2614025,3),
	Array(2,2630091,3),
	Array(2,2614025,2),
	Array(3,2630091,2),
	Array(3,2614025,1),
	Array(4,2630091,2),
	Array(4,2614025,1),
	Array(5,2630091,2),
	Array(5,2614025,1),
	 //注意：最后一行括号后面不要加逗号 
	 Array(1,2631944,5),
	 Array(2,2631944,3),
	 Array(3,2631944,2)


)

if(map.getId()==932200300){
	//查询当前最大的值
	var sql = "select max(rank) as rank from jili_game where gametype = 3";
	var push = player.customSqlResult(sql);
	var rank = 0;
	if (push.size() > 0) {
		var result = push.get(0);
		rank = result.get("rank");
	}
	rank++;
	//查重
	var sql = "select name from jili_game where gametype = 3 and name = '"+player.getName()+"'";
	var push = player.customSqlResult(sql);
	if (push.size() > 0) {
		npc.say("您已经领取过一次了，无法重复提交");
	}else{
		player.customSqlInsert("INSERT INTO `jili_game` (`name`,`rank`,`gametype`) VALUES ('" + player.getName() + "',"+rank+",3)");
		//npc.broadcastPlayerNotice(13,"【雪原跑旗】" +" : 玩家 "+player.getName()+ " 在本次活动中获得第 "+rank+" 名！");
		map.blowWeather(5120000,"[雪原跑旗] 恭喜 "+player.getName()+" 完成挑战了！在本次活动中获得第 "+rank+" 名！");
		var str = "恭喜您！您获得本次#b雪原跑旗#k第#r " +rank+ "#k 名\r\n您获得了奖励:\r\n";
		if(rank<6){
			
		
			for(var i = 0; i<reward.length;i++){
				if(rank == reward[i][0]){
					str += "#v"+reward[i][1]+"# x "+reward[i][2]+" \r\n"
					player.gainItem(reward[i][1],reward[i][2]);
				}else{
					continue;
				}
			}
			
		}else{
			str += "#v2631944# x 1 #v2614025# x 1 #v2630091# x 1 \r\n"
			player.gainItem(2631944,1);
			player.gainItem(2614025,1);
			player.gainItem(2630091,1);
			
			
		}
		npc.say(str);
	}

}

 