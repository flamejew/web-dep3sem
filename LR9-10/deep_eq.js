var deep_eq = function (fir, sec) {
    if ( isObject(fir) && isObject(sec) ) {
        for ( var prop in fir ) {
            return deep_eq(fir[prop], sec[prop]);
        }
    } else {
        if ( fir === sec ) {
            return true;
        } else {
            return false;
        }
    }
};

var isObject = function (obj) {
    if ( typeof obj === 'object' && obj !== null ) {
        return true;
    } else {
        return false;
    }
};

var obj = {here: {is: "an"}, object: 2};

console.log(deep_eq(obj, obj));
console.log(deep_eq(obj, {here: 1, object: 2}));
console.log(deep_eq(obj, {here: {is: "an"}, object: 2}));

