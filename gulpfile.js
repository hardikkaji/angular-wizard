var gulp = require('gulp');
var config = require('./gulp.config.js')();
var wire = require('wiredep');

var Server = require('karma').Server;
var dep = wire({
	devDependencies: true
}).js;

var karmaConfig = {
	configFile: config.karma.configFile,
	files: [].concat(dep, config.test.files),
	exclude: config.karma.exclude,
	singleRun: true,
	coverageReporter: {
		check: {
			global: {
				statements: config.test.coverage.statements,
				functions: config.test.coverage.functions,
				lines: config.test.coverage.lines,
				branches: config.test.coverage.branches
			}
		},
		dir: './report/coverage/',
		reporters: [{
			type: 'html',
			subdir: 'report-html'
		}, {
			type: 'text-summary'
		}]
	}
}

/**
 * Run test once and exit
 */
gulp.task('test', function(done) {
	//new Server(karmaConfig, done).start();
	Server.start(karmaConfig, function(result) {
		if (result === 1) {
			console.log('Unit test errors');
		} else {
			console.log('Karma completed testing');
		}
		done();
	});
});

/**
 * Watch for file changes and re-run tests on each change
 */
gulp.task('tdd', function(done) {
	//new Server(karmaConfig, done).start();
	Server.start(karmaConfig, function(result) {
		if (result === 1) {
			console.log('Unit test errors');
		} else {
			console.log('Karma completed testing');
		}
		done();
	});
});

gulp.task('default', ['tdd']);