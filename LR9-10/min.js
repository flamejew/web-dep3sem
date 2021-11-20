function findMinimum (a, b) {
	if (a < b) {
		console.log(`${a}`);
		alert(`${a}`);
	}
	else {
		console.log(`${b}`);
		alert(`${b}`);
	}
}

let x = prompt('Введите первое число');
let y = prompt('Введите второе число');

findMinimum(x, y);



