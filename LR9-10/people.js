var data = JSON.parse(ANCESTRY_FILE);

function average(array) {
    function plus(a, b) { return a + b; }
    return array.reduce(plus) / array.length;
}


function groupBy(arr, func){ 
    var groupObj = {};
    arr.forEach(function(p){
        var id = func(p);
        if ( groupObj[id] === undefined ) {
            groupObj[id] = [];
        }
        groupObj[id].push( p )
    });
    return groupObj;
}

function getCentury(p) {
    return Math.ceil(p.died / 100);
}

var cent = groupBy( data, getCentury );
var century = 0;

for (century in cent)  {
    cent[century] = average( cent[century].map(function(p){ return p.died - p.born }) );
    console.log( century + ": " + cent[century] );
}