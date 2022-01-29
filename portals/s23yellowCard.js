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

let event = portal.getEvent();
if (event != null) {
        var stage = parseInt(event.getVariable("stage"));

        var rStat = map.getReactorStateId("y") + 1;
        var rValue = parseInt(player.getQuestRecordEx(42006, "y"));

        if (rValue > rStat) {//获得的数字 大于当前的数字 则进行处理
                player.updateQuestRecordEx(42006, "yc", String(rValue));
                player.offAvatarOrientedRepeat();
                player.showAvatarOriented("Effect/OnUserEff.img/aquarisTower/success");
                player.updateQuestRecordEx(42006, "y", "0");
                map.setReactorState("y", rValue - 1, 0);
                var rc = player.getQuestRecordEx(42006, "rc");
                var gc = player.getQuestRecordEx(42006, "gc");
                var bc = player.getQuestRecordEx(42006, "bc");
                var yc = player.getQuestRecordEx(42006, "yc");
                if (rc != "0" && gc != "0" && bc != "0" && yc != "0") {
                        //完成当前阶段
                        if (event.getVariable("stage" + stage) != "clear") {
                                event.setVariable("stage" + stage, "clear");
                                player.screenEffect("quest/party/clear");
                                event.getVariable("map" + stage).blowWeatherEffectNotice("你现在可以前往下一层了。", 147, 15000);
                        }
                }
        }
} else {
        player.showSystemMessage("发生未知错误！");
}
portal.abortWarp();