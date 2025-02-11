function rotateArray(arr, rotations) {
	while (rotations != 0) {
		let lastElement = arr.pop();
		arr.unshift(lastElement);
		rotations--;
	}
	return arr.join(" ");
}
console.log(rotateArray(["1", "2", "3", "4"], 6));
