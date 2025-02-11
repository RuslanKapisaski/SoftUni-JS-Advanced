function showLowestPrice(data) {
	let entries = new Array();
	for (let i = 0; i < data.length; i++) {
		entries[i] = data[i].split(",");
	}

	const arrayOfObjects = entries.map((entries, index) => {
		let [city, product, price] = entries.split("|");
		return { city, product, price: Number(price) };
	});
	//output format {productName} -> {productLowestPrice} ({townName})

	//sorting
	let sortedItemsByPrice = arrayOfObjects.sort((a, b) => {
		return a.price - b.price;
	});
}

showLowestPrice([
	"Sample Town | Sample Product | 1000",
	"Sample Town | Orange | 2",
	"Sample Town | Peach | 1",
	"Sofia | Orange | 3",
	"Sofia | Peach | 2",
	"New York | Sample Product | 1000.1",
	"New York | Burger | 10",
]);
