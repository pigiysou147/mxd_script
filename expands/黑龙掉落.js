var dropItem = Array(
	//物品ID  概率      最小数量  最大数量

Array(1122076,2999997,1,1),
Array(2041200,2999997,1,1),
Array(4310143,2999997,2,3),
Array(3010128,6000,1,1),
Array(2022670,15000,1,1),
Array(4001430,9000,1,1),
Array(2049202,9000,1,1),
Array(2049204,9000,1,1),
Array(2049206,9000,1,1),
Array(1113084,1050,1,1),
Array(2433813,2999997,1,1),
Array(2433814,2999997,1,1),
Array(1142504,2999997,1,1)

);

var txt="\r\n";
for(var i=0;i<dropItem.length;i++){
	var chance = Math.floor(Math.random() * 100000);
	txt+="#v"+dropItem[i][0]+"#随机到的点数为:"+chance+":";
	if(chance<=dropItem[i][1]){
		//添加物品
		var number=Math.floor(Math.random() * dropItem[i][3])+1;
		txt+="#r掉落 个数为:"+number+"#k\r\n";
		player.gainItem(dropItem[i][0],number);
		
	}else{
		txt+="#g没出#k\r\n";
	}
	
}
npc.say(txt);