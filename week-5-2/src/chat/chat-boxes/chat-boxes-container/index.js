var controller = require('./controller');

angular
    .module('chat-app')
    .component('chatBoxesContainer', {
        templateUrl: 'chat/chat-boxes/chat-boxes-container/template.html',
        controller: controller
    });
