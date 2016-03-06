(function() {
	'use strict';
	var test = require('./index.js');
	angular
		.module('angular-wizard')
		.factory('wzService', wzService);

	function wzService() {
		var service = {
			test: test
		};

		return service;
	}
})