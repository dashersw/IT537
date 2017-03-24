module.exports = class ContactList {
    constructor() {
        this.contacts = [];
    }

    addContact(contact) {
        this.contacts.push(contact);
    }

    removeContact(index) {
        if (!this.contacts.length)
            throw Error(`You can't remove a contact because the list is empty.`);

        this.contacts.splice(index, 1);
    }

    search(query) {
        return this.contacts.find(c => c.name.match(new RegExp(query, 'gi')));
    }
}
