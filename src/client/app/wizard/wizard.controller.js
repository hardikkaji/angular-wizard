(function () {
    'use strict';

    angular
        .module('app.wizard')
        .controller('WizardController', WizardController);

    WizardController.$inject = ['logger'];
    /* @ngInject */
    function WizardController(logger) {
        var vm = this;
        vm.title = 'Wizard';

        activate();

        function activate() {
            logger.info('Activated Wizard View');
        }
    }
})();
