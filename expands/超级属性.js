
var typeList = Array(

Array(80000400,10,"STR"),
Array(80000401,10,"DEX"),
Array(80000402,10,"INT"),
Array(80000403,10,"LUK"),
Array(80000404,10,"HP"),
Array(80000405,10,"MP"),
Array(80000406,5,"DF") ,
Array(80000407,5,"移动速度") ,
Array(80000408,5,"跳跃力") ,
Array(80000409,10,"发动暴击"),
Array(80000410,10,"暴击伤害"),
Array(80000412,10,"无视防御"),
Array(80000413,10,"伤害"),
Array(80000414,10,"BOSS伤害"),
Array(80000415,5,"所有属性抗性") ,
Array(80000416,10,"状态异常抗性"),
Array(80000417,5,"稳如泰山") 
);

var point = Array(
Array(1 ,4031997,100   ),//
Array(2 ,4031997,200  ),//
Array(3 ,4031997,300  ),//
Array(4 ,4031997,400  ),//
Array(5 ,4031997,500 ),//
Array(6 ,4031997,600 ),//
Array(7 ,4031997,700 ),//
Array(8 ,4031997,800 ),//
Array(9 ,4031997,900 ),//
Array(10, 4031997,1000)//


)


     		
var text ="请选择你要升级的#r[超级属性]#k：(请勿使用面板上重置功能)\r\n";
var level = 0;
var flag = false;
for(var i=0;i<typeList.length;i++){
	level = player.getSkillLevel(typeList[i][0]);
	if(typeList[i][1]!=level){
		text +="#L"+i+"#"+typeList[i][2]+"  等级：#r["+level+"]#k需要#r[#v"+point[level][1]+"# x "+point[level][2]+"]#k 升级到 #r["+(level+1)+"]#k级#l\r\n";
		flag = true;
	}
}
if(flag){
	
	let sel = npc.askMenu(text);
	let yes = npc.askYesNo("是否确定升级"+typeList[sel][2]);
	if(yes==1){
		var level =player.getSkillLevel(typeList[sel][0]);
		if(player.hasItem(point[level][1],point[level][2])){
			player.setSkillLevel(typeList[sel][0], level+1,level+1,false);
			player.loseItem(point[level][1],point[level][2]);
			npc.say(typeList[sel][2]+"升级到:#r["+(level+1)+"]#k消耗了#v"+point[level][1]+"# x "+point[level][2]);
		}else{
			npc.say("需要道具:#v"+point[level][1]+"# x "+point[level][2]);
		}
		
	}
	
}else{
	npc.say("您已经不需要升级了。");
}
     			 



 