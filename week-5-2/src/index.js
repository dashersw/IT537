var mockBackend = require('./lib/mock-backend');
require('./lib/ui');

angular
    .module('chat-app', ['ui'])
    .run();

require('./chat/services');
require('./chat/components');

