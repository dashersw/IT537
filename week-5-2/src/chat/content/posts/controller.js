module.exports = class PostsController {
    constructor(PostsService) {
        this.PostsService = PostsService;
        this.posts = PostsService.posts;

        this.PostsService.getPosts();

        PostsService.bind('posts', () => {
            this.posts = PostsService.posts;
        });
    }

    saveNewPost() {
        this.PostsService.savePost(this.newPost).then(() => {
            this.newPost = {};
            this.PostsService.getPosts();
        });
    }
}
