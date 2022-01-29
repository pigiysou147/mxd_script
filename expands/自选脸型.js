/**
* 自选脸型-新端脚本修改 几里 315342975 
**/

var item = 5152053; //所需物品

let res;
let isAngel = false;
let isBeta = false;
if (player.getJob() == 6001) {
    isAngel = npc.askAngelicBuster() != 0;
} else if (player.getJob() == 10112) {
    isBeta = npc.askMenu("请选择：\r\n#b#L0#神之子：阿尔法#l\r\n#L1#神之子：贝塔#l") != 0;
}
let selection = npc.askMenu("您好，请选择你需要的服务。\r\n查询脸型网站 可以在群里输入  代码 查询\r\n#b#L0#自选脸型,自己填脸型代码（使用#v"+item+"#）");
if(selection==0){
		let number = npc.askNumber("请填写脸型代码（请再三确认过后再填写！）","20000",0 ,99999);
        if(number==28617){
            npc.say("该脸型暂不可以");

        }else{
            faces = [number];
            res = npc.askAvatar("我能把你现在的脸型变成全新的脸型。你对现在的脸型不厌倦吗?只要你有#b#t5150052##k,我就帮你换脸型。慢慢挑选你想要的脸型吧~", faces, item, isAngel, isBeta);
            selection = res[0];
            let buy = res[1];

            if (player.hasItem(item, 1)) {
                player.loseItem(item, 1);
                if(!isAngel){
                    player.setFace(faces[selection]);

                }else{
                    player.setSubFace(faces[selection]);
                    

                }
                npc.sayNext("完成了,享受你的新脸型吧!,如果造型没发生变化，小退即可哦");
                
            }else {
                npc.sayNext("呃……你好像没有#v"+item+"#啊？很抱歉，没有#v"+item+"#的话，我不能给你做造型。");
            }
        }
        //if(!npc.isFaceValid(number)){
            
           
            
        // }else{
        //     npc.say("请输入正确的代码。注意性别哦~");
        // }
        
}
