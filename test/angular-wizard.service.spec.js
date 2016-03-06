describe('test service', function() {
	beforeEach(function() {
		bard.appModule('angular-wizard');
		bard.inject('$controller','wzService');
	});

	it('should be defined', function() {
		//console.log(bard.appModule('angular-wizard'));
		expect(wzService).to.be.defined;
	});
});