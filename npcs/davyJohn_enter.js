var status = 0;
var minLevel = 120;
var maxLevel = 300;
var minPlayers = 1; // GMS = 3
var maxPlayers = 6; // GMS = 4
var count = 20;
var PQLog = "海盗船组队任务";
var sel = -1;
var questID = 1204;

            player.loseItem(4001117);
            player.loseItem(4001260);
            player.loseItem(4001120);
            player.loseItem(4001121);
            player.loseItem(4001122);
            var selection = npc.askMenu("#e<组队任务：海盗船组队任务>#n\r\n你想要干什么呢？\r\n#b#L0#我想执行组队任务。#l\r\n#L1#我想寻找一起游戏的队员。#l\r\n#L2#我想听听说明。#l\r\n#L3#我想领取海盗帽。#l\r\n#L4#我想知道今天的剩余挑战次数。#l");
            sel = selection;
           if (selection == 0) {
                if (party == null) { // 没有组队
                    npc.say("请组队后和我谈话。");
                     
                } else if (party.getLeader()!=player.getId()) { // 不是队长
                    npc.say("队长必须在这里。请让他和我说话。");
                     
                } else if (party.numberOfMembersInChannel() != party.getMembersCount(map.getId(), 1, 300)) {
                    npc.say("你的组队部分成员不在当前地图,请召集他们过来后在尝试。"); //判断组队成员是否在一张地图..
                } else if (party.getMembersCount(map.getId(), minLevel, maxLevel) < minPlayers) {
					npc.say("你队员的等级要在" + minLevel + "~" + maxLevel + "范围!请确认!");
                } else if (!party.isAllMembersAllowedPQ(PQLog, count)) {
					npc.say("你队员#r#e" + party.getNotAllowedMember(PQLog, count) + "#n#k次数已经达到上限了。");
                
                } else if (npc.makeEvent("Pirate", true, party) == null) {
					npc.say("已经有队伍在进行了,请更换其他频道尝试。");				
				}else{
					npc.broadcastPlayerNotice(1,"[提示]:玩家 "+ player.getName() +" 带队进入了海盗船组队任务副本！！！");
					
				}
            } else if (selection == 1) {
                //selection = npc.askYesNo("你需要有一个 " + minPlayers + " - " + maxPlayers + " 人的队伍.并且等级在" + minLevel + "~" + maxLevel + "范围,\r\n那么请让你的组队长和我对话吧!");
                 
            } else if (selection == 2) {
                npc.sayNext("桔梗精们所在的#b#m251000000##k遭到了#r海盗#o9300119##k的袭击。桔梗精大王--#b#p2094001##k被绑架了。请你和同伴们前往海盗船，击退#o9300119#吧。拜托你了。\r\n - #e等级#n : 120级以上#r ( 推荐等级: 120 ~ 149 )#k \r\n - #e参加人员#n : 2 ~ 6名\r\n - #e最终奖励#n : #b#i01003856# #t01003856##k");
                 
            } else if (selection == 3) {
                selection = npc.askMenu("感谢你消灭了#b老海盗#k并救出了#b无恙#k。作为报答，如果你能带来帽子碎片，我就为你制成#b海盗船长帽#k。你需要什么样的帽子呢？#b\r\n#L0##i1003856:##t1003856#\r\n#r(需要30个#t4001455#)#l#b\r\n#L1##i1003857:##t1003857#\r\n#r(#t1003856:# 1个, 需要60个#t4001455#)#l#b\r\n#L2##i1003858:##t1003858#\r\n#r(#t1003857:# 1个, 需要90个#t4001455#)#l\r\n");
            } else if (selection == 4) {
                var pqtry = count - player.getPQLog(PQLog);
                npc.say("今天剩余挑战次数是" + pqtry + "次.");
                 
            }

            if(sel==3){
                var itemid;
                var cost = 5;
                var need = 0;
                switch (selection) {
                    case 0:
                        cost = 30;
                        itemid = 1003856;
                        break;
                    case 1:
                        cost = 60;
                        itemid = 1003857;
                        need = 1003856;
                        break;
                    case 2:
                        cost = 90;
                        need = 1003857;
                        itemid = 1003858;
                        break;
                }
                if (player.hasItem(4001455, cost) && (need == 0 || player.hasItem(need, 1))) {
                    if (player.canGainItem(itemid)) {
                        player.gainItem(itemid, 1);
                        if (need > 0) {
                            player.loseItem(need, 1);
                        }
                        player.loseItem(4001455, cost);
                    } else {
                        npc.say("请整理你的背包");
                    }
                } else {
                    npc.say("要想获得#b#t" + itemid + "##k的话，需要#b" + cost + "个#t4001455##k。你快去搜集吧。消灭老海盗后，就可以弄到。");
                }
            }
