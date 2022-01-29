/**
* 自选发型-新端脚本修改 几里 315342975 
**/

var item = 5150040; //所需物品

let res;
let isAngel = false;
let isBeta = false;
if (player.getJob() == 6001) {
    isAngel = npc.askAngelicBuster() != 0;
} else if (player.getJob() == 10112) {
    isBeta = npc.askMenu("请选择：\r\n#b#L0#神之子：阿尔法#l\r\n#L1#神之子：贝塔#l") != 0;
}
let selection = npc.askMenu("您好，请选择你需要的服务。\r\n查询发型网站 可以在群里输入  代码 查询\r\n#b#L0#自选发型,自己填发型代码（使用#v"+item+"#）");
if(selection ==0){
		let number = npc.askNumber("请填写发型代码（请再三确认过后再填写！）","30000",30000,99999);
        //if(!npc.isFaceValid(number)){
            hairs = [number];
            res = npc.askAvatar("我能把你现在的发型变成全新的发型。你对现在的发型不厌倦吗?只要你有#b#t5150052##k,我就帮你换发型。慢慢挑选你想要的发型吧~", hairs, item, isAngel, isBeta);
            selection = res[0];
            let buy = res[1];

            if (player.hasItem(item, 1)) {
                player.loseItem(item, 1);
                if(!isAngel){
                    player.setHair(hairs[selection]);

                }else{
                    player.setSubHair(hairs[selection]);
                    

                }
                npc.sayNext("完成了,享受你的新发型吧!,如果造型没发生变化，小退即可哦");
            }else {
                npc.sayNext("呃……你好像没有#v"+item+"#啊？很抱歉，没有#v"+item+"#的话，我不能给你做头发。");
            }
        // }else{
        //     npc.say("请输入正确的代码。注意性别哦~");
        // }
        
}
