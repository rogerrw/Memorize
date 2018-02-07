/**
 * BibleKJVController
 *
 * @description :: Server-side logic for managing Bible verses in the King James' Version
 */

module.exports = {
	lookUp: function (req, res) {
		BibleKJV.findAll({
			attributes: ['book', 'chapter', 'verse', 'verseText'],
			where: {
				book: 1,
				chapter: 1,
				verse: 1
			}
		}).then( results => {
			return res.view('lookup', {
				firstResult: results[0].dataValues.verseText
			});
		}).catch( function(err) {
			return res.serverError(err);
		});
	},
};
