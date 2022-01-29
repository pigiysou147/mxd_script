//猜拳 by 幾裏


var itemId = 4033247; //猜拳幣
var percent = 0;//手續費百分比


while(true){
	var str = "#b猜拳#n\r\n"
	str += "#L10086##r猜拳比賽說明#l\r\n"
	str += "#L0##r參加猜拳比賽#l\r\n"
	str += "#L1##r發布猜拳比賽#l\r\n"
	str += "#L2##r查看我的獎勵#l\r\n"
	var selected = npc.askMenu(str);


	switch(selected){
		case 10086:
			npc.say("猜拳說明：\r\n每個玩家皆可發布比賽，會先扣掉本金，目前可以賭點券跟破楓。\r\n有玩家參與你的比賽後，看是誰輸誰贏，平手和贏家皆可領取獎勵。");
			break;
		case 0:
			//查看可參加的猜拳比賽
			var sql = "select * from jili_punch where winner is null and banker <> '"+player.getName()+"' order by date";
			var push = player.customSqlResult(sql);
			if (push.size() == 0) {
				npc.say("#b暫無可參加的比賽！");
			}else{
				str = "#b選擇查看/參加比賽:\r\n";
				for(let i = 0;i<push.size();i++){
					let signle = push.get(i);
					var gameType = signle.get("type");
					var ss = "";
					if(gameType == "0"){
						ss = "點券"
					}
					str += "#L"+i+"##r發布人<"+signle.get("banker")+"> 賭註<"+(gameType == "0" ? "點券" : "#v"+gameType+"#")+"> 數量<"+signle.get("number")+">#l\r\n";
				}
				selected = npc.askMenu(str);
				
				var punch = push.get(selected);
				var punchId = punch.get("id");
				var bPlay = parseInt(punch.get("play")); //莊家出的什麽
				str = "";
				str += "發布人:"+punch.get("banker")+"\r\n";
				var gameType = parseInt(punch.get("type"));
				str += "賭註:"+(gameType == 0 ? "點券" : "#v"+gameType+"#")+"\r\n";
				var number = parseInt(punch.get("number"));
				str += "數量:"+number+"\r\n";
				str += "#L1#出剪刀#l\r\n"
				str += "#L2#出石頭#l\r\n"
				str += "#L3#出布#l\r\n"
				
				selected = npc.askMenu(str);
				
				if(gameType != 0 && !player.hasItem(itemId,number)){
					npc.say("你的#v"+itemId+"#沒有"+number+"個 ,無法參加");
				}else if(gameType == 0 && player.getCashShopCurrency(1) < number){
					npc.say("你的點券不足 ,無法參加");
				}else{
					//參加比賽
					//防止重覆參加 必須進行再次驗證比賽狀態
					var sql = "select * from jili_punch where winner is null and id = '"+punchId+"'";
					var push = player.customSqlResult(sql);
					if(push.size() > 0){
						//進行剪刀石頭布算法
						if((selected == 1 && bPlay == 3) || (selected == 2 && bPlay == 1) || (selected == 3 && bPlay == 2)){
							//參加者贏（莊家的對手）
							if(gameType != 0){
								player.loseItem(itemId,number);
							}else{
								player.modifyCashShopCurrency(1,-number);
							}
							player.customSqlUpdate("update jili_punch set opponent = '"+player.getName()+"' ,winner = '"+player.getName()+"' where id = '"+punchId+"';");
							npc.broadcastPlayerNotice(4,"[猜拳]：玩家 "+player.getName()+" 參與了 "+punch.get("banker")+" 的比賽，並且獲得了勝利！")
							npc.say("#b恭喜你贏得勝利！請到《我的獎勵》中#r領取本金和獎勵#b哦！");
						}else if(selected == bPlay){
							//平局
							player.customSqlUpdate("update jili_punch set opponent = '"+player.getName()+"' ,winner = '0' where id = '"+punchId+"';");
							npc.broadcastPlayerNotice(4,"[猜拳]：玩家 "+player.getName()+" 參與了 "+punch.get("banker")+" 的比賽，打成了平局！")
							npc.say("平局哦， 本局沒有扣錢哦！！");
						}else{
							//莊家贏
							if(gameType != 0){
								player.loseItem(itemId,number);
							}else{
								player.modifyCashShopCurrency(1,-number);
							}
							player.customSqlUpdate("update jili_punch set opponent = '"+player.getName()+"' ,winner = banker where id = '"+punchId+"';");
							npc.broadcastPlayerNotice(4,"[猜拳]：玩家 "+player.getName()+" 參與了 "+punch.get("banker")+" 的比賽，但是很遺憾 他失敗了！")
							npc.say("非常遺憾！你輸了！");
						}
						
					}else{
						npc.say("該比賽已經被別人搶走了哦！");
					}
				}
				
				
			}
			break;
		case 1:
			//發布猜拳比賽
			str = "";
			str += "請選擇猜拳賭註類型\r\n";
			str += "#L1##v"+itemId+"#\r\n";
			str += "#L2#點券#l\r\n";
			var gameType = npc.askMenu(str);
			
			
			while(true){
				str = "";
				str += "請輸入下註數量 " + (gameType == 1 ? "#v"+itemId+"#，擁有"+player.getAmountOfItem(itemId)+"個" : "點券，剩余"+player.getCashShopCurrency(1));
				var min =  (gameType == 1 ? 1 : 10000);
				
				var number = npc.askNumber(str,"1",min,9999999);
				if(gameType == 1 && !player.hasItem(itemId,number)){
					npc.say("你的#v"+itemId+"#沒有那麽多個 請重新輸入");
				}else if(gameType == 2 && player.getCashShopCurrency(1) < number){
					npc.say("你的點券不足 請重新輸入");
				}else{
					break;
				}
			}
			
			str = "";
			str += "這輪比賽你出什麽？\r\n"
			str += "#L1# 剪刀 #l \r\n"
			str += "#L2# 石頭 #l \r\n"
			str += "#L3# 布 #l \r\n"
			selected = npc.askMenu(str);
			
			str = "";
			str += "請確認比賽信息:\r\n";
			str += "下註" + (gameType == 1 ? "#v"+itemId+"#" : "點券") + "數量為: "+number;
			str += "\r\n你的出拳為:"+getPunch(selected);
			var YN = npc.askYesNo(str)
			
			if(YN == 1){
				
				if(gameType == 1){
					player.loseItem(itemId,number);
				}else{
					player.modifyCashShopCurrency(1,-number);
				}
				var gt = (gameType == 1 ? itemId : 0)
				player.customSqlInsert("insert into jili_punch (banker,play,type,number,date) value ('"+player.getName()+"','"+selected+"','"+gt+"','"+number+"',now())");
				npc.broadcastPlayerNotice(4,"[猜拳]：玩家 "+player.getName()+" 氣勢洶洶的發布了一場猜拳比賽，趕快來參與吧！")
				npc.say("發布成功");
			}else{
				npc.say("想好再來比賽吧！");
			}
			
			
			break;
		case 2:
			//(領獎) select * from jili_punch where rewardStage = 0 and ( winner = '幾裏' or (opponent = '幾裏' and winner = '0'))
			var sql = "select * from jili_punch where rewardStage = 0 and ( winner =  '"+player.getName()+"' or (banker =  '"+player.getName()+"' and winner = '0'))";
			var push = player.customSqlResult(sql);
			if (push.size() == 0) {
				npc.say("#b暫無可領獎勵！");
			}else{
				str = "#b選擇領取獎勵的比賽:\r\n";
				for(let i = 0;i<push.size();i++){
					let signle = push.get(i);
					var gameType = signle.get("type");
					var winner = signle.get("winner");
					if(winner == "0"){
						winner = "平手"
					}
					var ss = "";
					if(gameType == "0"){
						ss = "點券"
					}
					str += "#L"+i+"##r莊家<"+signle.get("banker")+"> 對手<"+signle.get("opponent")+"> 賭註<"+(gameType == "0" ? "點券" : "#v"+gameType+"#")+"><"+signle.get("number")+">贏家<"+winner+">#l\r\n";
				}
				selected = npc.askMenu(str);
				var punch = push.get(selected);
				var number = parseInt(punch.get("number"));
				var punchId = punch.get("id");
				var gameType = punch.get("type");
				player.customSqlUpdate("update jili_punch set rewardStage = 1 where id = '"+punchId+"';");
				if(winner == "平手"){
					if(gameType != "0"){
						player.gainItem(itemId,number);
					}else{
						player.modifyCashShopCurrency(1,number);
					}
					npc.say("打成平手，收回本金");
				}else{
					if(gameType != "0"){
						player.gainItem(itemId,Math.floor(number*2*(100-percent)/100));
					}else{
						player.modifyCashShopCurrency(1,Math.floor(number*2*(100-percent)/100));
					}
					npc.say("贏了！獲得雙方賭註(手續費"+percent+"%)");
				}
			}
			break;
	}
}

function getPunch(type){
	if(type == 1) return "剪刀";
	if(type == 2) return "石頭";
	if(type == 3) return "布";
}