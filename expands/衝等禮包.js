/**
* 等級禮包  QQ:739977676 
**/
var tt = "#fEffect/CharacterEff/1082565/0/0#"; //餅干兔子
// 每個階段禮包所需的等級
var condition = new Array(250, 255, 260, 265, 270, 275);
// 禮包內容
var reward = new Array(
// 250禮包
Array(1, 4001713, 1,""),     //10萬*2
Array(1, 2000005, 300,""),     //超水*300
// 255禮包
Array(2, 2435851, 1,"10周年裝備整套"),
// 260禮包
Array(3, 4001713, 3,""),     //10萬定居幣*3
Array(3, 5570000, 6,""),     //金槌子*6
Array(3, 5062009, 10,""),     //超級魔方*10
// 265禮包 
Array(4, 4001713, 4,""),     //10萬定居幣*4
Array(4, 5062009, 10,""),     //10萬定居幣*4
Array(4, 2432741, 1,"11周年裝備整套"), 
// 270禮包
Array(5, 4001713, 1,""), 
Array(5, 5062009, 1,""), 
Array(5, 2431944, 1,"女皇武器"), //女皇武器
Array(5, 2431945, 3,"女皇裝備*3"), //女皇武器
//	275禮包
Array(6, 2431945, 1,""), 
Array(6, 4009453, 20,""), 
Array(6, 5062009, 10,""), 
Array(6, 5062002, 10,""), 
Array(6, 5062500, 5,"")
);



let sel = "等級禮包，當前等級 #r"+player.getLevel()+"\r\n";
for (var i = 0; i < condition.length; i++) {
	if (player.getPQLog("等級禮包" + i) > 0) {
		sel += "#d#L" + (i) + "#" + tt + " [#r已完成#d]等級福利禮包 #r\t\t\t" + condition[i] + "#l\r\n";
	} else {
		sel += "#d#L" + (i) + "#" + tt + " [未完成]等級福利禮包 #r\t\t\t" + condition[i] + "#l\r\n";
	}
}
let selected = npc.askMenu(sel);

sel = "是否領取 #r"+condition[selected]+" #k級檔次禮包？\r\n"
for (var i = 0; i < reward.length; i++) {
	if (reward[i][0] == (selected+1)) {
		sel += "\t\t\t#i" + reward[i][1] + "# #z" + reward[i][1] + "#[" + reward[i][2] + "個]\r\n";
	}
}
let YN = npc.askYesNo(sel)
if(YN==1){
	
	//判斷是否已經領取
	if(player.getPQLog("等級禮包" + selected)>0){
		npc.say("您的已經領取過該禮包，無法再次領取");
	}else if (player.getLevel() < condition[selected]) {
		npc.say("等級未達標，無法領取");
    }else{
		var rewardlist = new Array();
        for (var i = 0; i < reward.length; i++) {
            if (reward[i][0] == (selected+1)) {
                if (reward[i][3] == null)
                    reward[i][3] = -1;
                rewardlist.push(new Array(reward[i][1], reward[i][2], reward[i][3]));
            }
        }
		if (player.getFreeSlots(1) < rewardlist.length || player.getFreeSlots(2) < rewardlist.length || player.getFreeSlots(3) < rewardlist.length || player.getFreeSlots(4) < rewardlist.length || player.getFreeSlots(5) < rewardlist.length) {
            npc.say("包裹空間不足，請確保包裹每個欄位有至少 " + rewardlist.length + " 格空間");
        }else{
			for (var i = 0; i < rewardlist.length; i++) {
				player.gainItem(rewardlist[i][0], rewardlist[i][1]);
			}
			player.addPQLog("等級禮包" + selected,10,1500);
			npc.say("領取成功");
		}
	}
}
	
