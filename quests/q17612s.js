// Created by Jackson
// Quest ID:17612
// [凯梅尔兹共和国] 一些误会


npc.sayNextE("那个,村长。我想话想对你说。", true);
npc.sayNextE("你来得正好。今天我们捕到了很多鱼。如果每天都像今天这样就好了。", 9390201);
npc.sayNextE("嗯…真是太好了…那个…我想跟你说...", true);
let selection = npc.askMenuENoEsc("啊,对了。你说你有话要说,对吧。你说吧。是什么事情?\r\n#b\r\n#L0# (不…还是再仔细想想比较好。)#l\r\n#L1# (嗯,告诉他实情吧。)#l", 9390201);

if (selection == 0) {
        npc.sayE("啊,没什么。 (我得先整理下思路,再跟他说。)", true);
} else if (selection == 1) {
        npc.sayNextE("其实我不是单纯的冒险家。我是奉冒险岛世界的希纳斯女皇的命令，为了和这里建立友好关系而来。", true);
        npc.sayNextE("你这是什么话啊？你不是冒险家，是冒险岛世界的女皇派来的？", 9390201);
        npc.sayNextE("没错。如果我一开始就说出事实，我担心会产生不必要的误会。所以打算在村长的身边多待一会儿再表明我们的立场，但是您对遭遇了暴风雨的我如此热情亲切，我也没有办法再隐瞒下去了。", true);
        // Unhandled User Effect [UserEffect_SkillAffected] Packet: 04 40 FD 13 00 01
        npc.sayNextE("等下，为什么会有误会呢……而且，你为什么要和我说这些呢？我只不过是个村长而已啊。", 9390201);
        npc.sayNextE("但是，村长不是这个村子地位最高的人吗？这里是凯梅尔兹，那和凯梅尔兹地位最高的人……", true);
        npc.sayNextE("……哈哈哈哈哈！你，看来你是误会了啊。", 9390201);
        npc.sayNextE("……您这是……什么意思？", true);
        npc.sayNextE("我在这个村子里确实是地位最高的人。不过凯梅尔兹可不只有我们贝里村啊。这里只是个小渔村啊。如果你是要传达这些话，那就应该去凯梅尔兹共和国的#e首都#n，#e#b桑凯梅尔兹#n#k啊！", 9390201);
        npc.sayNextE("桑……凯梅尔兹……？", true);
        npc.sayNextE("没错！我看你不像是在说谎，你还是去找凯梅尔兹共和国的首领#b吉尔伯特·达尼尔拉#k大人吧。看来你对桑凯梅尔兹一无所知啊？", 9390201);
        npc.sayNextE("所以说……除了这个村子，还有更大的村子啊。", true);
        npc.sayNextE("什么村子啊！桑凯梅尔兹是个很大的城市！那是凯梅尔兹共和国的首都，应有尽有！虽然我不知道为什么大家都喜欢去那个复杂的地方生活……这个贝里村真是最适合生活了……", 9390201);
        npc.sayNextE("这样吧。正好凯梅尔兹最大的商团#b达尼尔拉商团#k的船停泊在这里。船长是首领的二儿子，他正在就在村子里，你快去见见他吧。", 9390201);
        npc.sayNextE("然后，你这段时间帮助了我们村子，这是谢礼。", 9390201);
        ///根据职业给与对应的 装备
        let itemId = 1004228 + player.getJobCategory();
        if (player.gainItem(itemId, 1)) {
                npc.sayNextE("这算是我给你的礼物。反正我也不需要这个东西了……", 9390201);
                npc.completeQuest();
                player.gainExp(630724);
        } else {
                npc.sayNextE("你的背包满了，清理下吧！", 9390201);
        }


}