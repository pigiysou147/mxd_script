var tt = "#fEffect/CharacterEff/1082565/0/0#"; //饼干兔子
var fenge = "#fEffect/ItemEff/1004122/effect/default/8#";
// 每个阶段礼包所需的充值数
var condition = new Array(5200,10400);
// 礼包内容
var reward = new Array(
	Array(
        Array(2438497, 1),//创世首饰均10
        Array(2433732, 1),//图腾箱子
        Array(4036457, 20),//黑火
        Array(2614079, 100)//突破
        
        
    ),
	Array(
        Array(2433732, 1),//图腾箱子
        Array(4036457, 20),//黑火
        Array(2614079, 100)//突破
    )
);

var reward2 = new Array(
	Array(
        
        Array(4023025, 20),//金火
        Array(4023026, 50),//紫火
        Array(4033298, 50),//信任
        Array(4033911, 50)//瓶子
		
		
    ),
	Array(
        
        Array(4310260, 1,'创世武器自选'),//创世自选
        Array(2438499, 1,'宇宙戒指'),//宇宙戒指
        Array(2432753, 1,'吨凯尔戒指')//
    )
);
var text;
var ljname;
var revenue;
var xiangou = new Array(1,1,5,5,5,5);
revenue = parseInt(getHyPay(1));
text = "\t\t\t" + tt + " #e七夕达标福利#k#n " + tt + "\r\n\r\n";
text += "#d#e当前可用于购买礼包的金额为： #r" + revenue + " #d元\r\n";
var zhekou=0;
//text+=fenge+fenge+fenge+fenge+fenge+fenge+fenge+fenge+fenge+fenge+fenge+fenge+fenge+fenge+fenge+fenge+fenge+fenge+"\r\n"
var txt = "";
var index = 3;
var countList=getcountList();
for(var i = 0; i < condition.length ; i++) {
	var price=parseInt(condition[i]);
	
	var goumai =getEventCount("qixi" + (i+1));
    if(goumai >= xiangou[i]) {
        txt = "[#r已购买最大值:"+xiangou[i]+"#d]";
    } else {
		
        if( revenue >= price) {
            txt = "[#b还可购买"+(xiangou[i]-goumai)+"个#d]";
        } else  {
            txt = "[#g充值金额不足#d]";
        }
    }
	
    
    text += "#d#L" + i + "#" + tt + txt + " 七夕达标福利"+(i+1)+" #r\t" + price + "#l\r\n\r\n\r\n";
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
    
    text+="#b本周全服累计售出数量为:#k#r"+count+"#k\r\n";
    text += fenge + fenge + fenge + fenge + fenge + fenge + fenge + fenge + fenge + fenge + fenge + fenge + fenge + fenge + fenge + fenge + fenge + fenge + "\r\n"
}
text += "#k";
let selection = npc.askMenu(text);
var need=parseInt(condition[selection]);
text = "\t\t\t#e#r- 七夕达标" + need + "元福利 -\r\n\r\n";
for(var i = 0; i < reward[selection].length; i++) {
    text += "\t\t#i" + reward[selection][i][0] + "# #z" + reward[selection][i][0] + "#[" + reward[selection][i][1] + "个]";
    if(reward[selection][i].length > 2) {
        text += "[#r" + reward[selection][i][2] + "#k]";
    }
	text += "\r\n";
    
}
text+="\r\n以下材料只可以选取一个\r\n";
for(var i = 0; i < reward2[selection].length; i++) {
    text += "\t\t#L"+i+"##i" + reward2[selection][i][0] + "# #z" + reward2[selection][i][0] + "#[" + reward2[selection][i][1] + "个]";
    if(reward2[selection][i].length > 2) {
        text += "[#r" + reward2[selection][i][2] + "]";
    }
	text+="#l\r\n";
}
let cl = npc.askMenu(text);
let sel = npc.askYesNo("#r#e你要选取的材料为：#v"+reward2[selection][cl][0]+"# X "+reward2[selection][cl][1]+"\r\n请确认是否选取这个材料作为奖励");
var item =player.getInventorySlot(-1,-11);
if(sel==1){
	if(getEventCount("qixi" + (selection+1)) >=xiangou[selection]) {
		npc.say("#e#r\r\n\r\n\t\t这个礼包您已经购买到最大值了");
	} else if(revenue < need) {
		npc.say("活动期间内充值金额未达标！");
	} else if(player.getFreeSlots(1) < 5 || player.getFreeSlots(2) < 5 || player.getFreeSlots(3) < 5 || player.getFreeSlots(4) < 5 || player.getFreeSlots(5) < 5) {
		npc.say("每个栏位至少要保持5个空位以上才能领取哦~");
	}else if(item==null){
		npc.say("请佩戴武器~");
	} else {
		for(var i = 0; i < reward[selection].length; i++) {
			if(reward[selection][i][0]==2614079){
				//识别突破
				if(item.getLimitBreak()>=10000000000){
					//给8倍
					item.setLimitBreak(item.getLimitBreak()+10000000*reward[selection][i][1]*8);
					player.updateItem(-11,item);
				}else{
					player.gainItem(reward[selection][i][0], reward[selection][i][1]);
				}
			}else{
				player.gainItem(reward[selection][i][0], reward[selection][i][1]);
			}
		}
		player.gainItem(reward2[selection][cl][0],reward2[selection][cl][1]);
		setEventCount("qixi" + (selection+1), 0, 1);
		
		npc.broadcastWeatherEffectNotice(2,"恭喜玩家"+player.getName()+"购买了价值"+parseInt(condition[selection])+" 七夕礼包，掌声送给土豪！！！",10000);
		npc.broadcastPlayerNotice(1,"恭喜玩家"+player.getName()+"购买了价值"+parseInt(condition[selection])+"  七夕礼包，掌声送给土豪！！！");
		npc.broadcastPlayerNotice(2,"恭喜玩家"+player.getName()+"购买了价值"+parseInt(condition[selection])+"  七夕礼包，掌声送给土豪！！！");
		npc.broadcastPlayerNotice(3,"恭喜玩家"+player.getName()+"购买了价值"+parseInt(condition[selection])+"  七夕礼包，掌声送给土豪！！！");
		npc.say("领取成功");
	}
}
function getcountList(){	
	var sql="select event,sum(value) total from accounts_event where `event` in('qixi1','qixi2') GROUP BY event";
    var result = player.customSqlResult(sql);
    return result;
}


function getHyPay() {
    var sql = "SELECT sum(rmb) total from paylog where account=? and paytime>'2021-08-14' ";
    var result = player.customSqlResult(sql, player.getAccountName());
    if(result.size() > 0) {
        if(result.get(0).get("total") != null) {
            return result.get(0).get("total");
        }else{
            return 0;
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