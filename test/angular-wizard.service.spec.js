/* jshint -W117, -W030 */
describe('wzService ---', function() {

    beforeEach(function() {
        bard.appModule('angular-wizard');
        bard.inject('wzService');
    })
    it('should be defined', function() {
        expect(wzService).to.be.defined;
    });
    it('should return true', function() {
        expect(wzService.test()).to.be.true;
    });
});