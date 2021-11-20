function range (start, end) {
	
	mass = [];
	let stop = Number(end) + 1;
	
	if (start < end) {
		for (i = (start); i < stop; i++) {
			mass.push(i);
		}
		alert(`${mass}`);
	}
	else {
		for (i = (stop-1); i < Number(start)+1; i++) {
			mass.push(i);
		}
		alert(`${mass}`);
	}	
}


function sum (mass) {
	let summ = 0;
	for (i in mass) {
		summ += Number(mass[i]);	
	}
	alert(`${summ}`);
}


let x = prompt('Введите первое число');
let y = prompt('Введите второе число');
let newmass = prompt('Введите массив');

function dop(start, stop, step = 1) {
  let mass = [];
  if (Number(step) < 0) {
    for (i = start; i >= stop; i += step) {
      mass.push(i);
    }
  } else if (Number(step) > 0) {
    for (i = start; i <= stop; i += step) {
      mass.push(i);
    }
  }
  return mass;
}

console.log(dop(4, 16, 3));
console.log(dop(8, 3, -2));

range(x, y);
sum(newmass);

	


