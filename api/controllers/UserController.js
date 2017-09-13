/**
 * UserController.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

var _ = require("lodash");

module.exports = {
	create: function (req,res) {
		if (req.body.password !== req.body.confirmPassword) {
			return ResponseService.json (401, res, "Password doesn't match")
		}

		var allowedParameters = [
			"email","password"
		]

		var data = _.pick (req.body, allowedParameters);

		User.create(data).then(function (user) {
			var responseData= {
				user: user,
				token: JwtService.issue({id: user.id})
			}
			return ResponseService.json(200, res, "User created succesfully", responseData)
		}).catch(function (error) {
			if (error.invalidAttributes){
				return ResponseService.json(400, res, "User could not be created", error.Errors)
			}
		})
	}
};