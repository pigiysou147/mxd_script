

var 代碼 =  npc.askNumber("#b請輸入怪物代碼","",100000,9999999);
var 血量 =  npc.askNumber("#b輸入血量\r\n你要召喚的怪物血量要幾兆呢?\r\n","",0,9999999);
var X =  npc.askText("#b請輸入X軸","",0,999);
var Y =  npc.askText("#b請輸入Y軸","",0,999);

var 總血量 = 血量*1000000000000

var text = "#b你確定要召喚下列怪物嗎?\r\n"
	text += "#b#e怪物ＩＤ：#r\t"+代碼+"\r\n"
	text += "#b#e怪物血量：#r\t"+血量+"兆\r\n"
let YN = npc.askYesNo(text);

if(YN == 1){
var mob = map.makeMob(代碼);//怪物ID
mob.changeBaseHp(總血量); //血量
//mob.dropItem(2430028)
map.spawnMob(mob,  X, Y)
//mob.dropItem(2430028)
}
else{
	npc.sendOk("期待您再次使用")
}