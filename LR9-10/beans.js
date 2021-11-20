/*function countBs (str, c = 0) {
	for (i = 0; i < str.length; i++ ) {
		if (str[i] == 'B') {
			c += 1;
		}
	}
	console.log(`${c}`);
	alert(`${c}`);
}
*/

function countChar (str, symb, c = 0) {
	for (i = 0; i < str.length; i++ ) {
		if (str[i] == symb) {
			c = i;
		}
	}
	console.log(`[${c}]`);
	alert(`[${c}]`);
}


let usrStr = prompt('Введите строку')
let usrSym = prompt('Введите символ, который вы хотите найти')

//countBs(usrStr);

countChar(usrStr, usrSym);