function sortingNumbers(numArr) {
	let sortedArr = numArr.sort((a, b) => a - b).slice();
	let isShift = true;
	let size = sortedArr.length;
	let resultArr = [];
	while (size > 0) {
		if (isShift == true) {
			//first element(the lowest one)
			resultArr.push(sortedArr.shift());
			isShift = !isShift;
		} else {
			//last element(the largest one)
			resultArr.push(sortedArr.pop());
			isShift = !isShift;
		}
		size--;
	}
	return resultArr;
}

console.log(sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));

console.log(sortingNumbers([22, 9, 63, 3, 2, 19, 54, 11, 21, 18]));
