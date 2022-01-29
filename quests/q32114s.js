/*  This is mada by yanran     
 *  
 *  脚本任务：[妖精学院艾利涅]妖精学院搜索作战4
 *  
 */

let selection = npc.askAccept("女生宿舍和男生宿舍一样布置在每层楼的尽头。我不知道是否应该在女士房间里四处看看。");
if (selection == 1) {
        npc.sayNext("我们必须做必须做的事情来完成这项调查！(库迪不知什么原因脸红了…) \r\n\r\n请帮我看看三楼的宿舍。");
        npc.sayNextS("小处男，嘿嘿…", false);
        npc.startQuest();
} else {
        npc.say("好的，那么你先到处看下。");
}