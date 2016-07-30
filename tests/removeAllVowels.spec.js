describe('removeAllVowels Filter', function () {
	var $controller;

	beforeEach(module('app'));

	beforeEach(inject(function ($injector) {
		$filter = $injector.get('$filter');
	}));

	it('removes the vowels from a  string', function(){
		var string = 'look at me!!!',
		result = $filter('removeAllVowels')(string)
		expect(result).toEqual('lk t m!!!')
	})
});
