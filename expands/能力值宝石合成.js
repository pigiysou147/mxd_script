var needItem=[
		[
			4008000,
			4440300,
			4440200,
			4440101,
			4440001,
		],
		[
			4008003,
			4443300,
			4443200,
			4443101,
			4443001
		],
		[
			4008002,
			4442300,
			4442200,
			4442101,
			4442001
		],
		[
			4008001,
			4441300,
			4441200,
			4441101,
			4441001
		]
	];
	
var txt="\r\n#r#e\t\t\t\t 宝石三合一\r\n";

for(var i=0;i<needItem.length;i++){
	txt+="\t";
	txt+="#L"+i+"#我要合成#v"+needItem[i][4]+"##l";
	if(i==1){
		txt+="\r\n\r\n";
	}else{
		txt+="\t";
	}
}

let selection =npc.askMenu(txt);
txt="#r#e\r\n请选择你要合成的宝石:\r\n";
for(var i=1;i<needItem[selection].length;i++){
	txt+="#L"+i+"#选择#v"+needItem[selection][i]+"##l\r\n";
}
let ch = npc.askMenu(txt);
var itemid= needItem[selection][ch];
var needid= needItem[selection][ch-1];
let number = npc.askNumber("#r#e请输入要兑换的 #v"+itemid+"# 数量\r\n\r\n 兑换比例 #v"+needid+"# X 3 :  #v"+itemid+"# X 1   ",1,1,parseInt(player.getAmountOfItem(needid)/3));

let sel =npc.askYesNo("#r#e是否使用 #v"+needid+"# X "+number*3+" 来兑换  #v"+itemid+"# X "+number);
if(sel==1){
	player.loseItem(needid,number*3);
	player.gainItem(itemid,number);
	npc.say("兑换成功");
}
