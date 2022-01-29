



var str = "\r\n\t\t\t\#r#e#v3700404#神秘强化中心#v3700404##b\r\n\r\n";
str+="\t\t我是游走于森林之间的神秘之影.在人们的传说\r\n";
str+="\t\t中只有我的影子存在.无人能知晓我的面目.如果你足够幸运.能得到神秘之影装备.\r\n";
str+="\t\t我可以出现在你面前帮助你强化这个世界上最神秘的装备.只有强者才能掌控神秘系列装备.\r\n";
str += "#L1##r#v1262053#神秘武器强化#k#l";
str += "#L2##r#v1542117#神秘装备归一#k#l \r\n";
str += "#L3##r#v4036457#黑火兑换金火#k#l";
str += "#L4##r#v1552119#神秘武器兑换#k#l \r\n";


let selection =npc.askMenu(str);

if(selection == 1) {
	player.runScript("神秘强化");

}else if(selection==2){
	var str = "#r#e\t\t\t\t#v1712004#神秘归一#v1712004##b\r\n";
	str+="\t\t我是游走于森林之间的神秘之影.在人们的传说\r\n";
	str+="\t\t中只有我的影子存在.无人能知晓我的面目.如果你足够幸运.能得到神秘之影装备.\r\n";
	str+="\t\t我可以出现在你面前帮助你强化这个世界上最神秘的装备.只有强者才能掌控神秘系列装备.\r\n";
	str += "#L1##r#v1472277#神秘武器归一#k#l";
	str += "#L2##r#v1102940#神秘防具归一#k#l\r\n";
	

	let sel =npc.askMenu(str);
	if(sel==1){
		
		player.runScript("神秘合成");
	}else{
		player.runScript("神秘防具合成");
	}

}else if(selection ==3){
	var need =4036457;
	var give =4023025;
	var holdCount=player.getAmountOfItem(need);
	var txt ="#e#r请输入要消耗的#v"+need+"#的个数 \r\nPS: #v"+need+"# X 1=   #v"+give+"# x2";
	let number = npc.askNumberS(txt, 1, 1, holdCount);
	if(number<holdCount){
		player.loseItem(need,number);
		player.gainItem(give,number*2);
		npc.say("兑换成功，你消耗了#v"+need+"# X "+number+"  获得了 #v"+give+"# X "+number*2);
	}else{
		npc.say("你的#v"+need+"# 不足");
	}
}else if(selection ==4){
	player.runScript("神秘兑换");
}

