var fs = require('fs');
var path = require('path');

module.exports = {
	read: function(callback) {
		fs.readFile(path.join(__dirname, '../package.json'), 'utf-8', function(err, data) {
			if (err) {
				return callback(err);
			}
	
			var name;
			
			try {		
				name = JSON.parse(data).name;
			}
			catch (ex) {
				return callback(ex);
			}

			callback(null, name);
		});
	}
};

