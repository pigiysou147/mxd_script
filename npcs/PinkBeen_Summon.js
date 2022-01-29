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
 * @author Jackson (content from DelphiMS r418)
 */
let mobId;
let event_name;
switch (map.getId()) {
        case 270050100:
                mobId = 8820008;
                event_name = "boss_pinkbeen";
                break;
        case 270051100:
                mobId = 8820108;
                event_name = "boss_pinkbeen_chaos";
                break;
}

let event = npc.getEvent(event_name);
if (event != null && party != null && player.getId() == party.getLeader() && event.getVariable("npc") != null) {
        let ret = npc.askAccept("如果我有善良之镜,我就能召唤黑魔法师!\r\n等等!好像哪里错了!为什么召唤不了黑魔法师?我感觉到跟黑魔法师完全不同的……啊啊啊!!!!!!!\r\n\r\n #b(请把奇拉的使命传递下去.)");
        if (ret == 1) {
                let entId = event.getVariable("npc");
                map.destroyTempNpc(entId);
                event.setVariable("boss", true);
                map.spawnMob(mobId, 5, -42);
        }
}