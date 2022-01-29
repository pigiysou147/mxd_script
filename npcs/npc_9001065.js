
var selectedItem = -1;
var selectedCost = -1;
var reward = new Array(

//Array(名次, 物品ID, 数量,"说明")   2435795
Array(1, 2435795, 10,"企鹅币"),  
Array(2, 2435795, 8,"企鹅币"),
Array(3, 2435795, 6,"企鹅币"),  
Array(4, 2435795, 5,"企鹅币"),
Array(5, 2435795, 5,"企鹅币"),  
Array(6, 2435795, 5,"企鹅币"),
Array(7, 2435795, 4,"企鹅币"),  
Array(8, 2435795, 4,"企鹅币"),
Array(9, 2435795, 4,"企鹅币"),  
Array(10, 2435795, 4,"企鹅币"),
Array(11, 2435795, 3,"企鹅币"),  
Array(12, 2435795, 3,"企鹅币"),
Array(13, 2435795, 3,"企鹅币"),  
Array(14, 2435795, 3,"企鹅币"),
Array(15, 2435795, 3,"企鹅币"),  
Array(16, 2435795, 2,"企鹅币"),
Array(17, 2435795, 2,"企鹅币"),  
Array(18, 2435795, 2,"企鹅币"),
Array(19, 2435795, 2,"企鹅币"),  
Array(20, 2435795, 2,"企鹅币"),
Array(21, 2435795, 2,"企鹅币"), 
Array(22, 2435795, 2,"企鹅币"),
Array(23, 2435795, 2,"企鹅币"),  
Array(24, 2435795, 2,"企鹅币"),
Array(25, 2435795, 2,"企鹅币"),  
Array(26, 2435795, 2,"企鹅币"),
Array(27, 2435795, 2,"企鹅币"), 
Array(28, 2435795, 2,"企鹅币"),
Array(29, 2435795, 2,"企鹅币"),  
Array(30, 2435795, 2,"企鹅币"),
Array(31, 2435795, 1,"企鹅币"),  
Array(32, 2435795, 1,"企鹅币"),
Array(33, 2435795, 1,"企鹅币"), 
Array(34, 2435795, 1,"企鹅币"),  
Array(35, 2435795, 1,"企鹅币"),
Array(36, 2435795, 1,"企鹅币"), 
Array(37, 2435795, 1,"企鹅币"),  
Array(38, 2435795, 1,"企鹅币"),
Array(39, 2435795, 1,"企鹅币"), 
Array(40, 2435795, 1,"企鹅币"),  
Array(41, 2435795, 1,"企鹅币"),
Array(42, 2435795, 1,"企鹅币"), 
Array(43, 2435795, 1,"企鹅币"),  
Array(44, 2435795, 1,"企鹅币"),
Array(45, 2435795, 1,"企鹅币"), 
Array(46, 2435795, 1,"企鹅币"),  
Array(47, 2435795, 1,"企鹅币"),
Array(48, 2435795, 1,"企鹅币"), 
Array(49, 2435795, 1,"企鹅币"),  
Array(50, 2435795, 1,"企鹅币"),
Array(51, 2435795, 1,"企鹅币"), 
Array(52, 2435795, 1,"企鹅币"),  
Array(53, 2435795, 1,"企鹅币"),
Array(54, 2435795, 1,"企鹅币"), 
Array(55, 2435795, 1,"企鹅币"), 
Array(56, 2435795, 1,"企鹅币"),  
Array(57, 2435795, 1,"企鹅币"),
Array(58, 2435795, 1,"企鹅币"), 
Array(59, 2435795, 1,"企鹅币"),  
Array(60, 2435795, 1,"企鹅币"),
Array(61, 2435795, 1,"企鹅币"), 
Array(62, 2435795, 1,"企鹅币"),  
Array(63, 2435795, 1,"企鹅币"),
Array(64, 2435795, 1,"企鹅币"), 
Array(65, 2435795, 1,"企鹅币"),  
Array(66, 2435795, 1,"企鹅币"),
Array(67, 2435795, 1,"企鹅币"), 
Array(68, 2435795, 1,"企鹅币"),  
Array(69, 2435795, 1,"企鹅币"),
Array(70, 2435795, 1,"企鹅币"), 
Array(71, 2435795, 1,"企鹅币"),  
Array(72, 2435795, 1,"企鹅币"),
Array(73, 2435795, 1,"企鹅币"), 
Array(74, 2435795, 1,"企鹅币"),  
Array(75, 2435795, 1,"企鹅币"),
Array(76, 2435795, 1,"企鹅币"), 
Array(77, 2435795, 1,"企鹅币"), 
Array(78, 2435795, 1,"企鹅币"),  
Array(79, 2435795, 1,"企鹅币"),
Array(80, 2435795, 1,"企鹅币") 

)

if(map.getId()==993000800){
	player.changeMap(993000700);

	if(!player.hasItem(4032472,100)){
		npc.say("您非正常通过，无法获得奖励！");
	}else{
		player.loseItem(4032472,100);
		//查询当前最大的值
		var sql = "select max(rank) as rank from jili_game where gametype = 2";
		var push = player.customSqlResult(sql);
		var rank = 0;
		if (push.size() > 0) {
			var result = push.get(0);
			rank = result.get("rank");
		}
		rank++;
		//查重
		var sql = "select name from jili_game where gametype = 2 and name = '"+player.getName()+"'";
		var push = player.customSqlResult(sql);
		if (push.size() > 0) {
			npc.say("您已经领取过一次了，无法重复提交");
		}else{
			player.customSqlInsert("INSERT INTO `jili_game` (`name`,`rank`,`gametype`) VALUES ('" + player.getName() + "',"+rank+",2)");
			npc.broadcastPlayerNotice(13,"【雪崩逃生】" +" : 玩家 "+player.getName()+ " 在本次活动中获得第 "+rank+" 名！");
			var str = "恭喜您！您获得本次#b雪崩逃生#k第#r " +rank+ "#k 名\r\n您获得了奖励:\r\n";
					
			if(rank==1){
				
				player.gainItem(2630091,5);//随机箱子
				player.gainItem(2614025,3);//突破100万100%
				
			}else if(rank==2){
				
				player.gainItem(2630091,3);//随机箱子
				player.gainItem(2614025,2);//突破100万100%
				
			}else if(rank>=3 && rank<=5){
				
				player.gainItem(2630091,2);//随机箱子
				player.gainItem(2614025,1);//突破100万100%
				
			}else if(rank>5){
				
				player.gainItem(2630091,1);
				
			}
			
			
			npc.say(str);
		}
		
	}
	
}

 