'use strict';

module.exports = function() {
	var src = './src/';
	var test = './test/';
	var dist = './dist/';

	// Gulp Config object
	var config = {
		js: {
			vet: [
				src + '**/*.js',
				test + '**/*.js',
				'./*.js'
			],
			src: [
				src + '**/*.module.js'
			],
			watch: [
				src + '**/*.js'
			]
		},

		test: {
			files: [
				src + '**/*.js',
				test + '**/*.js'
			],
			coverage: {
				statements: 0,
				branches: 0,
				functions: 0,
				lines: 0
			}
		},

		dist: dist,

		root: './',

		uglify: {
			'preserveComments': 'license'
		},

		packages: ['./package.json', './bower.json'],

		clean: [
			'./dist',
			'./reports'
		]
	};

	config.karma = getKarmaOptions();

	return config;

	///////////////////////

	function getKarmaOptions() {
		var options = {
			configFile: process.cwd() + '/karma.conf.js',
			preprocessors: {}
		};

		options.exclude = [];
		options.preprocessors[src + '**/*.js'] = ['browserify'];
		options.preprocessors[test + '**/*.js'] = ['browserify'];

		return options;
	}
};