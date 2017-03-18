class PostsRepository {
    constructor($http) {
        this.$http = $http;
    }

    getPosts() {
        return this.$http.get('http://localhost:3000/posts');
    }

    savePost(newPost) {
        return this.$http.post('http://localhost:3000/posts', newPost);
    }
}

angular.module('chat-app')
    .service('PostsRepository', PostsRepository);
