const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: "./index.js",
    output: {
        path: __dirname,
        filename: "lib/index.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loaders: ExtractTextPlugin.extract({ use: 'css-loader' }) },
            { test: /\.scss$/, loaders: ExtractTextPlugin.extract({ use: 'css-loader!sass-loader' }) },
            { test: [/\.js$/, /\.jsx$/], loaders: ['react-hot-loader', 'babel-loader'] },
        ]
    },
    plugins: [
        new ExtractTextPlugin('lib/[name].css'),
    ],
};
