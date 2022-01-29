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
        npc.sayNext("吱吱～～吱吱～～？？");
        npc.sayNext("吱吱～吱，吱！吱吱吱！吱吱～！吱！吱？！");
        npc.sayNextS("我明明是想到冒险岛世界去当一个冒险家的……到底是怎么回事？", false);
        npc.sayNext("吱吱吱吱～吱！吱吱！吱吱吱吱吱！");
        npc.sayNextS("和船长说话的时候看了看守卫，好像是……没错！蝙蝠怪！蝙蝠怪出现了！然后我……就那样掉下了船？那怎么会没事呢？虽然我#b知道游泳的方法#k，但是在这个过程中，我不可能神智清醒啊……难道，我是个游泳神童吗？！", false);
        npc.sayNext("吱吱吱吱吱！吱！吱！(有只小猴子好像很不满地在那里上窜下跳。看上去好像还很小。我醒来之后看到的第一个面孔，好像就是它……)");
        npc.sayNextS("嗯……？从刚才开始，你就一直想跟我说话吗？嗯？手上拿着的是……(猴子从怀里拿出一个苹果。看上去很好吃的熟透的苹果。但是……给我苹果干什么?\r\n#i2010000#)", false);

        let hurt = npc.askAccept("吱吱吱吱吱～咕嘟！#b(猴子一脸郁闷的表情，把苹果递给我，做出吃的动作。难道……它知道我体力很虚弱，让我吃掉它！这家伙，心地还挺善良的！)");
        if (hurt == 1) {
                npc.startQuest();
                player.gainItem(2010000, 1);
                npc.sayNextS("获得了看上去很好吃的苹果。吃一口看看吧。按#bI#k键，可以打开背包吗～？)");
        } else {
                npc.sayNextS("但是我不喜欢吃苹果……我拒绝！");
        }
}
