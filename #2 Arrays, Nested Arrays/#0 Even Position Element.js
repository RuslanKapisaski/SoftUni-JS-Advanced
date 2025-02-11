function evenPosition(arr) {
	let evenPostionString = "";
	for (let i = 0; i < arr.length; i++) {
		if (i % 2 === 0) {
			evenPostionString += `${arr[i]} `;
		}
	}
	console.log(evenPostionString);
}

evenPosition(["20", "30", "40", "50", "60"]);
