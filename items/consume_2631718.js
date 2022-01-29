








if(player.getPQLog("BUFF0")>0){
	
	player.useSkillEffect(3211012,20);
}

if(player.getPQLog("BUFF1")>0){
	
	player.useSkillEffect(3111011,20);
}


if(player.getPQLog("BUFF1")>0 && player.getPQLog("BUFF0")>0){
	player.dropMessage(1,"使用成功");
}else{
		
	var txt="\r\n这里是小屋增益BUFF #r一次购买 永久生效#k\r\n";
	txt+="#L0# 我要花费#r50E 购买BUFF#k #s3111011# #l\r\n\r\n";
	txt+="#b效果：增加攻击力 爆伤#k\r\n";

	txt+="#L1# 我要花费#r30E 购买BUFF#k #s3211012# （需要先购买第一个BUFF）#l\r\n\r\n";
	txt+="#b效果：增加防御力 最终伤害#k\r\n";


	let selection =npc.askMenu(txt);
	if(selection ==0){
		if(player.getPQLog("BUFF"+selection)==0){
		

			if(player.hasMesos(5000000000)){
				player.addPQLog("BUFF"+selection,1,999);
				player.loseMesos(5000000000);
				
				npc.say("学习成功,再次双击箱子即可使用BUFF");
			}else{
				npc.say("金币不足");
			}
		}else{
			npc.say("你已经学习过这个技能了。不要重复学习哦");
		}



	}else{
		if(player.getPQLog("BUFF"+0)==0){

			npc.say("需要先购买第一个BUFF 才能解锁第二个哦");
		}else{
			if(player.getPQLog("BUFF"+selection)==0){
		

				if(player.hasMesos(3000000000)){
					player.addPQLog("BUFF"+selection,1,999);
					player.loseMesos(3000000000);
					
					npc.say("学习成功,再次双击箱子即可使用BUFF");
				}else{
					npc.say("金币不足");
				}
			}else{
				npc.say("你已经学习过这个技能了。不要重复学习哦");
			}

		}
		

	}


	
}

