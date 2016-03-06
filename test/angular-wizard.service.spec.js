/* jshint -W117, -W030 */
describe('test service', function() {
	var wzService;

	beforeEach(angular.mock.module('angular-wizard'));

	beforeEach(angular.mock.inject(function(_wzService_) {
		wzService = _wzService_;
	}));

	it('should be defined', function() {
		expect(true).to.be.true;
	});
});