module.exports = class PostsController {
    constructor(PostsService) {
        this.posts = PostsService.posts;
    }
}
