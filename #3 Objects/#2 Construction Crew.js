function workerValidator(worker) {
	//0.1 ml of water per kg
	if (worker.dizziness == 1) {
		//formula = weight*experiece*0.1
		worker.levelOfHydrated += worker.weight * 0.1 * worker.experience;
		worker.dizziness = false;
	}
	return worker;
}
console.log(
	workerValidator({
		weight: 80,
		experience: 1,
		levelOfHydrated: 0,
		dizziness: true,
	})
);

console.log(
	workerValidator({
		weight: 120,
		experience: 20,
		levelOfHydrated: 200,
		dizziness: true,
	})
);
