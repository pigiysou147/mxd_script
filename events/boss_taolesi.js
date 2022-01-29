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
 * Boss: Hontale
 * @author Jackson
 */

let EXIT_MAP = 992000000;
let FIELD_1 = 992050000;
let DEATH_COUNT = 5;
let BOSS_LOG = "taoalesi";
let party;
let members;
let endTime;


function init(attachment) {
	party = attachment;

	let map_1 = event.getMap(FIELD_1);

	map_1.reset();
	let boss = map_1.makeMob(9309207);
	boss.changeBaseHp(4000000000000);
	map_1.spawnMob(boss, 13, 184);

	let boss1 = map_1.makeMob(9309126);
	boss1.changeBaseHp(500000000);
	map_1.spawnMob(boss1, 740, 184);

	let boss2 = map_1.makeMob(9309206);
	boss2.changeBaseHp(500000000);
	map_1.spawnMob(boss2, 720, 184);

	party.changeMap(FIELD_1, 0);
	members = party.getLocalMembers();

	map_1.showTimer(30 * 60);

	event.startTimer("kick", 30 * 60 * 1000);
	event.startTimer("timing", 60 * 1000);
	endTime = new Date().getTime() + 30 * 60 * 1000;

	event.setVariable("members", members);

	for(let i = 0; i < members.length; i++) {
		members[i].setEvent(event);
		members[i].addPQLog(BOSS_LOG);
		members[i].setDeathCount(DEATH_COUNT);
	}
}

function timing() {
	let map_1 = event.getMap(FIELD_1);
	let boss3 = map_1.makeMob(9309210);
	boss3.changeBaseHp(500000000);
	map_1.spawnMob(boss3, 381, 184);

	event.startTimer("timing", 60 * 1000);
}

function mobDied(mob) {

}

function removePlayer(playerId, changeMap) {
	for(let i = 0; i < members.length; i++) {
		if(members[i].getId() == playerId) {
			//dissociate event before changing map so playerChangedMap is
			//not called and this method is not called again by the player
			members[i].setEvent(null);
			if(changeMap)
				members[i].changeMap(EXIT_MAP, "st00");
			//collapse the members array so we don't accidentally warp
			//this member again if the leader leaves later.
			members.splice(i, 1);
			break;
		}
	}
	if(members.length <= 0) {
		event.destroyEvent();
	}
}

function playerDisconnected(player) {
	//changeMap is false since all PQ maps force return the player to the exit
	//map on his next login anyway, and we don't want to deal with sending
	//change map packets to a disconnected client
	removePlayer(player.getId(), false);
}

function playerChangedMap(player, destination) {
	//TODO: is it true that even when a non-leader clicks Nella, the entire
	//party is booted? and that GMS forces party out when only two members
	//remain alive and online?
	switch(destination.getId()) {
		case FIELD_1:
			player.showTimer((endTime - new Date().getTime()) / 1000);
			break;
		default:
			//player died and respawned or clicked Nella to leave PQ
			//changeMap is false so player doesn't get re-warped to exit map
			removePlayer(player.getId(), false);
	}
}

function partyMemberDischarged(party, player) {
	if(party.getLeader() == player.getId()) {
		kick();
	} else {
		removePlayer(player.getId(), true);
	}
}

function kick() {
	for(let i = 0; i < members.length; i++) {
		//dissociate event before changing map so playerChangedMap is not
		//called and this method is not called again by the player
		members[i].setEvent(null);
		members[i].changeMap(EXIT_MAP);
	}
	event.destroyEvent();
}

function timerExpired(key) {
	switch(key) {
		case "kick":
			kick();
			break;
	}
}

function deinit() {
	for(let i = 0; i < members.length; i++) {
		members[i].setEvent(null);
		members[i].setDeathCount(-1);
	}
}