// 几里 活动入口

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


let activites = Array(
	//活动名 地图ID 事件名
	Array("雪崩逃生",993000700),
	Array("雪原跑旗",932200005)
);
let channel = 1;//几线可以玩
let mapId = map.getId();

	
if(mapId == 993000700){
	//雪崩入口
	if(player.getChannel() != channel){
		npc.say("#d注意：只有在频道 #r"+channel+" #d才可进入！");
	}else if(getActiveStatus("雪崩逃生")){
		player.changeMap(993000704);
		npc.say("加油吧，冒险家！");
	}else{
		npc.say("没有开放活动,或已经关闭入口");
	}
}else if(mapId == 932200005){
	//雪原跑旗
	
	if(getActiveStatus("雪原跑旗")){
		player.changeMap(932200300);
		var sql = "insert into jili_flag(name, count,reward) values('"+player.getName()+"',0,0)";
		player.customSqlInsert(sql);
		npc.say("加油吧，冒险家！");
	}else{
		npc.say("没有开放活动,或已经关闭入口"+getActiveStatus("雪原跑旗"));
	}
}else{
	let selStr ="";
	selStr += tu3;
	for(let i = 0;i< 35;i++){
		selStr += tu6;
	}
	selStr += tu5;
	selStr += "\r\n\t#d请选择你要参加的活动？#r(需要等待GM开放相应活动)\r\n#d\t 注意：必须是 #r冒险家新手职业 #d才可进入！\r\n"
	for(let i = 0;i<activites.length;i++){
		selStr += "#L"+i+"# "+fy+"参加"+activites[i][0]+"#l\r\n"
	}
	let selected = npc.askMenu(selStr);
	if(player.getJob() != 0 && !player.isGm()){
		npc.say("#d注意：必须是 #r冒险家新手职业 #d才可进入！");
	}else if(player.getChannel() == channel || player.getChannel() == 2){
		player.changeMap(activites[selected][1]);
	}else{
		npc.say("#d注意：只有在频道 #r"+channel+"或者频道2 #d才可进入！");
	}
}

function getActiveStatus (name){
    var sql = "select status from jili_active_status where activeName = '"+name+"'";
    var push = player.customSqlResult(sql);
    if (push.size() > 0) {
        var result = push.get(0);
		var stage = result.get("status");
		if(stage == 1){
			return true;
		}
	}
	return false;
}