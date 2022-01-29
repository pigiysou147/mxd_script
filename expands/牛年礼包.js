var tt = "#fEffect/CharacterEff/1082565/0/0#"; //饼干兔子
var fenge = "#fEffect/ItemEff/1004122/effect/default/8#";
// 每个阶段礼包所需的充值数
var condition = new Array(285,571, 1428, 2857, 5714,8570,18571);
// 礼包内容
var reward = new Array(
	Array(
        // 礼包1 100元
        Array(2431041, 1),//赌狗
        Array(2614079, 5),//1000万突破
		Array(4023025, 1),//金火
        Array(4023026, 2),//紫火
        Array(4033298, 2),//信任
        Array(4031997, 300)//蘑菇金币
    ),
	Array(
        // 礼包2 200元
        Array(2431041, 1),//赌狗
        Array(4033298, 3),//信任
        Array(2614079, 8),//1000万突破
		Array(4023025, 1),//金火
        Array(4023026, 2),//紫火
        Array(4031997, 500)//蘑菇金币
    ),
    Array(
        // 礼包3 500元
        Array(2431041, 1),//赌狗
        Array(4033298, 6),//信任
        Array(2614079, 18),//1000万突破
		Array(4023025, 2),//金火
        Array(4023026, 5),//紫火
        Array(4031997, 800),//蘑菇金币
        Array(4033911, 5)//瓶子
		
    ),
    Array(
        // 礼包4 1000元
        Array(2431041, 2),//赌狗
        Array(4033298, 10),//信任
        Array(2614079, 50),//1000万突破
        Array(4023025, 5),//金火
        Array(4023026, 10),//紫火
        Array(4033911, 10),//瓶子
		Array(4440300,500),//C级宝石
		Array(4441300,500),//C级宝石
		Array(4442300,500),//C级宝石
		Array(4443300,500),//C级宝石
		Array(4021030,500)//灵魂攻击石
    ),
    
    Array(
        // 礼包5 2000元
        Array(2431041, 3),//赌狗
        Array(4033298, 20),//信任
        Array(2614079, 100),//1000万突破
        Array(4023025, 10),//金火
        Array(4023026, 20),//紫火
        Array(4033911, 20),//瓶子
		Array(4440300,1000),//C级宝石
		Array(4441300,1000),//C级宝石
		Array(4442300,1000),//C级宝石
		Array(4443300,1000),//C级宝石
		Array(4021030,1000)//灵魂攻击石
	
    ),
    Array(
        // 礼包6 3000
        Array(2431041, 3),//赌狗
        Array(2614079, 150),//1000万突破
        Array(4033298, 30),//信任
        Array(4023026, 50),//紫火
        Array(4001332, 2),//大蜡笔
        Array(4033911, 50),//瓶子
        Array(4001118,150),//航海碎片
		Array(4440300,2000),//C级宝石
		Array(4441300,2000),//C级宝石
		Array(4442300,2000),//C级宝石
		Array(4443300,2000),//C级宝石
		Array(4021030,2000),//灵魂攻击石
		//Array(4009457,200),//冒险岛世界元素
		//Array(4009459,200),//冒险岛世界元素
		//Array(4009456,200),//冒险岛世界元素
		//Array(4009454,200),//冒险岛世界元素
		//Array(4009455,200)//冒险岛世界元素
    ),Array(
        // 礼包7 6500
        Array(2431041, 5),//赌狗
        Array(4033298, 80),//信任
        Array(2614079, 350),//1000万突破
        Array(4001332, 5),//大蜡笔
        Array(4023026, 100),//紫火
        Array(4033911, 120),//瓶子
		Array(4001118,300),//航海碎片
		Array(4440300,5000),//C级宝石
		Array(4441300,5000),//C级宝石
		Array(4442300,5000),//C级宝石
		Array(4443300,5000),//C级宝石
		Array(4021030,5000),//灵魂攻击石
		//Array(4009457,500),//冒险岛世界元素
		//Array(4009459,500),//冒险岛世界元素
		//Array(4009456,500),//冒险岛世界元素
		//Array(4009454,500),//冒险岛世界元素
		//Array(4009455,500)//冒险岛世界元素
		
    )
);

var text;
var ljname;
var revenue;
var xiangou = new Array(5,3,3,3,3,3,3); 
revenue = parseInt(getHyPay(1));
text = "\t\t\t" + tt + " #e双旦现金点购礼包中心#k#n " + tt + "\r\n\r\n";
text += "#d#e当前可用于购买礼包的现金点为： #r" + revenue + " #d元\r\n";
var zhekou=0;
//text+=fenge+fenge+fenge+fenge+fenge+fenge+fenge+fenge+fenge+fenge+fenge+fenge+fenge+fenge+fenge+fenge+fenge+fenge+"\r\n"
var txt = "";
var index = 3;
var countList=getcountList();
for(var i = 0; i < condition.length ; i++) {
	var price=parseInt(condition[i]*0.35)+1;
	
	var goumai =getEventCount("双旦" + (i+1));
    if(goumai >= xiangou[i]) {
        txt = "[#r已购买最大值:"+xiangou[i]+"#d]";
    } else {
		
        if( revenue >= price) {
            txt = "[#b还可购买"+(xiangou[i]-goumai)+"个#d]";
        } else  {
            txt = "[#g充值金额不足#d]";
        }
    }
	
    
    text += "#d#L" + i + "#" + tt + txt + " 双旦现金点欢乐购礼包"+(i+1)+" #r" + price + "#l\r\n\r\n\r\n";
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
var need=parseInt(condition[selection]*0.35+1);
text = "\t\t\t#e#r- 牛年周年庆礼包" + need + "元福利 -\r\n\r\n";
for(var i = 0; i < reward[selection].length; i++) {
    text += "\t\t#i" + reward[selection][i][0] + "# #z" + reward[selection][i][0] + "#[" + reward[selection][i][1] + "个]";
    if(reward[selection][i].length > 2) {
        text += "[#r" + reward[selection][i][2] + "#k]";
    }
	text += "\r\n";
    
}

let cl = npc.askYesNo(text);
if(cl==1){
var item =player.getInventorySlot(-1,-11);

	if(getEventCount("双旦" + (selection+1)) >=xiangou[selection]) {
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
				var beishu=1;
				//突破石头单独识别
				if(item.getLimitBreak()>10000000000 && item.getLimitBreak()<100000000000 ){
					//8倍
					beishu=8;
					item.setLimitBreak(item.getLimitBreak()+10000000*beishu*reward[selection][i][1]);
				}else if(item.getLimitBreak()>=100000000000){
					//10倍
					beishu=10;
					item.setLimitBreak(item.getLimitBreak()+10000000*beishu*reward[selection][i][1]);
				}else{
					player.gainItem(reward[selection][i][0],reward[selection][i][1]);
				}
				
				player.updateItem(-11,item);
				
			}else{
				player.gainItem(reward[selection][i][0], reward[selection][i][1]);
			}
			
		}
		
		setEventCount("双旦" + (selection+1), 0, 1);
		addHyPay((need/0.35)-1);
		npc.broadcastWeatherEffectNotice(2,"恭喜玩家"+player.getName()+"购买了价值"+parseInt(condition[selection]*0.35+1)+" 双旦礼包，掌声送给土豪！！！",10000);
		npc.broadcastPlayerNotice(1,"恭喜玩家"+player.getName()+"购买了价值"+parseInt(condition[selection]*0.35+1)+" 双旦礼包，掌声送给土豪！！！");
		npc.broadcastPlayerNotice(2,"恭喜玩家"+player.getName()+"购买了价值"+parseInt(condition[selection]*0.35+1)+" 双旦礼包，掌声送给土豪！！！");
		npc.broadcastPlayerNotice(3,"恭喜玩家"+player.getName()+"购买了价值"+parseInt(condition[selection]*0.35+1)+" 双旦礼包，掌声送给土豪！！！");
		npc.say("领取成功");
	}
}
function getcountList(){	
	var sql="select event,sum(value) total from accounts_event where `event` in('双旦1','双旦2','双旦3','双旦4','双旦5','双旦6','双旦7') GROUP BY event";
    var result = player.customSqlResult(sql);
    return result;
}
function addHyPay(price) {
    var sql = "update hypay set paihangbang2=paihangbang2-? where accountId=?";
    var result = player.customSqlUpdate(sql, price, player.getAccountId());
}
function getHyPay() {
    var sql = "select paihangbang2 from hypay where accountid = ? ";
    var result = player.customSqlResult(sql, player.getAccountId());
    if(result.size() > 0) {
        if(result.get(0) != null) {
            return result.get(0).get("paihangbang2")*0.35+1;
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