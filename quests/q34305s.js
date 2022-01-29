/*  This is mada by Yanran    
 *  
 *  [拉克兰]会合
 *  
 *  @Author Yanran
 */
npc.sayNext("我听说你要游到下游去，如果我们成功解放这梦之城市，你也能达成目的。");
let selection = npc.askYesNo("怎么样，你愿意祝我们一臂之力吗？");
if (selection == 1) {
        npc.startQuest();
}

function end(mode, type, selection) {
        npc.completeQuest();
        qm.dispose();
}

