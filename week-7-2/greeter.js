module.exports = class Greeter {
    constructor() {
        this.people = [];
    }
    greet(name) {
        return `Hello ${name}!`;
    }

    addPerson(name) {
        this.people.push(name);
    }

    removePerson(name) {
        this.people.splice(this.people.indexOf(name), 1);
    }
}
