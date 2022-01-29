/* global cm */


 
var open = true;
var ca = new Date();
var year = ca.getYear(); //获得年份
var month = ca.getMonth() + 1; //获得月份
var day = ca.getDay();//获取日
var hour = ca.getHours(); //获得小时
var minute = ca.getMinutes();//获得分钟
var second = ca.getSeconds(); //获得秒
var Time = year+"年";
Time += month+"月";
Time += day+"日";
Time += hour+"时";
Time += minute+"分";
Time += second+"秒";

     var event = npc.getEvent("Event_TeamFB");
	 if(event==null && player.getChannel()==9)
	 npc.makeEvent("Event_TeamFB",true,"");
	 
    if (event == null ) {
        npc.say("请在第9频道进行!");
    } else {		
		if (player.getChannel() != 9) {
                npc.say("团队副本活动只能在9频道进行！活动开启的时候请及时入场哦!\r\n提示：每个整点30-35分开启入场！");
        } else if (parseInt(event.getVariable("state"))==2) {
                npc.say("活动已过可以入场的时间,请等待下一轮活动的开启哦!");
        } else if (parseInt(event.getVariable("state"))==1) {
		//} else if (1==1) {
					var ys = npc.askYesNo("#h0#,你是否想要参加,团队副本呢?");
					if(ys == 1){
						var item =player.getInventorySlot(-1,-11);
						if(item==null){
							npc.say("请穿戴武器");
						}else{
							if(item.getLimitBreak()<300000000){
								npc.say("想进入远征副本，最少需要3E突破哦~");
							}else{
								if(parseInt(event.getVariable("number"))<30){
									
								
									event.setVariable("number",parseInt(event.getVariable("number"))+1);
									npc.sayNext("那么现在就把你传送到等待地图..");
									npc.makeEvent("yuanzheng",true,(event.getVariable("endTime") - new Date().getTime()));
									var startMap = 993000000;//BOSS出现的地图
									player.changeMap(startMap,0);
									var map = event.getMap(startMap); 
									map.showTimer((event.getVariable("endTime") - new Date().getTime())/1000 );
								}else{
									npc.say("远征副本仅允许30人进入哦，请等待下波开启");
								}
							}
						}
						
					}
				
			
			
        } else {
            npc.say("#b服务器当前时间： #r" + Time +" #k\r\n\r\n#e#b副本开放时间：\r\n#n#k 全天开放 (#r每个整点的30-35分开放入场) #b\r\n#k");
		}
	}