function toJSON(data) {
	let result = [];

	for (let i = 1; i < data.length; i++) {
		//tokens[1] = city, tokens[2]= lat, tokens[3] = long
		let tokens = data[i].split("|");
		let lat = Number(Number(tokens[2]).toFixed(2));
		let lon = Number(Number(tokens[3]).toFixed(2));
		console.log(typeof lat);
		console.log(typeof lon);

		const obj = {
			Town: tokens[1],
			Latitude: lat,
			Longitude: lon,
		};
		let myJSON = JSON.stringify(obj);
		result.push(myJSON);
	}
	console.log(result);
}
toJSON([
	"| Town | Latitude | Longitude |",
	"| Veliko Turnovo | 43.0757 | 25.6172 |",
	"| Monatevideo | 34.50 | 56.11 |",
]);
