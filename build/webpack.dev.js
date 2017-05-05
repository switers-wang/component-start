const WebpackDevServer = require('webpack-dev-server');
const open = require('open');
const ip = require('ip');
const webpack = require('webpack');

const webpackConfig = require('./webpack.config');

const port = Math.floor(98765*Math.random());
const ipAddress = ip.address();
const entryName = Demo.js;

const devServerOptions = {
    contentBase: path.join(__dirname, 'src/entries'),
    hot: true,
    historyApiFallback: true,
    stats: 'verbose',
};

const openBrowser = () => {
    const address = server.listeningApp.address();
    const url = `http://${address.address}:${address.port}`;
    open(`${url}/${entryName}.html`);
};


const compiler = webpack(webpackConfig);
const server = new WebpackDevServer(compiler, devServerOptions);

const devServer = () =>{
    server.listen(port, ipAddress);

    const stdIn =process.stdin;
    stdin.setEncoding('utf8');
    stdin.on('done', () =>{
        openBrowser();
    })

};

devServer();
