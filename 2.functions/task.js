// Page 1
function getArrayParams(...arr) {
	if (arr.length === 0) {
		return 0;
	}
	let min = Infinity;
	let max = -Infinity;
	let sum = 0;
	for (let i = 0; i < arr.length; i++) {
		const num = arr[i];
		if (num < min) {
			min = num;
		}
		if (num > max) {
			max = num;
		}
		sum += num;
	}
	const avg = Number((sum / arr.length).toFixed(2));
  return { min: min, max: max, avg: avg };
}

//Page 2
function summElementsWorker(...arr) {
	sum = 0;
	for (let i = 0; i < arr.length; i++) {
		num = arr[i];
		sum += num;
	}
	return sum;
}

function differenceMaxMinWorker(...arr) {
	if (arr.length === 0) {
		return 0;
	}
	let min = Math.min(...arr);
	let max = Math.max(...arr);
	let diff = max - min;
	return diff;
}

function differenceEvenOddWorker(...arr) {
	if (arr.length === 0) {
		return 0;
	}
	let sumEvenElement = 0;
	let sumOddElement = 0;
	for (let i = 0; i < arr.length; i++) {
		let num = arr[i];
		if (num % 2 === 0) {
			sumEvenElement += num;
		} else {
			sumOddElement += num;
		}
	}
	return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {
	if (arr.length === 0) {
		return 0;
	}
	let sumEvenElement = 0;
	let countEvenElement = 0;
	for (let i = 0; i < arr.length; i++) {
		let num = arr[i];
		if (num % 2 === 0) {
			sumEvenElement += num;
			countEvenElement += 1;
		}
	}
	return sumEvenElement / countEvenElement;
}

//Page 3
function makeWork(arrOfArr, func) {
	let maxWorkerResult = -Infinity;
	for (let i = 0; i < arrOfArr.length; i++) {
		const num = arrOfArr[i];
		let workerResult = func(...num);
		if (workerResult > maxWorkerResult) {
			maxWorkerResult = workerResult;
		}
	}
	return maxWorkerResult;
}