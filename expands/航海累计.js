
var tt = "#fEffect/CharacterEff/1082565/0/0#"; //饼干兔子
var fenge = "#fEffect/ItemEff/1004122/effect/default/8#";
// 每个阶段礼包所需的充值数
var condition = new Array(1000,2000,3000,5000,6500,8000,10000,15000,20000,25000,30000);
// 礼包内容
var reward = new Array(
	Array(
        // 礼包1 1000
		Array(4001118,30),
		Array(4032375,4,"防具完美转职机会 一张等于一个防具机会")

    ),
	Array(
        // 礼包1 2000
		
		Array(4001118,30),
		Array(4032375,5,"防具完美转职机会 一张等于一个防具机会")

    ),
    Array(
        // 礼包1 3000
		
		Array(4001118,50),
		Array(4032375,5,"防具完美转职机会 一张等于一个防具机会")

    ),
    Array(
        // 礼包2 5000
		
		Array(4001118,100),
		Array(4032375,5,"防具完美转职机会 一张等于一个防具机会")

    ),
    
    Array(
        // 礼包4 6000
		
		Array(4001118,100),
		Array(4032375,5,"防具完美转职机会 一张等于一个防具机会")
    ),
    Array(
        // 礼包5 8000
		
		Array(4001118,150)
    ),
	Array(
        // 礼包6 10000
		
		Array(4001118,150),
		Array(2438497,1,"创世首饰自选箱子"),
		Array(4031900,1,"武器完美转职")
    ),Array(
        // 礼包6 15000
		
		Array(4001118,200),
		Array(4023025,10),
		Array(4036457,5)
        
    ),Array(
        // 礼包7 20000
		
		Array(4001118,200),
		Array(4023025,15),
		Array(4036457,15)
        
    ),Array(
        // 礼包8 25000
		
		Array(4001118,200),
		Array(4023025,20),
		Array(4036457,25)
        
    ),Array(
        // 礼包9 30000
		
		Array(4001118,200),
		Array(4023025,25),
		Array(4036457,30)
        
    )
);

var text;
var ljname;
var revenue;

var xiangou = new Array(1,1,1,1,1,1,1,1,1,1);

revenue = parseInt(getHyPay(1));
text = "\t\t\t" + tt + " #e航海礼包累计购买奖励#k#n " + tt + "\r\n\r\n";
text += "#d#e当前航海礼包累计消耗直冲为： #r" + revenue + " #d元\r\n";


var txt = "";
var index = 3;

var countList=getcountList();
var totalLength=3;
if(revenue>=3000){
	totalLength++;
	
}
if(revenue>=5000){
	totalLength++;
	
}
if(revenue>=6500){
	totalLength++;
	
}
if(revenue>=8000){
	totalLength++;
	
}
if(revenue>=10000){
	totalLength++;
	
}
if(revenue>=15000){
	totalLength++;
	
}
if(revenue>=20000){
	totalLength++;
	
}
if(revenue>=25000){
	totalLength++;
	
}

for(var i = 0; i < totalLength ; i++) {
	var price=parseInt(condition[i]);
	
	var goumai =getEventCount("hanghai" + (i+1));
    if(goumai >= 1) {
        txt = "[#r已领取:"+goumai+"#d]";
    } else {
		
        if( revenue >= price) {
            txt = "[#b可领取#d]";
        } else  {
            txt = "[#g金额不足#d]";
        }

    }
	
    
    text += "#d#L" + i + "#" + tt + txt + " 航海礼包累计消耗直冲奖励"+(i+1)+" #r  " + price + "#l\r\n\r\n\r\n"+totalLength;
	var cc=4;
	if(reward[i].length<4){
		cc=reward[i].length;
	}
    for(var j = 0; j < cc; j++) {

			text += "#v" + reward[i][j][0] + "# X " + reward[i][j][1];
			if(reward[i][j][2] != null) {
				text += "(" + reward[i][j][2] + ")";
			}
		}
    
    text += "\r\n";

    var count =0;
	if(countList.size()>1){
        count=countList.get(i).get("total")
    }
    
    text+="#b全服累计领取数量为:#k#r"+count+"#k\r\n";
    text += fenge + fenge + fenge + fenge + fenge + fenge + fenge + fenge + fenge + fenge + fenge + fenge + fenge + fenge + fenge + fenge + fenge + fenge + "\r\n"
}
text += "#k";
let selection = npc.askMenu(text);

var need=parseInt(condition[selection]);

text = "\t\t\t#e#r- 航海礼包累计消耗直冲奖励" + need + "元福利 -#k#n\r\n\r\n";
for(var i = 0; i < reward[selection].length; i++) {
    text += "\t\t#i" + reward[selection][i][0] + "# [" + reward[selection][i][1] + "个]";
    if(reward[selection][i].length > 2) {
        text += "[#r" + reward[selection][i][2] + "#k]\r\n";
    } else {
        text += "\r\n";
    }
}
let sel = npc.askYesNo(text);


if(sel == 1) {
	if(getEventCount("hanghai" + (selection+1)) >=1) {
		npc.say("#e#r\r\n\r\n\t\t这个礼包您已经购买到最大值了");
	} else if(revenue < need) {
		npc.say("航海礼包购买累计金额未达标！");
	} else if(player.getFreeSlots(1) < 5 || player.getFreeSlots(2) < 5 || player.getFreeSlots(3) < 5 || player.getFreeSlots(4) < 5 || player.getFreeSlots(5) < 5) {
		npc.say("每个栏位至少要保持5个空位以上才能领取哦~");
	} else {

		for(var i = 0; i < reward[selection].length; i++) {
			player.gainItem(reward[selection][i][0], reward[selection][i][1]);
		}
		setEventCount("hanghai" + (selection+1), 0, 1);
		
		npc.broadcastWeatherEffectNotice(2,"恭喜玩家"+player.getName()+"领取了"+parseInt(condition[selection])+"  航海礼包累计消耗直冲奖励，掌声欢呼声！！！",10000);
		npc.broadcastPlayerNotice(1,"恭喜玩家"+player.getName()+"领取了"+parseInt(condition[selection])+"  航海礼包累计消耗直冲奖励，掌声欢呼声！！！");
		npc.broadcastPlayerNotice(2,"恭喜玩家"+player.getName()+"领取了"+parseInt(condition[selection])+"  航海礼包累计消耗直冲奖励，掌声欢呼声！！！");
		npc.broadcastPlayerNotice(3,"恭喜玩家"+player.getName()+"领取了"+parseInt(condition[selection])+"  航海礼包累计消耗直冲奖励，掌声欢呼声！！！");

		npc.say("领取成功");
	}
}


function getcountList(){	
	var sql="select event,sum(value) total from accounts_event where `event` in('hanghai1','hanghai2','hanghai3','hanghai4','hanghai5','hanghai6','hanghai7','hanghai8','hanghai9','hanghai10','hanghai11') GROUP BY event";
    var result = player.customSqlResult(sql);
    return result;
}
function addHyPay(price) {
    var sql = "update hypay set paihangbang2=paihangbang2-? where accountId=?";
    var result = player.customSqlUpdate(sql, price, player.getAccountId());

}
function getHyPay() {

    var sql = "SELECT *,sum(rmb)*-1 total from cash_log where accounts_id=? and remark like '%航海%' ";

    var result = player.customSqlResult(sql, player.getAccountId());

    if(result.size() > 0) {
        if(result.get(0) != null) {
			if(result.get(0).get("total")==null){
				 return 0;
			}else{
				 return result.get(0).get("total");
			}
           
        }
		
    } else {
        return 0;
    }

}

function getEventCount(eventName) {

    var sql = "select value,time from accounts_event where accounts_id = ? and event =? ";

    var result = player.customSqlResult(sql, player.getAccountId(), eventName);

    if(result.size() > 0) {
        if(result.get(0) != null) {
            return result.get(0).get("value");
        }
    } else {
        var sql = "insert into  accounts_event (accounts_id,world,event,type,value) values(?,?,?,?,?)";

        var result = player.customSqlInsert(sql, player.getAccountId(), player.getWorld(), eventName, 0, 0);
        return 0;
    }

}

function setEventCount(eventName, type, value) {

    var sql = "update accounts_event set type=?,value=value+? where accounts_id=? and event=?";

    var result = player.customSqlUpdate(sql, type, value, player.getAccountId(), eventName);

}