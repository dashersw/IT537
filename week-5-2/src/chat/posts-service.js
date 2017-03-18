var EventEmitter = require('../lib/event-emitter');

class PostsService extends EventEmitter {
    constructor(PostsRepository) {
        super();

        this.PostsRepository = PostsRepository;
    }

    getPosts() {
        this.PostsRepository.getPosts().then(res => {
            this.posts = res.data;
            this.trigger('posts');
        });
    }

    savePost(post) {
        return this.PostsRepository.savePost(post);
    }
}

angular.module('chat-app').service('PostsService', PostsService);
