/**
 *	雪原跑旗入口 作者：几里 QQ：315342975
 **/
if(map.getId() == 932200005){
	if(player.getChannel()==1 || player.getChannel()==2){
		
		
		if(player.isGm()){
			let YN = npc.askYesNo("是否开启雪原跑旗活动？");
			if(YN == 1){
				if(npc.makeEvent("JILI_XYPQ", false, player)){
					updateActiveStatus("雪原跑旗",0);
					map.blowWeather(5120000,"雪原跑旗活动马上开启，请大家等待入场NPC的出现");
					npc.broadcastPlayerNotice(10,"[全服活动]: <雪原跑旗>活动入场倒计时2分钟，请各位玩家赶紧换上<冒险家-新手>职业,进入频道<1>,通过拍卖-->活动副本-->跑旗活动  进行参与！可以获得精美坐骑以及海量突破石哦~ ");
					npc.broadcastPlayerNotice(13,"[全服活动]: <雪原跑旗>活动入场倒计时2分钟，请各位玩家赶紧换上<冒险家-新手>职业,进入频道<1>,通过拍卖-->活动副本-->跑旗活动  进行参与！可以获得精美坐骑以及海量突破石哦~ ");
					npc.broadcastPlayerNotice(12,"[全服活动]: <雪原跑旗>活动入场倒计时2分钟，请各位玩家赶紧换上<冒险家-新手>职业,进入频道<1>,通过拍卖-->活动副本-->跑旗活动  进行参与！ 可以获得精美坐骑以及海量突破石哦~");
					npc.broadcastPlayerNotice(13,"[全服活动]: <雪原跑旗>活动入场倒计时2分钟，请各位玩家赶紧换上<冒险家-新手>职业,进入频道<1>，通过拍卖-->活动副本-->跑旗活动  进行参与！ 可以获得精美坐骑以及海量突破石哦~");
					npc.broadcastPlayerNotice(10,"[全服活动]: <雪原跑旗>活动入场倒计时2分钟，请各位玩家赶紧换上<冒险家-新手>职业,进入频道<1>>,通过拍卖-->活动副本-->跑旗活动  进行参与！ 可以获得精美坐骑以及海量突破石哦~");
					npc.say("开启成功");
				}else{
					npc.say("开启失败");
					
				}
			}else{
				npc.say("想开启再来找我");
			}
		}else{
		npc.say("#r请等待GM开启活动，倒计时结束时将会出现入场NPC，点击次元裂缝进入。请留意！");
	}
	}else{
		npc.say("只能在一线或者2线开启");
	}
	
}else{
	
}


function updateActiveStatus(name,status){
    var sql = "update jili_active_status set status = '"+status+"' where activeName = '" + name + "';";   
    player.customSqlUpdate(sql);
}