

'use strict';

describe('getData service', function () {
    
    var getData, $httpBackend;

    beforeEach(module('fccLnd'));

    beforeEach(inject(function (_$httpBackend_, _getData_) {
      $httpBackend = _$httpBackend_;
      getData = _getData_;
    }));

    it('getData.async() - test', function () {
        $httpBackend.expectGET('../data/fccLndData.json').respond(200, [{}, {}]);
        getData.async().then(function(data) {
            expect(data.length).toBe(2);
            expect(localData).toBe(true);
        });
        $httpBackend.flush();
    });

});