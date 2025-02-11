function calculateTimeoUniversity(steps, footprint, speed) {
	let breakMin = 1;
	let distanceM = 0;
	let time = 0;
	let speedMinInSec = speed / 3.6;
	// S = v.t => t = S/V
	distanceM = steps * footprint;
	time += distanceM / speedMinInSec;
	//for additional breaks
	let numberOfRests = Math.floor(distanceM / 500);
	time += numberOfRests * 60;
	let timeInSec = 0;
	timeInSec = Math.round(time % 60);
	let timeInMin;
	timeInMin = Math.floor(time / 60);
	let timeInH = 0;
	timeInH = Math.floor(time / 60 / 60);

	//printing 2 symbols
	let secFormat = timeInSec < 10 ? `0${timeInSec}` : `${timeInSec}`;
	let minFormat = timeInMin < 10 ? `0${timeInMin}` : `${timeInMin}`;
	let hourFormat = timeInH < 10 ? `0${timeInH}` : `${timeInH}`;

	console.log(`${hourFormat}:${minFormat}:${secFormat}`);
}
calculateTimeoUniversity(4000, 0.6, 5);
//output = 00:32:48
