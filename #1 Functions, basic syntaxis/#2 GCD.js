function findGCD(a, b) {
	let GCD = a % b;

	while (GCD !== 0) {
		a = b;
		b = GCD;
		GCD = a % b;
	}

	console.log(b);
}

findGCD(2154, 458);
