let s = npc.askMenu("好久不见，#b#h0##k。\r\n在<神秘河>的冒险如何？\r\n\r\n#b#L0#虽然有些累，但挺有意思的。#l")
if (s == 0) {
    npc.say("虽然我跟你相距甚远，但对你的活跃表现也是相当了解，\r\n现在的你已经超出了我的预期，能够相当熟练地操控#b全新的力量#k了呢。")
    npc.say("虽然我没法直接帮助你，但我会指点你更好地使用#b新的力量#k。")
    player.gainV4Core()
    npc.completeQuest()
    player.openUI(1130);
    npc.say("愿#b新的力量#k能对你有所帮助。")
}