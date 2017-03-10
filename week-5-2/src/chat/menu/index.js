var controller = require('./controller');

angular
    .module('chat-app')
    .component('menu', {
        templateUrl: 'chat/menu/template.html',
        controller: controller
    });
