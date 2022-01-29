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

startScript();

function startScript() {
        npc.sayNext("吱吱吱吱吱！吱！吱！");
        npc.sayNextS("肚子吃饱了，但精神还是不清醒……到底是怎么回事？一睁开眼睛看到的是猴子，不知道这是什么地方……船怎么样了呢？你知道怎么回事吗？", false);
        let hurt = npc.askAccept("吱吱，吱吱！(猴子点着头。它真的知道情况吗？仔细问问猴子吧！)");
        if (hurt == 1) {
                npc.startQuest();
        } else {
                npc.sayNext("吱吱！吱！吱～吱！(猴子一脸不满的表情。)");
        }
}
