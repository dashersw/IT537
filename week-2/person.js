var value = 4;

class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }

    greet() {
        return `Hello! I am ${this.name}`;
    }
}

module.exports = {
    Person: Person,
    value: 5
};
