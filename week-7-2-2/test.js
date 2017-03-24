import test from 'ava';
import ContactList from './contact-list';

test('import module', t => t.pass());

test.beforeEach(t => {
    t.context.contactList = new ContactList();
    t.context.contact = { id: 0, name: 'Michael Jordan' };
});

test('instantiate ContactList', t => {
    var contactList = t.context.contactList;

    t.true(contactList instanceof ContactList);
});

test('add contact', t => {
    t.context.contactList.addContact(t.context.contact);
    t.is(t.context.contactList.contacts.length, 1);
    t.deepEqual(t.context.contactList.contacts, [t.context.contact]);
});

test('get contact', t => {

    t.context.contactList.addContact(t.context.contact);

    t.deepEqual(t.context.contactList.contacts[0], t.context.contact);
});

test('throw empty list error when removing contact from an empty list', t => {
    t.throws(() => {
        t.context.contactList.removeContact(0);
    });
});

test('remove contact', t => {
    t.context.contactList.addContact(t.context.contact);
    t.is(t.context.contactList.contacts.length, 1);

    t.context.contactList.removeContact(0);
    t.is(t.context.contactList.contacts.length, 0);
});

test('search for a contact with full match', t => {
    t.context.contactList.addContact(t.context.contact);

    t.deepEqual(t.context.contactList.search('Michael Jordan'), t.context.contact);
});

test('search for a contact with partial match', t => {
    t.context.contactList.addContact(t.context.contact);

    t.deepEqual(t.context.contactList.search('Michael'), t.context.contact);
});

test('case insensitive search', t => {
    t.context.contactList.addContact(t.context.contact);

    t.deepEqual(t.context.contactList.search('michael'), t.context.contact);

});
