function ticTacToe(playerMoves) {
	let initialGamePattern = [
		[false, false, false],
		[false, false, false],
		[false, false, false],
	];
	let sizeOfGameBoard = playerMoves.length;
	function identityPlayer(i) {
		if (i % 2 != 0) {
			return "X";
		} else {
			return "O";
		}
	}

	//Game logic
	let j = 1;
	let i = 0;
	while (sizeOfGameBoard > 0) {
		let move = playerMoves[[i]];
		let rowMove = move[0];
		let colMove = move[2];
		if (initialGamePattern[rowMove][colMove] != false) {
			console.log("This place is already taken. Please choose another!");
		}
		initialGamePattern[rowMove][colMove] = identityPlayer(j);
		i++;
		j++;
		sizeOfGameBoard--;
	}
}
ticTacToe([
	"0 1",
	"0 0",
	"0 2",
	"2 0",
	"1 0",
	"1 1",
	"1 2",
	"2 2",
	"2 1",
	"0 0",
]);
