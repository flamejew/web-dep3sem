var arrayToList = function (arr) {
    var result = null;
    for (var i = arr.length-1; i >= 0; i--) {
        result = { 
            value: arr[i],
            rest:  result
        }
    }
    return result;
}

var listToArray = function (list) {
    var result = [];
    do { 
        result.push(list.value);
        list = list.rest;
    } while ( list !== null )
    return result;
};

var prepend = function (el, list) {
    return { 
        value: el,
        rest:  list
    }
}

var nth = function (list, ind) {
    if ( !list ) {
        return undefined;
    } else if ( ind === 0 ) {
            return list.value
    } else {
        return nth(list.rest, ind-1)
    }
}

console.log(arrayToList([1, 13]));
console.log(listToArray(arrayToList([2, 4, 8, 10])));
console.log(prepend(3, prepend(9, null)));
console.log(nth(arrayToList([2, 4, 8, 10]), 0));