/**
* 股市系统 几里 315342975 
**/

let icon1 = "#fMap/MapHelper.img/minimap/arrowright#";
let icon2 = "#fEffect/CharacterEff/1051294/1/0#";

let haveNumber;
let stockName;
let stockMax;
let stockCanBuyNumber;
let stockPrice;
let date1,date2;
let pageN = 5;//查看操作的每页显示数量

while(true){
	//判断两个时间 用于交易的时候判断数据是否需要刷新
	date1 = new Date();
	
	let str = ""+icon1;
	str += " #d你好,这裡是#r<蘑菇股市>#d,我是股市交易人#r<财神>#d\r\n"+icon1+" 当前蘑菇时间 #r<"+date1.toLocaleString()+">#d\r\n";
	str += "#L0#"+icon2+" 股市说明#l"
	str += "#L1#"+icon2+" 股票信息#l"
	str += "#L2#"+icon2+" 我的股票#l\r\n"

	let selected = npc.askMenu(str,9300011);

	switch(selected){
		case 0:
			//说明
			str = ""+icon1+" #d股市说明\r\n";
			str += "1.#r<股票信息>#d-#r<查看><购买><出售>#d各个股票。\r\n"
			str += "2.#r<我的股票>#d-查看持有的各股及近期的出入情况。\r\n"
			str += "3.#d股价每小时刷新一次#r<整点刷新>#d,每次浮动最多#r<3%>#d。\r\n"
			str += "4.股票价格每天#r<24个小时>#d均会刷新,每日浮动没有上限。\r\n"
			str += "5.股票购买请使用金币,并且单位为#r<万>\r\n";
			str += "6.出售股票时,股市会收取 0.5% 的手续费\r\n";
			npc.say(str,9300011);
			break;
		case 1:
			let stockInfos = getStockInfos();
			//股票信息
			if(stockInfos != null){
				str = ""+icon1+" #d股票列表\r\n";
				str += icon1+" #d说明:#r<红色>#d为涨 #g<绿色>#d为跌 #b<点击对应股票查看详情>#d\r\n#L10086##b返回股市#l\r\n"
				for(let i = 0; i<stockInfos.size(); i++){
					// 填充名字空格
					let stockName = stockInfos.get(i).get("stockName").toString()+"";
					for (let j = 25 - getByteLen(stockName); j > 0; j--) {
						stockName += " ";
					}
					let floatD = parseFloat(stockInfos.get(i).get("recentFloat").toString());
					if(floatD > 0){
						str += "#r"
					}else if(floatD < 0){
						str += "#g"
					}else{
						str += "#k"
					}
					floatD = floatD + "";
					for (let j = 2 - getByteLen(floatD); j > 0; j--) {
						floatD += " ";
					}
					str += "#L"+i+"#" + stockName +" <  "+floatD+" %>#l\r\n";
					
				}
				selected = npc.askMenu(str,9300011);
				if(selected == 10086){
					continue;
				}else{
					stockId = stockInfos.get(selected).get("id");
					
					//查询该玩家的对应股票信息
					let stockCharacter = getStockInfoByIdCharacterId(stockId);
					//查询股票流水信息
					let stock = getStockLogs(stockId);
					
					stockName = stockInfos.get(selected).get("stockName").toString();
					stockMax = parseInt(stockInfos.get(selected).get("maxNumber"));
					stockCanBuyNumber = stockMax - getStockUesd(stockId);
					stockPrice = stockInfos.get(selected).get("price");
					str = "#b" + stockName + " #d当前价格为每股 #r"+stockPrice+"#d 万冒险币\r\n"
					str += "#b" + stockName + " #d发佈的数量为 #r"+stockMax+" #d股\r\n"
					str += "#b" + stockName + " #d剩余的数量为 #r"+stockCanBuyNumber+" #d股\r\n"
					if(stockCharacter == null){
						haveNumber = 0;
						str += "#r你没有拥有 #b"+stockName+"#d！\r\n"
						str += "#L0#"+icon2+" 返回股市#l #L1#"+icon2+" 购买股票#l"
					}else{
						haveNumber = stockCharacter.get(0).get("number");
						str += "#d你拥有 #r"+haveNumber+" 股 #b"+stockName+"#d！\r\n"
						str += "#L0#"+icon2+" 返回股市#l #L1#"+icon2+" 购买股票#l #L2#"+icon2+" 出售股票#l"
					}
					str += "\r\n\r\n#r以下是该股票最近20个小时的涨跌记录:\r\n"
					if(stock == null){
						str += "该股票暂时没有任何涨跌记录\r\n";
					}else{
						for(let i = 0; i<stock.size(); i++){
							str += "#d时间 "+(stock.get(i).get("date")+"").substring(0,19);
							let floatF = parseFloat(stock.get(i).get("float").toString());
							if(floatF > 0){
								str += "#r"
							}else if(floatF < 0){
								str += "#g"
							}else{
								str += "#k"
							}
							if(floatF > 0){
								floatF = "+" + floatF;
							}else if(floatF == 0){
								floatF = " " + floatF;
							}
							
							str += "  浮动 "+floatF +"%,"
							
							let floatprice = parseFloat(stock.get(i).get("floatPrice").toString());
							for (let j = 2 - getByteLen(floatprice); j > 0; j--) {
								floatprice = " " + floatprice;
							}
							str += " "+floatprice +"万冒险币\r\n"
						}
					}
					let selected1 = npc.askMenu(str,9300011);
					if(selected1 == 0){
						continue;
					}else if(selected1 == 1){
						//购买股票
						str = "";
						str += "#b"+stockName+" #d股票价格为 #r"+stockPrice+"万冒险币/股\r\n"
						str += "#b"+stockName+" #d股票剩余数量为 #r"+stockCanBuyNumber+"股\r\n"
						str += "请输入购买股数\r\n";
						let number = npc.askNumber(str,"1",1,stockCanBuyNumber);
						
						if(player.hasMesos(stockPrice*number*10000)){
							str = "请确认入股订单信息:\r\n";
							str += "#b"+stockName+" #d股票价格为 #r"+stockPrice+"万冒险币/股\r\n"
							str += "#d购买股数 #r"+number+" #d总价 #r"+stockPrice*number+"万\r\n"
							let YN = npc.askYesNo(str,9300011);
							if(YN == 1){
								//需要比较时间以及剩余数量
								date2 = new Date();
								stockMax = parseInt(stockInfos.get(selected).get("maxNumber"));
								stockCanBuyNumber = stockMax - getStockUesd(stockId);
								if(date1.getHours() != date2.getHours()){
									npc.say("#d当前时间为#r"+date2.toLocaleString()+",#d当前#r价格已发生改变#d\r\n点击确定刷新股市！",9300011);
								}else if(stockCanBuyNumber < number){
									npc.say("#d该股的剩余数量已改变，当前不足"+number+"\r\n点击确定刷新股市重新选购！",9300011);
								}else{
									player.loseMesos(stockPrice*number*10000);
									updateCharacterStock(stockId,number);
									npc.broadcastPlayerNotice(1, "【蘑菇股市】:玩家 "+player.getName()+" 购买了 "+number+"股 <"+stockName+"> 炒股赚大钱！");
									npc.say("#d购买成功",9300011);
								}
							}else{
								npc.say("#d分析好股市再来吧！",9300011);
							}
						}else{
							npc.say("#d金币不足#r(需要"+stockPrice*number+"万)#d，点击确定返回股市",9300011);
						}
					}else if(selected1 == 2){
						//卖出股票
						str = "";
						str += "#b"+stockName+" #d股票价格为 #r"+stockPrice+"万冒险币/股\r\n"
						str += "#d你持有的#b"+stockName+" #d股票剩余数量为 #r"+haveNumber+"股\r\n"
						str += "请输入卖出股数 (收取 0.5% 手续费)\r\n";
						let number = npc.askNumber(str,"1",1,haveNumber);
						str = "请确认出股订单信息:\r\n";
						str += "#b"+stockName+" #d股票价格为 #r"+stockPrice+"万冒险币/股\r\n"
						str += "#d卖出股数 #r"+number+" #d总价 #r"+stockPrice*number+"万 (收取 0.5% 手续费)\r\n"
						str += "#r#e注意：请确保你的背包能够拥有以上总价金币。\r\n"
						let YN = npc.askYesNo(str,9300011);
						if(YN == 1){
							//需要比较时间
							date2 = new Date();
							if(date1.getHours() != date2.getHours()){
								npc.say("#d当前时间为#r"+date2.toLocaleString()+"#d,当前#r价格已发生改变\r\n点击确定刷新股市！",9300011);
							}else{
								player.gainMesos(stockPrice * number * 10000 * 0.995);
								updateCharacterStock(stockId,-number);
								npc.broadcastPlayerNotice(1, "【蘑菇股市】:玩家 "+player.getName()+" 卖出了 "+number+"股 <"+stockName+"> 看来是赚了不少钱呢！");
								npc.say("出股成功",9300011);
							}
						}else{
							npc.say("分析好股市再来吧！",9300011);
						}
						
					}
				}
			}else{
				npc.say("管理员还没有开放股市信息",9300011);
			}
			break;
		case 2:
			//我的股票
			str = " #d您好,我是#r<股市小精灵>#d\r\n"+icon1+" 请选择您要查看的信息#d\r\n";
			str += "#L10086#"+icon2+" 返回股市#l\r\n"
			str += "#L0#"+icon2+" 我要查看我近期的操作记录#l\r\n"
			str += "#L1#"+icon2+" 我要查看我持有的股票信息#l\r\n"
			selected = npc.askMenu(str,3003307);
			if(selected == 0){
				//查看操作记录
				let dd = 0;
				while(true){
					let infos = getCharacterLogs(dd);
					if(infos == null){
						npc.say("没有更多的操作记录了，点击确定返回股市",9300011);
						break;
					}
					str = "#d每页显示 "+pageN+" 条记录,点击 <Next> 翻看下一页。\r\n";
					for(let i = 0;i<infos.size();i++){
						var time = infos.get(i).get("date").toString().substring(5,16);
						var msg = infos.get(i).get("msg").toString();
						if(msg.indexOf("购买") != -1){
							str += "#r"
						}else{
							str += "#g"
						}
						str += time +" " + msg +"\r\n"
					}
					dd++;
					npc.sayNext(str,9300011);
				}
			}else if(selected == 1){
				//查看拥有的股票
				let myStocks =getCharacterStocks();
				if(myStocks == null){
					npc.say("你还没有购买过股票！",9300011);
				}else{
					let infos = getCharacterStocks();
					str = "#d你持有的股票如下:\r\n"
					for(let i = 0;i<infos.size();i++){
						str += "#d股名 #r<"+infos.get(i).get("stockName").toString()+"> #d股数 #r<"+infos.get(i).get("number").toString()+"> #d单价 #r<"+infos.get(i).get("price").toString()+"万>\r\n";
					}
					npc.say(str,9300011);
				}
			}else if(selected == 10086){
				continue;
			}
			
			break;
	}
}

function getByteLen(val) {
	var str = new String(val);  
	var bytesCount = 0;  
	for (var i = 0 ,n = str.length; i < n; i++) {  
		var c = str.charCodeAt(i);  
		if ((c >= 0x0001 && c <= 0x007e) || (0xff60<=c && c<=0xff9f)) {  
			bytesCount += 1;  
		} else {  
			bytesCount += 2;  
		}  
	}  
	return bytesCount;  
}
//获取股市列表
function getStockInfos(){
	var sql = "select * from jili_stock_market";
	var push = player.customSqlResult(sql);
	if (push.size() > 0) {
		return push;
	}else{
		return null;
	}
}
//获取股票流水
function getStockLogs(stockId){
	var sql = "select * from jili_stock_market_logs where stockId = '"+stockId+"' order by date desc limit 20";
	var push = player.customSqlResult(sql);
	if (push.size() > 0) {
		return push;
	}else{
		return null;
	}
}
//获取玩家对应股票信息
function getStockInfoByIdCharacterId(stockId){
	var sql = "select * from jili_stock_characters where characterId = '"+player.getId()+"' and stockId = '"+stockId+"'";
	var push = player.customSqlResult(sql);
	if (push.size() > 0) {
		return push;
	}else{
		return null;
	}
}
//获取股票已出数量
function getStockUesd(stockId){
	var sql = "select (case when sum(number)>0 then sum(number) else 0 end)as count from jili_stock_characters where stockId = '"+stockId+"'";
	var push = player.customSqlResult(sql);
	return parseInt(push.get(0).get("count"));
}
//更新玩家持有股票				股票ID  数量
function updateCharacterStock(stockId,number){
	if(haveNumber > 0){
		if(number < 0 && (-number) == haveNumber){
			//删除记录
			player.customSqlUpdate("delete from `jili_stock_characters` where stockId = '"+stockId+"' and characterId = '"+player.getId()+"'");
		}else{
			//更新记录
			var sql = "update jili_stock_characters set number = number + '"+number+"' where characterId = '" + player.getId() + "' and stockId = '"+stockId+"' ;";   
			player.customSqlUpdate(sql);
		}
	}else{
		//增加记录
		sql = "insert into jili_stock_characters(characterId, stockId, number) values('"+player.getId()+"','"+stockId+"','"+number+"')";
		player.customSqlInsert(sql);
	}
	//添加信息
	var msg;
	if(number > 0){
		msg = "购买了"+stockName+",单价"+stockPrice+",数量"+number+".";
	}else{
		msg = "卖出了"+stockName+",单价"+stockPrice+",数量"+(-number)+".";
	}
	sql = "insert into jili_stock_characters_logs(characterId, stockId, msg,`date`) values('"+player.getId()+"','"+stockId+"','"+msg+"',now())";
	player.customSqlInsert(sql);
}

//获取玩家操作记录
function getCharacterLogs(page){
	var sql = "select * from jili_stock_characters_logs where characterId = '"+player.getId()+"' order by date desc limit "+(page*pageN)+","+pageN;
	var push = player.customSqlResult(sql);
	if (push.size() > 0) {
		return push;
	}else{
		return null;
	}
}

//获取玩家现在持有的股票
function getCharacterStocks(){
	var sql = "select * from jili_stock_characters jsc left join jili_stock_market jsm on jsm.id = jsc.stockId where jsc.characterId = '"+player.getId()+"'";
	var push = player.customSqlResult(sql);
	if (push.size() > 0) {
		return push;
	}else{
		return null;
	}
}