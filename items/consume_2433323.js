
let number =npc.askNumber("请输入要打开的数量 一个可以换1张转蛋卷",1,1,player.getAmountOfItem(npc.getItemId()));
if(player.getFreeSlots(5)<number/100){
	npc.say("格子不够，请清理格子");
}else{
	player.gainItem(5220040,number);


	player.loseItem(npc.getItemId(), number);
	npc.say("你获得了 #b#t" + 5220040 + "##k X 1 。");


}
