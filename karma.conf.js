var istanbul = require('browserify-istanbul');
var gulpConfig = require('./gulp.config')();

module.exports = function(config) {
	config.set({
		basePath: './',
		frameworks: ['mocha', 'chai', 'sinon', 'chai-sinon', 'browserify'],
		files: [
			'src/**/*.js',
			'test/**/*.spec.js'
		],
		browser: ['PhantomJS'],
		reporters: ['mocha'],
		singleRun: false,
		preprocessors: gulpConfig.karma.preprocessors,
		port: 9876,
		colors: true,
		reporters: ['progress'],
		autoWatch: true,
		browserify: {
			debug: true,
			transform: [istanbul]
		}
	});
};