var schemas = require('./schemas');

var knex = require('knex')({
	client: 'pg',
	connection: {
		host : '127.0.0.1',
		user : 'lasalle',
		password : 'lasalle',
		database : 'citizens'
	},
	debug: false
});


exports.init = function() {
	return schemas(knex);
};