var EventEmitter = require('../lib/event-emitter');

class PostsService extends EventEmitter {
    constructor(PostsRepository) {
        super();

        this.PostsRepository = PostsRepository;

        this.posts = [];
    }

    getPosts() {
        this.PostsRepository.getPosts().then(response => {
            this.posts = response.data;

            this.trigger('posts');
        });
    }

    savePost(newPost) {
        return this.PostsRepository.savePost(newPost);
    }
}

angular.module('chat-app').service('PostsService', PostsService);
