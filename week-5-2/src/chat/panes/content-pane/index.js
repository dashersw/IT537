var controller = require('./controller');

angular
    .module('chat-app')
    .component('contentPane', {
        templateUrl: 'chat/panes/content-pane/template.html',
        controller
    });
