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


let orbisStation, ariantStation,
        toOrbisWait, toAriantWait,
        toOrbis, toAriant;

function init(attachment) {
        let remainingTimeUntilDeparture = untilNextQuarterHour();
        if (remainingTimeUntilDeparture > 5 * 60 * 1000) {
                //boat is undocked until last five minutes to departure
                undock(remainingTimeUntilDeparture - 5 * 60 * 1000, false);
        } else if (remainingTimeUntilDeparture > 60 * 1000) {
                //boat is docked and boarding until last minute to departure
                dock(remainingTimeUntilDeparture - 60 * 1000, false);
        } else {
                //doors closed until takeoff
                closeDoors(remainingTimeUntilDeparture, false);
        }
        orbisStation = event.getMap(200000151);
        ariantStation = event.getMap(260000100);

        toOrbisWait = event.getMap(260000110);
        toAriantWait = event.getMap(200000152);

        toOrbis = event.getMap(200090410);
        toAriant = event.getMap(200090400);
}

function untilNextQuarterHour() {
        let now = new Date();
        return ((15 - now.getMinutes() % 15) * 60 - now.getSeconds()) * 1000 - now.getMilliseconds();
}

function undock(remainingTimeUntilArrival, transition) {
        event.setVariable("board", false);
        event.setVariable("0docked", false); //ariant and orbis station ships
        event.startTimer("dock", remainingTimeUntilArrival);

        if (transition) {
                orbisStation.showUndockShip();
                ariantStation.showUndockShip();

                //warp players from waiting room to ship
                toOrbisWait.transferPlayers(toOrbis.getId());
                toAriantWait.transferPlayers(toAriant.getId());

                //50% chance of invasion occurring
                if (Math.floor(Math.random() * 2) == 0) {
                        //spawn balrog a minute after departure
                        event.startTimer("balrog", remainingTimeUntilArrival - 9 * 60 * 1000);
                }
        }
}

function dock(remainingTimeUntilDoorsClosed, transition) {
        event.setVariable("board", true);
        event.setVariable("0docked", true); //ariant and orbis station ships
        event.startTimer("closedoors", remainingTimeUntilDoorsClosed);

        if (transition) {
                orbisStation.showDockShip();
                ariantStation.showDockShip();

                //warp players from ship to stations
                toOrbis.transferPlayers(orbisStation.getId());
                toAriant.transferPlayers(ariantStation.getId());
        }
}

function closeDoors(remainingTimeUntilDeparture, transition) {
        event.setVariable("board", false);
        event.setVariable("0docked", true); //ariant and orbis station ships
        event.startTimer("takeoff", remainingTimeUntilDeparture);

        if (transition) {
                //clear any remnants of Crimson Balrogs invasion
                toOrbis.clearMobs();
                toAriant.clearMobs();
        }
}

function timerExpired(key) {
        switch (key) {
                case "dock":
                        //doors close in 4 minutes
                        dock(4 * 60 * 1000, true);
                        break;
                case "closedoors":
                        //undock in a minute
                        closeDoors(60 * 1000, true);
                        break;
                case "takeoff":
                        //next boat will arrive in 10 minutes
                        undock(10 * 60 * 1000, true);
                        break;
        }
}