/*  This is mada by Yanran    
 *  
 *  功能：[啾啾岛]古拉的入侵
 *  
 *  @Author Yanran
 */

npc.sayNextENoEsc("#face3##r古拉#k…！#r古拉的进攻已经开始了#k！", 3003159);
npc.sayNextENoEsc("#face3##b顶级大厨舔舔#k!给穆托准备的食物完成了吗？", 3003159);
npc.sayNextENoEsc("#face4#那是当然！你等着瞧吧！穆托那家伙肯定会好吃到#b手舞足蹈#k的！", 3003168);
npc.sayNextENoEsc("#face3##b噢…！那真是太好了…！不过，那个#b小旅行者#k还没有做好吗..？", 3003159);
npc.sayNextENoEsc("#face5#哈哈！！那家伙肯定被吓的餐起来了！\r\n那个连味道都不会品尝的家伙，居然还想教训我，\r\n现在终于露出本性了吧！", 3003168);
npc.sayNextENoEsc("#face3#是吗…我们先带着你的食物，去找穆托吧！", 3003159);
npc.sayNextENoEsc("等…等一下！！料理…！料理已经完成了…！", true);
npc.sayNextENoEsc("#face1#噢！你来啦？！", 3003159);
npc.sayNextENoEsc("嗬…嗬嗯..！我们快去找穆托吧..", true);
npc.sayNextENoEsc("#face4#什么啊！你做好的料理在哪里呢！难道又跟上次一样，做的食物都不够穆托塞牙缝的..！", 3003168);
npc.sayNextENoEsc("嗬…嗬嗯…我准备了会让你们#b大吃一惊的食物... #k而且，我还找到了很会做料理的#b帮手#k...", true);
npc.sayNextENoEsc("#face3#哦！#b帮手#k…？这么短的时间里！你说的帮手是谁啊？", 3003159);
npc.sayNextENoEsc("#face5#哈哈！！你这个说谎精！在这啾啾岛，没有人比我更会做料理了！", 3003168);
npc.sayNextENoEsc("噢噢噢…！没有时间了，我们先去找穆托吧！我已经让我的#b帮手#k把食物拿过去了！", true);
npc.startQuest();
npc.completeQuest();
player.changeMap(450002021, 0);
player.gainExp(315000000);
