




var bossName="困难暴君";
var pqlog="Magnus_Hard";
var txt="是否要增加一次"+bossName+"的挑战次数呢？";

let sel = npc.askYesNo(txt);
if(sel==1){
	player.addPQLog(pqlog,-1,1);
	player.loseItem(npc.getItemId(),1);
	npc.say("成功增加"+bossName+"的一次挑战次数");
}