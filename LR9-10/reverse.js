function reverseArray (mass) {
	let newmass = [];
    for(i = mass.length-1; i >= 0; i--) {
        newmass.push(mass[i]);
    }
    return newmass;
}
console.log(reverseArray([1, 2, 3, 4]));

function reverseArrayInPlace(mass) {
    for(let i = 0, j = mass.length-1; i < j; i++, j--) {
		[mass[i], mass[j]] = [mass[j], mass[i]];
	}   
    return mass;
}

console.log(reverseArrayInPlace([1, 2, 3, 4]));