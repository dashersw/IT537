var EventEmitter = require('../lib/event-emitter');

class PostsService extends EventEmitter {
    constructor() {
        super();
        window.ps = this;

        this.posts = [
            { id: 1, title: 'Post 1', body: 'Body 1', tags: ['tag1', 'tag2'] },
            { id: 2, title: 'Post 2', body: 'Body 2', tags: ['tag3', 'tag4'] },
            { id: 3, title: 'Post 3', body: 'Body 3', tags: ['tag5', 'tag6'] }
        ];
    }

}

angular.module('chat-app').service('PostsService', PostsService);
