/**
* 洗血洗蓝-QQ:739977676
**/

//不允许使用的职业
let banJob =Array(400,432,3100, 3110, 3111, 3112);

let hpNeedDq = 10; //多少点券洗1点HP
let mpNeedDq = 5; //多少点券洗1点MP

let str = "请选择您想使用的功能:\r\n";
str += "#L0##r提升血量 "+hpNeedDq+"点券+1点HP#l\t";
str += "#L1##b提升魔量 "+mpNeedDq+"点券+1点MP#l\r\n"
str += "#L2##r降低血量 "+hpNeedDq+"点券*1点HP#l\t";
str += "#L3##b降低魔量 "+mpNeedDq+"点券*1点MP#l\r\n"
let selected = npc.askMenu(str);

if(banJob.indexOf(player.getJob()) != -1 && selected==1 && selected==3){
	npc.say("您的职业不允许使用该功能");
}else{
	str = "请输入您想增加的"+(selected == 0?"HP":"MP")+"量\r\n#r#e**切记不可超过1W";
	var max =player.getCashShopCurrency(1)/(selected == 0?hpNeedDq:mpNeedDq);
	if(max>10000){
		max=10000;
	}
	let number = npc.askNumber(str,"1",1,max);
	player.modifyCashShopCurrency(1,-(number*(selected == 0?hpNeedDq:mpNeedDq)));
	if(selected == 0){
		player.increaseMaxHp(number);
	}else if(selected == 1){
		player.increaseMaxMp(number);
	}else if(selected == 2){
		player.increaseMaxHp(-number);
	}else if(selected == 3){
		player.increaseMaxMp(-number);
	}
	npc.say("成功！");
}