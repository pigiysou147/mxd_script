
var questid = 200100;
let questN = player.getQuestRecordEx(questid,"questN"); //任务地图
if(questN == null || questN == -1){
	npc.say("你还没有接任务，无法使用");
}else{
	player.changeMap(questN);
	player.loseItem(2430030,1)
	npc.say("已将你指引到藏宝之地");
}