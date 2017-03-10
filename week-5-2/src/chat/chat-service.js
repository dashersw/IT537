var EventEmitter = require('../lib/event-emitter');
var Thread = require('./thread/thread');

class ChatService extends EventEmitter {
    constructor(ChatRepository, $timeout, $q, $rootScope) {
        super();

        var threadDeferred = $q.defer();

        this.threads = threadDeferred.promise;
        this.activeThread = null;

        this.chatBoxes = [];
        this.activeChatBox = null;

        this.EventType = {
            SET_ACTIVE_THREAD: 'set active thread',
            UPDATE: 'update',
            SET_ACTIVE_CHAT_BOX: 'set active chat box',
            NEW_MESSAGE: 'new message',
            ADD_CHAT_BOX: 'add chat box',
            REMOVE_CHAT_BOX: 'remove chat box'
        };

        // angular.extend(this, new EventEmitter());

        this._threads = [];

        var onInitialData = response => {
            this._threads = response.data;

            this._threads = this._threads.map(thread => new Thread(thread));

            this.setActiveThread(this._threads[0]);

            threadDeferred.resolve(this._threads);
        };

        var getThreads = function() {
            return ChatRepository.getThreads().then(onInitialData);
        };

        var onUpdate = updates => {
            updates.forEach(update => {
                var correspondingThread = this.getThreadById(update.thread.id);

                if (!correspondingThread) {
                    return;
                }

                correspondingThread.messages.push(...update.thread.messages.slice(correspondingThread.messages.length));

                correspondingThread.unread = (update.thread.id !== this.activeThread.id && (this.activeChatBox ? this.activeChatBox.id != update.thread.id : true));
            });

            this.trigger(this.EventType.UPDATE, updates);
            setupUpdates();
        };

        var setupUpdates = () => {
            $timeout(() => {
                ChatRepository.getUpdates().then(function(response) {
                    var updates = response.data;

                    onUpdate(updates);
                });
            }, 1000);
        };

        var ownerDeferred = $q.defer();

        this.owner = ownerDeferred.promise;
        ChatRepository.getOwner().then(function(response) {
            ownerDeferred.resolve(response.data);
        });

        getThreads();
        setupUpdates();
    }

    setActiveThread(thread) {
        this.activeThread = this.getThreadById(thread.id);
        this.activeThread.unread = false;

        this.trigger(this.EventType.SET_ACTIVE_THREAD);
    };

    getActiveThread() {
        return this.activeThread;
    };

    setActiveChatBox(thread) {
        if (this.activeChatBox == thread) return;

        this.activeChatBox = thread;

        if (thread)
            this.activeChatBox.unread = false;

        this.trigger(this.EventType.SET_ACTIVE_CHAT_BOX);
    };

    addChatBox(thread) {
        var boxThread = this.getThreadById(thread.id);

        if (this.chatBoxes.indexOf(boxThread) == -1)
            this.chatBoxes.push(boxThread);

        this.setActiveChatBox(boxThread);

        this.trigger(this.EventType.ADD_CHAT_BOX, boxThread);
    };

    removeChatBox(thread) {
        var boxThread = this.getThreadById(thread.id);
        boxThread.unread = false;

        var i = this.chatBoxes.indexOf(boxThread);
        this.chatBoxes.splice(i, 1, 0);
        this.setActiveChatBox(null);

        this.trigger(this.EventType.REMOVE_CHAT_BOX, boxThread);
    };

    getUnreadCount() {
        return this._threads.filter(thread => thread.unread).length;
    };

    getThreadById(id) {
        return this._threads.find(thread => thread.id === id);
    };

}

angular.module('chat-app').service('ChatService', ChatService);
