const generate = require('./main');

test('throws exception when given invalid bank account number', () => {
	expect(() => {
		generate('44-1234-0012345-00');
	}).toThrow();
});

test('does not throw exception when given unknown bank account', () => {
	expect(() => {
		generate('01-902-0068389-00');
	}).not.toThrow();
});
