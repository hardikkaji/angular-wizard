(function() {
    'use strict';
    
    describe('Main controller ---', function() {
        var controller;

        beforeEach(module('angular-wizard'));

        beforeEach(inject(function(_$controller_) {
            controller = _$controller_('MainController', {$scope: {}});
        }));

        it('should have title', function() {
            expect(controller.title).toEqual('Angular Wizard : Home');
        });
    });
})();

