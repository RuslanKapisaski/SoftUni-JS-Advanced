function findForSameNumbers(number) {
	let digitSum = 0;
	let digit = 0;
	let areTheSame = true;
	let standart = number % 10;

	while (number !== 0) {
		digit = number % 10;
		digitSum += digit;
		if (standart !== digit) {
			areTheSame = false;
		}

		number = Math.floor(number / 10);
	}

	if (areTheSame == true) {
		console.log("true");
	} else if (areTheSame == false) {
		console.log("false");
	}
	console.log(digitSum);
}
findForSameNumbers(22222);
