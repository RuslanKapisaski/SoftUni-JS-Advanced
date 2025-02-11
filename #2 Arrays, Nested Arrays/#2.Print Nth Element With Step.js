function printArrWithStep(arr, step) {
	let arrWithStep = [];
	let j = 0;
	for (let i = 0; i < arr.length; i += step) {
		arrWithStep[j] = arr[i];
		j++;
	}
	return arrWithStep;
}
console.log(printArrWithStep(["5", "20", "31", "4", "20"], 2));
