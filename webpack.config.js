const path = require('path');

module.exports = {
    entry: './client/src/index.jsx',
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, './client/dist'),
    },
    module: {
        rules: [
            {
                test: [/\.js$/, /\.jsx$/],
                exclude: /node_modules/,
                use:{
                    loader: "babel-loader"
                }
            }, 
            {
                test: /\.css$/,
                loader: 'style-loader'
            }, 
            {
                test: /\.css$/,
                loader: 'css-loader',
                query: {
                  modules: true,
                  localIdentName: '[name]__[local]___[hash:base64:5]'
                }
            },
            {
                test: /\.svg$/,
                loader: 'svg-sprite-loader'
            }
        ]
    }
        

}