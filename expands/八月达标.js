


var tt = "#fEffect/CharacterEff/1082565/0/0#"; //饼干兔子
var fenge = "#fEffect/ItemEff/1004122/effect/default/8#";
// 每个阶段礼包所需的充值数
var condition = new Array(520,1314);
// 礼包内容
var reward = new Array(
	Array(
        Array(1001135, 1,"全属性77点装，可自行幻化")
        
        
    ),
	Array(
        Array(1001135, 1,"全属性177点装，可自行幻化")
    )
);


var text;
var ljname;
var xiangou = new Array(1,1,5,5,5,5);

var revenue = parseInt(getHyPay(1));
text = "\t\t\t" + tt + " #e8月达标福利#k#n " + tt + "\r\n\r\n";
text += "#d#e当前购买礼包的累计金额为： #r" + revenue + " #d元\r\n";
var zhekou=0;
var txt = "";
var index = 3;
for(var i = 0; i < condition.length ; i++) {
	var price=parseInt(condition[i]);
	
	var goumai =getEventCount("bayue" + (i+1));
    if(goumai >= xiangou[i]) {
        txt = "[#r已购买最大值:"+xiangou[i]+"#d]";
    } else {
		
        if( revenue >= price) {
            txt = "[#b还可购买"+(xiangou[i]-goumai)+"个#d]";
        } else  {
            txt = "[#g充值金额不足#d]";
        }
    }
	
    
    text += "#d#L" + i + "#" + tt + txt + " 八月达标福利"+(i+1)+" #r\t" + price + "#l\r\n\r\n\r\n";
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
    
    text += fenge + fenge + fenge + fenge + fenge + fenge + fenge + fenge + fenge + fenge + fenge + fenge + fenge + fenge + fenge + fenge + fenge + fenge + "\r\n"
}
text += "#k";
let selection = npc.askMenu(text);
var need=parseInt(condition[selection]);
text = "\t\t\t#e#r- 八月达标" + need + "元福利 -\r\n\r\n";
for(var i = 0; i < reward[selection].length; i++) {
    text += "\t\t#i" + reward[selection][i][0] + "# #z" + reward[selection][i][0] + "#[" + reward[selection][i][1] + "个]";
    if(reward[selection][i].length > 2) {
        text += "[#r" + reward[selection][i][2] + "#k]";
    }
	text += "\r\n";
    
}

	if(getEventCount("bayue" + (selection+1)) >=xiangou[selection]) {
		npc.say("#e#r\r\n\r\n\t\t这个礼包您已经购买到最大值了");
	} else if(revenue < need) {
		npc.say("活动期间内充值金额未达标！");
	} else if(player.getFreeSlots(1) < 5 || player.getFreeSlots(2) < 5 || player.getFreeSlots(3) < 5 || player.getFreeSlots(4) < 5 || player.getFreeSlots(5) < 5) {
		npc.say("每个栏位至少要保持5个空位以上才能领取哦~");
	} else {
		var stat =77;
        if(selection==1){
            stat=177;
        }

        var item=player.makeItemWithId(1001135);
        item.setStr(stat);
        item.setDex(stat);
        item.setInt(stat);
        item.setLuk(stat);
        item.setPad(stat);
        item.setMad(stat);
        player.gainItem(item);

		setEventCount("bayue" + (selection+1), 0, 1);
		
		npc.broadcastWeatherEffectNotice(2,"恭喜玩家"+player.getName()+"领取了"+parseInt(condition[selection])+" 八月达标奖励，掌声送给土豪！！！",10000);
		npc.broadcastPlayerNotice(1,"恭喜玩家"+player.getName()+"领取了"+parseInt(condition[selection])+"  八月达标奖励，掌声送给土豪！！！");
		npc.broadcastPlayerNotice(2,"恭喜玩家"+player.getName()+"领取了"+parseInt(condition[selection])+"  八月达标奖励，掌声送给土豪！！！");
		npc.broadcastPlayerNotice(3,"恭喜玩家"+player.getName()+"领取了"+parseInt(condition[selection])+"  八月达标奖励，掌声送给土豪！！！");
		npc.say("领取成功");
	}


function getHyPay() {
    var total =0;
    var price = new Array( 571,1428, 2857, 5713, 8571,17142);
    
    var sql = "select * from accounts_event where `event` in('公测1','公测2','公测3','公测4','公测5','公测6') and accounts_id =?";
    var result = player.customSqlResult(sql, player.getAccountId());
    if(result.size() > 0) {
        for(var i=0;i<result.size();i++){
            if(result.get(i).get("value")>0){
                total+=price[i]*result.get(i).get("value");
            }
        }
        return parseInt(total*0.35+1);
        
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



//var event =npc.getEvent("JILI_PDT");
//
//npc.makeEvent("JILI_PDT",true,"");
//event.destroyEvent();

//npc.say((event.getVariables()));


// var txt="\r\n请选择你要强化的超级技能:\r\n";

// var skillList = player.customSqlResult("select * from characters_skills where   masterlevel=1 and characters_id =?",player.getId());
// for(var i=0;i<skillList.size();i++){
//     if(player.getSkillLevel(skillList.get(i).get("skillid"))==0)
//     txt+="#s"+skillList.get(i).get("skillid")+"#\t";
// }
// npc.askMenu(txt+player.getSkillMenu(25));