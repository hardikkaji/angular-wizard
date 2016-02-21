(function() {
    'use strict';

    angular
        .module('angular-wizard')
        .controller('MainController', MainController);

    /** @ngInject */
    function MainController($log) {
        var vm = this;
        vm.title = 'Angular Wizard : Home';

        activate();

        ///////////////////

        function activate() {
            $log.info('Main View Activated.')
        }
    }
})();
