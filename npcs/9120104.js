

let goods = Array(
    Array(5201000, 2000, 19000),//2000个
    Array(5201005, 500, 500),//50
    Array(5201004, 20, 200)//20
);

var txt="需要购买豆子吗？\r\n";

txt+="#L0# 1200W金币购买2000个豆豆#v5201000# #l\r\n";


let selection =npc.askMenu(txt);
let number=npc.askNumber("请输入要购买的数量",1,1,100);

if(selection==0){
	if(player.hasMesos(12000000*number)){
		player.loseMesos(12000000*number);
		player.gainItem(5201000,1*number);
		npc.say("购买成功");
	}else{
		npc.say("金币不够");
	}
}