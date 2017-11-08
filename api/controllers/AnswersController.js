/**
 * AnswersController
 *
 * @description :: Server-side logic for managing answers
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	create: function (req,res) {
		Answers.create(req.body).then(function (answers) {
			//console.log("hello answer");
			var responseData= { name: answers.naam };
			//console.log("Do we reach this point?");
			return ResponseService.json(200, res, "Answers submitted", responseData)
		}).catch(function (error) {
			if (error.invalidAttributes){
				return ResponseService.json(400, res, "Answers submission failed", error.Errors)
			}
		})
	},
	get: function (req,res) {
		Answers.find().then(function (answers) {
			//console.log ("getting answers");
			var responseData=(answers);
			//console.log("Do we reach this point 2?");
			return ResponseService.json(200, res, "Answers gotten", responseData)
		}).catch(function (error) {
			if (error.invalidAttributes){
				return ResponseService.json(400, res, "Answers submission failed", error.Errors)
			}
		})
	}
};

