var controller = require('./controller');

angular
    .module('chat-app')
    .component('menuPane', {
        templateUrl: 'chat/panes/menu-pane/template.html',
        controller
    });
