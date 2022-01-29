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


let ret = npc.askYesNo("我将把你送到失魂落魄的骑士们的所在地，请你一定要阻止他们！你准备好了吗？");
if (ret == 1) {
        if (npc.makeEvent("change_job", false, [player, 913070100]) == null) {
                npc.say("发生未知错误");
        }
} else {
        npc.sayNext("嗯，那等你考虑好了在说吧！");
}
