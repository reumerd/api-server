/**
 * HomePageController.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */
module.exports = {
	show: function (req, res) {
		console.log('Hello There');
		return res.view('homepage');
	}
};