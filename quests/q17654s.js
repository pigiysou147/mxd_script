// Created by Jackson
// Quest ID:17654
// [凯梅尔兹共和国] 从某处传来的惨叫声


if (npc.askYesNoS("现在也不是马上谈论女皇大人的和平条约的时候..应该没有要做的事情。该借此机会逛逛桑凯梅尔兹。", true)) {
        npc.sayNextENoEsc("呃啊啊啊!!", 9390207);
        npc.sayNextENoEsc("嗯? 那是什么??怎么会有惨叫声..好像是东边发出来的声音..", true);
        npc.sayNextENoEsc("到村子东边#b#m865020000##k去看看。", true);
        npc.startQuest();
        npc.makeEvent("berry_quest", false, [player, [865020071]]);
} else {
        npc.saySNoEsc("目前还有点事情要处理。", true);
}