// Hello world printer

/*
 Multi line comment
*/
console.log('Hello world!');

var foo = 3;
var bar = false;
var baz = 'some name';

console.log(typeof foo);

foo = '4';

console.log(typeof foo);

var arr = [1, 2, 'foo', {bar: 'baz'}, [3, 4]];

console.log(arr[3]);

arr[4].push({hello: 'world'});

console.log(arr);

function pushName(arr, name) {
    arr.push(name);
}

pushName(arr[4], 'IT537');

console.log(arr);

var PersonModule = require('./person');
var Person = PersonModule.Person;

var berk = new Person(1, 'Berk Kefeli');

var msg = berk.greet();

console.log(msg);
console.log(PersonModule.value);

