/**
* 商城-新端脚本 几里 315342975 
**/
let cat1="#fItem/Pet/5000000.img/alert/0#";
let cat2="#fItem/Pet/5000000.img/fly/0#";
let cat3="#fItem/Pet/5000000.img/cry/0#";
let tu1 = "#fItem/Cash/0501.img/05010045/effect/stand1/1#"
let tu2 = "#fItem/Cash/0501.img/05010002/effect/default/7#"
let tu3 = "#fUI/NameTag/medal/758/w#"
let tu4 = "#fEffect/SetEff.img/245/effect/28#"
let tu5 = "#fUI/NameTag/medal/758/e#"
let tu6 = "#fUI/NameTag/medal/758/c#"
let fy = "#fUI/RunnerGame.img/RunnerGameUI/UI/Point/1#";
let fy1 = "#fUI/RunnerGame.img/RunnerGameUI/UI/Point/2#";
let dz = "#fUI/GuildMark/Mark/Etc/00009020/1#";
let dz1 = "#fEffect/CharacterEff/1003393/1/0#";
let star = "#fEffect/CharacterEff/1051294/1/1#"
let eff2 = "#fEffect/CharacterEff/1112925/0/0#";
var eff1 = "#fEffect/CharacterEff/1112924/0/0#";

let type = 1;// 1=点券商城 2=抵用商城 3=金币商城 4=余额商城
let scriptName = "快捷商店"
let items = Array(
	//类别（展示出来的）
	Array("#r余额商城",
		//物品ID 价格 介绍 时间
		Array(5211060,1000,"2小时" ,0.1),//3倍经验（2小时）
		Array(5360015,1000,"24小时" ,1)//双爆卡 （24小时）
	)
);
let title = "";
let haveMoney = 0;
while(true){
	switch (type){
		case 1:
			title = "点券"
			haveMoney = player.getCashShopCurrency(1);
			break;
		case 2:
			title = "抵用"
			haveMoney = player.getCashShopCurrency(2);
			break;
		case 3:
			title = "金币"
			haveMoney = "查阅背包";
			break;
		case 4:
			title = "余额"
			haveMoney = getHyPay(1);
			break;
	}
	let selected = 0;
	let str = ""

	for(let i = 1; i<items[selected].length;i++){
		str += "#d#L"+i+"##v"+items[selected][i][0]+"#  #b单价#r " +items[selected][i][1]+" " +title+" #k" +items[selected][i][2]+" #l\r\n";
		//str += "#d#L"+i+"##v"+items[selected][i][0]+"#  #b单价#r " +items[selected][i][1]+" " +title+" #k" +items[selected][i][2]+" 时间"+items[selected][i][3]+" 天#l\r\n";
		//str += "#d#L"+i+"##v"+items[selected][i][0]+"# #z"+items[selected][i][0]+"#  #b单价#r " +items[selected][i][1]+" " +title+" #k" +items[selected][i][2]+"#l\r\n";
	}
	let selectedItem = npc.askMenu(str,3003307);
	str = "#b当前选择物品 : #v"+items[selected][selectedItem][0]+"# 单价 :#r"+items[selected][selectedItem][1]+title+"\r\n";
	str += "#e请输入购买数量";
	let number;
	while(true){
		if(type != 3){
			number = npc.askNumber(str,"1",1,haveMoney/items[selected][selectedItem][1]);
		}else{
			number = npc.askNumber(str,"1",1,1);
		}
		if(number == 0){
			npc.say("不可以输入 0 哦！");
		}else{
			break;
		}
	}
	str = "#b请确认购买物品：\r\n";
	//str += "#b当前"+title+"："+haveMoney+"\r\n";
	str += "#b物品 : #v"+items[selected][selectedItem][0]+"# 单价 :#r"+items[selected][selectedItem][1]+title+"\r\n";
	//str += "#b期限 : "+items[selected][selectedItem][3]+" 天 \r\n";
	//str += "#b数量 : "+number+" 个#b 总价 :#r"+(items[selected][selectedItem][1]*number)+title+"\r\n";
	let YN = npc.askYesNo(str,3003307);
	if(YN == 1){
		if(player.canGainItem(items[selected][selectedItem][0],number)){
			switch (type){
				case 1:
					player.modifyCashShopCurrency(1,-(items[selected][selectedItem][1]*number));
					gainItemPeriod(items[selected][selectedItem][0],number,items[selected][selectedItem][3]);
					npc.say("购买成功",3003307);
					break;
				case 2:
					player.modifyCashShopCurrency(2,-(items[selected][selectedItem][1]*number));
					gainItemPeriod(items[selected][selectedItem][0],number,items[selected][selectedItem][3]);
					npc.say("购买成功",3003307);
					break;
				case 3:
					if(player.hasMesos((items[selected][selectedItem][1]*number))){
						gainItemPeriod(items[selected][selectedItem][0],number,items[selected][selectedItem][3]);
						player.loseMesos(items[selected][selectedItem][1]*number);
						npc.say("购买成功",3003307);
					}else{
						npc.say("金币不足",3003307);
					}
					break;
				case 4:
					gainHyPay(-(items[selected][selectedItem][1]*number))
					gainItemPeriod(items[selected][selectedItem][0],number,items[selected][selectedItem][3]);
					npc.say("购买成功",3003307);
					break;
			}
		}else{
			npc.say("请清理背包，您当前无法放下所购买物品",3003307);
		}
	}
}


function gainItemPeriod(itemid,quantity,time){
	if(time < 1000 && time > 0){
		time = 1000*60*60*24*time;
	}
	for(var i = 0 ;i<quantity;i++){
		let newItem = player.makeItemWithId(itemid);
		if(time != 0){
			newItem.setExpiration(new Date().getTime() + time);
		}
		player.gainItem(newItem);
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