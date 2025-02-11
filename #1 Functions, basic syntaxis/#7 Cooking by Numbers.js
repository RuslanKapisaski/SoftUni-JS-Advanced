function cookByNumber(
	num,
	operation1,
	operation2,
	operation3,
	operation4,
	operation5
) {
	let number = Number(num);
	switch (operation1) {
		case "chop":
			number /= 2;
			console.log(number);
			break;
		case "dice":
			number = Math.sqrt(number);
			console.log(number);
			break;
		case "spice":
			number += 1;
			console.log(number);
			break;
		case "bake":
			number *= 3;
			console.log(number);
			break;
		case "fillet":
			number -= number * 0.2;
			console.log(number);
			break;

		default:
			console.log("Wrong Command");
			break;
	}
	switch (operation2) {
		case "chop":
			number /= 2;
			console.log(number);
			break;
		case "dice":
			number = Math.sqrt(number);
			console.log(number);
			break;
		case "spice":
			number += 1;
			console.log(number);
			break;
		case "bake":
			number *= 3;
			console.log(number);
			break;
		case "fillet":
			number -= number * 0.2;
			console.log(number);
			break;

		default:
			console.log("Wrong Command");
			break;
	}
	switch (operation3) {
		case "chop":
			number /= 2;
			console.log(number);
			break;
		case "dice":
			number = Math.sqrt(number);
			console.log(number);
			break;
		case "spice":
			number += 1;
			console.log(number);
			break;
		case "bake":
			number *= 3;
			console.log(number);
			break;
		case "fillet":
			number -= number * 0.2;
			console.log(number);
			break;

		default:
			console.log("Wrong Command");
			break;
	}
	switch (operation4) {
		case "chop":
			number /= 2;
			console.log(number);
			break;
		case "dice":
			number = Math.sqrt(number);
			console.log(number);
			break;
		case "spice":
			number += 1;
			console.log(number);
			break;
		case "bake":
			number *= 3;
			console.log(number);
			break;
		case "fillet":
			number -= number * 0.2;
			console.log(number);
			break;

		default:
			console.log("Wrong Command");
			break;
	}
	switch (operation5) {
		case "chop":
			number /= 2;
			console.log(number);
			break;
		case "dice":
			number = Math.sqrt(number);
			console.log(number);
			break;
		case "spice":
			number += 1;
			console.log(number);
			break;
		case "bake":
			number *= 3;
			console.log(number);
			break;
		case "fillet":
			number -= number * 0.2;
			console.log(number);
			break;

		default:
			console.log("Wrong Command");
			break;
	}
}

cookByNumber("32", "chop", "chop", "chop", "chop", "chop");
cookByNumber("9", "dice", "spice", "chop", "bake", "fillet");
