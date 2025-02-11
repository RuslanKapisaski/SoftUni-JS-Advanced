function composeObject(data) {
	const result = {};
	for (let i = 0; i < data.length; i++) {
		let key = data[i];
		let value = Number(data[i + 1]);
		i++;
		result[key] = value;
	}

	console.log(result);
}

composeObject(["Yoghurt", "48", "Rise", "138", "Apple", "52"]);
