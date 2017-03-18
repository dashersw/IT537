var Greeter = require('./greeter');
var fs = require('fs');
var async = require('async');

var people = [
    { id: 0, name: 'John F Kennedy' },
    { id: 1, name: 'Barack Obama' }
];

people.push({ id: 2, name: 'Donald Trump' });

people.forEach(p => {
    var greeter = new Greeter(p.name);
    console.log(greeter.greet());
});
console.log('step 1. writing to file');
var peopleString = JSON.stringify(people);
fs.writeFileSync('people-sync.json', peopleString);

fs.writeFile('people-async.json', peopleString, (err) => {
    if (err) console.log(err);

    console.log('step 3. file actually written');
});

console.log('step 2. file written');

var file = fs.readFileSync('people-sync.json', 'utf8');
console.log('file read', file);

fs.readFile('people-async.json', 'utf8', (err, data) => {
    if (err) console.log(err);
    var newPeople = JSON.parse(data);
    console.log('people-async.json read', data);
});
