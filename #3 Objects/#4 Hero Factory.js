function heroFactory(data) {
	let result = [];
	let heroList = [];
	// 1- name, 2- level, 3..n-items[]

	for (let i = 0; i < data.length; i++) {
		const splittedSentence = data[i].split("/");
		const name = splittedSentence[0];
		const level = Number(splittedSentence[1]);
		//items

		let heroItems = splittedSentence[2].split(",");

		let hero = { name, level, heroItems };
		JSON.stringify(heroList.push(hero));
		//Adding heroes
	}
	console.log(heroList);
}

heroFactory([
	"Isacc / 25 / Apple, GravityGun",
	"Derek / 12 / BarrelVest, DestructionSword",
	"Hes / 1 / Desolator, Sentinel, Antara",
]);

// heroFactory(["Jake / 1000 / Gauss, HolidayGrenade"]);
