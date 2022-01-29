//随机点券箱子 CC

var minNum = 1000; //最低给多少
var maxNum = 5000;	//最多给多少

var radnn = Math.floor(Math.random()*(maxNum-minNum) + minNum);
player.loseItem(2434230,1);
player.modifyCashShopCurrency(2,radnn);

//npc.say(" 获取抵用 "+radnn + "!");