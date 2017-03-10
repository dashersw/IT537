var controller = require('./controller');

angular
    .module('chat-app')
    .component('threadsPopover', {
        templateUrl: 'chat/thread/threads-popover/template.html',
        controller,
        bindings: {
            threadData: '='
        }
    });
