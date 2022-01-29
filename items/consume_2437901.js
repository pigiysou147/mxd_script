YN = npc.askYesNo("#r是否要使用2倍經驗的Buff(時效為20分鐘)")
if(YN = 1){
player.useSkillEffect(80002293,2);
player.loseItem(2437901,1)
npc.say("#b#e已開啟，時間只有20分鐘，請把握。")
}else{
	npc.say("#b#e下次再用吧~")
}