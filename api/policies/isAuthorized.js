/**
 * isAuthorized.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = function (req, res, next) {
	//let token;
	var token;
	if (req.headers && req.headers.authorization) {
		var parts = req.headers.authorization.split(' ');
		if (parts.length == 2) {
			var scheme = parts[0],
				credentials = parts[1];
			if (/^Bearer$/i.test(scheme)) {
				token = credentials;
			}
		} else {
			return ResponseService.json(401, res, "Format is Authorization: Bearer [token]");
		}
	}	else if (req.param('token')) {
			token = req.param('token');

			delete req.query.token;
		} else {
			return ResponseService.json(401, res, "No authorization header was found");
		}
	
	JwtService.verify(token, function(err, decoded){
		if (err) return ResponseService.json(401, res, "Invalid Token!");
		req.token = token;
		User.findOne({id: decoded.id}).then(function(user){
			req.current_user = user;
			next();
		})
	});
};