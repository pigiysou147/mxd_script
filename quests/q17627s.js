// Created by Jackson
// Quest ID:17627
// [凯梅尔兹共和国] 击退阿库旁多（2）


npc.sayNext("它们比我们想象中的弱多了。看来传闻有点夸大了。");
if (npc.askAccept("虽然击退了#o9390808#，但事情好像并没有就此结束。刚刚我接到报告，好像又发现了其他群体。你这次也会帮我的吧？")) {
        // Response is Yes
        npc.sayNext("#b#e#o9390811##k#n好像在#b#k#m865020100##k#n。我们这次也来打赌，看谁先击退#b#e30只#k#n吧！我先到#m865020100#等着你！");
        npc.startQuest();
} else {
        // Response is No
        npc.say("你还没准备好?准备好之后,告诉我。");
}