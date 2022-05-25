"use strict";

const { preprocess } = require('preprocess');
const { extname } = require('path');

/**
 * @param {String} src
 * @return {String}
 */
function preprocessLoader(src) {
	const opts = this.getOptions();

	return preprocess(
		src,
		{
			...process.env,
			...(typeof opts.context === 'object' ? opts.context : {}),
		},
		{
			srcDir: this.context,
			type: opts.type || extname(this.resourcePath),
			callback: function (err) {
				throw err;
			},
		},
	);
}

module.exports = preprocessLoader;
