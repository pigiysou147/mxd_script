
let mapId = map.getId();
if(mapId == 350112300){
	npc.askMenu("#r误入雪龟岛的人,除了真正的英雄以外,都留在了这里。#k\r\n\r\n#L100#...?#l");

	npc.askMenu("#r冒险家，我这里问你一个问题。你如果能回答上，我就不为难你。\r\n\r\n#L100#请讲。#l");

	var fee = npc.askText("#r请问你是怎么加入到这个世界的？#b(提示：次元世界)","",0,999);


	if (fee != "次元世界") {
		npc.say("你错了。");
	} else{
		npc.askMenu("#r你通过了!快走吧！冒险家\r\n\r\n#L100#谢谢不为难之恩！#l");
		player.changeMap(350130500);
	} 
}