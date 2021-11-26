var data = JSON.parse(ANCESTRY_FILE);

function average(array) {
	function plus(a, b){return a + b; }
	return array.reduce(plus) / array.length;
}

var byName = {};

data.forEach(function(person) {
	byName[person.name] = person;
});

var diff = data.filter(function(person) {
  return byName[person.mother] != null;
}).map(function(person) {
  return person.born - byName[person.mother].born;
});

alert(`${average(diff)}`);