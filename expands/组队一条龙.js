var z = "#fUI/UIWindow/Quest/icon5/1#"; //"+z+"//美化
var tz14 = "#fEffect/CharacterEff/1112926/0/0#"; //红星
var xp = "#fItem/PetCapsule/Training/4/symbol/s#";
var tz12 = "#fEffect/CharacterEff/1112924/0/0#"; //黄星
var tz13 = "#fEffect/CharacterEff/1112925/0/0#"; //蓝星
var tz14 = "#fEffect/CharacterEff/1112926/0/0#"; //红星
var aaa = "#fUI/UIWindow4/PQRank/rank/gold#";
var vvv4 = "#fEffect/CharacterEff/1112926/0/0#"; //红星
var z1 = "#fEffect/CharacterEff/1112926/0/0#"; //红星

var item1 = Array(
	Array(4000019, 300),
	Array(4000000, 300),
	Array(4000016, 300)
);
var jiangli = new Array( //设置奖励 格式：道具ID，数量
    Array(2049116, 5), //
    Array(5062009, 300), //
    Array(5062500, 300), //
    Array(4031997, 30), //
    Array(4310028, 30), //
    Array(4310238, 5), //
    Array(2436343, 5) //
);

var item2 = Array(
	Array(4000243, 1, "格瑞芬森林,从火焰战场进去"),
	Array(4000235, 1, "喷火龙栖息地，从寒冰半人马领土进去"),
	Array(4001083, 1, "去揍一顿上古魔兽扎昆，把凭证带给我"),
	Array(4001430, 1, "听说龙林那边有一头黑龙王，帮我摘它的角过来"),
	Array(4310010, 1, "班雷昂那孙子又不老实了，帮我教训下他"),
	Array(2431190, 1, "这个星星我喜欢，去杂货店帮我买吧")
);

var pqList = Array(
	"废弃组队",
	"玩具组队",
	//"逃脱组队",
	"御龙魔",
	"毒雾森林",
	"海盗组队奖励"
);

var tupo=0;
var reward = 2437474;
var money = player.getMeso();
var renwu = "#r#e#L66#" + tz12 + "蘑菇的委托(1)[收集材料突破] \r\n#l";
renwu += "#r#e#L68#" + tz12 + "蘑菇的委托(2)[每日组队任务全完成] \r\n#l";
renwu += "#r#e#L67#" + tz12 + "蘑菇的委托(3)[BOSS战利品收集] \r\n#l";
let selection = npc.askMenuS(renwu);
if(selection == 66) {
	var txt = "";
	txt += "#r #r勇士,满足以下条件即可让我帮你突破武器300万\r\n";
	txt += "#r 金币X3000w    	条件:" + money + "/30000000\r\n";
	txt += "#r 在线时间200分钟    	条件:" + player.getOnlineTime() + "/200\r\n";
	for(var i = 0; i < item1.length; i++) {
		txt += "#r #v" + item1[i][0] + " ##z" + item1[i][0] + "# x" + item1[i][1] + "   	 条件:" + player.getAmountOfItem(item1[i][0]) + "/300  #k\r\n";

	}

} else if(selection == 67) {
	var txt = "";
	txt += "#r #r勇士,满足以下条件即让我帮你增加武器突破1000万去胖揍黑魔法师\r\n";
	txt += "#r 金币X5000w    	条件:" + money + "/50000000\r\n";
	txt += "#r 在线时间200分钟    	条件:" + player.getOnlineTime() + "/200\r\n";
	for(var i = 0; i < item2.length; i++) {
		txt += "#r #v" + item2[i][0] + " ##z" + item2[i][0] + "# x" + item2[i][1] + "   	 条件:" + player.getAmountOfItem(item2[i][0]) + "/1#k\r\n #b" + item2[i][2] + "#k\r\n";

	}

} else if(selection == 68) {
	var txt = "";
	txt += "#r #r勇士,满足以下条件即可让我帮你突破武器400万\r\n";
	txt+="并且会送你5个#v2430712##r（轮回技能，刷怪神技）#k\r\n #b一天的使用权#k";
	var count =player.getPQLog("带队次数");
	txt+="\r\n#r#e你今天的带队次数为:"+count+"次;\r\n （PS:带队次数大于等于6次的，可以获得额外奖励，只要作为队长通关组队副本即可增加一次~）";
	txt+="\r\n#rPS:请注意，昨天的轮回和今天的不能叠加，领取的同时会删除身上现有的#v2430712#,请谨慎操作#k\r\n";
	txt+="还有一条龙奖励#r1000#k活力以及";
	for(var i=0;i<jiangli.length;i++){
		txt+="#v"+jiangli[i][0]+"# X "+jiangli[i][1];
	}
	txt+="\r\n";
	for(var i = 0; i < pqList.length; i++) {
		txt += "#r" + pqList[i] + " " + player.getPQLog(pqList[i]) + "/2#k\r\n";
	}

}
let sel = npc.askYesNo(txt);
if(sel == 1) {
	
		if(selection == 66) {
			var flag = 1;
			for(var i = 0; i < item1.length; i++) {
				if(player.getAmountOfItem(item1[i][0]) < item1[i][1]) {
					flag = 0
				}
			}
			if(getEventCount("蘑菇的委托1") > 0) {
				npc.say("您今天已经做过突破任务了");

			} else if(!player.hasMesos(30000000)) {
				npc.say("金币不够");

			} else if(player.getOnlineTime() < 200) {
				npc.say("在线时长不够200分钟");

			} else if(flag == 0) {
				npc.say("材料不够");

			} else if(player.getFreeSlots(2) < 1) {
				npc.say("背包空间不足");

			} else {
				var wq = player.getInventorySlot(-1,-11);
				if(wq==null){
					npc.say("请携带武器~");
				}else{
					if(wq.getLimitBreak()>=10000000000){
						wq.setLimitBreak(wq.getLimitBreak()+3000000*5);
					}else{
						wq.setLimitBreak(wq.getLimitBreak()+3000000);
					}
					
				
					player.updateItem(-11,wq);
					
					setEventCount("蘑菇的委托1", 1, 1);
					getEventCount("活跃");
					setEventCount("活跃", 1, 5);
					for(var i = 0; i < item1.length; i++) {
						player.loseItem(item1[i][0], item1[i][1]);
					}
					player.loseMesos(30000000);
					
					
					npc.broadcastNotice("『蘑菇的委托一』" + " : " + "玩家 " + player.getName() + " 完成了突破任务，获得了突破");
					npc.say("兑换成功");
				}
				

			}

		} else if(selection == 67) {
			var flag = 1;
			for(var i = 0; i < item2.length; i++) {
				if(player.getAmountOfItem(item2[i][0]) < item2[i][1]) {
					flag = 0
				}
			}
			if(getEventCount("蘑菇的委托3") > 0) {
				npc.say("您今天已经做过蘑菇的委托任务了");

			} else if(getEventCount("蘑菇的委托1") == 0) {
				npc.say("勇士需要先完成我委托的第一个任务");

			} else if(getEventCount("蘑菇的委托2") == 0) {
				npc.say("勇士你需要先完成我委托的第2个任务");

			}  else if(!player.hasMesos(50000000)) {
				npc.say("金币不够");

			} else if(player.getOnlineTime() < 200) {
				npc.say("在线时长不够200分钟");

			} else if(flag == 0) {
				npc.say("材料不够");

			} else if(player.getFreeSlots(2) < 1) {
				npc.say("背包空间不足");

			} else {
				//增加突破
				//拿到武器
				var wq = player.getInventorySlot(-1,-11);
				if(wq==null){
					npc.say("请携带武器~");
				}else{
					if(wq.getLimitBreak()>=10000000000){
						 if(wq.getLimitBreak()>=100000000000){
							wq.setLimitBreak(wq.getLimitBreak()+80000000);
						}else{
							wq.setLimitBreak(wq.getLimitBreak()+50000000);
						}
						
					}else{
						wq.setLimitBreak(wq.getLimitBreak()+10000000);
					}
					player.updateItem(-11,wq);
					setEventCount("蘑菇的委托3", 1, 1);
					for(var i = 0; i < item2.length; i++) {
						player.loseItem(item2[i][0], item2[i][1]);
					}
					player.loseMesos(50000000);
					
					//getEventCount("活跃");
					setEventCount("活跃", 1, 10);
					
					
					//player.gainItem(2614078, 1);
					npc.broadcastNotice("『蘑菇的委托三』" + " : " + "玩家 " + player.getName() + " 完成了突破任务，获得了突破");
					npc.say("兑换成功");
				}
				
			}

		} else if(selection == 68) {
			var flag = 1;
			for(var i = 0; i < pqList.length; i++) {
				if(player.getPQLog(pqList[i]) < 2) {
					flag = 0;
				}
			}
			if(getEventCount("蘑菇的委托2") > 0) {
				npc.say("您今天已经做过蘑菇的委托任务了");

			}else if(flag == 0) {
				npc.say("任务没有全部完成哦~");

			} else if(player.getFreeSlots(2) < 8) {
				npc.say("背包空间不足,需要8个格子");

			} else {
				var count =0;
				count=player.getPQLog("带队次数");
				var tttt="\r\n#r#e你今天的带队次数为:"+count+"次;\r\n 请确认是否要领取奖励（PS:带队次数大于等于6次的，可以获得额外奖励，只要作为队长通关组队副本即可增加一次~）";
				let sel = npc.askYesNo(tttt);
				if(sel==1){
					var wq = player.getInventorySlot(-1,-11);
					if(wq==null){
						npc.say("请携带武器~");
					}else{
						if(wq.getLimitBreak()>=10000000000){
							wq.setLimitBreak(wq.getLimitBreak()+3000000*5);
						}else{
							wq.setLimitBreak(wq.getLimitBreak()+1000000);
						}
						
					
						player.updateItem(-11,wq);
						
						setEventCount("蘑菇的委托2", 1, 1);
						player.loseItem(2430712);
						
						player.addPQLog("活力",1000,999);
						getEventCount("活跃");
						setEventCount("活跃", 1, 20);
						//加突破 一次是30-100W
						for(var i=0;i<5;i++){
							let toDrop =player.makeItemWithId(2430712);
							var timeStamp = java.lang.System.currentTimeMillis();
							var expirationDate = timeStamp + 24*60*60*1000;
							toDrop.setExpiration(expirationDate);
							player.gainItem(toDrop);
						}
						for(var i=0;i<jiangli.length;i++){
							player.gainItem(jiangli[i][0],jiangli[i][1]);
						}
						if(count>=6){
							player.gainItem(4033911,1);
							player.gainItem(2614025,3);
							player.gainItem(4033298,1);
							player.gainItem(4001118,1);
							player.gainItem(4023026,2);
						}
						player.gainItem(4310060,10);
						npc.broadcastNotice("『蘑菇的委托二』" + " : " + "玩家 " + player.getName() + " 完成了突破任务，获得了突破");
						npc.say("兑换成功");
					}
				}
				
			}

		}
	

}

function addLimit(count) {
	
	
	player.gainItem(2614025, count);

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