module.exports = class MotherPaneController {
    constructor(ChatService) {
        this.chatService = ChatService;
    }

    setActiveThread(thread) {
        this.chatService.setActiveThread(thread);
    }

    getActiveThread() {
        return this.chatService.activeThread;
    }
}
