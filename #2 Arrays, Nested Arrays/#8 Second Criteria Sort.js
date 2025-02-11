function sortByTwoCriterias(arr) {
	arr
		.sort((a, b) => a.length - b.length || a.localeCompare(b))
		.forEach((element) => {
			console.log(element);
		});
}
sortByTwoCriterias(["alpha", "beta", "gamma"]);
console.log("---------");

sortByTwoCriterias(["Isacc", "Theodor", "Jack", "Harrison", "George"]);
console.log("---------");

sortByTwoCriterias(["test", "Deny", "omen", "Default"]);
