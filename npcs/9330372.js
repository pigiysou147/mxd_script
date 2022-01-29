









var txt="\r\n           #e回忆岛顶级装备抢购活动#k\r\n";

var saleList= player.customSqlResult("select * from yy_sale order by state");
var itemid=0;
var meso=0;
var state =0;
var saleid=1;
	txt+="#e#r以下是本参与抢购活动的奖品~\r\n";
	txt+="以下物品为全岛都可以参与，每次注入金币不能低于1E~\r\n";
	txt+="1E金币即为一条记录，注入越多，随机抽取概率越大。~#k\r\n";
	txt+="#e#b物品总金币需求值在所有玩家注入满了后会自动开奖哦~\r\n";
	txt+="开奖后可以自行领取奖励，别忘记背包清理格子哈~\r\n";
	if(player.isGm()){
		//管理员添加商品
		txt+="\r\n#L999# #r添加商品#k #l\r\n";
		
		
	}
	for(var i=0;i<saleList.size();i++){
		
		txt+="\r\n#e#L"+i+"# "+saleList.get(i).get("id")+" #v"+saleList.get(i).get("itemid")+"# 总需金额 "+saleList.get(i).get("meso")+"E金币 当前状态:#k";
		var flag=saleList.get(i).get("state");
		if(flag==0){
			txt+="#r正在参与#k"
		}else if(flag==1){
			txt+="#g等待领奖#k"
		}else if(flag==2){
			txt+="#b领奖完成#k"
		}
		txt+"#l";
	}
	
	
	let selection=npc.askMenu(txt);
	if(selection==999){
		var itemid = npc.askNumber("请输入要添加的道具ID。请不要乱填.",1,1,19999999);
		var meso = npc.askNumber("请输入总共需要的金币数量。单位为E.",1,1,1000);
		var sel = npc.askYesNo("请确认添加的道具为：#v"+itemid+"# 价格为："+meso+"E");
		if(sel==1){
			player.customSqlInsert("insert into yy_sale values (0,?,?,0)",itemid,meso);
		}
	}else{
		saleid=saleList.get(selection).get("id");
		itemid=saleList.get(selection).get("itemid");
		meso=saleList.get(selection).get("meso");
		state=saleList.get(selection).get("state");
		txt="\r\n";
		var recordList= player.customSqlResult("select * from yy_records where saleid=?",saleid);
		var count =0;
		if(recordList.size()>0){
			count=recordList.size();
		}
		if(player.isGm()){
			//管理员添加商品
			txt+="\r\n#L888# #r删除商品#k #l\r\n\r\n";
			
			
		}
		if(state==0){
			txt+="#v"+itemid+"# 需要参与的金额为:#r"+meso+"E#k 当前总参与金额为:#b"+count+"E#k\r\n";
			txt+="#L0# #r我要参与#k #l\r\n";
			txt+="#L1# #r我要领奖#k #l";
		}else{
			var name = player.customSqlResult("select * from yy_reward where saleid=?  ",saleid).get(0).get("charactername");
			txt+="#v"+itemid+"# 需要参与的金额为:#r"+meso+"E#k 当前总参与金额为:#b"+count+"E#k\r\n\r\n";
			txt+="获奖人为:#r"+name+"\r\n\r\n";
			txt+="#L1# #r我要领奖#k #l";
			txt+="#L2# #r查看该奖品所有参与记录#k #l";
		}
		
		
		
		let sel =npc.askMenu(txt);
		if(sel==0){
			var max =20;
			if((meso-count)<20){
				max=meso-count;
			}
			let number =npc.askNumber("请输入要参与的金额。一定要是1E的整数倍 \r\n#r不能输入1E5这样的金额#k \r\n #bPS:每次最大注入金额为20E哦",100000000,100000000,max*100000000);
			if(number%100000000!=0){
				npc.say("请输入正确的金额，一定要是1E金币的整数倍。如2E 3E");
			}else{
				if(player.hasMesos(number)){
				
					//再次确认 防止并发;
					recordList= player.customSqlResult("select * from yy_records where saleid=?",saleid);
					if(meso>=recordList.size()){
						for(var i=0;i<number/100000000;i++){
							player.customSqlInsert("insert into yy_records values (0,?,?,?,now())",saleid,player.getId(),player.getName());
						}
						if(meso-recordList.size()==number/100000000){
							//开奖
							var reward = player.customSqlResult("select * from yy_records where saleid=?  order by rand()",saleid);
							//开奖ID确定
							var reward_characterId=reward.get(0).get("characterid");
							var reward_characterName=reward.get(0).get("charactername");
							//开奖逻辑
							player.customSqlInsert("insert into yy_reward values (0,?,?,?,?,now())",saleid,itemid,reward_characterId,reward_characterName);
							player.customSqlUpdate("update yy_sale set state=1 where id =?",saleid);
							//开奖成功
							var item =player.makeItemWithId(itemid);
							npc.broadcastPlayerNotice(1,"[一元购开奖] 本次一元购的奖品为:"+item.getItemName()+" 奖品获得者为:"+reward_characterName+ "请玩家及时领取奖品");
						}
						
						player.loseMesos(number);
						npc.say("参与成功");
					}else{
						npc.say("手太慢了 不能参与了哦~");
					}
					
				}else{
					npc.say("金币不足");
				}
			}	

			
		}else if(sel==1){
			var reward = player.customSqlResult("select * from yy_reward where saleid=?  ",saleid);
			if(reward.size()<1){
				npc.say("当前奖品还未开奖");
			}else{
				//开奖ID
				var reward_characterId=reward.get(0).get("characterid");
				var reward_characterName=reward.get(0).get("charactername");
				//领奖
				var reward = player.customSqlResult("select * from yy_sale where id=?  ",saleid);
				
				if(reward_characterId==player.getId()){
					//确定领奖ID
					//查询当前奖品是否已经领取过。
					
						var rewardState=reward.get(0).get("state");
						var itemId=reward.get(0).get("itemid");
						if(rewardState==1){
							//可以领奖
							player.gainItem(itemId,1);
							player.customSqlUpdate("update yy_sale set state=2 where id =?",saleid);
							npc.say("领取成功");
						}else{
							npc.say("该奖品已经被领取过了");
						}
					
					
				}else{
					npc.say("你不是领奖的人哦~ 中奖的用户是：#r"+reward_characterName);
				}
			}
			
		}else if(sel==2){
			txt="\r\n";
			var recordList = player.customSqlResult("select count(id) count,charactername from yy_records where saleid=? GROUP BY characterid  ",saleid);
			for(var i=0;i<recordList.size();i++){
				txt+="#b  参与人:  "+recordList.get(i).get("charactername")+"  #r参与金币:"+recordList.get(i).get("count")+" E#k  \r\n";
			}
			npc.say(txt);
		}else if(sel==888){
			txt="\r\n";
			let yel = npc.askYesNo("是否删除#v"+itemid+"#?");
			if(yel==1){
				player.customSqlUpdate("delete from yy_sale where id =?",saleid);
				npc.say(txt+"删除成功");
			}
			
		}
	}
	

