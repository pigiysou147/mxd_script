/*  This is mada by Kent    
 *  This source is made by Funms Team
 *  功能：枫叶交换
 *  @Author Kent 
 */
var cashitem;

var time;
var itemId;
var quantity;
var x = 0;
var id;
var str = "";
var mapList = Array(
	 Array(401060100,"普通暴君","boss_magnus"),
	 Array(401060200,"困难暴君","boss_magnus_hard"),
	 Array(221030910,"卡雄","boss_caoong")
	 
	 
);


var now_mapid=map.getId();
var map_index=0;

for(var i=0;i<mapList.length;i++){
	if(now_mapid==mapList[i]){
		map_index=i;
	}
}
var mapid=mapList[map_index][0];
var bossname=mapList[map_index][1];
var totalTime=npc.getEvent(mapList[map_index][2]).getVariable("totalTime");

player.customSqlInsert("insert into bossrank (characterid,name,time,boss) values(?,?,?,?)",player.getId(),player.getName(),totalTime,bossname);
npc.broadcastNotice("玩家:"+player.getName()+" 通关了"+bossname+"副本,用时:"+totalTime+"秒");
