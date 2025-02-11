function showPreviousDate(yearInput, monthInput, dayOfMonthInput) {
	let curDate = new Date(yearInput, monthInput - 1, dayOfMonthInput);
	curDate.setDate(curDate.getDate() - 1);
	console.log(
		`${curDate.getFullYear()}-${curDate.getMonth() + 1}-${curDate.getDate()}`
	);
}

showPreviousDate(2015, 1, 1);
