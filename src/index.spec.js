var expect = require('chai').expect;
var fs = require('fs');
var sut = require('./index');

describe('String.toUpperCase', function(){
	it('returns uppercased values', function(){
		expect('apple'.toUpperCase()).to.eql('APPLE');
	});
});

describe('index', function(){
	it('reads the name from the package.json', function(done){
		this.sandbox.stub(fs, 'readFile', function(path, encoding, callback){
			return callback(null, '{"name": "stub101"}');
		});

		sut.read(function(err, name) { 
			expect(name).to.eql('stub101');
			done(err);
		});
	});

	it('handles if the file is not there', function(done){
		var err = new Error('no file, sorry');
		this.sandbox.stub(fs, 'readFile', function(path, encoding, callback){
                        return callback(err);
                });

                sut.read(function(err, name) {
                        expect(err).to.eql(err);
                        done();
                });
	});

	it('handles if the returned value is not a JSON', function(done){
                this.sandbox.stub(fs, 'readFile', function(path, encoding, callback){
                        return callback(null, 'this is not "json", sorry');
                });

                sut.read(function(err, name) {
                        expect(err.message).to.eql('Unexpected token h');
                        done();
                });
	});
});

