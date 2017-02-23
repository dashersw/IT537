var controller = require('./controller');

angular
    .module('chat-app')
    .component('chatPane', {
        templateUrl: 'chat/panes/chat-pane/template.html',
        controller: controller,
        bindings: {
            thread: '=',
            user: '='
        }
    });
