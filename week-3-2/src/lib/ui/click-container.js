angular.module('ui')
    .directive('clickContainer', function($timeout) {
        function link(scope, element, attrs, controller) {
            console.log(arguments)
            element[0].parentElement.addEventListener('click', () => {
                scope.clickContainerCb();
                scope.$root.$digest();
            });
        }

        return {
            scope: {
                    clickContainerCb: '='
            },
            link
        };
    });
