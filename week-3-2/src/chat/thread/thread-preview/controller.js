module.exports = class ThreadPreviewController {
    constructor(ChatService, $scope) {
        $scope.$watch(this.threadData, _ => {
            this.threadData.lastMessage = this.threadData.messages.slice(-1)[0];
        });

        ChatService.bind(ChatService.EventType.SET_ACTIVE_THREAD, () => {
            var activeThread = ChatService.getActiveThread();

            this.threadData.active = (activeThread.id == this.threadData.id);
        });

        ChatService.bind(ChatService.EventType.UPDATE, updates => {
            updates.some(update => {
                if (update.thread.id != this.threadData.id) return;

                this.threadData.lastMessage = update.thread.messages.slice(-1)[0];

                return true;
            });
        });
    }
}
