
var status = -1;
var head = "#fUI/UIWindow2.img/Quest/quest_info/summary_icon/summary#\r\n";
var icon = "#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#";
var uiFPaper = "#fUI/UIWindow.img/RpsGame/Fpaper#";
var uiFRock = "#fUI/UIWindow.img/RpsGame/Frock#";
var uiFScissor = "#fUI/UIWindow.img/RpsGame/Fscissor#";
var uiPaper = "#fUI/UIWindow.img/RpsGame/paper#";
var uiRock = "#fUI/UIWindow.img/RpsGame/rock#";
var uiScissor = "#fUI/UIWindow.img/RpsGame/scissor#";
var textArr = Array("锤子","剪刀","布");
var FpictureArr=Array(uiFRock, uiFScissor, uiFPaper);
var pictureArr=Array(uiRock, uiScissor, uiPaper);
var postPoints = 0;
var typed=-1;
var myHsc;
var lists = null;
var enemy = null;
var beDelete = Array();
var winPoints= 0;

		var sql = "select sum(Cpoint) from memory_hscrank";
		var result = player.customSqlResult(sql);
		var Cpoint = (result.get(0).get("sum(Cpoint)")*0.0001);
		if (Cpoint==null){
			Cpoint = 0;
		}
		var text =head+"#e卡布：生财之道！快来猜拳吧！!!\r\n";
		text+="本服当前赌博累计资金：#r"+Math.round(Cpoint)+"W #k点。\r\n";
		text+="#L4##r[简介]猜拳对战版说明#l#b\r\n\r\n";
		text+="#L0#"+icon+" 发起新挑战#l\r\n";
		text+="#L1#"+icon+" 查看挑战列表#l\r\n";
		text+="#L2#"+icon+" 查看我发起的挑战#l\r\n";
		text+="#L3#"+icon+" 撤销我的挑战#l\r\n";
		text+="#L5#"+icon+" 查看赌博排名#l\r\n";
		selection = npc.askMenu(text);

		typed = selection;
		if (selection == 0) {
			var text = "请输入你要投注的金额：";
			selection =npc.askNumber(text, 0, 5000, 99999);
		} else if (selection == 1) {
			var text = "";
			
			lists = list();
			if (lists == null) {
				selection = npc.say("暂时没有其他人发起挑战！");
				typed = -1;
			} else {
				typed = 999;
				text = "#d#e< 正在火热进行中的挑战 >#n#k\r\n";
				for(var key in lists) {
					var id = lists[key]['id'];
					var sponsorname = lists[key]['sponsorname'];
					var points = lists[key]['points'];
					text+="#L"+key+"##b[编号"+id+"]#k 挑战【#r"+sponsorname+"#k】\t赏金【#r"+points+"#k】#l\r\n";
				}
				selection = npc.askMenu(text);
				// 
			}
		} else if (selection == 2) {
			
			var text = "#e#d您的战况入下：#n#k\r\n";
			
			battles = getMyBattles();
			if (battles==null) {
				selection = npc.say("暂无记录");
				typed = -1;
			}else{
				winPoints = 0;
				var typed = 888;
				var bj = 0;
				for(var key in battles) {
					var id = battles[key]['id'];
					var sponsorname = battles[key]['sponsorname'];
					var points = battles[key]['points'];
					var challengername = battles[key]['challengername'];
					var spunchway = battles[key]['spunchway'];
					var cpunchway = battles[key]['cpunchway'];
					text+="#b[编号"+id+"]#k 赌资【#r"+points+"#k】";
					beDelete.push(id);
					var result = spunchway - cpunchway;
					if (result == -1 || result == 2) {
						//win
						bj += points*1;
						winPoints += points*1;
						text+="#b【赢】#k";
					} else if (result == 0) {
						//draw
						bj += points*1;
						text+="#d【平】#k";
					} else {
						//lose
						text+="#r【输】#k"
					}
					text+="\r\n";
				}
				winPoints = Math.floor(winPoints*0.9 + bj);
				text+="共赢的点卷"+winPoints+"，点击#b#e下一步#n#k领取点卷。\r\n";
				npc.sayNext(text);
				
			}
		} else if (selection == 3) {
			var text = "";
			
			lists = getMyList();
			if (lists == null) {
				npc.say("暂时没有可以撤回的挑战！");
				typed = -1;
			} else {
				typed = 777;
				text = "#d#e< 你的所有有效挑战列表 >#n#k\r\n";
				beDelete = Array();
				for(var key in lists) {
					var id = lists[key]['id'];
					var sponsorname = lists[key]['sponsorname'];
					var points = lists[key]['points'];
					var spunchway = lists[key]['spunchway'];
					beDelete.push(id);
				text += "#L" + id + "##b[编号" + id + "]#k \t赏金【#r" + points + "#k】 出招：【#b" + textArr[spunchway] + "#k】#l\r\n";
				
				
					
				}
				text+="\r\n点击#b#e下一步#n#k将撤回所有有效挑战列表，并可以得到点卷。如不想撤回，请点击#b结束对话#k";
				selection = npc.askMenu(text);
				// 
			}
		}else if (selection == 4) {
			var text = "#d#e<发起新挑战>#n#k\r\n";
			text+="\t点击[#b"+icon+" 发起新挑战#k]可以发起新挑战至少需要#r5000#k点卷作为赏金。任意选择#b锤子、剪刀、布#k作为你出的拳招，发布完成后，你的挑战信息将会以列表的形式显示在#b#e挑战列表#b#k\r\n";
			text+="#d#e<进入挑战>#n#k\r\n";
			text+="\t点击[#b"+icon+" 查看挑战列表#k]可以进入挑战，挑战列表中会显示发起人的角色名，发起的赏金，点击列表项目进入挑战，任意选择#b锤子、剪刀、布#k作为你出的拳招，如果你赢的胜利时可以获得赏金的90%作为奖励。如果你输了，会失去赏金的100%。\r\n";
			text+="#d#e<领取赏金>#n#k\r\n";
			text+="\t点击[#b"+icon+" 查看我发起的挑战#k]可以看到你所发起的挑战的比赛结果，并领取相应的赏金。\r\n";
			text+="#d#e<撤销挑战>#n#k\r\n";
			text+="\t点击[#b"+icon+" 撤销我的挑战#k]可以撤销你所发布的未有人参与的挑战项目，并且返还100%赏金。\r\n";
			npc.say(text);
			typed = -1;
		}else if (selection == 5) {//查看排名
			var sql = "select Name,Win,Lose,Cpoint from memory_hscrank order by Win desc,Lose Asc limit 10;";
			var result = player.customSqlResult(sql);
			var text = "\t\t\t\t#e#d★ 参与赌王的前十排名 ★#k#n\r\n\r\n";
			text += "   #e名次#n\t#e玩家昵称#n\t\t#e赢#n\t#e输#n\t#e累计资金#n\t\t #e#n\r\n";
				for (var i = 0; i < result.size(); i++) {
				if (i == 0) {
					text += "#r";
				} else if (i == 1) {
					text += "#g";
				} else if (i == 2) {
					text += "#b";
				}
				text += "\t " + (i+1) + "\t\t ";
				
				// 填充名字空格
				text += result.get(i).get("Name");
				for (var j = 16 - result.get(i).get("Name").getBytes().length; j > 0 ; j--) {
					text += " ";
				}
				text += "" + result.get(i).get("Win");
				text += "\t   " + result.get(i).get("Lose");
				text += "\t " + result.get(i).get("Cpoint");
				text += "\r\n";
				}
			npc.say(text, false);
			typed = -1;
		}

		if (typed == 888 || typed == 777) {
			
			var Can = true;
			var text = "恭喜你，成功领取了#r"+winPoints+"#k点卷！";
			if (typed == 777){
				lists = getMyList();
				if (lists == null) {
					Can = false;
					npc.say("你这个挑战已经被人接受了！");
				}else{
					var PD = false;
					winPoints = 0;
					for(var key in lists) {
						var points = lists[key]['points'];
						winPoints+=points*1;
						if (lists[key]['id']==selection){
							PD = true;
						}
					}
					if (!PD){
						Can = false;
						npc.say("你这个挑战已经被人接受了！");
					}else{
						text = "撤回挑战成功，领取了#r"+winPoints+"#k点卷"+selection;
					}
				}
			}
			if(Can){
				player.modifyCashShopCurrency(1,winPoints);
				player.dropMessage(-2,"获得了点券 "+winPoints);
				del(beDelete);
				beDelete = Array();
				npc.say(text);
			}
			 
		} else if(typed>=0){
			
			var Can = true;
			var validCount = checkValidCount();
			var text = "#d#e[发起新的挑战]#n#k\r\n请选择您要向对手出的拳：\r\n";
			if (typed == 999) {
				enemy = lists[selection];
				points=enemy['points'];
				if (player.getCashShopCurrency(1) < points) {
					npc.say("你至少需要#r"+points+"#k点卷，才可以向他挑战！");
					typed=-1;
					Can = false;
				}else{
					text = "#d#e[正在向#b"+enemy['sponsorname']+"#d挑战]#n#k\r\n来吧，选一个拳和他拼一拼：\r\n";
				}
			} else {
				if (validCount>=5) {
					npc.say("你已经发布了#r5#k条挑战尚未完结，无法继续发布挑战，您可以选择#b撤回挑战#k或者#b挑战别人#k，当然您也可以选择#r撤回挑战#k来收回点卷。");
					typed=-1;
					Can = false;
				}else{
					postPoints = selection;
					if (player.getCashShopCurrency(1) < postPoints) {
						npc.say("你没有#r"+postPoints+"点卷，无法发起挑战#k！");
						typed=-1;
						Can = false;
					}
				}
			}
			if(Can){
				text+="#L0#"+uiFRock+"#l";
				text+="#L1#"+uiFScissor+"#l";
				text+="#L2#"+uiFPaper+"#l";
				selection = npc.askMenu(text);
			}
		}

		//pstmt.executeUpdate();
		if (typed == 999) {
			//挑战结果
			
			var myHand = selection;
			var id = enemy['id'];
			var enemyHand = enemy['spunchway'];
			var result =  myHand - enemyHand;
			var isSuccess = update(id, myHand);
			var resultPic = FpictureArr[myHand]+" "+pictureArr[enemyHand];
			if (!isSuccess) {
				npc.say("本局已经被人抢先了一步，请更换一个比赛对象吧。");
			}else if (result == -1 || result == 2) {
				//win
				player.customSqlInsert("INSERT INTO memory_hscrank (NAME,Win,Lose,Cpoint) VALUES ('"+player.getName()+"',1,0,"+enemy['points']+")  ON DUPLICATE KEY UPDATE Win=Win+1,Lose=Lose,Cpoint=Cpoint+"+enemy['points']+"");
				//pstmt.executeUpdate();//赢的一方记录
				player.customSqlInsert("INSERT INTO memory_hscrank (NAME,Win,Lose,Cpoint) VALUES ('"+enemy['sponsorname']+"',0,1,"+enemy['points']+")  ON DUPLICATE KEY UPDATE Win=Win,Lose=Lose+1,Cpoint=Cpoint+"+enemy['points']+"");
				//pstmt.executeUpdate();//输的一方记录
				var points = Math.floor(enemy['points']*0.9);
				player.modifyCashShopCurrency(1,points);
				player.dropMessage(-2,"获得了点券 "+points);
				npc.say("真是好拳法，赢了#r"+points+"#k点卷，继续找别人挑战吧！！\r\n"+resultPic);
				npc.broadcastPlayerNotice(0x07,"[拍卖-日常活动-赏金拳王] : 恭喜 " + player.getName() + " 赢取了 "+enemy['sponsorname']+" 的 " + points + " 点卷！");


				 
			} else if (result == 0) {
				//tie
				npc.say("唔~打成了平手，继续找别人挑战吧！！\r\n"+resultPic);
				 
			} else {
				//lose
				player.customSqlInsert("INSERT INTO memory_hscrank (NAME,Win,Lose,Cpoint) VALUES ('"+player.getName()+"',0,1,"+enemy['points']+")  ON DUPLICATE KEY UPDATE Win=Win,Lose=Lose+1,Cpoint=Cpoint+"+enemy['points']+"");
				//赢的一方记录
				player.customSqlInsert("INSERT INTO memory_hscrank (NAME,Win,Lose,Cpoint) VALUES ('"+enemy['sponsorname']+"',1,0,"+enemy['points']+")  ON DUPLICATE KEY UPDATE Win=Win+1,Lose=Lose,Cpoint=Cpoint+"+enemy['points']+"");
				//输的一方记录
				var points = enemy['points'];
				player.modifyCashShopCurrency(1,-points);
				player.dropMessage(-2,"消耗了点券 "+points);
				npc.say("悲剧了，输了#r"+points+"#k点卷，别灰心，继续找别人挑战吧！！\r\n"+resultPic);
				npc.broadcastPlayerNotice(0x07,"[拍卖-日常活动-赏金拳王] : 恭喜 " + enemy['sponsorname'] + " 赢取了 "+player.getName()+" 的 " + points + " 点卷！");
				 
			}
		} else if (typed == 0) {
			
			var punchway = selection;
			player.modifyCashShopCurrency(1,-postPoints);
			player.dropMessage(-2,"消耗了点券 "+postPoints);
			if (post(selection, postPoints)) {
				//npc.broadcastPlayerNotice(0x0F,"[赏金拳王] : 玩家 " + player.getName() + " 以" + postPoints + "点卷发起了挑战，谁敢与之一战？！");
				npc.say("您以#r"+postPoints+"#k点卷的赏金出拳成功，请耐心等待人来挑战。");
				 
			} else {
				npc.say("出拳失败，发生未知错误。请联系管理员");
				 
			}
		}


	function post(punchway, points) {
		var sql = "insert into memory_hsc(sponsor, spunchway, points, postedtime) values(?,?,?,?)";
		var currentTimeStamp = new Date().getTime();
		player.customSqlInsert(sql,player.getId(), punchway, points, currentTimeStamp);
		return true;
	}
	
	function checkValidCount() {
		var sql = "select count(id) as validcount from memory_hsc where sponsor = ? and postedtime >= ? ";
		var currentTimeStamp = new Date().getTime();
		var endTimeStamp = currentTimeStamp-12*3600*1000;
		var rs = player.customSqlResult(sql, player.getId(), endTimeStamp);
		var lists = Array();
		var count = 0;
		if (rs.size() != 0 ){
			count = rs.get(0).get("validcount");
		}
		return count;
	}
	
	//获取有效挑战列表
	function list(){
		//var sql = "select h.*, c1.name as sponsorname, c2.name as challengername from memory_hsc h, characters c1, characters c2 where sponsor != ? and postedtime >= ? and h.sponsor = c1.id and h.challenger=c2.id order by id desc";
		var sql = "select h.*, c.name as sponsorname from memory_hsc h, characters c where h.sponsor != ? and h.postedtime >= ? and h.sponsor = c.id and h.challenger=-1 order by rand() desc limit 50";
		var currentTimeStamp = new Date().getTime();
		var endTimeStamp = currentTimeStamp-12*3600*1000;
		var rs = player.customSqlResult(sql,player.getId(), endTimeStamp);
		var lists = [];
		var A=0;
		for(var i = 0 ; i<rs.size() ; i++) {
			var data = Array();
			data['id']=rs.get(i).get("id");
			data['sponsor']=rs.get(i).get("sponsor");
			data['spunchway']=rs.get(i).get("spunchway");
			data['points']=rs.get(i).get("points");
			data['sponsorname']=rs.get(i).get("sponsorname");
			//data['']
			lists.push(data);
			A++;
		}
		if (A>0)
			return lists;
		else
			return null;
	}
	
	//获取我的未有结果的挑战列表
	function getMyList(){
		var sql = "select h.*, c.name as sponsorname from memory_hsc h, characters c where h.sponsor = ? and h.sponsor = c.id and h.challenger=-1 order by rand() desc limit 50";
		var currentTimeStamp = new Date().getTime();
		var endTimeStamp = currentTimeStamp-12*3600*1000;
		var rs = player.customSqlResult(sql,player.getId());
		var lists = Array();
		var A = 0;
		for(var i = 0 ; i<rs.size() ; i++) {
			var data = Array();
			data['id']=rs.get(i).get("id");
			data['sponsor']=rs.get(i).get("sponsor");
			data['spunchway']=rs.get(i).get("spunchway");
			data['points']=rs.get(i).get("points");
			data['sponsorname']=rs.get(i).get("sponsorname");
			//data['']
			lists.push(data);
			A++;
		}
		if (A>0)
			return lists;
		else
			return null;
	}
	
	//更新战斗结果
	function update(id,cpunchway) {
		var sql = "update memory_hsc set challenger = ?, cpunchway = ? where id = ? and challenger=-1";
		var pstmt = player.customSqlUpdate(sql, player.getId(), cpunchway, id);
		//var currentTimeStamp = new Date().getTime();
		//pstmt.setLong(4, currentTimeStamp);
		var result = false;
		if (pstmt>0) {
			result = true;
		}
		return result;
	}
	
	//获取我的战况
	function getMyBattles(){
		var sql = "select h.*, c1.name as sponsorname, CASE h.challenger WHEN -1 then h.challenger ELSE c2.name end as challengername from memory_hsc h, characters c1, characters c2 where h.sponsor = ? and h.sponsor = c1.id and h.challenger=c2.id order by h.id desc";
		//var sql = "select h.*, c.name as sponsorname from memory_hsc h, characters c where h.sponsor != ? and h.postedtime >= ? and h.sponsor = c.id and h.challenger=-1 order by id desc";
		var rs = player.customSqlResult(sql,player.getId());
		var lists = Array();
		var A = 0;
		for(var i = 0 ; i<rs.size() ; i++) {
			var data = Array();
			data['id']=rs.get(i).get("id");
			data['sponsor']=rs.get(i).get("sponsor");
			data['spunchway']=rs.get(i).get("spunchway");
			data['points']=rs.get(i).get("points");
			data['sponsorname']=rs.get(i).get("sponsorname");
			data['challengername']=rs.get(i).get("challengername")
			data['cpunchway']=rs.get(i).get("cpunchway");
			lists.push(data);
			A++;
		}
		if (A>0)
			return lists;
		else
			return null;
	}
	
	//删除数据
	function del(ids) {
		var idStr = "";
		for(var key in ids) {
			ids[key]=parseInt(ids[key]);
			idStr+=ids[key]+",";
		}
		idStr=idStr.substring(0,idStr.length-1);
		var sql = "delete from memory_hsc where id in ("+idStr+") and sponsor = ?";
		var pstmt = player.customSqlUpdate(sql, player.getId());
		//var currentTimeStamp = new Date().getTime();
		//pstmt.setLong(4, currentTimeStamp);
		var result = false;
		if (pstmt>0) {
			result = true;
		}
		return result;
	}
	
