/* eslint-disable @typescript-eslint/no-var-requires */
const { merge } = require("webpack-merge");
const production = require("./webpack.config");
const path = require("path");

module.exports = merge(production, {
	devServer: {
		compress: true,
		hot: true,
		open: true,
		static: {
			directory: path.join(__dirname, "public"),
		},
	},

	devtool: "eval-cheap-module-source-map",

	mode: "development",
});
