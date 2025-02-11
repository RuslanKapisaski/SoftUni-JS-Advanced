function catalog(items) {
	//1 - My solution
	let tokens = [];
	for (let i = 0; i < items.length; i++) {
		tokens[i] = items[i];
	}

	let objectArr = tokens.map((tokens) => {
		let [name, price] = tokens.split(" : ");
		return { name, price: Number(price) };
	});

	//sorting
	let sortedItems = objectArr.sort((a, b) => {
		return a.name.localeCompare(b.name);
	});

	//Output with for of!
	let firstCharacterOfCurrGroup = "";
	for (let element of sortedItems) {
		let key = element.name[0];
		let value = element.price;

		if (firstCharacterOfCurrGroup !== key[0]) {
			firstCharacterOfCurrGroup = key[0];
			console.log(firstCharacterOfCurrGroup);
		}
		console.log(`  ${element.name}: ${element.price}`);
	}
}
catalog([
	"Appricot : 20.4",
	"Fridge : 1500",
	"TV : 1499",
	"Deodorant : 10",
	"Boiler : 300",
	"Apple : 1.25",
	"Anti-Bug Spray : 15",
	"T-Shirt : 10",
]);

console.log("---------------------------------------------");
//Advanced solution
function sortCatalog(items) {
	//1.Create an object that stores the result
	const store = {};

	//2.Deconstructing the data
	for (let element in items) {
		//destructuring
		let [key, value] = element.split(" : ");
		//Making a key  value object
		store[key] = Number(value);
	}

	//Sorting an object - possible only when the array of object is created
	let sortedArr = Object.entries(store).sort((a, b) =>
		a[0].localeCompare(b[0])
	);

	//Printing the result
	let fChar = "";
	for (let element of sortedArr) {
		let [key, value] = element.split(" : ");

		if (firstCharacterOfCurrGroup !== key[0]) {
			firstCharacterOfCurrGroup = key[0];
			console.log(firstCharacterOfCurrGroup);
		}
		console.log(`  ${element.name}: ${element.price}`);
	}
}
sortCatalog(
	catalog([
		"Appricot : 20.4",
		"Fridge : 1500",
		"TV : 1499",
		"Deodorant : 10",
		"Boiler : 300",
		"Apple : 1.25",
		"Anti-Bug Spray : 15",
		"T-Shirt : 10",
	])
);
