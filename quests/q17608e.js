// Created by Jackson
// Quest ID:17608
// [凯梅尔兹共和国] 平安(?) 到达的地方


npc.sayNextE("你好……请问，我能问你个问题吗？", true);
npc.sayNextE("天啊！！你真是太狼狈了啊！你遇到暴风雨了吗？你能活下来，运气真是太好了！", 9390201);
npc.sayNextE("啊，是的……我为了去凯梅尔兹，坐上了船，但是遇到了暴风雨。老人家你能告诉我这里是哪里，怎么才能去凯梅尔兹吗？", true);
npc.sayNextE("哎呀，你的运气真的很好啊！如果你是来找凯梅尔兹，那就找对了，你现在所在的地方就是凯梅尔兹。而且，这里是凯梅尔兹最适宜生活的贝里村。", 9390201);
npc.sayNextE("啊……是吗？能找到这里真是太好了。", true);
npc.sayNextE("#b(虽然宣布成立了共和国，但还是个普通的渔村啊……果然，传闻和现实还是有很大的差距。)#k", true);
npc.sayNextE("自我介绍下吧，我是这个村的村长贝里。我们家世世代代都生活在这里，都是这里的村长。所以我叫贝里，哈哈。既然你是来找凯梅尔兹的，那你就是我的客人了！你来凯梅尔兹有什么事吗？", 9390201);
npc.sayNextE("啊，你好，我……", true);
player.setInGameCurNodeEventEnd(true);
//player.setTemporarySkillSet(0);
player.setInGameDirectionMode(true, false, false, false);
player.setLayerBlind(true, 120, 0, 0, 0, 500, 0);
npc.sayNextENoEsc("#face1##b(……为了避免这样的误会，我们必须非常慎重地接近他们。如果可以，在转达女皇大人的信息之前，最好能够先获得他们的信赖……)#k", 1540451);
//player.setLayerBlind(false, 0, 0, 0, 0, 500, 0);
// Unhandled Ingame Direction Event [22] Packet: 16 BC 02 00 00 
//player.setTemporarySkillSet(0);
player.setInGameDirectionMode(false, true, false, false);
npc.sayNextE("#b(按照南哈特所说，现在马上就说出我的身份似乎有些危险，我还是先获得他们的信任吧)#k", true);
npc.sayNextE("……我是在冒险岛世界各地游历的冒险家。我听说了凯梅尔兹的故事，就想来看看，却在快要到达的时候遇到了风浪，差点就死了。幸好能够安全到达了凯梅尔兹……", true);
npc.sayNextE("差点就出大事了啊。总之，只要来到凯梅尔兹的冒险家就是我们村子的客人。我能让你舒舒服服地休息一下。你经历了这么大的事故，身体肯定也很疲惫了，你就当这里是你自己家，好好休息吧。", 9390201);
npc.sayNextE("真的可以吗？我们还是第一次见面呢，你相信我吗？", true);
npc.sayNextE("哈哈哈,没关系的。你到了我这个年纪就会知道,上了年纪的人挺有看人的眼光的。我看你的样子就知道你是个善良的人。还有,你不是说你遇到了风浪嘛。我一辈子都与大海为伴,大海送来的客人,我怎么能坐视不管呢,哈哈哈", 9390201);
npc.sayNextE("#b(……太好了，他似乎是个好人。既然这位是凯梅尔兹的村长，我们再积累一些信任，然后提出缔结和约的事情就行了。)#k", true);
npc.completeQuest();
// Unhandled Stat Changed [CS_EXP] Packet: 00 00 00 00 01 00 00 00 00 00 BC B1 AA 00 00 00 00 00 FF 00 00 00 00 
player.gainExp(630724);