describe('Favorite Food Filter', function () {
	var $controller;

	beforeEach(module('app'));

	beforeEach(inject(function ($injector) {
		$filter = $injector.get('$filter');
	}));

	it('should filter out the foods correctly', function (){
		var foods = [
			{favoriteFood: 'chicken nuggets'},
			{favoriteFood: 'maccaroni and cheese'},
			{favoriteFood: 'cake'}
		]

		var result = $filter('favoriteFood')(foods, 'cake')
		expect(result.length).toBe(1)
		expect(result[0].favoriteFood).toEqual('cake')

	});
});
