

var str="#r#e\t\t\t#v1142789#心脏强化中心#v1142789#\r\n";

str += "#L1##r#v1672069#强化女武神心脏#k#l ";
//str += "#L2##r#v1672069#女武神归一#k#l \r\n\r\n";
//str += "#L3##r#v1672069#女武神真归一#k#l";
//str += "#L4##r#v1672069#女武神究极归一#k#l";

let selection =npc.askMenu(str);

if(selection == 1) {
	player.runScript("女武神强化");

}else if(selection==2){
	player.runScript("女武神合成");

}else if(selection==3){
	player.runScript("女武神真归一");

}else if(selection==4){
	player.runScript("女武神神归一");

}
