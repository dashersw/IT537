module.exports = class PostsController {
    constructor(PostsService) {
        this.PostsService = PostsService;

        this.posts = this.PostsService.posts;

        this.PostsService.getPosts();

        this.PostsService.bind('posts', () => {
            this.posts = PostsService.posts;
        });
    }

    createNewPost() {
        this.PostsService.savePost(this.newPost).then(() => {
            this.newPost = {};

            this.PostsService.getPosts();
        });
    }
}
