/**
 * JwtService.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */
var jwt = require("jsonwebtoken");
var jwtSecret = sails.config.secrets.jwtSecret;

module.exports = {
	issue: function (payload) {
		token = jwt.sign (payload, jwtSecret, {expiresIn: 180*60})
		return token
	},
	verify: function (token, callback) {
		return jwt.verify (token, jwtSecret, callback);
	}
};