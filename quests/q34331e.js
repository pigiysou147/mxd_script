/*  This is mada by Yanran    
 *
 *  功能：[拉克兰]决战
 *
 *  @Author Yanran
 */

npc.sayNextENoEsc("现在真的结束了吗？还是没有？！！", true);
npc.sayNextENoEsc("#face0#这个城市的梦虽然还没有消失，但目前看起来暂时结束了。", 3003251);
npc.sayNextENoEsc("之后要怎么办呢？", true);
npc.sayNextENoEsc("#face0#梦是梦，现实是现实。虽然不是马上，但梦会渐渐变弱的。", 3003251);
npc.sayNextENoEsc("不过梦消失的话，你就……", true);
npc.sayNextENoEsc("#face0#天亮的时候，噩梦消散，这是不变的道理，。", 3003251);
npc.sayNextENoEsc("#face0#居民们，成功救出了他们的话\r\n我的存在就完全有意义，所以就算消失也没关系。", 3003251);
npc.sayNextENoEsc("……", true);
npc.sayNextENoEsc("#face0#当红雾消散时，你也会为了使命而离开。", 3003251);
npc.sayNextENoEsc("#face0#虽然是个艰辛的旅程，但总能平安结束的。", 3003251);
player.startQuest(39360, 0, "1");
player.showProgressMessageFont("现在你可以在拉克兰打猎获取神秘徽章了。", 3, 20, 20, 0);//绿色的字
let newItem = player.makeItemWithId(1712003);
npc.broadcastGachaponMsgEx("[任务公告] 恭喜 " + player.getName() + " 完成了【神秘河-拉克兰】获得了" + newItem.getItemName(), newItem);
npc.completeQuest();