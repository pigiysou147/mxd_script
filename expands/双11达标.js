var tt = "#fEffect/CharacterEff/1082565/0/0#"; //饼干兔子
var fenge = "#fEffect/ItemEff/1004122/effect/default/8#";
// 每个阶段礼包所需的充值数
var condition = new Array(100,500,1000,3000,5000,8000,10000,13000);
// 礼包内容
var reward = new Array(
	//100
    Array(
        Array(4310238, 150),//味觉币*150 
        Array(4000124, 150),//内存卡
        Array(2436298, 1),//欢乐源泉
        Array(2431142, 3),//蜡笔随机箱子
        Array(2614079, 1),//1000W突破
        Array(4023025, 1),//金火
        Array(4031997, 200)//点卷
        
        
    ),
    //500
	Array(
        Array(2436298, 2),//欢乐源泉
        Array(2431142, 6),//蜡笔随机箱子
        Array(2614079, 5),//1000W突破
        Array(4033911, 5),//时间流动瓶子
        Array(4023025, 2),//金火
        Array(4023026, 5),//紫火
		
        Array(4031997, 500)//点卷
        
        
    ),
	//1000
    Array(
		Array(2434363, 1),//333图腾
        Array(2436298, 3),//欢乐源泉
        Array(2614079, 20),//1000W突破
        Array(4033911, 10),//时间流动瓶子
        Array(4023025, 5),//金火
        Array(4023026, 10),//紫火
        Array(4031997, 1000)//点卷
        
        
    ),
	//3000
    Array(
		//武功宝珠
		Array(2591008, 1,"<#r#e最强宝珠#k>"),

		Array(2434363, 1),//333图腾
        Array(1001135, 1),//177属性时装
        Array(2630133, 1),//神秘武器自选箱
        Array(2430675, 6),//黑卷自选箱
        Array(2436298, 5),//欢乐源泉
        Array(2614079, 50),//1000W突破
        Array(4033911, 30),//时间流动瓶子
        Array(4023025, 10),//金火
        Array(4023026, 30),//紫火
        Array(4001715, 30),//定居币1E
        Array(4031997, 3000)//点卷
        
        
    ),
	//5000
    Array(
		
		Array(2439548, 1),//666属性图腾
		Array(2437158, 1),//白板创世饰品自选
        Array(1001135, 1),//177属性时装
        Array(1001135, 1),//177属性时装
        Array(2436298, 10),//欢乐源泉
        Array(2614079, 70),//1000W突破
        Array(4033911, 50),//时间流动瓶子
        Array(4023025, 20),//金火
        Array(4023026, 50),//紫火
        Array(4001118, 150),//航海碎片
        Array(4001715, 60),//定居币1E
        Array(4031997, 10000)//点卷
        
        
    ),
	//8000
    Array(
		//25星799全属性轮回
		Array(1202193, 1),
		Array(2438497, 1),//创世饰品自选（强混三发均10）
        Array(4001332, 3),//大蜡笔
        Array(2436298, 13),//欢乐源泉
        Array(2614079, 100),//1000W突破
        Array(4033911, 80),//时间流动瓶子
        Array(4036457, 15),//黑火
        Array(4023026, 100),//紫火
        Array(4001118, 200)//航海碎片
        
        
    ),
	//10000
    Array(
		Array(2433732, 1),//999图腾
		Array(2630404, 1),//20级神秘徽章自选
        Array(4001332, 5),//大蜡笔
        Array(2436298, 15),//欢乐源泉
        Array(2614079, 130),//1000W突破
        Array(4033911, 100),//时间流动瓶子
        Array(3992025, 150),//圣诞大星
        Array(4036457, 20),//黑火
        Array(4001118, 200)//航海碎片
        
        
    ),
	//13000
    Array(
		Array(2433732, 1),//999图腾
		Array(2630404, 1),//20级神秘徽章自选
        Array(4001332, 8),//大蜡笔
        Array(2436298, 20),//欢乐源泉
        Array(2614079, 180),//1000W突破
        Array(4033911, 150),//时间流动瓶子
        Array(3992025, 260),//圣诞大星
        Array(4036457, 40),//黑火
        Array(4001118, 450)//航海碎片
        
        
    )
	 
	
);

var reward2 = new Array(
	//100
    Array(
        
        Array(4023026, 3)
		
    ),
	//500
	Array(
        
        Array(4000124, 250)
		
    ),
	//1000
	Array(
        
		Array(2435824, 6)//V卷自选
		
    ),
	//3000
	Array(
        
		Array(4001118, 100)//航海碎片
		
    ),
	//5000
	Array(
        
		Array(2430675, 10)//黑卷自选箱
		
    ),
	//8000
	Array(
        
        Array(3992025, 100)//圣诞大星
		
    ),
    //10000
	Array(
        
        Array(2432755, 3),//宠物
        Array(2432753, 1)//凯尔
		
    ),
    //13000
	Array(
        
        Array(2438499, 1),//宇宙
        Array(4310260, 1)//圣诞大星
		
    )
    
	
);
var text;
var ljname;
var revenue;
var xiangou = new Array(1,1,1,1);
revenue = parseInt(getHyPay(1));
text = "\t\t\t" + tt + " #e圣诞元旦充值达标福利#k#n " + tt + "\r\n\r\n";
text += "#d#e当前可用于购买礼包的金额为： #r" + revenue + " #d元\r\n";
var zhekou=0;
//text+=fenge+fenge+fenge+fenge+fenge+fenge+fenge+fenge+fenge+fenge+fenge+fenge+fenge+fenge+fenge+fenge+fenge+fenge+"\r\n"
var txt = "";
var index = 3;
var countList=getcountList();
for(var i = 0; i < reward.length ; i++) {
	var price=parseInt(condition[i]);
	
	var goumai =getEventCount("sdyd" + (i+1));
    if(goumai >0) {
        txt = "[#r已购买最大值:"+1+"#d]";
    } else {
		
        if( revenue >= price) {
            txt = "[#b还可购买"+(1-goumai)+"个#d]";
        } else  {
            txt = "[#g充值金额不足#d]";
        }
    }
	
    
    text += "#d#L" + i + "#" + tt + txt + " 圣诞元旦达标福利"+(i+1)+" #r\t" + price + "#l\r\n\r\n\r\n";
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
        //count=countList.get(i).get("total")
    }
    
    text+="#b本周全服累计售出数量为:#k#r"+count+"#k\r\n";
    text += fenge + fenge + fenge + fenge + fenge + fenge + fenge + fenge + fenge + fenge + fenge + fenge + fenge + fenge + fenge + fenge + fenge + fenge + "\r\n"
}
text += "#k";
let selection = npc.askMenu(text);
var need=parseInt(condition[selection]);
text = "\t\t\t#e#r- 圣诞元旦达标" + need + "元福利 -\r\n\r\n";
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
	if(getEventCount("sdyd" + (selection+1)) >0) {
		npc.say("#e#r\r\n\r\n\t\t这个礼包您已经购买到最大值了");
	} else if(revenue < need) {
		npc.say("活动期间内充值金额未达标！");
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
			}else if(reward[selection][i][0]==1001135){
                var item=player.makeItemWithId(1001135);
                item.setStr(188);
                item.setDex(188);
                item.setInt(188);
                item.setLuk(188);
                item.setPad(188);
                item.setMad(188);
                player.gainItem(item);
            }else if(reward[selection][i][0]==1202193){
                var item=player.makeItemWithId(1202193);
                item.setStr(799);
                item.setDex(799);
                item.setInt(799);
                item.setLuk(799);
                item.setPad(799);
                item.setMad(799);
                item.setCHUC(25);
                player.gainItem(item);
            }else{
                
                
 
				player.gainItem(reward[selection][i][0], reward[selection][i][1]);
			}
		}
        
		player.gainItem(reward2[selection][cl][0],reward2[selection][cl][1]);
		setEventCount("sdyd" + (selection+1), 0, 1);
		
		npc.broadcastWeatherEffectNotice(2,"恭喜玩家"+player.getName()+"购买了价值"+parseInt(condition[selection])+" 圣诞元旦礼包，掌声送给土豪！！！",10000);
		npc.broadcastPlayerNotice(1,"恭喜玩家"+player.getName()+"购买了价值"+parseInt(condition[selection])+"  圣诞元旦礼包，掌声送给土豪！！！");
		npc.broadcastPlayerNotice(2,"恭喜玩家"+player.getName()+"购买了价值"+parseInt(condition[selection])+"  圣诞元旦礼包，掌声送给土豪！！！");
		npc.broadcastPlayerNotice(3,"恭喜玩家"+player.getName()+"购买了价值"+parseInt(condition[selection])+"  圣诞元旦礼包，掌声送给土豪！！！");
		npc.say("领取成功");
	}
}
function getcountList(){	
	var sql="select event,sum(value) total from accounts_event where `event` in('sdyd1','sdyd2','sdyd3') GROUP BY event";
    var result = player.customSqlResult(sql);
    return result;
}


function getHyPay() {
    var sql = "SELECT sum(rmb) total from paylog where account=? and paytime>='2021-12-24' and paytime<'2022-01-05'";
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