const path = require('path')
const webpack = require('webpack');


module.exports = {
    entry: {
        bundle: path.join(__dirname, 'src/js', 'index.js'),
    },
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js',
    },
    resolve: {
        modules: ['node_modules', 'src'],
        extensions: ['.js', '.jsx', '.styl'],
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ["react-hot-loader", "babel-loader"]
            },
            {
                test: /\.styl$/,
                exclude: /node_modules/,
                use: ["style-loader", "css-loader", "stylus-loader"],
            },
            {
                test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
                exclude: /node_modules/,
                use: ["file-loader"]
            }
        ],
    },
}