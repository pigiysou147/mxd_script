var status = -1;
var 破功石 = [
//10万
[2614054,100,100000],
[2614023,100,100000],
[2614018,100,100000],
[2614004,100,100000],
[2614001,100,100000],
[2614045,50,100000],
[2614030,50,100000],
[2614021,50,100000],
[2614016,50,100000],
[2614013,50,100000],
[2614044,30,100000],
[2614028,30,100000],
[2614010,30,100000],
[2614007,30,100000],
[2614046,15,100000],
//1万
[2614056,100,10000],
[2614031,100,10000],
[2614022,100,10000],
[2614020,100,10000],
[2614003,100,10000],
[2614000,100,10000],
[2614029,50,10000],
[2614015,50,10000],
[2614012,50,10000],
[2614027,30,10000],
[2614009,30,10000],
[2614006,30,10000],
//五万
[2614042,50,50000],
[2614041,30,50000],
[2614032,30,50000],
[2614043,15,50000],
//五十万
[2614071,100,500000],
[2614040,100,500000],
[2614049,100,500000],
[2614048,100,500000],
[2614039,50,500000],
[2614047,30,500000],
[2614038,30,500000],
[2614034,30,500000],
//二十万
[2614037,100,200000],
[2614036,30,200000],
[2614035,30,200000],
[2614033,30,200000],
//三十万
[2614070,100,300000],
[2614053,100,300000],
[2614052,50,300000],
[2614051,30,300000],
[2614050,15,300000],
//百万
[2614026,100,1000000],
[2614025,100,1000000],
[2614058,100,1000000],
[2614005,100,1000000],
[2614002,100,1000000],
[2614024,50,1000000],
[2614019,50,1000000],
[2614017,50,1000000],
[2614014,50,1000000],
[2614055,50,1000000],
[2614008,30,1000000],
[2614011,30,1000000],
//五百万
[2614078,100,5000000],
[2614064,100,5000000],
[2614061,100,5000000],
[2614063,50,5000000],
[2614060,50,5000000],

[2614062,30,5000000],
[2614059,30,5000000],

//一千万
[2614079,100,10000000],
[2614067,100,10000000],
[2614066,50,10000000],
[2614065,30,10000000],

//三千万
[2614068,100,30000000],
//五千万
[2614069,100,50000000],

//1E
[2614074,100,100000000]

];

var vipLevel = new Array( 	
100,
500, 
1000, 
2000, 
3000, 
5000, 
8000, 
10000, 
15000,
20000,
30000,
40000,
50000,
90000,
130000,
190000,
250000,
310000,
390000,
450000

);





var 成功几率,破功数量,循环次数;
var 破功总数 = 0;
var beishu=1;
var item = player.getInventorySlot(-1, -11);
var qianE=item.getLimitBreak()>=100000000000;
var baiE=item.getLimitBreak()>10000000000;


if(item==null){

	npc.say("请佩戴武器");
}else{


var text = "\r\n\r\n\r\n";
text += "#L0##r一键使用破功石#d[所有突破石几率都是单独计算]#l\r\n\r\n";
text += "   #kPS:#r破功是破到你当前穿戴的武器上,注意:如果一次性使用过多突破石导致卡顿,正常现象,他是正在计算数据,稍等一下就好.请不要关闭游戏.避免不必要的意外.关闭游戏损失自负.\r\n";
text += "┏━━━━━━━━━  您的破功石  ━━━━━━━━━┓#k\r\n";
for (var i in 破功石) {
	if(player.getAmountOfItem(破功石[i][0]) > 0){
	text += "  #v"+破功石[i][0]+"# 破功数量["+破功石[i][2]/10000+"万] 成功几率["+破功石[i][1]+"] 拥有:"+player.getAmountOfItem(破功石[i][0])+"\r\n";
	}
}
text += "\r\n┗━━━━━━━━━━━━━━━━━━━━━━━━━┛#k";

let selection=npc.askMenuS(text);

if(item!=null){
	var text = "\r\n结果信息如下:\r\n";
	
	var total=0;
	for (var i=0; i<破功石.length; i++) {
		if(player.getAmountOfItem(破功石[i][0]) > 0){
			成功几率 = 破功石[i][1]
			破功数量 = 破功石[i][2]
			循环次数 = player.getAmountOfItem(破功石[i][0]);
			
			for (var o=0; o<循环次数; o++) {
				
			var 成功率 = Math.floor(Math.random()*(100-1+1)+1);
				if(成功率 > 成功几率){
				text += "使用:#v"+破功石[i][0]+"##z"+破功石[i][0]+"#[#g失败#k]\r\n";	
				}else{
				text += "使用:#v"+破功石[i][0]+"##z"+破功石[i][0]+"#[#r成功#k]\r\n";
				//成功几率
				破功总数 = 破功总数+破功数量
				}
				
			}
			
		}
		player.loseItem(破功石[i][0]);
	}
	item.setLimitBreak(item.getLimitBreak() + 破功总数*beishu);
	player.updateItem(-11, item);
	npc.say("#r#e本次共获得破功:"+破功总数+"  \r\n \r\n\r\n" + text);
}else{
	npc.say("请穿戴武器");
}
	
}

		
		
		
