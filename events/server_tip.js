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

let message = new Array(
	"请勿使用任何非法程序，被发现时封号封IP!",
	"泡点在1线市场，用拍卖卷点击回到市场，进入市场即可开启泡点",
	" 为了各位玩家的账号安全,不允许玩家之间私下交易,违反者封号封IP",
	"如果无法和NPC进行对话，请尝试使用 @ea 命令,游戏常用指令请输入#help 获取！ ",
	"发现游戏BUG或游戏漏洞时.请填写详细的BUG报告发送给群主",
	
	"玩家可以到专业技术地图学习各种生活技能。"
	);


function init(attachment) {
        event.startTimer("notice", Math.random() * 3 * 60000);
}


function timerExpired(key) {
        switch (key) {
                case "notice":
                        if(event!=null)
                        event.broadcastPlayerNotice(7, "[帮助] " + message[Math.floor(Math.random() * message.length)]);
                        event.startTimer("notice", Math.random() * 15 * 60000);
                        break;
        }
}
