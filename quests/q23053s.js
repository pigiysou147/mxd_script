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


npc.sayNext("嗯，你解救了我并破坏了黑色之翼研究的新型武器...！");
let ret = npc.askYesNo("现在可以完成所有的学习了，你准备好了吗？（确认后进行转职）");
if (ret == 1) {
        npc.completeQuest();
        if (player.getJob() == 3311) {
                player.setJob(3312);
                player.gainSp(5);
                player.gainParcel(1142245, 1, "转职徽章");
        }
        npc.sayNext("好了，你的能力得到了提升了，现在你去继续锻炼自己，让自己变得更强吧！");
} else {
        npc.sayNext("嗯……这是一个重要的决定，你好好考虑下.");
}


