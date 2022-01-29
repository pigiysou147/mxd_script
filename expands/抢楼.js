var ax = "#fEffect/ItemEff/1048000/1/3#"; //大爱心
var ttz = "#fUI/GuildMark/Mark/Animal/00002016/15#"; //白色兔子
var xxx = "#fEffect/CharacterEff/1032054/0/0#"; //选项两边

let event = npc.getEvent("gailou"); //获取活动脚本的名称 test 对应 event 目录里面的 gailou.js 文件
		
if(event != null && event.getVariable("state").equals("1") && player.getChannel()==1) {
	var txt = "亲爱的#r#h ##k您好，我是盖楼活动员，本次活动时间为10分钟.\r\n活动分一等奖，二等奖和三等奖.\r\n一等奖：第一个到达建楼高度的玩家获得一等奖。\r\n二等奖：一等奖之后后续补楼的5个玩家为二等奖\r\n三等奖：为结束活动奖励只限1人.第一名:8888点卷.第二名:6888.第三名:3888\r\n那就看你运气啦 开始吧？";
	txt+="#L1#开始抢楼#l";
	let se=npc.askMenu(txt);
	event.setVariable("check", "" + (parseInt(event.getVariable("check")) + 1)); //设置点击次数+1
	var count = parseInt(event.getVariable("check")); //获得总点击次数
	var max = parseInt(event.getVariable("maxCheck"));
	var dj = rand(600, 6888);
	var dj3 = rand(150, 3888);
	
	if (count%100==0){
		npc.broadcastWeatherEffectNotice(37, "[抢楼活动]： 玩家 " + player.getName() + " 在抢楼活动抢到"+count+"楼啦，抢楼地点在1线上海池塘边的《奇形怪状的小蘑菇》~~各位玩家快来参与吧", 10000);
		npc.broadcastNotice("[抢楼活动]： 玩家 " + player.getName() + " 在抢楼活动抢到"+count+"楼啦，抢楼地点在1线上海池塘边的《奇形怪状的小蘑菇》~~各位玩家快来参与吧");
	}else if(player.getChannel()!=1){
		npc.say("只能在一线抢楼哦");
		
	}else if(count == max) {
		player.modifyCashShopCurrency(1, 28888);
		player.gainItem(2430069, 3); //工匠之魔方
		player.gainMesos(3000000);
		player.gainExp(350000000);
		npc.broadcastNotice("[抢楼活动]： 恭喜玩家 " + player.getName() + " 在抢楼活动中获得一等奖 获得 28888 点卷 .真让人羡慕");
		npc.say("[抢楼活动] 恭喜你获得了抢楼活动一等奖。获得 28888 点卷奖励");
	} else if(count > max && count <= (max + 10)) {
		player.modifyCashShopCurrency(1, 18888);
		player.gainItem(2430069, 2); //工匠之魔方
		player.gainMesos(3000000);
		player.gainExp(350000000);
		npc.broadcastNotice("[抢楼活动]： 恭喜玩家 " + player.getName() + " 在抢楼活动中获得二等奖 获得 18888 点卷 .真让人羡慕");
		npc.say("恭喜你获得了抢楼活动二等奖。获得 18888 点卷奖励");
	} else if(count > (max + 10) && count <= (max + 15)) {
		player.modifyCashShopCurrency(1, 8888);
		player.gainItem(2430069, 1); //工匠之魔方
		player.gainMesos(3000000);
		player.gainExp(350000000);
		npc.broadcastNotice("[抢楼活动]： 恭喜玩家 " + player.getName() + " 在抢楼活动中获得三等奖 8888 点卷.本次抢楼活动已经结束...");
		npc.say("恭喜你获得了抢楼活动三等奖. 获得 8888 点卷奖励\r\n本次抢楼活动已经结束...");
	} else if(count > (max + 10)) {
		event.setVariable("state", "2");
		event.setVariable("endEvent", "true");
		npc.say("抢楼已经结束。");
	} else {
//		event.setVariable("hour","0");
//		event.setVariable("min","0");

		npc.say("当前楼层: " + parseInt(event.getVariable("check")) + " 楼。");
	}

} else {

	var txt = "\t\t" + ax + "" + ttz + "#e#r盖楼活动" + ttz + "" + ax + "#k\r\n\r\n#b#n" + xxx + "活动分一等奖28888点卷,二等奖18888点卷,三等奖8888点卷.\r\n" + xxx + "一等奖：第一个到达建楼高度的玩家获得一等奖。\r\n" + xxx + "二等奖：一等奖之后后续补楼的10个玩家为二等奖\r\n" + xxx + "三等奖：二等奖之后后续补楼的15个玩家为三等奖\r\n" + xxx + "活动开始前会全服喇叭通知,请加油参与吧！人人有份！ ";
	
	//event.setVariable("next","12");
	//event.setVariable("hour","12");
	//event.setVariable("min","20");
	event.setVariable("maxCheck","666");
	npc.say(txt+"\r\n#r下一次开启的时间为:"+event.getVariable("next")+"点"+event.getVariable("min")+"分开启 当前最高楼层"+ event.getVariable("maxCheck"));
}

function rand(lbound, ubound) {
    return Math.floor(Math.random() * (ubound - lbound)) + lbound;
}