// for the given 9 length array, check that 
// each array element is numbers from 1 to 9
// and different from each other
function f21 (arr) {
	let checkOk = true;
	if(Array.isArray(arr) && arr.length == 9) {
		var arrCopy = [].concat(arr);
		arrCopy.sort();
		for (let i = 0; i < 9; i++) {
			// check that element is a number from 1 to 9
			let el = arrCopy[i];
			if (typeof el === 'number' && el > 0 && el < 10) {				
				// check that element is different from previous one
				if (i > 0 && el == arrCopy[i-1]) {
					checkOk = false;
					break;
				}

			// if not, return false and stop now
			} else {
				checkOk = false;
				break;
			}
		}
	}
	return checkOk;
}

//to test
var test = [1,3,5,2,6,8,7,9,4];
function montest() {
	console.log(test);
	console.log(f21(test));
}
