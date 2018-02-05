/**
 * BibleKJVController
 *
 * @description :: Server-side logic for managing Bible verses in the King James' Version
 */

module.exports = {
	lookUp: function (req, res) {
		debugger;
		BibleKJV.findById();
		return res.view('verse', {});
	},
};
