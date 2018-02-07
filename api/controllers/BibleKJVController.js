/**
 * BibleKJVController
 *
 * @description :: Server-side logic for managing Bible verses in the King James' Version
 */

module.exports = {
	lookUp: function (req, res) {
		const defaultLocals = {
			searchResults: []
		};

		if (_.isEmpty(req.query)) {
			return res.view('lookup', defaultLocals);
		}

		const whereClause = req.param('verse') ?
				{
					book: req.param('book'),
					chapter: req.param('chapter', 1),
					verse: req.param('verse')
				} : {
					book: req.param('book'),
					chapter: req.param('chapter', 1),
				};

		BibleKJV.findAll({
			attributes: ['book', 'chapter', 'verse', 'verseText'],
			where: whereClause
		}).then( results => {
			if (results.length === 0) {
				return res.view('lookUp', defaultLocals);
			}

			return res.view('lookup', {
				searchResults: results[0].dataValues.verseText
			});
		}).catch( err => {
			return res.serverError(err);
		});
	},
};
