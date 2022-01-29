/*
 * NeroMS MapleStory server emulator written in Java
 * Copyright (C) 2017-2018  Jackson
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

/**
 * 
 * @author Jackson
 */
let nowTime = new Date().getTime();
let npcId = 9400920 + player.getIntQuestRecordEx(500773, "manager");
let message;
let talks1, anser1;
let talks2, anser2;
if (npcId == 94009201) {
        message = ["#face0#我喜欢在家休息，而艾米喜欢在外面玩。虽然我们是双胞胎，但是性格完全相反。",
                "#face0#每次有新人搬来的时候，我就感觉很激动。但也会担心我们艾米会不会又闯出什么事故……",
                "#face0#水下世界是什么地方？我看到过在那里制作的珊瑚灯，真是太神秘了。总有一天，我要去看看。",
                "#face0#沙发似乎越多越好。因为你不知道好友什么时候会来玩嘛？",
                "#face0#如果卡朋特在，应该就能帮上#h0#的忙，真是可惜。他是我们村子里最棒的木匠。现在为了寻找木材而出去旅行了。",
                "#face0#只要更改屋顶的颜色，就能改变整个家的气氛！",
                "#face0#艾米非常喜欢吃东西。我只要看着艾米吃的样子就饱了。",
                "#face0#艾丹虽然有点调皮，但是个善良的朋友。而且内心还很柔软。",
                "#face0#米兰达在运营跳蚤市场之前是个画家，再之前是作曲家，再之前是摄像师。",
                "#face0#特鲁迪真的就像我的亲弟弟。因为我是看着他长大的！你知道特鲁迪最先说的一句话是什么吗？那就是“凯~蒂~”。是不是很可爱？",
                "#face0#你有听说凯尼斯家进了新的家具的消息吗？ ",
                "#face0#嗯~那面墙看起来有点空旷呢。至少应该挂一个相框吧！ ",
                "#face0#艾米又去哪里了，一大早就不见人影了呢，应该不是去了什么危险的地方吧？",
                "#face0#今天我去广场，见到了艾丹，我很想知道他有没有好好使用桌子。",
                "#face0#今天我去参观了其他朋友的家，果然还是#h0#的家最漂亮。",
                "#face0#艾米已经睡着了。只要一过晚上10点，她就会陷入梦乡。"];
        talks1 = ["#face0#今天比较闲，所以我正打算去米兰达的跳蚤市场转转，然后去其他家具工坊看看。\r\n说不定能久违地看到有新的家具出现。我也想看看其他人的装修呢！\r\n\r\n#L0##b为什么你想要看其他人的装修？k#l\r\n#L1##b如果有新的家具，那你也告诉我一声吧。#k#l\r\n#L2##b帮我跟米兰达问个好。#k#l",
                "#face0#今天我打算去市场买点食材。最近艾米看起来没什么力气，所以我打算做一些特别的食物。在去市场的路上说不定还能找到漂亮的紫罗兰盆栽呢。\r\n\r\n#L0##b特别的食物是什么？#k#l\r\n#L1##b一定要是紫罗兰吗？#k#l\r\n#L2##b艾米为什么会没什么力气？#k#l",
                "#face0#我正打算去广场练习增益。我正在研究能提高持续时间的方法。\r\n\r\n#L0##b你为什么要去广场？#k#l\r\n#L1##b这真是个好消息呢！#k#l\r\n#L2##b谢谢你为了我这么努力。#k#l"];
        anser1 = [["#face1#因为装修的世界是无穷无尽的！啊，那个人是那样放置家具的啊，这种家具像这样摆也很漂亮啊，看着这些就能学习了。这也算是我的小小兴趣。", "#face2#我知道了！#h0#如果找到了新的BOSS 家具，一定要记得告诉我哦。", "#face0#嗯~还是#h0#亲自去问好比较好哦！你偶尔也可以去广场玩玩嘛，大家都会很高兴的。"],
                ["#face2#充满了香喷喷的芝士香味的烤橙子&鸡腿！光是想象都觉得会很好吃吧？因为我想把艾米喜欢吃的都放进去，所以想了很久。一想到艾米肯定会很喜欢，我就很开心。", "#face1#因为我和艾米的诞生花就是紫罗兰。要是给艾米这个，她肯定会很开心。", "#face3#嗯……我也不太清楚。艾米不想让我担心，所以不怎么和我说心里话。"],
                ["#face1#因为既然已经做了，那就应该找其他人练习一下啊！特别是给艾丹增益的话，挥砍就会变得更容易，他特别喜欢呢。", "#face2#谢谢你能这么开心，我会配合#h0#的脚步，努力成长的。", "#face2#不不，是因为我喜欢所以才做的！我很开心能帮到你。"]];
        talks2 = ["#face0#今天据说是个阴天，风还很大。幸好没有说要下雨，所以不用太担心。\r\n\r\n#L0##b你对每天的天气都很了解呢！#k#l\r\n#L1##b谢谢，今天也是个适合打猎的天气呢。#k#l\r\n#L2##b现在有了家，就算下雨也没什么好担心的了。#k#l",
                "#face0#今天据说一整天都是晴朗的好天气呢。一直都是让人感到舒适的温度，很适合出去野外活动呢。\r\n\r\n#L0##b埃尔宾要做什么呢？#k#l\r\n#L1##b谢谢，这是个打猎的好天气呢！#k#l\r\n#L2##b艾米今天也要去兜风吧。#k#l",
                "#face0#今天据说也是又热又潮湿。像今天这种天气一定要注意摄取水分，比起一次性喝大量的水，最好还是少量多次比较好。\r\n\r\n#L0##b谢谢，看来我得带水出门了。#k#l\r\n#L1##b真是厉害，你怎么知道的呢？#k#l\r\n#L2##b看来也得多给花浇水了吧？#k#l"];
        anser2 = [["#face0#……这是我的习惯。如果下雨或者天气不好，就会给我的父母带来麻烦。所以我就养成了习惯，每天都会想着“希望今天也是个好天气”然后确认下天气的情况。", "#face1#注意安全！", "#face2#没错，如果下雨了，那就回家休息吧。也可以带其他朋友来。"],
                ["#face1#阳光很好，所以我正在考虑要不要晒一下杯子呢。然后给花浇浇水，把积攒的家务事都做一下。", "#face1#注意安全！", "#face3#你怎么知道？！只要天气好，他就闹着要去森林里兜风。\r\n如果遇到危险的人或者动物可怎么办啊？"],
                ["#face0#说到这个，我也得给艾米带点水。估计他没看天气就出门了。", "#face2#我是从一本叫《有关育儿的一切》的书上学到的，在那本书上好像真的有世界上所有的知识。我觉得这本书应该被指定为人人都必读的书呢。", "#face1#虽然在潮湿的时候给一点水就够了，但是也得看花的具体状态才知道。"]];
} else {
        message = ["#face0#今天没有什么有趣的事情吗？请跟我说说吧！ ",
                "#face0#别看艾丹那样，其实他超级~~胆小。刚才看到花盆里的虫子都被吓到了吧？",
                "#face0#今天米兰达也在喷泉的长椅上画画，每天都在努力的她，实力肯定会有所增长的。",
                "#face0#饿啊，#h0#~~。#h0#吃饭了吗？",
                "#face0#广场上的人非常多，难道是有我不知道的活动？ ",
                "#face0##h0#，冒险是什么样的感觉？",
                "#face0##h0#！你回来了啊？你今天都去了哪儿？ ",
                "#face0##h0#已经吃遍冒险岛世界的食物了呢？真是太羡慕了！什么是最好吃的？ ",
                "#face0#特鲁迪等了很久，然后回去了！他说想见见#h0#呢~\r\n如果你有时间，那就去广场找特鲁迪玩吧。\r\nr\n",
                "#face0#嗯，魔法真是难呢。增益技能就这么难，怎样才能呼风唤雨呢？真正的魔法师真的好棒啊！ ",
                "#face0#今天也辛苦你了，#h0#，是不是很累？躺在椅子上休息一下吧！ ",
                "#face0##h0#最喜欢什么食物？这是个秘密哦，我最近正在练习做菜呢！嘿嘿",
                "#face0#……看来给凯蒂喂食的人越来越多了。最近它一直在变胖呢~必须增加散步时间了！ ",
                "#face0#别看艾丹那样，其实他超级~~胆小。刚才看到花盆里的虫子都被吓到了吧？",
                "#face0#嗯……？#h0#？你还没睡？",
                "#face0#嗯……该来了……啊！#h0#你来了啊？……我正在等父母的联络。他们每年都一定会寄信来，看来今年要晚一点了。",
                "#face0#今天米兰达也在喷泉的长椅上画画，每天都在努力的她，实力肯定会有所增长的。",
                "#face0#真是的，不久前我想吃奶油面包，所以去了趟特鲁迪家，结果居然卖完了？看着他们生意这么好，我应该开心的……但还是有点遗憾啊……本来这是我专属的美食店呢~！ ",
                "#face0#隔壁好像又搬来了新人！虽然多个邻居是件好事，但是却因此连埃尔宾哥哥的面都见不到了。估计他现在正在帮忙进行装修呢吧？ "];
        talks1 = ["#face1#今天好像很忙呢！阳光实在是太好了。这种时候就应该去广场上晒太阳才对啊。为了合成维他命C！\r\n\r\n#L0##b……能够通过阳光获取的应该是维他命D吧……#k#l\r\n#L1##b好想法！#k#l\r\n#L2##b像今天这样的好天气，就会想要打扫呢。#k#l",
                "#face2#今天我要带着特鲁迪和凯蒂去森林里兜风！去的路上我顺便问问有没有人要一起去~ \r\n艾丹估计肯定会去，但米兰达可能会说“你们自己去吧”。\r\n\r\n#L0##b虽然我也很想一起去，但是我很忙，所以不行。你们去好好玩吧！#k#l\r\n#L1##b米兰达如果不去，艾丹也不会去的吧？#k#l\r\n#L2##b森林是不是太危险了？#k#l",
                "#face0#今天我打算在家里练习一下魔法……为什么我的实力总是无法提高呢？嘤……\r\n\r\n#L0##b不！比起一开始还是好很多了吧？多亏了艾米，打猎的时候方便多了。#k#l\r\n#L1##b没错，似乎还需要多点练习。#k#l\r\n#L2##b实力不强也可以，只要有心意就行了。#k#l"];
        anser1 = [["#face3#啊，我知道哦？我只是随便说说而已！切，你可不准说出去嘲笑我哦！", "#face2#那我去去就回！你就好好看家吧~~！", "#face1#嗯……嗯……好！我们一起清扫，然后一起去广场晒太阳吧！#h0#也愿意吧？"],
                ["#face0#我就知道会这样所以没问。#h0#总是很忙。如果能一起多玩玩就好了……", "#face2#哇！#h0#，你已经完全了解艾丹了啊？", "#face2#没关系！凯兰西亚周边是很安全的。我从四岁开始就在森林里玩，从来没有碰到怪物或者坏人！而且如果我遇到危险，#h0#肯定会来吧？"],
                ["#face2#真的吗？是真的吧？！太好了！我会继续努力练习的，敬请期待！", "#face3#……果然如此啊……？看来我是没有才能吧……还是放弃比较好吗……", "#face1#谢谢……不过我想帮助#h0#！请再等一下。我会努力练习，然后像魔法师一样施展帅气的增益的！"]];
        talks2 = ["#face1#今天的天气适合躺在沙发上喝点温暖的可可呢！\r\n\r\n#L0##b应该不会下雨吧~？只是艾米累了吧！#k#l\r\n#L1##b世界上哪儿有这种天气啊！#k#l\r\n#L2##b好啊，谢谢你能告诉我。#k#l",
                "#face2#今天是个适合买好汉堡套餐然后去玩的好天气呢~~！\r\n\r\n#L0##b你是指天气温暖又晴朗吧？#k#l\r\n#L1##b世界上哪儿有这种天气啊！#k#l\r\n#L2##b好啊，谢谢你能告诉我。#k#l",
                "#face2#今天是让人想到凉爽的橙汁的天气呢。要不干脆种一棵橙子树吧！要是把亲手摘下来的橙子马上榨汁肯定会很好吃吧？\r\n\r\n#L0##b今天看来会很热啊，谢谢你能告诉我。#k#l\r\n#L1##b世界上哪儿有这种天气啊！#k#l\r\n#L2##b你想喝橙汁吗？#k#l"];
        anser2 = [["#face1#不是的，今天真的有点阴沉啊。可能~会下雨啊，这种天气就应该待在家里吧。", "#face1#为什么没有呢？天空阴沉沉的~太阳也没出来，还吹着阴风！这种天气就应该休息才对。还要再加上可可，你难道不知道吗？", "#face2#哪里的话呀！ "],
                ["#face2#叮咚~！#h0#果然聪明！这个天气也很适合狩猎呢。今天也要加油哦，#h0#！", "#face2#为什么没有啊！阳光也很温暖，风也很凉爽，还没有雾霾，像今天这种天气就应该去玩啊！不在这种时候吃汉堡那要到什么时候才吃？", "#face2#哪里的话呀！ "],
                ["#face2#叮咚~！外面太热了。如果要去打猎，一定要小心别中暑了！", "#face4#哈……真是的~~你不知道在大太阳底下汗流浃背之后最好喝的是什么吗？水？不对不对。碳酸饮料？不对不对。当然是又甜又凉爽的橙汁了~！如果你去到外面，肯定就会知道我说的是什么意思了。", "#face2#有点……？刚才我出去了一下，真是很热啊。还出了汗。这种时候就应该来杯凉爽的橙汁，一下子就能消暑了呢。 "]];
}
let text = message[Math.floor(Math.random() * message.length)];
let resetdate = player.getQuestRecordEx(500773, "resetdate");
let nowDate = getMyDate(nowTime);
if (nowDate > resetdate) {
        player.updateQuestRecordEx(500773, "bonusTalk", "0");
        player.updateWorldShareRecord(500773, player.getQuestRecordEx(500773));
}
let bonusTalk = player.getIntQuestRecordEx(500773, "bonusTalk");
if (bonusTalk <= 0) {
        text += "\r\n\r\n #L1##b和#p" + npcId + "#对话#k#l";
}
text += "\r\n\r\n #L99##b查看管家信息#k#l";
let sel = npc.askMenuA(text, npcId);
switch (sel) {
        case 99:
                player.showSpecialUI(1, "UIHousingManager");
                break;
        case 1:
                let tSel = npc.askMenuA("(要说什么呢？)\r\n\r\n#L0##b#p" + npcId + "#，今天过得怎么样？#k#l\r\n#L1##b今天的天气如何？#k#l\r\n#L2##b#p" + npcId + "#，我有个问题！#k#l", true);
                switch (tSel) {
                        case 0:
                                howToday();
                                break;
                        case 1:
                                howWeather();
                                break;
                        case 2:
                                let cc = 0;//player.getIntQuestRecordEx(500773, "s5");
                                if (cc < 20) {
                                        npc.sayNextE("#face4#不行~~这是秘密！", npcId);
                                } else {
                                        aboutManeger();
                                }
                                break;
                }
                break;
}

function howToday() {
        let rngIdx1 = Math.floor(Math.random() * talks1.length);
        let tMsg1 = talks1[rngIdx1];
        let aSel1 = npc.askMenuA(tMsg1, npcId);
        npc.sayNextE(anser1[rngIdx1][aSel1], npcId);
        updateManager();
}

function howWeather() {
        let rngIdx2 = Math.floor(Math.random() * talks1.length);
        let tMsg2 = talks2[rngIdx2];
        let aSel2 = npc.askMenuA(tMsg2, npcId);
        npc.sayNextE(anser2[rngIdx2][aSel2], npcId);
        updateManager();
}

/*
 function aboutManeger() {
 let qStr = "#face2#你应该是对我感兴趣才好奇的吧？你尽管问吧，我会好好回答的。\r\n";
 let questions = new Array(
 "#L1##b你喜欢的食物是什么？#k#l",
 //"#L2##b你不想离开凯兰西亚，去其他地方看看吗？#k#l", 
 //"#L3##b你没有因为艾米而生气的时候吗？#k#l", 
 "#L4##b你觉得装修的时候什么是最重要的？#k#l",
 //"#L5##b你最要好的朋友是谁？#k#l", 
 "#L6##b有空闲时间的时候你都干什么呢？#k#l",
 "#L7##b你的梦想是什么？#k#l");
 
 
 1     #face1#喜欢的食物？当然是特鲁迪家的奶油面包了！
 
 
 4   #face1#我认为和谐是最重要的。整体的颜色是否适合，和其他家具相不相配！
 
 6    #face0#看装修杂志，到其他人家里参观装修……                                     
 7   #face0#我的梦想……就是好好照顾艾米。让她不要受伤……                                          
 
 } */

function updateManager() {
        let rdate = nowTime + 24 * 60 * 60 * 1000;
        let sText = "#b(和#p" + npcId + "#开心地聊天, #p" + npcId + "#的属性提高了！)\r\n#b";
        var ss = Math.floor(Math.random() * 4) + 1;
        let src = player.getIntQuestRecordEx(500773, "s" + ss);
        let aValue = 2;
        let value = src + aValue;
        switch (ss) {
                case 1:
                        sText += "家务#k属性提高了#b" + aValue + "#k!" + "#k (" + src + "->#b" + value + "#k)\r\n";
                        break;
                case 2:
                        sText += "美感#k属性提高了#b" + aValue + "#k!" + "#k (" + src + "->#b" + value + "#k)\r\n";
                        break;
                case 3:
                        sText += "财务管理#k属性提高了#b" + aValue + "#k!" + "#k (" + src + "->#b" + value + "#k)\r\n";
                        break;
                case 4:
                        sText += "社交术#k属性提高了#b" + aValue + "#k!" + "#k (" + src + "->#b" + value + "#k)\r\n";
                        break;
        }
        player.updateQuestRecordEx(500773, "s" + ss, String(value));
        src = player.getIntQuestRecordEx(500773, "s5");
        value = src + 1;
        sText += "亲密度#k提高了#b1#k!" + "#k (" + src + "->#b" + value + "#k)\r\n";
        player.updateQuestRecordEx(500773, "s5", String(value));
        player.updateQuestRecordEx(500773, "bonusTalk", "1");
        player.updateQuestRecordEx(500773, "resetdate", getMyDate(rdate));
        player.updateWorldShareRecord(500773, player.getQuestRecordEx(500773));
        npc.sayNextE(sText, true);
}


function getMyDate(str) {
        var oDate = new Date(str),
                oYear = oDate.getFullYear(),
                oMonth = oDate.getMonth() + 1,
                oDay = oDate.getDate(),
                oTime = oYear + '/' + addZero(oMonth) + '/' + addZero(oDay);
        return oTime.substr(2);
}

//补零操作
function addZero(num) {
        if (parseInt(num) < 10) {
                num = '0' + num;
        }
        return num;
}