﻿ 
    var event = npc.getEvent("CWKPQ");
    if (event == null) {
		npc.say("事件不是开始…");
    }else  if (player.getId() != party.getLeader()&&map.getId()!=610030300) {
		npc.say("你不是远征队队长。请让队长和我说话。");
    }else{
		 switch(map.getId()) {
			case 610030100: 
					if (event.getVariable("glpq1")==0){
						npc.sayNext("哎呀,你终于来了。让我来告诉你:他们已经发现我们了。他们要来这里大约需要一分钟。我们最好快一点。");
						npc.sayNext("门已经被扭曲了。我们必须找到另一种方式,将带我们度过许多死亡陷阱。");
						event.setVariable("glpq1", "1");
						npc.say("你可以在这里找到真正的门……你最好找到它,快。我们没多少时间了。"); 
						
					} else {
						npc.say("请找到隐藏在这里的门！时间不多了！");
					} 
				break;
			case 610030200:
					npc.sayNext("恭喜你们通过第一关!现在,这条路,我们需要得到每一个冒险家类之一的技能。");
					npc.say("他们需要使用他们的技能在每一个祭坛进行敲打。一旦所有五个祭坛已经完成,我们就可以继续前进。");
			   break;
			case 610030300: 
				npc.sayNext("现在我们这里也有了相对应的祭坛。需要五个冒险家爬到顶端,然后通过门。"); 
				npc.sayNext("当心这些死亡陷阱:竖石纪念碑。他们真的能一拳打死你。"); 
				player.useSkillEffect(80001242,1);
				npc.say("现在我给你了#s80001242#高空飞行，你可以使用这个技能穿越过障碍物，开启所有的祭坛，然后需要五个冒险家通过最上方的门，注意~！墙壁也可能出现陷阱导致死亡哦~！如果死亡了或者通过了，可以从我这里再继续获得飞翔技能。");
				
			   break;
			case 610030400: 
				npc.sayNext("现在我们这里也有了相对应的祭坛。然而,祭坛并没有激活。"); 
				npc.say("这些蝙蝠会妨碍你,但他们仅仅是一个分心。敲打每一个相应的祭坛,直到他们的启动了。");  
			   break;
			case 610030500: 
				npc.sayNext("我很惊讶你做到这一步!你在这里看到的胜利雕像,但它没有任何的武器。"); 
				npc.sayNext("有五个房间,在附近的雕像旁边。"); 
				npc.sayNext("我猜想,每一个房间有一个雕像的其中一种武器。"); 
				npc.say("带回来的遗迹来恢复他们手中的武器!");  
			   break;
			case 610030700:
			   npc.say("再过一个图就是奖励关卡了，感谢你们为我铲除坏人。");
			   break;
			}
	}
   
 
