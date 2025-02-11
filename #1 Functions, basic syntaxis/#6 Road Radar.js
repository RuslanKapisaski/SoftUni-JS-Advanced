function roadRadar(speed, area) {
	let speedLimit = 0;
	let overSpeed = 0;
	//20 40 ---
	let statusList = ["speeding", "excessive speeding", "reckless driving"];
	let status;
	switch (area) {
		case "motorway":
			speedLimit = 130;
			if (speed <= speedLimit) {
				console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
			} else {
				overSpeed = speed - speedLimit;
				if (overSpeed <= 20) {
					status = 0;
				} else if (overSpeed > 20 && overSpeed <= 40) {
					status = 1;
				} else {
					status = 2;
				}
				console.log(
					`The speed is ${
						speed - speedLimit
					} km/h faster than the allowed speed of ${speedLimit} - ${
						statusList[status]
					}`
				);
			}
			break;

		case "interstate":
			speedLimit = 90;
			if (speed <= speedLimit) {
				console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
			} else {
				overSpeed = speed - speedLimit;
				if (overSpeed <= 20) {
					status = 0;
				} else if (overSpeed > 20 && overSpeed <= 40) {
					status = 1;
				} else {
					status = 2;
				}
				console.log(
					`The speed is ${
						speed - speedLimit
					} km/h faster than the allowed speed of ${speedLimit} - ${
						statusList[status]
					}`
				);
			}
			break;
		case "city":
			speedLimit = 50;
			if (speed <= speedLimit) {
				console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
			} else {
				overSpeed = speed - speedLimit;
				if (overSpeed <= 20) {
					status = 0;
				} else if (overSpeed > 20 && overSpeed <= 40) {
					status = 1;
				} else {
					status = 2;
				}
				console.log(
					`The speed is ${
						speed - speedLimit
					} km/h faster than the allowed speed of ${speedLimit} - ${
						statusList[status]
					}`
				);
			}
			break;

		case "residential":
			speedLimit = 20;
			if (speed <= speedLimit) {
				console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
			} else {
				overSpeed = speed - speedLimit;
				if (overSpeed <= 20) {
					status = 0;
				} else if (overSpeed > 20 && overSpeed <= 40) {
					status = 1;
				} else {
					status = 2;
				}
				console.log(
					`The speed is ${
						speed - speedLimit
					} km/h faster than the allowed speed of ${speedLimit} - ${
						statusList[status]
					}`
				);
			}
			break;

		default:
			"Drive safe!";
			break;
	}
}

roadRadar(21, "residential");

////Fancy way
function printStatus(limit, speed) {
	let overSpeed = speed - limit;
	let statusList = ["speeding", "excessive speeding", "reckless driving"];
	let status = "";
	if (overSpeed <= 20) {
		status = statusList[0];
	} else if (overSpeed > 20 && overSpeed <= 40) {
		status = statusList[1];
	} else {
		status = statusList[2];
	}

	console.log(
		`The speed is ${overSpeed} km/h faster than the allowed speed of ${limit} - ${status}`
	);
}

function roadRadar(speed, area) {
	switch (area) {
		case "motorway":
			speedLimit = 130;
			if (speed <= speedLimit) {
				console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
			} else {
				printStatus(speedLimit, speed);
			}
			break;

		case "interstate":
			speedLimit = 90;
			if (speed <= speedLimit) {
				console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
			} else {
				printStatus(speedLimit, speed);
			}
			break;
		case "city":
			speedLimit = 50;
			if (speed <= speedLimit) {
				console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
			} else {
				printStatus(speedLimit, speed);
			}
			break;

		case "residential":
			speedLimit = 20;
			if (speed <= speedLimit) {
				console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
			} else {
				printStatus(speedLimit, speed);
			}
			break;
		default:
			"Drive safe!";
			break;
	}
}

roadRadar(40, "city");
roadRadar(21, "residential");
roadRadar(120, "interstate");
roadRadar(200, "motorway");
