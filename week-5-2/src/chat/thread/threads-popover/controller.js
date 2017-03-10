module.exports = class ThreadsPopoverController {
    constructor(ChatService) {
        this.chatService = ChatService;
    }

    setActiveThread(thread) {
        this.chatService.addChatBox(thread);
    }
}
