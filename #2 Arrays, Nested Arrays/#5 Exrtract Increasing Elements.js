function extractIncrElements(arr) {
	let incrArr = [];
	let firstElement = arr[0];
	incrArr.push(firstElement);
	for (let i = 0; i < arr.length - 1; i++) {
		if (arr[i + 1] > arr[i] && arr[i + 1] > firstElement) {
			incrArr.push(arr[i + 1]);
		}
	}
	return incrArr;
}

console.log(extractIncrElements([1, 3, 8, 4, 10, 12, 3, 2, 24]));
console.log(extractIncrElements([1, 2, 3, 4]));
console.log(extractIncrElements([20, 3, 2, 15, 6, 1]));
