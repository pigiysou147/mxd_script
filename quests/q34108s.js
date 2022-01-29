/*  This is mada by Yanran    
 *
 *  功能：[消亡旅途]火焰地带的巨大悬崖
 *
 *  @Author Yanran
 */

npc.sayNext("除了这面巨大岩壁，似乎并没有其他出路，走到死胡同了……最好还是先沿着这个岩壁往上爬吧。");
let selection = npc.askYesNo("#ho#也是这么想的吧？那我们就往上爬吧。");
if (selection == 1) {
        npc.startQuest();
} else {
        npc.sayNext("除了沿着岩壁往上爬，似乎没有其他出路了。");
}