/**
 * VerseController
 *
 * @description :: Server-side logic for managing Bible verses
 */

module.exports = {
	lookUp: function (req, res) {
		Verse.findById();
		return res.view('verse', {});
	},
};
