var User = require('../user/user');

module.exports = class Thread {
    constructor(thread) {
        this.id = thread.id;
        this.user = new User(thread.user);
        this.messages = thread.messages;
        this.active = false;
        this.unread = false;
    }
}
