
//player.openWebUI(271,"UI/UIWindowCN.img/CN_Cash_Web/backgrnd","https://pay.mxd00.com/pay/index?id=1");
	

var item = player.getInventorySlot(1,1);
if(item==null){
	npc.say("请在装备栏的第一个格子放上要转移的装备。");
}else{

	
	var txt = "\r\n\t\t#r#e装备转移\r\n\r\n";
	txt+="请确认你要转移的装备为:#v"+item.getItemId()+"#\r\n";
	txt+="#L0#我要转移#l";
	let selection =npc.askMenu(txt);
	if(selection==0){

		let charName = npc.askText("请输入你要转移的角色名字。（请确保对方账户不在线，并且装备栏的第一个格子不能有装备。）","",1,20);
		var itemOnlyId=item.getOnlyId();

		var sql ="select characters.id charid,accounts.loggedin,characters.name from characters ,accounts where accounts.id=characters.accountid and characters.name=?";
		var charResult =player.customSqlResult(sql,charName);
		if(charResult.size()>0){
			var state = charResult.get(0).get("loggedin");
			var charid=charResult.get(0).get("charid");
			var charName=charResult.get(0).get("charid");
			if(state>0){
				npc.say("请让对方角色下线，不然无法完成转移。");

			}else {
				if(charName==player.getName()){
					npc.say("不能转移给自己！");
				}else{
					//查询对方的背包
					sql ="SELECT * from inventory where owner_id = ? and type=1 and position=1";
					var itemResult =player.customSqlResult(sql,charid);
					if(itemResult.size()>0){
						//代表有东西
						npc.say("请通知对方玩家，将装备栏第一个格子清理出来，才能完成转移");
					}else{
						let sel = npc.askYesNo("确认要转移给 角色：" + charName+ "  装备： #v"+item.getItemId()+"#");
						if(sel==1){
							//扣除装备
							player.loseInvSlot(1,1);
							//删除记录
							player.customSqlUpdate("delete from inventory where id = ?",itemOnlyId);
							//插入记录 
							player.customSqlInsert("insert into inventory values(?,?,?,?,?,?) ",itemOnlyId,charid,0,1,1,1);
							npc.say("转移成功，请通知对方上线查收。");
						}
						
					}

				}
				
			}
		}else{
			npc.say("用户信息不存在。");
		}

	}
}