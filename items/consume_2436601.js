status = -1;
var itemList = Array(
		//物品ID   数量  概率 100为100%
		Array(4310267,	1,	10),//蜡笔
        Array(4001326,	1,	100),//蜡笔
        Array(4001327,	1,	100),//蜡笔
        Array(4001328,	1,	100),//蜡笔
        Array(4001329,	1,	100),//蜡笔
        Array(4001330,	1,	100),//蜡笔
        Array(4001331,	1,	100),//蜡笔
        Array(4001332,	1,	100),//蜡笔
		
        Array(4036457,	1,	100),//黑火
        Array(4023026,	5,	100),//紫火
        Array(4001716,	1,	100),//10e
        Array(4033911,	5,	100),//瓶子
        Array(4001118,	5,	100)//航海碎片
);

var chance = Math.floor(Math.random() * 100);
var finalitem = Array();
for(var i = 0; i < itemList.length; i++) {
	if(itemList[i][2] >= chance) {
		finalitem.push(itemList[i]);
	}
}
var txt="#r#e\r\n这是一个许愿风筝，许下你的愿望放飞这个许愿风筝你可以在这些奖品中获得其中一个:\r\n";
for(var i=0;i<itemList.length;i++){
	
	txt+="#v"+itemList[i][0]+"# X "+itemList[i][1]+"";
	if(i==0)
	txt+="(100直冲)";
	if(i%3==0 && i>0){
		txt+="\r\n";
	}else{
		txt+="\t";
	}
}
txt+="\r\n\r\n 是否要许愿呢？";

let sel =npc.askYesNo(txt);
if(sel==1){
	var item;
	var random = new java.util.Random();
	var finalchance = random.nextInt(finalitem.length);
	var itemId = finalitem[finalchance][0];
	var number = finalitem[finalchance][1];
	if(itemId==4310267){
		addHyPay(100);
	}else{
		var item = player.gainGachaponItem("每日许愿",itemId, number,  1);
	}
	
	
	player.loseItem(npc.getItemId(), 1);
	npc.say("你获得了 #b#t" + itemId + "##k X "+number+" 。");

}
function addHyPay(price) {
    var sql = "update hypay set cash=cash+? where accountId=?";
    var result = player.customSqlUpdate(sql, price, player.getAccountId());

}