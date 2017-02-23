var controller = require('./controller');

angular
    .module('chat-app')
    .component('motherPane', {
        templateUrl: 'chat/panes/mother-pane/template.html',
        controller
    });
