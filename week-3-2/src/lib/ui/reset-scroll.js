angular.module('ui')
    .directive('resetScroll', function($timeout) {
        function link(scope, element, attrs, controller) {
            scope.reset(() => {
                $timeout(() => {
                    element[0].scrollTop = element[0].scrollHeight;
                });
            });
        }

        return {
            scope: {
                reset: '='
            },
            link
        };
    });
