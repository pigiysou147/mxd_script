var itemlist = new Array(

Array(4001715,1),//定居币 1E
Array(4001517,100),//	V双手武器攻击力卷轴
Array(4036512,100),//	V双手武器魔力卷轴
Array(2430673,100),//	V单手武器攻击力卷轴
Array(4000000,100),//	V单手武器魔力卷轴
Array(4000016,100),//	V单手武器魔力卷轴
Array(4000124,100),//	V单手武器魔力卷轴
Array(4002000,100),//	V单手武器魔力卷轴
Array(2615044,1),//	V单手武器魔力卷轴
Array(2048821,1),

Array(2048822,1)
	
);
var text = "请选择你要寄售的物品\r\n";

		
for(var i = 1;i<129;i++){
	var item = player.getInventorySlot(4,i);
	if(item == null){
		continue;
	}else if(!isCashItem(item.getDataId())){
		continue;
	}else{
		var flag = false;
		for(var j = 0;j<itemlist.length;j++){
			if(itemlist[j][0]==item.getDataId()){
				flag = true;
				break;
			}
		}
		if(!flag){
			continue;
		}else{
			text += "#L"+i+"# #v"+item.getDataId()+"##t"+item.getDataId()+"##l\r\n";	
		}
	}
}

var pos = npc.askMenu(text);
var item = player.getInventorySlot(4,pos);

var text = "您将上架物品信息\r\n";
	text+= "#v"+item.getDataId()+"\r\n";
var number = npc.askNumber(text+"请输入您要寄售的数量",1,1,player.getAmountOfItem(item.getDataId()));
var meso = npc.askNumber("#v"+item.getDataId()+"# x "+number+",\r\n请输入您出售的总价",1,1,2000);

//若是直冲币  计算比例
if(item.getDataId()==4001715){
	if(meso/number <100/75){
		npc.say("金币比例不能大约100 直充点： 75E 金币");
	}else{
		var yes = npc.askYesNo("您确定要上架#v"+item.getDataId()+"# x "+number+" 总价"+meso+" 吗?");
		if(yes == 1){
			//将道具信息插入寄售里
			var entid = getEntId(item);
			if(player.hasItem(item.getDataId(),number)){
				var iid =getKeyId();
				player.dropMessage(1,iid);
				addSale(entid,item.getDataId(),meso,number,iid);//
				addSaleHistory(entid,item.getDataId(),meso,number,iid);//记录历史流水
				
				player.loseItem(item.getDataId(), number);
				npc.broadcastPlayerNotice(1,"【交易所上架】 有玩家上架了 "+item.getItemName()+" X "+number +" 价格为:"+meso+" 直充点");
				
				npc.say("上架成功.");
			}else{
				npc.say("您要上架的道具数量不足");
			}
		}
	}
}else{
	var yes = npc.askYesNo("您确定要上架#v"+item.getDataId()+"# x "+number+" 总价"+meso+" 吗?");
	if(yes == 1){
		//将道具信息插入寄售里
		var entid = getEntId(item);
		if(player.hasItem(item.getDataId(),number)){
			var iid =getKeyId();
			//player.dropMessage(1,iid);
			addSale(entid,item.getDataId(),meso,number,iid);//
			addSaleHistory(entid,item.getDataId(),meso,number,iid);//记录历史流水
			player.loseItem(item.getDataId(), number);
			npc.broadcastPlayerNotice(1,"【交易所上架】 有玩家上架了 "+item.getItemName()+" X "+number +" 价格为:"+meso+" 直充点");
			npc.say("上架成功.");
		}else{
			npc.say("您要上架的道具数量不足");
		}
	}
}
function getKeyId(){
	var sql = " SELECT iid FROM zz_js_iid order by iid desc LIMIT 1 ";
	var resultList = player.customSqlResult(sql);
	
	player.customSqlUpdate("update zz_js_iid set iid = iid+1");
	
	if(resultList.size()==0){
		return 1;
	}else{
		return parseInt(resultList.get(0).get("iid"))+1;
	}
}

function addSale(entid,itemid,meso,number,iid){
	var sql = " insert into zz_js_cailiao(iid,characters_id,type,sn,itemid,number,paytime,meso)VALUES(?,?,2,?,?,?,now(),?) ";
	player.customSqlInsert(sql,iid,player.getId(),entid,itemid,number,meso);
}

function addSaleHistory(entid,itemid,meso,number,iid){
	var sql = " insert into zz_js_cailiao_history(iid,characters_id,type,sn,itemid,number,paytime,remark,meso,status)VALUES(?,?,2,?,?,?,now(),'"+player.getName()+"上架了"+player.makeItemWithId(itemid).getItemName()+"',?,'正在出售') ";
	
	
	player.customSqlInsert(sql,iid,player.getId(),entid,itemid,number,meso);
}




function getEntId(item){
	return item.toString().substr(item.toString().indexOf("EntId")+6,20);
}

function isCashItem(itemid){
	return player.makeItemWithId(itemid).getOnlyId()>-1;
}
