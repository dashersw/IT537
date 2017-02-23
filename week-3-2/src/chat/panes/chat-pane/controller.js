module.exports = class ChatPaneController {
    constructor(ChatService) {
        this.chatService = ChatService;

        ChatService.owner.then(owner => this.owner = owner);

        this.registerReset = cb => {
            this.chatService.bind(this.chatService.EventType.UPDATE, update => {
                if (!update.length) return;

                if (update.some(u => u.thread.id == this.thread.id))
                    cb();
            });

            this.chatService.bind(this.chatService.EventType.SET_ACTIVE_THREAD, cb);

            cb();
        }
    }

}
