/*
 * NeroMS MapleStory server emulator written in Java
 * Copyright (C) 2017-2018  Jackson
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

/**
 * 
 * @author Jackson
 */

function init(attachment) {
	
	event.setVariable("state", "0");
	event.setVariable("endEvent", "true");
	event.setVariable("check", "0");
	event.setVariable("hour", "12");
	event.setVariable("min", "0");
	
	event.setVariable("next", "0");
	event.setVariable("maxCheck", "666");
	event.setVariable("msg", "0");
	
	event.startTimer("startEvent", 10 * 1000);
	
}

function timerExpired(key) {
	switch(key) {
		case "startEvent":
			var date = new Date();
			var hour = date.getHours();
			var min = date.getMinutes();
			var sec = date.getSeconds();

			if(hour >= event.getVariable("hour") && hour!=24) {
				if(hour==event.getVariable("hour")&& min < event.getVariable("min")){
					
					event.setVariable("next", hour);
					
				}else{
					
					event.setVariable("next", hour+1);
					
				}
				
				if(min >= event.getVariable("min") && min< event.getVariable("min")+10) {
					//开启抢楼
					//设置为已经开始 就不会重复打开
					if( event.getVariable("state")=="0"){
						event.setVariable("state", "1");
						event.setVariable("check", "0");
						if(event.getVariable("msg")==0){
							event.setVariable("msg", "1");
							event.broadcastNotice("[抢楼活动]：抢楼活动开始啦啦，抢楼地点在1线上海池塘边的《奇形怪状的小蘑菇》处~各位玩家快来参与吧");
						}
						
					}
					
					
				} else if(min == event.getVariable("min")+10) {
					//结束抢楼
					if( event.getVariable("state")=="1"){
						event.setVariable("state", "0");
						event.setVariable("check", "0");
						event.setVariable("next", hour+1);
						if(event.getVariable("msg")==1){
							event.setVariable("msg", "0");
							event.broadcastNotice("抢楼已经结束");
						}
						
					}
					
				}else{
					if(event.getVariable("state")=="2" || event.getVariable("state")=="1"){
						event.setVariable("state", "0");
						event.setVariable("check", "0");
						event.setVariable("next", hour+1);
						if(event.getVariable("msg")=="1"){
							event.setVariable("msg", "0");
							event.broadcastNotice("抢楼已经结束");
						}
					}
					
				}
				
				
			}else{
				event.setVariable("next", event.getVariable("hour"));
			}
			
			event.startTimer("startEvent", 10 * 1000);

			break;
	}
}