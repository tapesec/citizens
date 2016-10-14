'use strict';

exports.fromSession = function (req) {
	var token = null;
	if (req && req.session) {
		token = req.session['jwt'];
	}
	return token;
};