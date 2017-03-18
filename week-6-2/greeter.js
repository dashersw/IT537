class Greeter {
    constructor(name) {
        this.name = name;
    }

    greet() {
        return `Hello ${this.name}`;
    }
}

module.exports = Greeter;
