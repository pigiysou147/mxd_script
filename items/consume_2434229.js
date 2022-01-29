//随机点券箱子 CC

var minNum = 5000; //最低给多少
var maxNum = 5000;	//最多给多少

var radnn = Math.floor(Math.random()*(maxNum-minNum) + minNum);
player.loseItem(2434229,1);
player.modifyCashShopCurrency(1,radnn);

//npc.say(" 获取点券 "+radnn + "!");