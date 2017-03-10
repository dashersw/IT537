var controller = require('./controller');

angular
    .module('chat-app')
    .component('root', {
        templateUrl: 'chat/root/template.html',
        controller: controller
    });
