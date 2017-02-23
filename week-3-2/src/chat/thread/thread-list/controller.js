module.exports = class ThreadListController {
    constructor(ChatService) {
        this.chatService = ChatService;

        ChatService.threads.then(threads => {
            this.threads = threads;
        });
    }

    isThreadActive(thread) {
        return this.chatService.activeThread.id == thread.id;
    }
}
