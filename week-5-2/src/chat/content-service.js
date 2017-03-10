var EventEmitter = require('../lib/event-emitter');

class ContentService extends EventEmitter {
    constructor() {
        super();
        window.cs = this;
        this.content = 'Posts';
    }

    setActiveContent(newContent) {
        this.content = newContent;

        console.log('new content', newContent);

        this.trigger('content change');
    }
}

angular.module('chat-app').service('ContentService', ContentService);
