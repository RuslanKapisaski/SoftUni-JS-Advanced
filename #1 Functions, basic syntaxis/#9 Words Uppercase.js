function toUpperCase(string) {
	const pattern = /([\W])/g;
	let upperCaseWordExpression = string.toUpperCase();
	let result = "";
	const match = upperCaseWordExpression.match(pattern);
	let j = 0;
	for (let i = 0; i < upperCaseWordExpression.length; i++) {
		if (upperCaseWordExpression[i] == match[j]) {
			result += ", ";
			j++;
		} else {
			result += upperCaseWordExpression[i];
		}
	}
	console.log(result);
}
toUpperCase("Functions in js are nested, i.e. hold other functions?");
console.log("-----------");
toUpperCase("Hi, how are you?");
