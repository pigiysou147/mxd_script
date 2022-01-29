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

//Array(0, 0, 0, "", Array(new java.awt.Point(), new java.awt.Point(), new java.awt.Point())), //mapId, mobId, mobTime<min>,msg,pos
var data = [
        Array(104010200, 2220000, 60, "天气凉快了就会出现红蜗牛王。", Array(new java.awt.Point(189, 2), new java.awt.Point(478, 250), new java.awt.Point(611, 489))), //mapId, mobId, mobTime<min>,msg,pos
        Array(102020500, 3220000, 60, "树妖王出现了", Array(new java.awt.Point(1121, 2130), new java.awt.Point(483, 2171), new java.awt.Point(1474, 1706))), //mapId, mobId, mobTime<min>,msg,pos
        Array(100020101, 6130101, 60, "什么地方出现了巨大的蘑菇。", Array(new java.awt.Point(-311, 201), new java.awt.Point(-903, 197), new java.awt.Point(-568, 196))), //mapId, mobId, mobTime<min>,msg,pos
        Array(100020301, 8220007, 60, "什么地方出现了巨大的蓝色蘑菇。", Array(new java.awt.Point(-188, -657), new java.awt.Point(625, -660), new java.awt.Point(508, -648))), //mapId, mobId, mobTime<min>,msg,pos
        Array(100020401, 6300005, 60, "什么地方出现了笼罩着阴暗气息的巨大蘑菇。", Array(new java.awt.Point(-130, -773), new java.awt.Point(504, -760), new java.awt.Point(608, -641))), //mapId, mobId, mobTime<min>,msg,pos
        Array(250010304, 7220000, 120, "随着微弱的口哨声，肯德熊出现了。", Array(new java.awt.Point(-210, 33), new java.awt.Point(-234, 393), new java.awt.Point(-654, 33))), //mapId, mobId, mobTime<min>,msg,pos
        Array(200010300, 8220000, 60, "艾利杰出现了。", Array(new java.awt.Point(665, 83), new java.awt.Point(672, -217), new java.awt.Point(-123, -217))), //mapId, mobId, mobTime<min>,msg,pos
        Array(250010503, 7220002, 90, "周边的妖气慢慢浓厚，可以听到诡异的猫叫声。", Array(new java.awt.Point(-303, 543), new java.awt.Point(227, 543), new java.awt.Point(719, 543))), //mapId, mobId, mobTime<min>,msg,pos
        Array(220050200, 5220003, 90, "嘀嗒嘀嗒! 随着规则的指针声出现了提莫。", Array(new java.awt.Point(-467, 1032), new java.awt.Point(532, 1032), new java.awt.Point(-47, 1032))), //mapId, mobId, mobTime<min>,msg,pos
        Array(240040401, 8220003, 720, "大海兽出现了。", Array(new java.awt.Point(-15, 2481), new java.awt.Point(127, 1634), new java.awt.Point(159, 1142))),
        Array(260010201, 3220001, 360, "从沙尘中可以看到大宇的身影。", Array(new java.awt.Point(-215, 275), new java.awt.Point(298, 275), new java.awt.Point(592, 275))),
        Array(251010102, 5220004, 360, "大王蜈蚣出现了。", Array(new java.awt.Point(-41, 124), new java.awt.Point(-173, 126), new java.awt.Point(79, 118))),
        Array(261030000, 8220002, 270, "吉米拉出现了。", Array(new java.awt.Point(-1094, -405), new java.awt.Point(-772, -116), new java.awt.Point(-108, 181))),
        Array(230020100, 4220000, 270, "在海草中间，出现了奇怪的蛤蚌。", Array(new java.awt.Point(-291, -20), new java.awt.Point(-272, -500), new java.awt.Point(-462, 640))),
        Array(103020320, 5090000, 180, "在地铁的阴影中出现了什么东西。", Array(new java.awt.Point(79, 174), new java.awt.Point(-223, 296), new java.awt.Point(80, 275))),
        Array(103020420, 5090000, 180, "在地铁的阴影中出现了什么东西。", Array(new java.awt.Point(2241, 301), new java.awt.Point(1990, 301), new java.awt.Point(1684, 307))),
        Array(261020300, 7090000, 270, "自动警备系统出现了。", Array(new java.awt.Point(312, 157), new java.awt.Point(539, 136), new java.awt.Point(760, 141))),
        Array(261020401, 8090000, 270, "迪特和罗伊出现了。", Array(new java.awt.Point(-263, 155), new java.awt.Point(-436, 122), new java.awt.Point(22, 144))),
        Array(250020300, 5090001, 270, "仙人玩偶出现了。", Array(new java.awt.Point(1208, 27), new java.awt.Point(1654, 40), new java.awt.Point(927, -502))),
        Array(211050000, 6090001, 270, "被束缚在冰里的魔女睁开了眼睛。", Array(new java.awt.Point(-233, -431), new java.awt.Point(-370, -426), new java.awt.Point(-526, -420))),
        Array(261010003, 6090004, 270, "陆陆猫出现了。", Array(new java.awt.Point(-861, 301), new java.awt.Point(-703, 301), new java.awt.Point(-426, 287))),
        Array(251010101, 6090002, 270, "竹林里出现了一个来历不明的青竹武士，只要打碎小竹片，就可让青竹武士大发雷霆而葬失自制力，并将他打倒。", Array(new java.awt.Point(-15, -449), new java.awt.Point(-114, -442), new java.awt.Point(-255, -446))),
        Array(211041400, 6090000, 270, "黑山老妖出现了！", Array(new java.awt.Point(1672, 82), new java.awt.Point(2071, 10), new java.awt.Point(1417, 57))),
        Array(105030500, 8130100, 270, "蝙蝠怪出现了。", Array(new java.awt.Point(393, 129), new java.awt.Point(937, 129), new java.awt.Point(150, 129))),
        Array(105020400, 8220008, 270, "出现了一个奇怪的商店。", Array(new java.awt.Point(-163, 82), new java.awt.Point(958, 107), new java.awt.Point(706, -206))),
        Array(211040101, 8220001, 360, "驮狼雪人出现了。", Array(new java.awt.Point(485, 244), new java.awt.Point(-60, 249), new java.awt.Point(208, 255))),
        Array(865030500, 9390866, 60, "暗杀团头目卡尼斯出现了。", Array(new java.awt.Point(128, 90))),
        Array(865020500, 9390865, 60, "江河之子艾利沙出现了。", Array(new java.awt.Point(-484, 286))),
        Array(931000500, 9304005, 600, "美洲豹栖息地出现<剑齿豹>，喜欢此坐骑的豹弩游侠职业可以前往抓捕。", Array(new java.awt.Point(-872, -332), new java.awt.Point(409, -572), new java.awt.Point(-131, 0))),
        Array(931000500, 9304006, 700, "美洲豹栖息地出现<雪豹> ，喜欢此坐骑的豹弩游侠职业可以前往抓捕。", Array(new java.awt.Point(-872, -332), new java.awt.Point(409, -572), new java.awt.Point(-131, 0))),
        Array(931000500, 9304007, 800, "美洲豹栖息地出现<玛瑙美洲豹>，喜欢此坐骑的豹弩游侠职业可以前往抓捕。", Array(new java.awt.Point(-872, -332), new java.awt.Point(409, -572), new java.awt.Point(-131, 0))),
        Array(931000500, 9304008, 900, "美洲豹栖息地出现<铠甲赤豹>，喜欢此坐骑的豹弩游侠职业可以前往抓捕。", Array(new java.awt.Point(-872, -332), new java.awt.Point(409, -572), new java.awt.Point(-131, 0)))];

let nextSpawn = [];

function init(attachment) {
        for (var i = 0; i < data.length; i++) {
                nextSpawn[i] = new Date().getTime();
        }
        event.startTimer("respawn", 10 * 1000);
}


function respawn() {
        let nowTime = new Date().getTime();
        for (var i = 0; i < data.length; i++) {
                let mapId = data[i][0];
                let mobId = data[i][1];
                let mobTime = data[i][2];
                let msg = data[i][3];
                let next = nextSpawn[i];
                if (nowTime > next) {
                        let map = event.getMap(mapId);
                        if (map != null) {
                                nextSpawn[i] = nowTime + mobTime * 60 * 1000;
                                let rIdx = parseInt(Math.random() * data[i][4].length);
                                let pos = data[i][4][rIdx];
                                if (map.getMobById(mobId) == null) {
                                        map.spawnMob(mobId, pos.x, pos.y);
                                }
                        }
                }
        }
        event.startTimer("respawn", 10 * 60 * 1000);
}

function timerExpired(key) {
        switch (key) {
                case "respawn":
                        respawn();
                        break;
        }
}