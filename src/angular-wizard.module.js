(function() {
	'use strict';

	angular
		.module('angular-wizard', [])
        .factory('wzService', wzService);

	function wzService() {
		var service = {
			test: require('./index.js')
		};

		return service;
	}
})();