var controller = require('./controller');

angular
    .module('chat-app')
    .component('threadList', {
        templateUrl: 'chat/thread/thread-list/template.html',
        controller,
        bindings: {
            threadClick: '&'
        }
    });
