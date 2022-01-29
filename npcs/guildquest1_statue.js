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
 *  Gatekeeper, Sharenian: Door to the Sharenian Castle (990000300)
 * @author Jackson 
 */

let testCount = 3;

let event = npc.getEvent("guild_quest");
if (event != null) {
        let leader = event.getVariable("leader");
        let state = event.getVariable("state_s1");
        if (leader.equals(player.getName())) {
                if (state == null) {
                        event.setVariable("stone_move", 0);
                        event.setVariable("state_s1", "0");
                        event.setVariable("gate_count", 0);
                        event.setVariable("check", "");
                        event.setVariable("check_idx", 0);
                        event.setVariable("combo", "");
                        npc.sayNext("欢迎来到第一关！\r\n在这里我将会好好考验你们的观察力！看到在我身边的石像了吗？我会移动这些石像，当我发起命令的时候，请重复刚才石像移动的轨迹。");
                } else {
                        action();
                }
        } else {
                npc.say("欢迎来到第一关！\r\n在这里我将会好好考验你们的观察力！看到在我身边的石像了吗？我会移动这些石像，当我发起命令的时候，请重复刚才石像移动的轨迹。");
        }
} else {
        npc.say("发生未知错误，请离开后重新进入。");
}


function action() {
        let move = event.getVariable("stone_move");
        switch (move) {
                case 0://未移动
                        let ret = npc.askYesNo("希望接下来你能通过我的挑战，祝你好运！是否开始挑战？");
                        if (ret == 1) {
                                event.setVariable("stone_move", 1);
                                event.startTimer("s1_gate_check", 3500);
                                map.scriptProgressMessage("石像将在3秒后进行移动，请注意观察！");
                                map.broadcastEventNotice("石像将在3秒后进行移动，请注意观察！");
                        }
                        break;
                case 1://移动中
                        npc.sayNext("石像已经在移动中！请注意观察！");
                        break;
                case 2://移动结束 进行检查
                        let check = event.getVariable("check");
                        let combo = event.getVariable("combo");
                        if (combo.equals(check)) {
                                let gate_count = parseInt(event.getVariable("gate_count")) + 1;
                                if (gate_count < testCount) {
                                        event.setVariable("gate_count", gate_count);
                                        event.setVariable("stone_move", 0);
                                        event.setVariable("check", "");
                                        event.setVariable("check_idx", 0);
                                        event.setVariable("combo", "");
                                        npc.sayNext("非常好！但是你还得完成接下来的阶段。 \r\n如果你准备好的话，请再跟我谈话。");
                                } else {
                                        event.setVariable("stone_move", 3);
                                        event.setVariable("state_s1", "clear");
                                        map.setReactorState("statuegate", 1, 0);
                                        map.soundEffect("Party1/Clear");
                                        map.screenEffect("quest/party/clear");
                                        //player.gainGuildCommitment(100);
                                        npc.sayNext("干得漂亮！你已经完成了我对你们的考验，现在可以通过这个门了，请进入下一个地图迎接挑战吧！");
                                }
                        } else {
                                event.setVariable("gate_count", 0);
                                event.setVariable("stone_move", 0);
                                event.setVariable("check", "");
                                event.setVariable("check_idx", 0);
                                event.setVariable("combo", "");
                                map.scriptProgressMessage("没有通过守门人的考验！");
                                map.broadcastEventNotice("没有通过守门人的考验！");
                                npc.sayNext("错误的答案！请重新和我对话继续接受我的测试。");
                        }
                        break;
                case 3://完成了所有阶段
                        npc.sayNext("你已经完成了我对你们的考验，请快进入下一个地图迎接挑战吧！");
                        break;
        }
}

