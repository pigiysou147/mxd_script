var itemlist = new Array(
Array(2612076,1),//	V双手武器攻击力卷轴
Array(2612077,1),//	V双手武器魔力卷轴
Array(2613064,1),//	V单手武器攻击力卷轴
Array(2613065,1),//	V单手武器魔力卷轴
Array(2616074,1),//	V单手武器魔力卷轴
Array(2616075,1),//	V单手武器魔力卷轴
Array(2615043,1),//	V单手武器魔力卷轴
Array(2615044,1),//	V单手武器魔力卷轴
Array(2048821,1),
Array(2048822,1),
Array(2613066,1),//究极黑暗单手武器攻击力卷轴
Array(2613067,1),//究极黑暗单手武器魔力卷轴
Array(2612078,1),//究极黑暗双手武器攻击力卷轴
Array(2612079,1),//究极黑暗双手武器魔力卷轴
Array(2616214,1),//究极黑暗防具攻击力卷轴
Array(2616215,1),//究极黑暗防具魔力卷轴
Array(2615049,1),//究极黑暗饰品攻击力卷轴
Array(2615050,1),//究极黑暗饰品魔力卷轴
Array(2048823,1),//究极黑暗宠物装备攻击力卷轴
Array(2048824,1),//究极黑暗宠物装备魔力卷轴
Array(2049116,1),//强化混沌
Array(2614068,1,38),//3000W突破
Array(2614069,1,60),//5000W突破
Array(2432069,1,30),//大暴君箱子
Array(2591008,1,50),//武功宝珠
Array(2430893,1,10),//银河自选
Array(2630627,1,100),//神秘自选
Array(2430761,1,100),//特米纳斯武器 
Array(2630782,1,300),//神秘武器
Array(2630626,1,300),//神秘武器
Array(2630133,1,300),//神秘武器

Array(2614074,1,120),//1E突破


Array(2049610,1)//还原混沌
	
);
var text = "请选择你要寄售的物品\r\n";

var index =0;
for(var i = 1;i<129;i++){
	var item = player.getInventorySlot(2,i);
	if(item == null){
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
var text = "您将上架物品信息\r\n"+itemlist[index][1];
var item = player.getInventorySlot(2,pos);
	text+= "#v"+item.getDataId()+"\r\n";
var number = npc.askNumber(text+"请输入您要寄售的数量",1,1,100);
var min=1;
for(var j = 0;j<itemlist.length;j++){
	if(itemlist[j][0]==item.getDataId()){
			//有限购的情况
			if(itemlist[j][2]>0)
			min=itemlist[j][2];
		
		break;
	}
}

var meso = npc.askNumber("#v"+item.getDataId()+"# x "+number+",\r\n请输入您出售的总价",min,min,2000);
var yes = npc.askYesNo("您确定要上架#v"+item.getDataId()+"# x "+number+" 总价"+meso+" 吗?");
if(yes == 1){
	//将道具信息插入寄售里
	var entid = getEntId(item);
	if(player.hasItem(item.getDataId(),number)){
		var iid =getKeyId();
		addSale(entid,item.getDataId(),meso,number,iid);//
		addSaleHistory(entid,item.getDataId(),meso,number,iid);//记录历史流水
		player.loseItem(item.getDataId(), number);
		npc.broadcastPlayerNotice(1,"【交易所上架】 有玩家上架了 "+item.getItemName()+" X "+number +" 价格为:"+meso+" 直充点");
				
		npc.say("上架成功.");
	}else{
		npc.say("您要上架的道具数量不足");
	}
}

function addSale(entid,itemid,meso,number,iid){
	var sql = " insert into zz_js_sale(iid,characters_id,type,sn,itemid,number,paytime,meso)VALUES(?,?,2,?,?,?,now(),?) ";
	player.customSqlInsert(sql,iid,player.getId(),entid,itemid,number,meso);
}

function addSaleHistory(entid,itemid,meso,number,iid){
	var sql = " insert into zz_js_sale_history(iid,characters_id,type,sn,itemid,number,paytime,remark,meso,status)VALUES(?,?,2,?,?,?,now(),'"+player.getName()+"上架了"+player.makeItemWithId(itemid).getItemName()+"',?,'正在出售') ";
	player.customSqlInsert(sql,iid,player.getId(),entid,itemid,number,meso);
}

function getKeyId(){
	var sql = " SELECT iid FROM zz_js_iid order by iid desc LIMIT 1 ";
	var resultList = player.customSqlResult(sql);
	
	player.customSqlUpdate("update zz_js_iid set iid = iid+1");
	
	return parseInt(resultList.get(0).get("iid"))+1;
}



function getEntId(item){
	return item.toString().substr(item.toString().indexOf("EntId")+6,18);
}

function isCashItem(itemid){
	return player.makeItemWithId(itemid).getSn()>-1;
}
