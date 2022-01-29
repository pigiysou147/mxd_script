// Created by Jackson
// Quest ID:17618
// [凯梅尔兹共和国] 初次见面


if (npc.askYesNoS("#b(交易品的量很多,自己一个人运的话,应该还没走远。现在追上去,应该还能抓住他。)#k", true)) {
        // Response is Yes
        npc.sayNextSNoEsc("他说是贝里村的反方向。那我只要往我来时的相反方向走就行了。", true);
        npc.startQuest();
} else {
        // Response is No
        npc.saySNoEsc("还需要准备下。", true);
}