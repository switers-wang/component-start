const path = require('path');
const fs = require('fs');
const ROOT_PATH = path.join(__dirname);
const HtmlWebpackPlugin = require('html-webpack-plugin');
const entryNameList = fs.readdirSync(path.join(ROOT_PATH, 'src/containers'));

const webpackConfig = {
    entry: {},
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
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
    // objEntryList[item] = path.join(__dirname, 'src/containers', entryName, `index.js`);
    webpackConfig.entry[entryName] = [
        path.resolve(__dirname, 'src/containers', entryName, `index.js`),
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
