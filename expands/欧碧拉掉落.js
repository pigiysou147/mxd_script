var dropItem = [
//物品ID  概率      最小数量  最大数量



[4009457,100000,10,10],
[4009459,100000,10,10],
[4009456,100000,10,10],
[4009454,100000,10,10],
[4009455,100000,10,10],


[4440300,100000,5,5],
[4443300,100000,5,5],
[4442300,100000,5,5],
[4441300,100000,5,5],

[4021030,5000,1,1],
[4021030,5000,1,1],
[4021030,5000,1,1],
[4021030,5000,1,1],

[4440200,2000,1,1],
[4441200,2000,1,1],
[4442200,2000,1,1],
[4443200,2000,1,1],

[4440101,1000,1,1],
[4443101,1000,1,1],
[4442101,1000,1,1],
[4441101,1000,1,1],

[4440001,300,1,1],
[4441001,300,1,1],
[4442001,300,1,1],
[4443001,300,1,1]
]

var txt="\r\n";
for(var i=0;i<dropItem.length;i++){
	var chance = Math.floor(Math.random() * 10000);
	txt+="#v"+dropItem[i][0]+"#随机到的点数为:"+chance+":";
	if(chance<=dropItem[i][1]){
		//添加物品
		var number=dropItem[i][2];
		txt+="#r掉落 个数为:"+number+"#k\r\n";
		player.gainItem(dropItem[i][0],number);
		
	}else{
		txt+="#g没出#k\r\n";
	}
	
}
npc.say(txt);