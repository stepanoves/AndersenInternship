const path = require('path');
const conf = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'index.js',
        publicPath: 'dist/'
    },
    devServer: {
        overlay: true
    }
}

module.exports = conf;