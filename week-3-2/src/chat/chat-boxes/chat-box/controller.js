module.exports = class ChatBoxController {
    constructor(ChatService, $scope) {
        this.chatService = ChatService;

        this.clickContainerCb = () => {
            if (this.threadData.minimized) this.toggle();

            this.chatService.setActiveChatBox(this.threadData);
        }
    }

    close() {
        this.chatService.removeChatBox(this.threadData);
    }

    toggle() {
        this.threadData.minimized = !this.threadData.minimized;
    }
}
