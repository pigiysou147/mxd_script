var a = 0;
var text;
var selects; //記錄玩家的1選項
var 數量 = 0;
var itemlist = Array(
Array(4080100, 500000),
Array(4080000, 500000),
Array(4080001, 500000),
Array(4080002, 500000),
Array(4080003, 500000),
Array(4080004, 500000),
Array(4080005, 500000),
Array(4080006, 500000),
Array(4080007, 500000),
Array(4080008, 500000),
Array(4080009, 500000),
Array(4080010, 500000),
Array(4080011, 500000)

);


hgggg1();
function hgggg1(){


text = "#h0#,你好！在這裡可以選擇你想要購買的物品,點擊圖片查看價格購買\r\n\r\n#b";//
for (var i=0; i<itemlist.length; i++) {
text += "#L" + i + "##i" + itemlist[i] + "# #b#z" + itemlist[i] + "#   #r" +  itemlist[i][1] + "楓幣\r\n";
if (i != 0 && (i+1) % 5 == 0) {
text += "\r\n";
}
}
let selection = npc.askMenu(text);

selects = selection;
數量 = npc.askNumber("#r警#g告：#b請注意背包空位夠不夠，請注意(有些物品是1個物品占1個格子哦)!\r\n#r警#g告：#b如果空位不夠，購買的物品將消失，不給與任何賠償!\r\n\r\n#k#d請輸入你請你輸入想要購買的數量\r\n#r#e1個#i" + itemlist[selects][0] + "#需要" + itemlist[selects][1] + "楓幣", 1, 1, 10000);
npc.sayNext("你想購買" + 數量 + "個#r#i" + itemlist[selects][0] + "##k？\r\n你將使用掉" + (數量 * (itemlist[selects][1])) + "楓幣。");

if (player.hasMesos(數量 * (itemlist[selects][1])) && player.canGainItem(itemlist[selects][0],數量)) {
player.loseMesos(數量 * (itemlist[selects][1]));
player.gainItem(itemlist[selects][0], 數量);
player.dropMessage(2,"扣除楓幣 "+ 數量 * (itemlist[selects][1]) +"");
npc.broadcastNoticeWithoutPrefix("『楓幣商店』：玩家 " + player.getName() + " 在楓幣商店購買了"+數量+"個" + player.makeItemWithId(itemlist[selects][0]).getItemName() + "。");
npc.say("購買成功了！");
} else {
npc.say("失敗：\r\n1). 背包欄位已滿,請清理 \r\n2). 你沒有足夠的楓幣。");

}
hgggg1();
}