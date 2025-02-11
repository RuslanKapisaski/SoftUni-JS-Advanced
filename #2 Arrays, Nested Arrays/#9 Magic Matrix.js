//66% succes :(
function magicMatrixChecker(matrix) {
	let isMagic = false;
	let rowElementsSum = 0;
	let columnElementsSum = 0;
	let sumColumnsArr = [];
	let sumRowsArr = [];
	for (let row = 0; row < matrix.length; row++) {
		rowElementsSum = 0;
		columnElementsSum = 0;
		for (let column = 0; column < matrix.length; column++) {
			//for rows
			const rowElement = matrix[row][column];
			rowElementsSum += rowElement;
			//for columns
			const columnElement = matrix[column][row];
			columnElementsSum += columnElement;
		}
		sumRowsArr[row] = rowElementsSum;
		sumColumnsArr[row] = columnElementsSum;
	}
	//Cheking for equal row-column
	for (let i = 0; i < matrix.length; i++) {
		if (sumRowsArr[i] == sumColumnsArr[i]) {
			isMagic = true;
		} else {
			isMagic = false;
			break;
		}
	}
	return isMagic;
}

console.log(
	magicMatrixChecker([
		[4, 5, 6],
		[6, 5, 4],
		[5, 5, 5],
	])
);

console.log(
	magicMatrixChecker([
		[11, 32, 45],
		[21, 0, 1],
		[21, 1, 1],
	])
);
console.log(
	magicMatrixChecker([
		[1, 0, 0],
		[0, 0, 1],
		[0, 1, 0],
	])
);
