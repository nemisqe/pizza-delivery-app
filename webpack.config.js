let path = require('path');

let conf = {
    entry: './main.js',
    output: {
        path: path.resolve(__dirname, ''),
        filename: 'build.js',
        publicPath: 'dist/'
    },

    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    }
};

module.exports = conf;