class ChatRepository {
    constructor($http, $timeout, $q) {
        // For demo purposes
        var lazyResponse = function(promise, duration) {
            duration = duration || 300;

            return $q(function(resolve) {
                $timeout(function() {
                    promise.then(resolve);
                }, duration);
            });
        };

        this.getThreads = function() {
            return lazyResponse($http.get('/api/threads'));
        };

        this.getUpdates = function() {
            return lazyResponse($http.get('/api/updates'));
        };

        this.getOwner = function() {
            return lazyResponse($http.get('/api/owner'));
        };
    }
}

angular.module('chat-app')
    .service('ChatRepository', ChatRepository);
