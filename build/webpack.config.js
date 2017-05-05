const path = require('path');
const fs = require('fs');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const entryNameList = fs.readdirSync(path.join(__dirname, 'src/containers'));

const webpackConfig = {
    entry: {},
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/dist/'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
            }
        ],
    },
    plugins: [],
};

// setEntry
entryNameList.forEach((entryName) => {
    webpackConfig.entry[entryName] = [
        path.resolve(__dirname, 'src/containers', entryName, 'index.js'),
    ];
    webpackConfig.plugins.push(new HtmlWebpackPlugin({
        template: path.join(__dirname, 'src/templates/', 'index.html'),
        filename: path.join(__dirname, 'src/entries', `${entryName}.html`),
        inject: 'body',
        chunks: [
            entryName,
        ],
    }));
});

module.exports = webpackConfig;
