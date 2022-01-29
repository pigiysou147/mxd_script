

var pqName="轮回石碑";
var count =5;
var txt="每天都能获得轮回石碑5次使用机会哦~\r\n";

txt+="#r是否要开启一次呢？#k";
let selection = npc.askYesNo(txt);
if(selection==1){
	
	
if(player.getPQLog("轮回使用")<5){
	player.loseItem(2430712,1);
	player.addPQLog("轮回使用");
		player.useSkillEffect(80011261,10);
		player.dropMessage(1,"轮回石碑开启成功！");
}else{
	npc.say("已经使用5次了");
	
}
		
	
	
}
