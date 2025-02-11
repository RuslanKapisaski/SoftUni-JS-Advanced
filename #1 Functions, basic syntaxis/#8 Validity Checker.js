function checkValidity(x1, y1, x2, y2) {
	//формула: sqrt(x2-x1)^2 + (y2-y1)^2 = точен корен
	function validator(x1, y1, x2, y2) {
		return Number.isInteger(Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2));
	}
	//Създаване на bool-еви променливи, за да премахнем предусловния оператор
	let isValidX1Y1ToZero = validator(x1, y1, 0, 0) ? "valid" : "invalid";
	let isValidX2Y2ToZero = validator(0, 0, x2, y2) ? "valid" : "invalid";
	let isValidX2Y2ToX1Y1 = validator(x1, x2, x2, y2) ? "valid" : "invalid";

	console.log(`{${x1}, ${y1}} to {0, 0} is ${isValidX1Y1ToZero}`);
	console.log(`{${x2}, ${y2}} to {0, 0} is ${isValidX2Y2ToZero}`);
	console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is ${isValidX2Y2ToX1Y1}`);
}
checkValidity(3, 0, 0, 4);
console.log("--------------");
checkValidity(1, 1, 1, 1);
