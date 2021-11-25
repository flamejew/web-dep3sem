var arr = [1, 2, [3, 4], [5, 8, 9], [2, 5]];
arr.reduce((acc, val) => acc.concat(val), []);
alert(`[${arr}]`);