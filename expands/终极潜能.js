/*
QQ:423283141
*/




		
var needList = Array(
	Array(4023025, 1),//金火
		
	Array(4023026, 1),//紫火
	
	Array(4033298, 1)
);

var potId = 40056;
var time =0;
while(time<50){
	var flag= 0;
	time++;
//拿到第一件装备
var item = player.getInventorySlot(1, 1);
var txt = "#e#r您好: 这里是暴伤潜能专场. \r\n";
txt += "这里可以使用12%攻击力、12%魔法攻击力、20%全属性、40%BOSS伤害替换暴击伤害潜能#k\r\n";
//txt +="#b还需要10余额，10W点券以及5000W金币哦#k\r\n";
txt+="#b暴伤是您突破打不满后的不二选择. 简单直接.\r\n暴力输出的顶级潜能!如果确定请点击下一步进行查看#k";
txt+="\r\n";
var needTxt="";
for(var i=0;i<needList.length;i++){
	needTxt+="#v"+needList[i][0]+"# X "+needList[i][1]+" ";
	if(!player.hasItem(needList[i][0],needList[i][1])){
		flag=1;
	}
}

for(var i = 0; i <= 5; i++) {
	txt += "#L" + i + "# 修改第#r" + (i + 1) + "#k条潜能 #l \r\n";
}
let number = npc.askMenuS(txt);
var text = "您选择了使用" + needTxt + " 来修改第" + (number + 1) + "条潜能 \r\n";
var fujia =false;
var pos=number+1;
if(number >= 3) {
	fujia =true;
	pos=pos-3;
}



if(item == null) {
	text += "#r您当前没有选择装备 请把要强化的装备放到装备栏的第一格！！！#k\r\n"
}else if(item.getData().isCash()){
	npc.say("爆伤系统不可以对点装使用哦~");
}else if(getHyPay()<10){
	npc.say("余额不足，需要10余额");
}else if(player.getCashShopCurrency(1)<100000){
	npc.say("点券不足，需要10W点券");
}else if(!player.hasMesos(50000000)){
	npc.say("金币不足，需要5000W金币");
} else {
	

		
		let qianneng = 40056;
		var old = item.getOption(pos,fujia);
		var name ="暴击伤害";
		var text = "请确认您的选择:\r\n";
		text += "你将要消耗掉 一个 " +needTxt+" 来强化 #v" + item.getDataId() + "#\r\n 改变的是该物品的第" + (number + 1) + "条潜能\r\n";
		text += "改变之后的潜能为 :暴击伤害 8% \r\n";
		
		text +="#e#b还需要10余额，10W点券以及5000W金币哦#k\r\n";
		text +="#b成功率10%哦#k\r\n";
		text += "#r如果确定请继续，如果想退出请直接退出#k\r\n";
		npc.sayNext(text);
		
			
		if(old==40051 || old==60002 || old==42051 || old==40603 || old==40052){
			
			
			//如果装备没有潜能 必须先设置装备的潜能属性的等级  
			if(flag==1) {
				npc.say("你的材料不足，需要10余额，10W点券以及5000W金币 以及"+needTxt);
			} else {
				for(var i=0;i<needList.length;i++){
					
					player.loseItem(needList[i][0],needList[i][1]);
					
				}
				player.loseMesos(50000000);
				player.modifyCashShopCurrency(1,-100000);
				addHyPay(10);
				var chance = Math.floor(Math.random() * 100);
				
				if(chance>=96){
					//成功
					
					item.setGrade(0x14);
					item.setOption(pos, potId, fujia);
					
					player.updateItem(1, item);
					
					npc.broadcastGachaponMsgEx("[暴伤潜能]: 恭喜大佬 "+player.getName()+" 把装备更改成了暴击伤害大家快来围观啊",item);
					npc.broadcastWeatherEffectNotice(2,"[暴伤潜能]: 恭喜大佬 "+player.getName()+" 把装备更改成了暴击伤害大家快来围观啊",10000);
					
					npc.say("潜能修改成功");
				}else{
					npc.say("潜能修改失败");
				}
			}
		}else{
			npc.say("只有攻击12% 和20%全属性 40%BOSS伤害 可以更改为爆伤哦");
			
		}
	
	}
}

function getHyPay() {
	var sql = "select pay from hypay where accountid = ? ";
	var result = player.customSqlResult(sql, player.getAccountId());
	if(result.size() > 0) {
		if(result.get(0) != null) {
			return result.get(0).get("pay");
		}
	} else {
		return 0;
	}

}

function addHyPay(price) {
	var sql = "update hypay set pay=pay-?,payused=payused+"+price+" where accountId=?";
	var result = player.customSqlUpdate(sql, price, player.getAccountId());

}