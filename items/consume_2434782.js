
var duihuan =Array(
	Array(30,5062503)
);

var txt= "\r\n";
for(var i=0;i<duihuan.length;i++){
	
	txt+="#L"+i+"#"+duihuan[i][0]+"个 #v"+npc.getItemId()+"#兑换1个#v"+duihuan[i][1]+"##z"+duihuan[i][1]+"##l\r\n";	
}
let selection =npc.askMenu(txt);
var need= duihuan[selection][0];
var itemId= duihuan[selection][1];


if(player.hasItem(npc.getItemId(),need)){
	let sel=npc.askYesNo("是否要使用"+need+"个#v"+npc.getItemId()+"#兑换来兑换1个#v"+itemId+"呢");
	if(sel=1){
		player.loseItem(npc.getItemId(),need);
		player.gainItem(itemId,1);
		npc.say("兑换成功~");
	}
}else{
	npc.say("材料不够,需要"+need+"个#v"+npc.getItemId()+"#");
}

