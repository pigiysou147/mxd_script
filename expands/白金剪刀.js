





var item =player.getInventorySlot(1,1);
var txt="\t\t\t\t\t#r白金剪刀系统#k\r\n\r\n";
txt+="\t\t\t  #L2##v5520001##b购买剪刀#k#v5520001##l\r\n\r\n";
txt+="\t\t\t#L0##v5520001##b查看剪刀说明#k#v5520001##l\r\n\r\n";
txt+="\t\t#L1##v5520001##b查看物品剩余剪刀次数#k#v5520001##l\r\n\r\n";
txt+="\t#L3##v5520001##b增加剪刀次数(100余额！谨慎使用)#k#v5520001##l\r\n\r\n";

let selection =npc.askMenu(txt,9330190);
if(selection==0){
	txt="#e本服设置所有支持剪刀装备的可交易次数为 #r5#k 次\r\n";

	txt+="请在使用宿命剪刀之前通过该系统查看您的装备可剪刀次数\r\n";

	txt+="以免造成你的损失，查看的时候#r请把装备放在装备栏的第一格#k";
	
	npc.say(txt);
	
}else if(selection==1){
	
	//item.setCuttable(1);
	if(item==null){
		npc.say("请把装备放在装备栏的第一个格子用于查看剩余剪刀的次数哦");
	}else{
		
		npc.say("您的这件装备为:#v"+item.getDataId()+"# 还剩余的剪刀次数为 #r"+(item.getCuttable()) );
		
		
	}
	
	
}else if(selection==2){
	let sel = npc.askYesNo("是否要花费5000点券购买一个#v5520001#");
	if(sel==1){
		if(player.getCashShopCurrency(1)>=5000){
			player.gainItem(5520001,1);
			player.modifyCashShopCurrency(1,-5000)
			npc.say("购买成功");
		}else{
			npc.say("点券不足");
		}
	}
}else if(selection ==3){
	var item =player.getInventorySlot(1,1);
	//item.setCuttable(1);
	if(item==null){
		npc.say("请把装备放在装备栏的第一个格子用于查看剩余剪刀的次数哦");
	}else{
		if( item.getCuttable()<=0){
			let sel =npc.askYesNo("您的这件装备为:#v"+item.getDataId()+"# 是否花费#r100余额增加一次次数#k" );
			if(sel==1){
				if(getHyPay()<100){
					npc.say("余额不够");
				}else{
					addHyPay(100);
					item.setCuttable(1);
					//item.setDurability(-1);
					player.updateItem(1,item);
					npc.say("操作成功，这件物品的交易次数增加了1");
				}
			}
		}else{
			npc.say("当前你的这件装备还有可交易次数"+(item.getCuttable())+"次,暂不可用该功能~");
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
	if(price<0){
		price=price*-1;
	}
	var sql = "update hypay set pay=pay-?,payused=payused+"+price+" where accountId=?";
	var result = player.customSqlUpdate(sql, price, player.getAccountId());

}