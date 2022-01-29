
var z = "#fUI/UIWindow/Quest/icon5/1#"; //"+z+"//美化

var vvv4 = "#fEffect/CharacterEff/1112926/0/0#"; //红星
var z1 = "#fEffect/CharacterEff/1112926/0/0#"; //红星

		var text ="\t\t\t\t"+vvv4+"#r活动中心#k"+vvv4+"\r\n\r\n";
				
		text += "#r#e#L101#" + z1 + "音乐竞猜#l#d#e\t";
		text += "#r#e#L102#" + z1 + "跑旗活动#l#d#e\t";
		text += "#r#e#L103#" + z1 + "武陵道场#l#d#e\r\n\r\n";
		text += "#r#e#L104#" + z1 + "枫之高校#l#d#e\t";
		text += "#r#e#L105#" + z1 + "怪物公园#l#d#e\t";
		text += "#r#e#L100#" + z1 + "魔王塔#l#d#e\r\n\r\n";
		text += "#r#e#L106#" + z1 + "雪崩跑酷#l#d#e\t";
		text += "#r#e#L107#" + z1 + "家族副本#l#d#e\t";
		text += "#r#e#L113#" + z1 + "OX问答#l#d#e\r\n\r\n";
		text += "#r#e#L111#" + z1 + "无限火力#l#d\t";
		text += "#r#e#L112#" + z1 + "突破副本#l#d\t";
		text += "#r#e#L115#" + z1 + "抽奖地图#l#d\r\n\r\n";
		text += "#r#e#L118#" + z1 + "超级跳跳#l#d\t";
		text += "#r#e#L119#" + z1 + "远征副本#l#d\t";
		text += "#r#e#L120#" + z1 + "剧情任务#l#d\r\n\r\n";
		text += "#r#e#L121#" + z1 + "打豆豆机#l#d\t";
		//text += "#r#e#L122#" + z1 + "收集活动#l#d\t";
		text += "#r#e#L333#" + z1 + "拍照地图#l#d\t";
		

		let selection = npc.askMenuS(text);
		
		if(selection ==100){
			var date = new Date();
			var hour=date.getHours();
			if(hour<20 || hour >=22){
				npc.say("只有晚上8点-10点才开放入口哦~");
			}else{
				var stage = player.getPQLog("魔王塔");
				if(stage==0){
					player.changeMap(867132100);
				}else{
					npc.say("你目前的层数是"+stage+"层,会给你传送过去~");
					player.changeMap(867132000+(stage*100));
				}

			}
			
			
			
		}else if(selection ==333){
			
			player.changeMap(100000203);
			
			
		}else if(selection ==101){
			if(player.getChannel()==1){
				
				player.changeMap(993050600);
			}else{
				npc.say("请切换到1线进入猜音乐活动哦");
			}
			
		}else if(selection ==102){
			if(player.getChannel()==1 ){
				
				player.changeMap(932200005);
			}else{
				npc.say("请切换到1线进入跑旗活动哦");
			}
			
		}else if(selection ==103){
			player.changeMap(925020000);
			//npc.say("暂未开放");
		}else if(selection ==104){
			player.changeMap(744000000);
			//player.runScript("zuduirenwu");
		}else if(selection ==105){
			
			player.changeMap(951000000);
		}else if(selection ==106){
			if(player.getChannel()==1 ){
				
				player.changeMap(993000700);
			}else{
				npc.say("请切换到1线或者2线进入雪崩跑酷活动哦");
			}
		}else if(selection ==107){
			
			player.changeMap(102040200);
		}else if(selection ==108){
			
			player.runScript("韵_鼠年充值排行榜");
		}else if(selection ==109){
			
			player.runScript("公测商店");
		}else if(selection ==110){
			
			player.runScript("鼠年消费累计礼包");
		}else if(selection ==111){
			
			player.runScript("无限火力");
		}else if(selection ==112){
			
			player.runScript("突破副本");
		}else if(selection ==113){
			//npc.say("暂未开放");
			if(player.getChannel()==1){
				
				player.changeMap(910048000);
			}else{
				npc.say("请切换到1线进入OX活动哦");
			}
			
		}else if(selection ==115){
			
			player.changeMap(993027000);
		}else if(selection==118){
			player.changeMap(993001000);
		}else if(selection==119){
			player.runScript("团队副本");
		}else if(selection==120){
			var txt="剧情任务\r\n";
				txt+="#L1##v1712001#消亡旅途#l";
				txt+="#L2##v1712002#啾啾岛#l";
				let sel =npc.askMenu(txt);
				if(sel==1){
					player.changeMap(450001000);
				}else if(sel==2){
					
					player.changeMap(450002000);
				}
				
		}else if(selection==121){
			player.changeMap(809030000);
		}else if(selection==122){
			player.changeMap(993050200);
		}
				
