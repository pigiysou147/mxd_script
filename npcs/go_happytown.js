




var txt="\r\n #L1#你可以使用100个#v4032472# 来兑换雪崩奖励的奖品#l";
let selection =npc.askMenu(txt);
if(selection==1){
	if(!player.hasItem(4032472,100)){
		npc.say("你的#v4032472#不够哦");
	}else{
		player.loseItem(4032472,100);
		player.gainItem(2630091,3);
		npc.say("兑换成功");
	}
}