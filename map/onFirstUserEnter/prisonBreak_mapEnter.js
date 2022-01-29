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

let event = npc.getEvent("party_prison_break");
if (event != null) {
        switch (map.getId()) {
                case 921160100:
                        map.blowWeather(5120053, "嘘！必须悄悄地避开障碍物，从塔里出去。");
                        break;
                case 921160200:
                        map.blowWeather(5120053, "必须消灭所有警卫。否则他们会叫来其他警卫。");
                        break;
                case 921160300:
                        map.blowWeather(5120053, "为了防止有人接近监狱，他们建造了迷宫。请寻找通往空中监狱的门！");
                        break;
                case 921160400:
                        map.blowWeather(5120053, "必须消灭所有警卫。否则他们会叫来其他警卫。");
                        break;
                case 921160500:
                        map.blowWeather(5120053, "这是最后的障碍物。请通过障碍物，到空中监狱来。");
                        break;
                case 921160600:
                        map.blowWeather(5120053, "请消灭警卫，找到监狱钥匙，打开监狱门。");
                        break;
                case 921160700:
                        map.blowWeather(5120053, "请消灭看守，让我们重获自由！！！！");
                        if (event.getVariable("npc") == null) {
                        	
                                event.setVariable("npc", map.spawnTempNpc(9020006, -1888, -181));
                                map.spawnMob(9300454, -555, -181);
                        }
                        break;
        }
}