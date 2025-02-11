function orderAscNames(arrOfNames) {
	let orderedNamesArr = arrOfNames.sort((a, b) => a.localeCompare(b));
	orderedNamesArr.forEach((element, index) => {
		console.log(`${index + 1}.${element}`);
	});
}

function orderDescNames(arrOfNames) {
	let orderedNamesArr = arrOfNames.sort((a, b) => b.localeCompare(a));
	orderedNamesArr.forEach((element, index) => {
		console.log(`${index + 1}.${element}`);
	});
}

orderAscNames(["John", "Bob", "Christina", "Ema"]);
console.log("----------------------------");
orderDescNames(["John", "Bob", "Christina", "Ema"]);
