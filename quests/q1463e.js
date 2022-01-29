npc.sayNext("你这么快就回来啦。你果然不是一般的强大。\r\n\r\n#b#i2435735:# #t2435735:# 1个");
if (player.canGainItem(2435735, 1)) {
        npc.sayS("通过了女神的考验，获得了神秘石。现在去找其他女神吧。\r\n\r\n#b#p1540944##k : 堕落世界树的#b#m105300000##k");
        npc.completeQuest();

} else {
        npc.sayNext("背包空间不足！请清理\r\n或者你已经获得了神秘石#i2435735#");
}