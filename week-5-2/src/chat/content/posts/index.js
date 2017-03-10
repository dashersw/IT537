var controller = require('./controller');

angular
    .module('chat-app')
    .component('posts', {
        templateUrl: 'chat/content/posts/template.html',
        controller
    });
