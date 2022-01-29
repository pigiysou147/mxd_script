var dropItem = Array(
	//物品ID  概率      最小数量  最大数量
Array(1202193,200,1,1),
Array(1672069,200,1,1),
Array(2614039,599999,1,1),
Array(2614071,599999,1,1),
Array(2614063,500,1,1),
Array(2614019,2000,1,1),
Array(3992025,30000,1,1),
Array(2435824,3000,1,1),
Array(1702229,6000,1,1),
Array(2049610,300000,1,1),
Array(2340000,299999,1,1),
Array(2616075,800,1,1),
Array(2616074,800,1,1),
Array(2615044,800,1,1),
Array(2615043,800,1,1),
Array(2613065,800,1,1),
Array(2613064,800,1,1),
Array(2612077,800,1,1),
Array(2612076,800,1,1),
Array(2048822,800,1,1),
Array(2048821,800,1,1),
Array(2614058,1500,1,1),
Array(2614005,1000,1,1),
Array(5062024,300000,1,1),
Array(2048749,1000000,1,1),
Array(4310143,2970000,2,5),
Array(4310143,2970000,2,5),
Array(4310143,2970000,2,5),
Array(4310143,2970000,2,5),
Array(4310143,2970000,2,5),
Array(4310143,2970000,2,5),
Array(5062024,300000,1,1),
Array(2340000,299999,1,1),
Array(4036518,599999,1,2),
Array(4036518,599999,1,2),
Array(4036518,599999,1,2),
Array(4036518,599999,1,2),
Array(4036518,599999,1,2)

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