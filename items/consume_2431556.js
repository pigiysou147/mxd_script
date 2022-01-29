var cailiao = npc.getItemId();


var itemId = Array(
		//待进化  进化目标 需要个数 四围  全属性 BOSS
	 Array(1122224,1122337,15,20,2,2),
	 Array(1122337,1122342,30,50,5,5)
);


var dianjuan = 1000;
var meso = 10000000;

var txt ="\r\n#L0#我要强化#v1122224#\r\n\r\n";
txt +="#L1#我要强化#v1122337#";

let cho = npc.askMenu(txt);

var old = itemId[cho][0];
var jh = itemId[cho][1];
var need = itemId[cho][2];
var siwei=itemId[cho][3];
var quanshu=itemId[cho][4];
var boss =itemId[cho][5];
txt = "消耗" + need + "个 #v" + cailiao + "#可以对#v" + old +
	"#进行强化进化成为全属性"+siwei+"的#v" + jh + "#,你要把#v" + old +
	"#放在装备栏的第一格\r\n";
let sel = npc.askYesNo(txt);

if(sel==1){

var item = player.getInventorySlot(1, 1);
if(item ==null){
	npc.say("请把#v" + old + "#放在装备栏的第一个格子");
}else if(!player.hasItem(cailiao, need)) {
	npc.say("材料不够,需要" + need + "个#v" + cailiao + "#");
} else if(item.getDataId() != old) {
	npc.say("请把#v" + old + "#放在装备栏的第一个格子");
} else if(!player.hasMesos(meso) || player.getCashShopCurrency(1) < dianjuan) {
	npc.say("需要" + meso + "金币以及" + dianjuan + "点券才能强化！");
} else {
	
		player.loseMesos(meso);
		player.modifyCashShopCurrency(1, -dianjuan);
		player.loseItem(cailiao, need);
		var random = Math.floor(Math.random() * 100);
		if(random > 50) {
			
			player.loseInvSlot(1, 1);
			var toDrop = player.makeItemWithId(jh); // 生成一个Equip类
			toDrop.setStr(siwei); //装备力量
			toDrop.setDex(siwei); //装备敏捷
			toDrop.setInt(siwei); //装备智力
			toDrop.setLuk(siwei); //装备运气
			toDrop.setPad(siwei); //物理攻击
			toDrop.setMad(siwei); //魔法攻击
			toDrop.setBossDamageR(boss);
			toDrop.setStatR(quanshu);
			player.gainItem(toDrop);
			npc.say("兑换成功~");
		} else {
			npc.say("兑换失败~");
		}

 }	
}