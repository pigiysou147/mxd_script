/**
* 貨幣突破系統-QQ:739977676
**/

//參數

let menu = Array(
	Array("#e#r【餘額突破】#b1餘額＝5000萬 "),
	Array("#e#r【#v4033247#突破】#b1金楓＝50萬 ")
	//Array("抵用隨機突破介紹 1000 抵用可隨機突破10000-20000 ")
	//Array("金幣隨機突破介紹 1000W金幣可隨機突破10000-20000 ")
);

let canChangeNum = 0;
let minNum = 1; //除了餘額最小的份數

while(true){
	let str = "#b貨幣突破，請選擇您要破功的方式\r\n";
	for(let i = 0;i<menu.length;i++){
		str += "#L"+i+"#"+menu[i][0]+"#l\r\n";
	}
	let selected = npc.askMenu(str);
	let toDrop = player.getInventorySlot(1, 1);
	if(toDrop == null){
		npc.say("#b請將您需要突破的裝備放到第一格！");
	}else{
		str = "#b您當前使用的功能是:\r\n"+menu[selected][0];
		switch (selected){
			case 0:
				canChangeNum = getHyPay(1);
				minNum = 1;
				str += "\r\n\r\n#r#e請將要破功的裝備放在裝備欄第一格\r\n\r\n"
				str += "\r\n當前餘額:"+canChangeNum;
				str += "\r\n請輸入您要使用的餘額數量"
				str += "\r\n1餘額=5000萬"
				str += "\r\n#b可破功:"+(canChangeNum)+"次"
				break;
			case 1:
				canChangeNum =  parseInt(player.getAmountOfItem(4033247))
				str += "\r\n\r\n#r#e請將要破功的裝備放在裝備欄第一格\r\n\r\n"
				str += "\r\n當前金楓:"+ canChangeNum+"";
				str += "\r\n您要使用點兌換多少份突破?"
				str += "\r\n1個金楓=50萬"
				str += "\r\n#b可破功:"+(canChangeNum)+"次"
				break;
		}
		let number = npc.askNumber(str,"1",1,(canChangeNum));

		switch (selected){
			case 0:
			//餘額突破 注意 yeNum 代表每份的突破值
			var needmoney = (number);
			if (getHyPay(1) >= number ){
				yeNum = 50000000
				gainHyPay(-number);
				toDrop.setLimitBreak(toDrop.getLimitBreak()+(number*yeNum));
				player.updateItem(1, toDrop);
				npc.broadcastGachaponMsgEx("『餘額突破』：恭喜 "+player.getName()+" 使用餘額將武器破功"+((number)/2)+"億！",toDrop);
			npc.say("#b突破成功！突破值上漲 #r"+((number)/2)+"#b億");
				break;
				} else {
				npc.say("#b突破失敗.\r\n需要"+needmoney+"餘額 才可以突破.");
				break;
				}
			case 1:
			//金楓突破 注意 yeNum 代表每份的突破值
			var needitem = (number);
			if (player.hasItem(4033247,(number * 1))) {
				yeNum = 500000
				player.loseItem(4033247,(number * 1));
				toDrop.setLimitBreak(toDrop.getLimitBreak()+(number*yeNum));
				player.updateItem(1, toDrop);
				npc.broadcastGachaponMsgEx("『金楓突破』：恭喜 "+player.getName()+" 使用金楓將武器破功"+((number)/200)+"億！",toDrop);
				npc.say("#b突破成功！突破值上漲 #r"+((number)/200)+"#b億");
				break;
		} else {
				npc.say("#b突破失敗.\r\n需要"+needitem+"個#v" + 4033247 + "##z" + 4033247 + "# 才可以突破.");
				break;
			}
		}
	}
}

function getHyPay(type) {
    var sql = "select * from hypay where accname = '" + getAccountName() + "'";
    var push = player.customSqlResult(sql);
    if (push.size() > 0) {
        var result = push.get(0);
        if (type == 1) {
            var pay = result.get("pay");
        } else if (type == 2) {
            var pay = result.get("payUsed");
        } else if (type == 3) {
            var pay = result.get("payReward");
        }
    } else {
        player.customSqlInsert("INSERT INTO `hypay` (`accname`, `name`) VALUES ('" + getAccountName() + "', '" + player.getName() + "')");
        return getHyPay(1);
    }

    return pay;
}
function getAccountName() {
    var i = -1;
    var sql = "select name,id from accounts where id=" + player.getAccountId() + " order by name limit 1;";
    var push = player.customSqlResult(sql);
    if (push.size() > 0) {
        var result = push.get(0);
        var name = result.get("name");
    }

    return name;
}

function gainHyPay(count) {
    var sql = "update hypay set pay =pay+? where accname = '" + getAccountName() + "';";   
    player.customSqlUpdate(sql, count);
}