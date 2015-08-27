var expect = require('chai').expect;

var sut = require('./index');

describe('String.toUpperCase', function(){
	it('returns uppercased values', function(){
		expect('apple'.toUpperCase()).to.eql('APPLE');
	});
});

describe('index', function(){
	it('reads the name from the package.json', function(done){
		sut.read(function(err, name) { 
			expect(name).to.eql('test101');
			done(err);
		});
	});
});

