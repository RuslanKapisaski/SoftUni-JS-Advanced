function carFactory(car) {
	//Factorym model
	let result = {
		model: car.model,
		engine: undefined,
		carriage: undefined,
		wheels: [],
	};

	//Small engine
	if (car.power <= 90) {
		result.engine = {
			power: 90,
			volume: 1800,
		};
	}
	//Normal engine
	else if (car.power > 90 && car.power <= 120) {
		result.engine = {
			power: 120,
			volume: 2400,
		};
	}
	//Monster Engine
	else if (car.power > 120 && car.power <= 200) {
		result.engine = {
			power: 200,
			volume: 3500,
		};
	}
	//carriage
	result.carriage = {
		type: car.carriage,
		color: car.color,
	};
	//wheels
	if (car.wheelsize % 2 == 0) {
		car.wheelsize--;
		result.wheels = Array(4).fill(car.wheelsize);
	} else {
		result.wheels = Array(4).fill(car.wheelsize);
	}

	return result;
}
console.log(
	carFactory({
		model: "VW Golf II",
		power: 90,
		color: "blue",
		carriage: "hatchback",
		wheelsize: 14,
	})
);
console.log(
	carFactory({
		model: "Opel Vectra",
		power: 110,
		color: "grey",
		carriage: "coupe",
		wheelsize: 14,
	})
);
