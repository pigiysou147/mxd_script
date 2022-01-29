
var lq2 ="#fUI/UIWindow2.img/actionAchievement/achievement/win1/bt/ani/0#"
var vvv4 = "#fEffect/CharacterEff/1112926/0/0#"; //红星
var z1 = "#fEffect/CharacterEff/1112926/0/0#"; //红星

//if(1==1){
	var text ="\r\n\t\t\t"+lq2+"#r活动福利专区#k"+lq2+"\r\n\r\n";

	text += "#e#b#L117#[双旦好礼]#r土豪排行榜#l ";
    // text += "#e#b#L115#[双旦好礼]]#r达标好礼#k\r\n\r\n";
	// text += "#e#b#L113#[双旦好礼]#r现金点礼包#l";
    // text += "#e#b#L116#[双旦好礼]#r每日消耗直冲#k\r\n\r\n";
	// text += "#e#b#L114#[双旦好礼]#r余额消费礼包#l  ";
	text += "#e#b#L222##r回忆秘宝商店(#v4009398#)#l\r\n\r\n";
    //text += "#e#b#L117#[幸运有你]#r端午庆充值榜#k\r\n\r\n";
	text += "#e#b#L120#[每周限量]#r一周限购瓶子包(每周每人限购15个)#k\r\n\r\n";
	//text += "#e#b#L121#[排行榜]#r蘑菇怀念充值对比#k\r\n\r\n";
	text += "#e#b#L119#[周末特惠]#r周末礼包(仅限周末购买)#k\r\n\r\n";
	text += "#e#b#L110#[个人限购]#r个人限购礼包（账号限购）#l\r\n\r\n";
	//text += "#e#b#L109#[个人限购]#r个人礼包宝石兑换(运气宝石)#l\r\n\r\n";


	let selection = npc.askMenuS(text);

	if(selection ==108){
		
		player.runScript("国庆消费累计");
	}else if(selection ==109){
		
		player.runScript("充值兑换");
	}else if(selection ==222){
		
		player.runScript("四叶草商店");
	}else if(selection ==223){
		
		player.runScript("圣诞达标");
	}else if(selection ==119){
		
		player.runScript("周末礼包");
	}else if(selection ==120){
		
		player.runScript("瓶子礼包");
	}else if(selection==110){
		player.runScript("个人礼包");
	}else if(selection==111){
		player.runScript("双11抢购");
	}else if(selection==113){

		player.runScript("牛年礼包");
	}else if(selection==114){
		player.runScript("牛年消费礼包");
	}else if(selection==115){
		//npc.say("请等待开放");
		player.runScript("双11达标");
	}else if(selection==116){
		player.runScript("牛年每日消耗直冲");
	}else if(selection==117){
		player.runScript("牛年排行榜");
	}else if(selection==121){
		
		var txt="\r\n#r#e";
		txt+="#L1#查看11月榜单#l\r\n\r\n";
		txt+="#L2#充值达标奖励#l";
		
		let bang=npc.askMenu(txt);
		
		if(bang==1){
			txt="#r#e当前是两个服11月份各自的充值总数:\r\n";
			txt+="#L0#回忆岛总充值："+player.customSqlResult("select sum(rmb) total from paylog where paytime>'2020-11' ").get(0).get("total")+"#l\r\n\r\n";
			txt+="#L1#怀念岛总充值："+player.customSqlResult("select sum(total) total from paylog_duibi ").get(0).get("total")+"#l\r\n\r\n";
			
			let sel=npc.askMenu(txt);
			if(sel==0){
				txt="#r当前是回忆岛的充值详情:#k\r\n";
				var resultList=player.customSqlResult("SELECT hypay.`name`,sum(rmb) total from paylog,hypay where paytime>'2020-10' and hypay.accname=paylog.account GROUP BY paylog.account ORDER BY total desc");
				txt += "\t#e名次#n\t#e玩家昵称#n\t\t\t#e充值#n\t\t #e #n\r\n";
				for(var i = 0; i < resultList.size(); i++) {
					var rank = i + 1;
					var result = resultList.get(i);
					if(result == null) {
						break;
					}
					if(rank == 1) {
						txt += "#r";
					} else if(rank == 2) {
						txt += "#g";
					} else if(rank == 3) {
						txt += "#b";
					}
					
					txt += "\t " + rank + "\t\t ";
					// 填充名字空格
					txt += result.get("name");
					for(var j = 18 - result.get("name").length; j > 0; j--) {
						txt += " ";
					}
					txt += "\t " + result.get("total");
					txt += "\r\n";
				}
				
			}else{
				txt="#r当前是怀念岛的充值详情:#k\r\n";
				var resultList=player.customSqlResult("select *  from paylog_duibi  order by total desc");
				txt += "\t#e名次#n\t#e玩家昵称#n\t\t\t#e充值#n\t\t #e #n\r\n";
				for(var i = 0; i < resultList.size(); i++) {
					var rank = i + 1;
					var result = resultList.get(i);
					if(result == null) {
						break;
					}
					if(rank == 1) {
						txt += "#r";
					} else if(rank == 2) {
						txt += "#g";
					} else if(rank == 3) {
						txt += "#b";
					}
					
					txt += "\t " + rank + "\t\t ";
					// 填充名字空格
					txt += result.get("name");
					for(var j = 18 - result.get("name").length; j > 0; j--) {
						txt += " ";
					}
					txt += "\t " + result.get("total");
					txt += "\r\n";
				}
			}
				npc.say(txt);
		}else if(bang==0){
			txt="#r#e当前是两个服9月份各自的充值总数:\r\n";
			txt+="#L0#回忆岛总充值："+player.customSqlResult("select sum(rmb) total from paylog where paytime>'2020-08-25' and paytime<'2020-10'").get(0).get("total")+"#l\r\n\r\n";
			txt+="#L1#怀念岛总充值："+player.customSqlResult("select sum(total) total from paylog_jiuyue ").get(0).get("total")+"#l\r\n\r\n";
			
			let sel=npc.askMenu(txt);
			if(sel==0){
				txt="#r当前是回忆岛的充值详情:#k\r\n";
				var resultList=player.customSqlResult("SELECT hypay.`name`,sum(rmb) total from paylog,hypay where paytime>'2020-08-25' and paytime<'2020-10' and hypay.accname=paylog.account GROUP BY paylog.account ORDER BY total desc");
				txt += "\t#e名次#n\t#e玩家昵称#n\t\t\t#e充值#n\t\t #e #n\r\n";
				for(var i = 0; i < resultList.size(); i++) {
					var rank = i + 1;
					var result = resultList.get(i);
					if(result == null) {
						break;
					}
					if(rank == 1) {
						txt += "#r";
					} else if(rank == 2) {
						txt += "#g";
					} else if(rank == 3) {
						txt += "#b";
					}
					
					txt += "\t " + rank + "\t\t ";
					// 填充名字空格
					txt += result.get("name");
					for(var j = 18 - result.get("name").length; j > 0; j--) {
						txt += " ";
					}
					txt += "\t " + result.get("total");
					txt += "\r\n";
				}
				
			}else{
				txt="#r当前是怀念岛的充值详情:#k\r\n";
				var resultList=player.customSqlResult("select *  from paylog_jiuyue  order by total desc");
				txt += "\t#e名次#n\t#e玩家昵称#n\t\t\t#e充值#n\t\t #e #n\r\n";
				for(var i = 0; i < resultList.size(); i++) {
					var rank = i + 1;
					var result = resultList.get(i);
					if(result == null) {
						break;
					}
					if(rank == 1) {
						txt += "#r";
					} else if(rank == 2) {
						txt += "#g";
					} else if(rank == 3) {
						txt += "#b";
					}
					
					txt += "\t " + rank + "\t\t ";
					// 填充名字空格
					txt += result.get("name");
					for(var j = 18 - result.get("name").length; j > 0; j--) {
						txt += " ";
					}
					txt += "\t " + result.get("total");
					txt += "\r\n";
				}
			}
				npc.say(txt);
		}else if(bang==2){
			player.runScript("充值达标");
		}
		
		
	}
