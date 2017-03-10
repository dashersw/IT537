var controller = require('./controller');

angular
    .module('chat-app')
    .component('links', {
        templateUrl: 'chat/content/links/template.html',
        controller
    });
