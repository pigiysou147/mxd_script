

/**
 * Riza the Assistant: Doctor Assistant (NPC 2012009)
 * Orbis Park: Orbis Plastic Surgery (Map 200000201)
 *
 * Orbis face changer - random face, eye style only.
 *
 * @author NautMS (content from KiniroMS r227)
 */

function getRandomStyle(gender, currentFace) {
	let color = currentFace % 1000 - (currentFace % 100);
	let styles;
	if (gender == 0)
		styles = [20000, 20001, 20002, 20003, 20004, 20005, 20006, 20007, 20008, 20012, 20014];
	else if (gender == 1)
		styles = [21000, 21001, 21002, 21003, 21004, 21005, 21006, 21007, 21008, 21012, 21014];
	let style = styles[Math.floor(Math.random() * styles.length)];
	if (npc.isFaceValid(style + color)) //prefer current eye color
		style += color;
	return style;
}

let selection = npc.askYesNo("If you use the regular coupon, your face may transform into a random new look...do you still want to do it using #b#t5152004##k?");
if (selection == 1) {
	if (player.hasItem(5152004, 1)) {
		player.loseItem(5152004, 1);
		player.setFace(getRandomStyle(player.getGender(), player.getFace()));
		npc.sayNext("Enjoy!");
	} else {
		npc.sayNext("Hmm ... it looks like you don't have the coupon specifically for this place. Sorry to say this, but without the coupon, there's no plastic surgery for you.");
	}
} else if (selection == 0) {
	npc.sayNext("I see ... take your time, see if you really want it. Let me know when you make up your mind.");
}