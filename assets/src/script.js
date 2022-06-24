window.onload = () => {
	let play = true;
	const choices = "rps";
	let score = {
		wins: 0,
		ties: 0,
		loses: 0
	};

	while (play) {
		let ai = Math.floor(Math.random() * 3);

		let choice = prompt("[R]ock, [P]aper, or [S]cissors?", "r");

		play = confirm("You chose " + choice + "\nAI chose " + choices[ai] + result() + "      [Score:" + score.wins + "W/" + score.ties + "T/" + score.loses + "L]\nPlay again?");

		function result() {
			if ((choices.indexOf(choice.toLowerCase()) + 2) % 3 === ai) {
				score.wins++;
				return "\nYOU WIN!!";
			} else if (choices.indexOf(choice.toLowerCase()) === ai) {
				score.ties++;
				return "\nYou tied!";
			} else {
				score.loses++;
				return "\nYou lose!";
			}
		}
	}
};