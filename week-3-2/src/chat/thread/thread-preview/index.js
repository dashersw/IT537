var controller = require('./controller');

angular
    .module('chat-app')
    .component('threadPreview', {
        templateUrl: 'chat/thread/thread-preview/template.html',
        controller,
        bindings: {
            threadData: '='
        }
    });
