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
 * Casey: Master of MiniGame (NPC 1012008),
 *   Chico: Master of MiniGame (NPC 2040014)
 * Victoria Road: Henesys Game Park (Map 100000203),
 *   Ludibrium: Ludibrium Village (Map 220000300)
 *
 * Creates minigame items and gives info on them.
 *
 * @author Jackson (content from KiniroMS r227)
 */

let selection = npc.askMenu("嘿，你看起来好像需要休息一下。你应该像我一样享受生活。好吧，如果你有一些东西，我可以和你交易一个你可以玩小游戏的东西。现在。。。我能为你做什么？\r\n#b"
        + "#L0#制作小游戏道具#l\r\n"
        + "#L1#什么是小游戏#l");
if (selection == 0) {
        selection = npc.askMenu("你想做小游戏吗？小游戏不是你可以直接玩的东西。你需要一组特定的物品来制作一个特定的小游戏。你想做哪种小游戏？\r\n#b"
                + "#L0#五子棋#l\r\n"
                + "#L1#记忆大考验#l");
        if (selection == 0) {
                npc.sayNext("你想要制作#b五子棋#k, 哈哈? 要想玩它，你需要五子棋道具。只有那些有这个道具的人才能开玩五子棋游戏的房间，你几乎可以在任何地方玩这个游戏，除了自由市场上的一些地方。");
                let sets = [4080000, 4080001, 4080002, 4080003, 4080004, 4080005];
                let mat1 = [4030000, 4030000, 4030000, 4030010, 4030011, 4030011];
                let mat2 = [4030001, 4030010, 4030011, 4030001, 4030010, 4030001];
                let menuText = "不同的棋子可以制作不同的五子棋。你想做哪一套?#b";
                for (let i = 0; i < sets.length; i++)
                        menuText += "\r\n#L" + i + "##t" + sets[i] + "##l";
                selection = npc.askMenu(menuText);
                if (player.hasItem(mat1[selection], 99) && player.hasItem(mat2[selection], 99) && player.hasItem(4030009, 1) && player.canGainItem(sets[selection], 1)) {
                        player.loseItem(mat1[selection], 99);
                        player.loseItem(mat2[selection], 99);
                        player.loseItem(4030009, 1);
                        player.gainItem(sets[selection], 1);
                } else {
                        npc.sayNext("#b你想要制作#t" + sets[selection] + "##k? 额... 把材料给我，我就能做到. 仔细听，你需要的材料是: #r99个#t" + mat1[selection] + "#, 99个#t" + mat2[selection] + "#, 1个#t4030009##k. 怪物们可能会时不时地会掉落...");
                }
        } else if (selection == 1) {
                if (player.hasItem(4030012, 99)) {
                        player.loseItem(4030012, 99);
                        if (player.canGainItem(4080100, 1))
                                player.gainItem(4080100, 1);
                        else //TODO: GMS-like line
                                npc.say("请检查您的背包是否已满.");
                } else {
                        npc.sayNext("你想要#b#t4080100##k? 嗯... 想要#t4080100#, 你需要一些#b#t4030012#s#k. #t4030012#可以通过清除岛上所有的怪物来获得. 收集99个#t4030012#就可以制作记忆大考验.");
                }
        }
} else if (selection == 1) {
        selection = npc.askMenu("你想进一步了解小游戏吗？好的没问题。你想了解哪个迷你游戏？\r\n#b"
                + "#L0#五子棋#l\r\n"
                + "#L1#记忆大考验#l");
        if (selection == 0) {
                npc.sayNext("这是五子棋的规则。仔细听。五子棋是一个游戏，你和你的对手将轮流把一块放在桌子上，直到有人找到一条线上连续放5块，不管是水平的，对角线的还是垂直的。那个人将是获胜者。对于初学者来说，只有拥有五子棋道具的人才能打开游戏室。");
                npc.sayNext("每次五子棋游戏将花费#r100金币#k.即使你没有 #b五子棋道具#k, 你也可以进入五子棋游戏室进行游戏. 但是，如果你没有100个金币，那么你就不能进入房间。创建爱你游戏室也需要100个金币，否则就无法游戏了。如果你在游戏中没有金币，那么你会自动被踢出房间！");
                //npc.sayNext("Enter the room, and when you're ready to play, click on #bReady#k. Once the visitor clicks on #bReady#k, the owner of the room can press #bStart#k to start the game. If an unwanted visitor walks in, and you don't want to play with that person, the owner of the room has the right to kick the visitor out of the room. There will be a square box with x written on the right of that person. Click on that for a cold goodbye, ok?");
                //npc.sayNext("When the first game starts, #bthe owner of the room goes first#k. Be ware that you'll be given a time limit, and you may lose your turn if you don't make your move on time. Normally, 3 x 3 is not allowed, but if there comes a point that it's absolutely necessary to put your piece there or face a game over, then you can put it there. 3 x 3 is allowed as the last line of defense! Oh, and it won't count if it's #r6 or 7 straight#k. Only 5!");
                //npc.sayNext("If you know your back is up against the wall, you can request a #bRedo#k. If the opponent accepts your request, then the opponent's last move, along with yours, will be canceled out. If you ever feel the need to go to the bathroom, or take an extended break, you can request a #btie#k. The game will end in a tie if the opponent accepts the request. This may be a good way to keep your friendship intact with your buddy.");
                //npc.sayNext("Once the game is over, and the next game starts, the loser will go first. Oh, and you can't leave in the middle of the game. If you do, you may need to request either a #bforfeit#k, or a #btie#k. Of course, if you request a forfeit, you'll lose the game, so be careful of that. And if you click on \"Leave\" in the middle of the game and call to leave after the game, you'll leave the room right after the game is over, so this will be a much more useful way to leave.");
        } else if (selection == 1) {
                npc.sayNext("这是记忆大考验游戏的规则。仔细听。在桌上的纸牌数量中找到一对匹配的纸牌。找到所有匹配对后，拥有更多匹配对的人将赢得比赛。你需要#b#t4080100##k来打开游戏室。");
                npc.sayNext("每次记忆大考验游戏将花费#r100金币#k.即使你没有 #b记忆大考验道具#k, 你也可以进入五子棋游戏室进行游戏. 但是，如果你没有100个金币，那么你就不能进入房间。创建爱你游戏室也需要100个金币，否则就无法游戏了。如果你在游戏中没有金币，那么你会自动被踢出房间！");
                //npc.sayNext("Enter the room, and when you're ready to play, click on #bReady#k. Once the visitor clicks on #bReady#k, the owner of the room can press #bStart#k to start the game. If an unwanted visitor walks in, and you don't want to play with that person, the owner of the room has the right to kick the visitor out of the room. There will be a square box with x written on the right of that person. Click on that for a cold goodbye, ok?");
                //npc.sayNext("Oh, and unlike Omok, on Match Cards, when you create the game room, you'll need to set your game on the number of cards you'll use for the game. There are three modes available: 3x4, 4x5, and 5x6, which will require 12, 20, and 30 cards. Remember, though, you won't be able to change it up once the game room is open, so if you really wish to change it up, you may have to close the room and open another one.");
                //npc.sayNext("When the first game starts, #bthe owner of the room goes first#k. Beware that you'll be given a time limit, and you may lose your turn if you don't make your move on time. When you find a matching pair on your turn, you'll get to keep your turn, as long as you keep finding a pair of matching cards. Use your memorizing skills for a devestating combo of turns.");
                //npc.sayNext("If you and your opponent have the same number of matched pairs, then whoever had a longer streak of matched pairs will win. If you ever feel the need to go to the bathroom, or take an extended break, you can request a #btie#k. The game will end in a tie if the opponent accepts the request. This may be a good way to keep your friendship intact with your buddy.");
                //npc.say("Once the game is over, and the next game starts, the loser will go first. Oh, and you can't leave in the middle of the game. If you do, you may need to request either a #bforfeit#k, or a #btie#k. Of course, if you request a forfeit, you'll lose the game, so be careful of that. And if you click on \"Leave\" in the middle of the game and call to leave after the game, you'll leave the room right after the game is over, so this will be a much more useful way to leave.");
        }
}