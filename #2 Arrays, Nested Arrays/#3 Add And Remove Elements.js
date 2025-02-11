function addAndRemoveElements(commandArr) {
	let resultArr = [];
	let size = commandArr.length;
	let initialValue = 1;
	for (let i = 0; i < size; i++) {
		switch (commandArr[i]) {
			case "add":
				console.log(resultArr.push(initialValue));
				initialValue++;
				break;
			case "remove":
				if (resultArr != "") {
					console.log(resultArr.pop());
				} else {
					console.log("Empty");
					break;
				}
		}
	}
}
addAndRemoveElements(["add", "add", "add", "add"]);
//addAndRemoveElements(["remove", "remove", "remove"]);
