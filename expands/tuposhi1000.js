var tupoList = Array(
	2614066,//50
	2614065,//30
	2614057,
	2614079,
	2614067
	
);


var status = -1;
var wushi = 0;
var sanshi = 0;
var yibai = 0;
var item;

var txt = "你目前身上有:\r\n";
for(var i = 0; i < tupoList.length; i++) {
	var tupo = tupoList[i];
	txt += "#v" + tupo + "##z" + tupo + "# X #r" + player.getAmountOfItem(tupoList[i]) + "#k ";
	if(i != 0 && i % 2 == 1) {
		txt += "\r\n"
	}
}
txt += "\r\n是否要一次性全部使用完所有的突破石呢~\r\n (概率都是单独计算的哦~)";
let selection = npc.askYesNoS(txt);
if(selection == 1) {
	item = player.getInventorySlot(-1, -11);
	if(item == null) {
		npc.say("请穿戴武器哦~");

	} else {
		//计算
		for(var i = 0; i < tupoList.length; i++) {

			var itemId = tupoList[i];
			if(i == 0) {
				//计算50%
				wushi += player.getAmountOfItem(itemId);
				player.loseItem(itemId, player.getAmountOfItem(itemId));
			} else if(i ==1) {
				//计算30%
				sanshi += player.getAmountOfItem(itemId);
				player.loseItem(itemId, player.getAmountOfItem(itemId));
			} else if(i > 1) {
				//计算100%
				yibai += player.getAmountOfItem(itemId);
				player.loseItem(itemId, player.getAmountOfItem(itemId));
			}
		}

		var txt = "";
		var total = 0;
		for(var i = 0; i < sanshi; i++) {
			var randon = Math.floor(Math.random() * 10);
			if(randon <= 2) {
				//成功
				total++;
			}
		}
		for(var i = 0; i < wushi; i++) {
			var randon = Math.floor(Math.random() * 10);
			if(randon <= 4) {
				//成功
				total++;
			}
		}
		for(var i = 0; i < yibai; i++) {
			total++;
		}
		item.setLimitBreak(item.getLimitBreak() + (total * 10000000));
		player.updateItem(-11, item);
		npc.say("你身上概率为100%的石头有#r" + yibai + "#k个\r\n概率为50%的石头总共有#r" + wushi + "#k个 \r\n概率为30%的石头总有#r" + sanshi + "#k个 \r\n总共给你加的突破为:#r" + (total*1000) + "万");

	}
}