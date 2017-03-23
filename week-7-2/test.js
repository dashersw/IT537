import test from 'ava';
import Greeter from './greeter';
import fs from 'fs';

test('import module', t => t.pass());

test.beforeEach(t => {
    t.context.greeter = new Greeter();
});

test('instantiate Greeter', t => {
    t.true(t.context.greeter instanceof Greeter);
});

test('greet Michael', t => {
    t.is(t.context.greeter.greet('Michael'), 'Hello Michael!');
});

test('add people to greeter', t => {
    t.deepEqual(t.context.greeter.people, []);

    t.context.greeter.addPerson('Michael');

    t.deepEqual(t.context.greeter.people, ['Michael']);
});

test('remove people from greeter', t => {
    t.context.greeter.addPerson('Michael');
    t.deepEqual(t.context.greeter.people, ['Michael']);

    t.context.greeter.removePerson('Michael');
    t.deepEqual(t.context.greeter.people, []);
});
