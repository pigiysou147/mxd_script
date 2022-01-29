status = -1;
var itemList = Array(
2615032,
2615031,
2616062,
2616061,
2612062,
2612061,
2613051,
2613050,
2048817,
2048818
);


var text = "";
for(var i=0; i<itemList.length; i++) {
	text+="#L"+i+"##v"+itemList[i]+"##z"+itemList[i]+"##l\r\n";
}
let selection = npc.askMenuS("请选择你要换取的卷轴：\r\n#r"+text);

var itemid = itemList[selection];
var itemnum = Math.floor(Math.random()*1+1);
player.gainGachaponItem("x卷自选箱子",itemid, itemnum,  3);
player.loseItem(2432206, 1);
npc.say("恭喜您，获得了"+itemnum+"个#b#z"+itemid+"#");

