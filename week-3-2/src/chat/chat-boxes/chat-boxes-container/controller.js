module.exports = class ChatBoxesContainerController {
    constructor(ChatService) {
        this.chatService = ChatService;

        this.activeChatBoxes = [];

        ChatService.bind(ChatService.EventType.ADD_CHAT_BOX, thread => {
            if (this.activeChatBoxes.find(c => c == thread)) return;

            this.activeChatBoxes.push(thread);
        });

        ChatService.bind(ChatService.EventType.REMOVE_CHAT_BOX, thread => {
            this.activeChatBoxes = this.activeChatBoxes.filter(item => item.id !== thread.id);
        });
    }

    getActiveChatBox() {
        return this.chatService.activeChatBox;
    }
}
