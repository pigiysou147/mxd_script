/*  This is mada by Yanran    
 *  
 *  功能：[啾啾岛]寻找呲溜森林的美味&amp;lt;2&gt;
 *  
 *  @Author Yanran
 */

npc.sayNext("什么啊？！我还以为你被吃了呢，没想到活着回来了？！", 3003162);
npc.sayNext("好啦！快看看我做的肉饼！#b都很奇怪啊！现在够了！转转转！三明治#k现在可以说是已经完成了！", 3003162);
npc.sayNext("嗯嗯！那我先尝一口吧？！", 3003162);
npc.sayNext("哥哥，如果你现在不拿开你的嘴，我会让你以后#b很难吃饭#k的哦？哈哈", 3003163);
npc.say("该死，现在我的作用已经结束了，现在你去找我的妹妹#b哔美#k吧！", 3003162);
if (player.isQuestStarted(34210)) {
        player.loseItem(4034948, 30);
        player.loseItem(4034949, 30);
        npc.completeQuest();
        player.gainExp(310000000);
}