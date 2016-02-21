(function() {
    'use strict';

    angular
        .module('app.wizard')
        .run(appRun);

    appRun.$inject = ['routerHelper'];
    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'wizard',
                config: {
                    url: '/wizard',
                    templateUrl: 'app/wizard/wizard.html',
                    controller: 'WizardController',
                    controllerAs: 'vm',
                    title: 'Wizard',
                    settings: {
                        nav: 3,
                        content: '<i class="fa fa-lock"></i> Wizard'
                    }
                }
            }
        ];
    }
})();
