var expect = require('chai').expect;

describe('String.toUpperCase', function(){
	it('returns uppercased values', function(){
		expect('apple'.toUpperCase()).to.eql('APPLE');
	});
});

