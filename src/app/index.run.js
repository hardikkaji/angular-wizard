(function() {
    'use strict';

    angular
        .module('angular-wizard')
        .run(runBlock);

    /** @ngInject */
    function runBlock($log) {
        $log.debug('runBlock end');
    }

})();
