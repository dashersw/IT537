var controller = require('./controller');

angular
    .module('chat-app')
    .component('bio', {
        templateUrl: 'chat/content/bio/template.html',
        controller
    });
