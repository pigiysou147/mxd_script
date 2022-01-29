var tt = "#fEffect/CharacterEff/1082565/0/0#"; //饼干兔子
var fenge = "#fEffect/ItemEff/1004122/effect/default/8#";
// 每个阶段礼包所需的充值数
var condition = new Array(100,500);
// 礼包内容
var reward = new Array(
	Array(
        // 礼包1 100
        
        Array(1113210,1,"金率20时限1天"),
        Array(1113210,1,"金率20时限1天"),
        Array(1113210,1,"金率20时限1天"),
        Array(1113210,1,"金率20时限1天"),
        Array(1113210,1,"金率20时限1天"),
        Array(1113210,1,"金率20时限1天"),
        Array(2438893,1,"金率20时限1天"),//武器
        Array(2438895,1,"金率20时限1天"),//副手
        Array(1122306,1,"金率20时限1天"),//冒险岛寻宝项链
        Array(1122430,1,"金率20时限1天"),//痛苦根源
        Array(1202193,1,"金率20时限1天"),//轮回
        Array(1004492,1,"金率20时限1天"),// 冒险岛寻宝帽子 
        Array(1102828,1,"金率20时限1天"),// 冒险岛寻宝披风 
        Array(1082647,1,"金率20时限1天"),// 冒险岛寻宝手套 
        Array(1052929,1,"金率20时限1天"),// 冒险岛寻宝套装 
        Array(1073057,1,"金率20时限1天"),// 冒险岛寻宝鞋子 
        Array(1132308,1,"金率20时限1天"),// 梦幻腰带 
        Array(1152187,1,"金率20时限1天"),// 冒险岛寻宝肩章 
        Array(1662174,1,"金率20时限1天"),// 蘑菇机器人 
        Array(1672091,1,"金率20时限1天"),// 蘑菇机器人专用心脏 
        Array(1190400,1,"金率20时限1天"),// 首领怪竞技场徽章 
        Array(1012632,1,"金率20时限1天"),// 失控机械标记 
        Array(1022278,1,"金率20时限1天"),// 蕴藏魔力的眼罩 
        Array(1032316,1,"金率20时限1天"),// 船长姿态耳环
        Array(1182285,1,"金率20时限1天"),// 创世徽章
        Array(1162080,1,"金率20时限1天")// 被诅咒的魔道书-红 

    ),
	Array(
        Array(1113210,1,"金率20时限7天"),
        Array(1113210,1,"金率20时限7天"),
        Array(1113210,1,"金率20时限7天"),
        Array(1113210,1,"金率20时限7天"),
        Array(1113210,1,"金率20时限7天"),
        Array(1113210,1,"金率20时限7天"),
        Array(2438893,1,"金率20时限7天"),//武器
        Array(2438895,1,"金率20时限7天"),//副手
        Array(1122430,1,"金率20时限7天"),//痛苦根源
        Array(1202193,1,"金率20时限7天"),//轮回
        Array(1122306,1,"金率20时限7天"),//冒险岛寻宝项链
        Array(1004492,1,"金率20时限7天"),// 冒险岛寻宝帽子 
        Array(1102828,1,"金率20时限7天"),// 冒险岛寻宝披风 
        Array(1082647,1,"金率20时限7天"),// 冒险岛寻宝手套 
        Array(1052929,1,"金率20时限7天"),// 冒险岛寻宝套装 
        Array(1073057,1,"金率20时限7天"),// 冒险岛寻宝鞋子 
        Array(1132308,1,"金率20时限7天"),// 梦幻腰带 
        Array(1152187,1,"金率20时限7天"),// 冒险岛寻宝肩章 
        Array(1662174,1,"金率20时限7天"),// 蘑菇机器人 
        Array(1672091,1,"金率20时限7天"),// 蘑菇机器人专用心脏 
        Array(1190400,1,"金率20时限7天"),// 首领怪竞技场徽章 
        Array(1012632,1,"金率20时限7天"),// 失控机械标记
        Array(1022278,1,"金率20时限7天"),// 蕴藏魔力的眼罩 
        Array(1032316,1,"金率20时限7天"),// 船长姿态耳环
        Array(1182285,1,"金率20时限7天"),// 创世徽章
        Array(1162080,1,"金率20时限7天")// 被诅咒的魔道书-红 


    )
    
);

var text;
var ljname;
var revenue;

var xiangou = new Array(1,1,1,1,1,1,1);

revenue = parseInt(getHyPay(1));
text = "\t\t\t" + tt + " #e金率装备租赁#k#n " + tt + "\r\n\r\n";
text += "#d#e当前直冲为： #r" + revenue + " #d元\r\n";


var txt = "";


for(var i = 0; i < reward.length ; i++) {
	var price=parseInt(condition[i]);
	
	var goumai =getEventCount("金率装备" + (i+1));
    if(goumai >= xiangou[i]) {
        txt = "[#r已购买:"+xiangou[i]+"#d]";
    } else {
		
        if( revenue >= price) {
            txt = "[#b可购买#d]";
        } else  {
            txt = "[#g金额不足#d]";
        }

    }
	
    
    text += "#d#L" + i + "#" + tt + txt + " 金率装备租赁"+(i+1)+" #r  " + price + "#l\r\n\r\n\r\n";
	var cc=2;
	if(reward[i].length<2){
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
	
    
}
text += "#k";
let selection = npc.askMenu(text);

var need=parseInt(condition[selection]);

text = "\t\t\t#e#r- 金率装备租赁" + need + "元内容 -#k#n\r\n\r\n";
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
	if(getEventCount("金率装备" + (selection+1)) >=1) {
		npc.say("#e#r\r\n\r\n\t\t这个礼包您已经购买到最大值了");
	} else if(revenue < need) {
		npc.say("直冲点不够！");
	} else if(player.getFreeSlots(1) < reward[selection].length ) {
		npc.say("装备栏位至少要保持"+reward[selection].length+"个空位以上才能领取哦~");
	} else {
        var day =1;
        if(need==500){
            day=7;
        }

		for(var i = 0; i < reward[selection].length; i++) {
            if(reward[selection][i][0]>1999999){

			    player.gainItem(reward[selection][i][0], 1);
            }else{
                let item =player.makeItemWithId(reward[selection][i][0]);
                if(item.getItemId()==1202193){
                    item.setCHUC(25);
                }else{
                    item.setStr(item.getStr()+200); //装备力量
                    item.setDex(item.getDex()+200); //装备敏捷
                    item.setInt(item.getInt()+200); //装备智力
                    item.setLuk(item.getLuk()+200); //装备运气
                    item.setPad(item.getPad()+200); //物理攻击
                    item.setMad(item.getMad()+200); //魔法攻击
                    
                    item.setGrade(20);
                    item.setOption(1, 40650, false);
                    item.setOption(2, 40650, false);
                    item.setOption(3, 40650, false);
                }
                item.setExpiration(new Date().getTime() + 1000 * 60 * 60 * 24 * day);
                player.gainItem(item);
            }
            

		}
		setEventCount("金率装备" + (selection+1), 1, 1);

		addHyPay(parseInt(condition[selection]));
		// npc.broadcastWeatherEffectNotice(2,"恭喜玩家"+player.getName()+"购买了"+parseInt(condition[selection])+"  新手满阶材料包，掌声欢呼声！！！",10000);
		// npc.broadcastPlayerNotice(1,"恭喜玩家"+player.getName()+"购买了"+parseInt(condition[selection])+"  新手满阶材料包，掌声欢呼声！！！");
		// npc.broadcastPlayerNotice(2,"恭喜玩家"+player.getName()+"购买了"+parseInt(condition[selection])+"  新手满阶材料包，掌声欢呼声！！！");
		// npc.broadcastPlayerNotice(3,"恭喜玩家"+player.getName()+"购买了"+parseInt(condition[selection])+"  新手满阶材料包，掌声欢呼声！！！");

		npc.say("领取成功");
	}
}



function addHyPay(price) {
    var sql = "update hypay set cash=cash-? where accountId=?";
    var result = player.customSqlUpdate(sql, price, player.getAccountId());
    player.gainItem(4009398,price);

}
function getHyPay() {

    var sql = "SELECT * from hypay where accountId=?  ";

    var result = player.customSqlResult(sql, player.getAccountId());

    if(result.size() > 0) {
        if(result.get(0) != null) {
			if(result.get(0).get("cash")==null){
				 return 0;
			}else{
				 return result.get(0).get("cash");
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

        var result = player.customSqlInsert(sql, player.getAccountId(), player.getWorld(), eventName, 1, 0);
        return 0;
    }

}

function setEventCount(eventName, type, value) {

    var sql = "update accounts_event set type=?,value=value+? where accounts_id=? and event=?";

    var result = player.customSqlUpdate(sql, type, value, player.getAccountId(), eventName);

}