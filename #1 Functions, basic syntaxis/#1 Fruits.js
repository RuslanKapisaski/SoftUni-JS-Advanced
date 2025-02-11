function printFruits(fruit, qqty, price) {
	let total = (qqty / 1000) * price;
	let presQqty = qqty.toFixed(3);
	console.log(
		`I need $${total.toPrecision(3)} to buy ${(presQqty / 1000).toPrecision(
			3
		)} kilograms ${fruit}.`
	);
}

printFruits("apple", 1563, 2.35);
