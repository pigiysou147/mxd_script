/*  This is mada by yanran     
 *  
 *  脚本任务：[妖精学院艾利涅]巴缇博士的对策
 *  
 */

npc.sayNext("欢迎回来。有什么收获吗？", 1500001, false);
npc.sayNextS("(给博士们看了巴缇博士的设备，并说明其功能。)");
npc.sayNext("……那么，现在要让我们使用这不纯洁人类的东西？不行！绝对不行！死也不行！", 1500002, false);
npc.sayNext("可现在别无他法，副校长先生。", 1500009, false);
npc.sayNext("罗雯说的没错，现在首要就是要找到那些失踪的孩子，不是吗？", 1500008, false);
npc.sayNext("我虽不赞同，但是目前只有这个方法。", 1500001, false);
npc.sayNext("……呃……只有这样了，不过只此一回……不，不管怎么说……", 1500002, false);
npc.sayNext("我来启动试试。请大家安静。", 1500000, false);
player.setInGameCurNodeEventEnd(true);
//player.setStandAloneMode(true);
player.setInGameDirectionMode(true, true, false, false);
player.playSoundWithMuteBGM("Bgm34/TheFairyForest");
//npc.setDelay(1000);
npc.sayNextNoEsc("……", 1500000, false);
npc.sayNextNoEsc("哇喔，好像听到了森林里的各种呻吟……", 1500000, false);
player.scriptProgressMessage("*唧唧声*");
npc.sayNextNoEsc("？？？", 1500000, false);
player.scriptProgressMessage("*汽笛响声*");
npc.sayNextNoEsc("什么嘛，除了杂音什么也听不见。", 1500002, false);
npc.sayNextNoEsc("嘘……安静。", 1500009, false);
player.scriptProgressMessage("呜呜……救命啊……呜呜。");
npc.sayNextNoEsc("！！这声音是！");
npc.sayNextNoEsc("是后院的方向。", 1500000, false);
npc.sayNextNoEsc("等着我，孩子们！我副校长去救你们啦！", 1500002, false);
npc.sayNextNoEsc("艾温，我们也一起去寻找孩子们吧！", 1500009, false);
npc.sayNextNoEsc("各位，请等一下。");
npc.completeQuest();
player.playSoundWithMuteBGM("Bgm34/TheFairyAcademy");
player.setInGameDirectionMode(false, false, false, false);
//player.setStandAloneMode(false);