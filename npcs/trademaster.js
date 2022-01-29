// Created by Jackson
// [贸易专家]  |  [9390220]
// MapName:交易所

	let lastCoin = player.getIntQuestRecordEx(17012, "base_coin");
	let income = player.getIntQuestRecordEx(17012, "base_income");
	let surplus = player.getIntQuestRecordEx(17012, "base_surplus");
	let done = "1".equals(player.getQuestRecordEx(17011, "S"));
	let gain = done ? lastCoin + income + surplus : lastCoin;
	var item =player.getInventorySlot(-1,-11);
	if(!player.hasItem(4310100, 10)){
		if (player.gainItem(4310100, 10)) {
					npc.say("已发放了缺少的硬币,打开物品栏确认吧");
			} else {
					npc.sayNext("背包空间不足，无法获得金币，请清理背包其他栏！");
			}
	} else if (!player.isQuestCompleted(17007) ||!player.isQuestCompleted(17006)) {
			npc.say("只有完成了教程任务,才能进行交易!");
	}else if(item==null){
		npc.say("请佩戴好武器");
	} else {
			let sel = npc.askMenu("你好, #e#b#h0##k#n。欢迎来到凯梅尔兹交易所。\r\n#b\r\n#L0#进行贸易。#l#b\r\n#L1#个人回生系统#l#b\r\n#L3#手动充能舰船能量#l#b\r\n#L4#手动补充贸易品#l");
			switch (sel) {
					case 0:

							if (income > 0) {
									if (done) {
											npc.sayNext("最近,你通过交易所获得的金币是 #b#e" + gain + "#k#n个。");
									} else {
											npc.sayNext("上次贸易没有顺利完成,我可以返还给你货物的金币,但是货物不会给你。");
									}
									let ret = npc.askYesNo("你现在要领取金币吗?");
									if (ret == 1) {
											if (player.gainItem(4310100, gain)) {
													if(done){
														if(getEventCount("航海首日")==0){
															setEventCount("航海首日",1,1);
															getEventCount("活跃");
					setEventCount("活跃",1,25);
															
														}
														
														let port = player.getIntQuestRecordEx(17012, "port");
														let sailCount = player.getIntQuestRecordEx(17018, String(5));
														var nowCount=1;
														if(port==5){
															
															var sql = "select * from hanghai where characterid = ?  ";

															var result = player.customSqlResult(sql, player.getId());

															if(result.size() > 0) {
																
																nowCount=result.get(0).get("total_count");
																var sql = "update hanghai set accountid=?,rank_count=rank_count+1,total_count=total_count+1 where characterid=?";

																var result = player.customSqlUpdate(sql,player.getAccountId(),player.getId());
																//每3关给一次奖励 
																//奖励为200万突破石
																
																if(nowCount>=3 && nowCount%3==0){
																	player.gainItem(4001118,2);
																	
																	if(item.getLimitBreak()>=10000000000){
																		item.setLimitBreak(item.getLimitBreak()+40000000);
																		player.updateItem(-11,item);
																	}else{
																		player.gainItem(2614025,4);
																	}
																	
																}
																															
															} else {
																var sql = "insert into  hanghai  (id,accountid,characterid,character_name,rank_count,total_count) values(0,?,?,?,?,?)";

																var result = player.customSqlInsert(sql,player.getAccountId(), player.getId(), player.getName(), 1,1);
																
															}
															npc.broadcastPlayerNotice(1,"恭喜玩家 " + player.getName() + " 完成了第"+(port+1)+"阶段的航海副本的第 "+nowCount+" 次航行 距离航海宝藏又近一步!!!！！！");
															npc.broadcastPlayerNotice(2,"恭喜玩家 " + player.getName() + " 完成了第"+(port+1)+"阶段的航海副本的第 "+nowCount+" 次航行 距离航海宝藏又近一步!!!！！！");
															npc.broadcastPlayerNotice(3,"恭喜玩家 " + player.getName() + " 完成了第"+(port+1)+"阶段的航海副本的第 "+nowCount+" 次航行 距离航海宝藏又近一步!!!！！！");
														}else{
															npc.broadcastPlayerNotice(1,"恭喜玩家 " + player.getName() + " 完成了第"+(port+1)+"阶段的航海副本 距离航海宝藏又近一步!!!！！！");
															npc.broadcastPlayerNotice(2,"恭喜玩家 " + player.getName() + " 完成了第"+(port+1)+"阶段的航海副本 距离航海宝藏又近一步!!!！！！");
															npc.broadcastPlayerNotice(3,"恭喜玩家 " + player.getName() + " 完成了第"+(port+1)+"阶段的航海副本 距离航海宝藏又近一步!!!！！！");
															
														}
													}
													
													
													player.updateQuestRecordEx(17012, "base_surplus", "0");
													player.updateQuestRecordEx(17012, "base_coin", "0");
													player.updateQuestRecordEx(17012, "base_income", "0");
													npc.sayNext("获得了金币 #b#e" + gain + "#k#n个。");
											} else {
													npc.sayNext("背包空间不足，无法获得金币，请清理背包其他栏！");
													break;
											}
									} else {
											npc.sayNext("可以重新和我对话领取金币！");
											break;
									}
							}
							player.openUI(0x22A);
							break;
					case 1:
							if (lastCoin > 0 || income > 0 || player.hasItem(4310100, 1)) {
									npc.say("你无法使用个人回生系统。");
							} else {
									if (player.gainItem(4310100, 10)) {
											npc.say("使用个人回生系统获得了#r10个#k的硬币,打开物品栏确认吧");
									} else {
											npc.sayNext("背包空间不足，无法获得金币，请清理背包其他栏！");
									}
							}
							break;
					case 2:
							break;
					case 3:

							let shipType = player.getIntQuestRecordEx(17008, "T");
							let maxEnergy = shipType == 2 ? 120 : 100;
							let uEnergy = player.getPQLog("SAIL_ENERGY");
							if (uEnergy <= 0) {
									npc.sayNext("能量处于已满状态");
							} else {
									if (player.getPQLog("RESET_SAIL_ENERGY") <= 0) {
											if (npc.askYesNo("手动充能舰船能量需要花费金币#r50000000#k，是否需要进行？")) {
													if (player.hasMesos(50000000)) {
															player.loseMesos(50000000);
															player.addPQLog("RESET_SAIL_ENERGY");
															player.resetPQLog("SAIL_ENERGY");
															player.updateSailBoatInfo();
															npc.sayNext("舰船能量充能成功。");
													} else {
															npc.sayNext("金币不足需要金币#r5000000#k。");
													}
											}
									} else {
											npc.sayNext("今天已经手动充能过舰船的能量了。");
									}
							}
							break;
					case 4:
							npc.sayNext("正常补充了贸易品或者已通过手动进行了补充.无法补充更多的贸易品");
							break;
			}
	}
function getEventCount(eventName) {

	var sql = "select value,time from accounts_event where accounts_id = ? and event =? ";

	var result = player.customSqlResult(sql, player.getAccountId(), eventName);

	if(result.size() > 0) {
		if(result.get(0) != null) {
			return result.get(0).get("value");
		}
	} else {
		var sql = "insert into  accounts_event (accounts_id,world,event,type,value) values(?,?,?,?,?)";

		var result = player.customSqlInsert(sql, player.getAccountId(), player.getWorld(), eventName, 0, 0);
		return 0;
	}

}

function setEventCount(eventName, type, value) {
	
	var sql = "update accounts_event set type=?,value=value+? where accounts_id=? and event=?";

	var result = player.customSqlUpdate(sql, type, value, player.getAccountId(), eventName);

}