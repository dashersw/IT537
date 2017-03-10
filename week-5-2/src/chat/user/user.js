module.exports = class User {
    constructor(user) {
        this.gender = user.gender;
        this.name = user.name;
        this.picture = user.picture;
    }

    getFullName() {
        return capitalize(this.name.first) + ' ' + capitalize(this.name.last);
    }
}

function capitalize(str) {
    return str[0].toUpperCase() + str.slice(1);
}
