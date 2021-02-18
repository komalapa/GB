const path = require("path");
const HTMLWebpackPlugin = require ("html-webpack-plugin");

module.exports = {
    entry:['@babel/polyfill', path.resolve(__dirname,'src','index.js')],
    output: {
        path: path.resolve(__dirname,'dist'),
        filename: "index.js"
    },
    plugins: [
        new HTMLWebpackPlugin ({template: path.resolve(__dirname, 'src', 'index.html')})
    ],
    module:{
        rules:[
            {
                test: /\.(js|jsx)$/,
                include: path.resolve(__dirname, 'src'),
                loader: 'babel-loader',
                options:{
                    presets:['@babel/env', '@babel/react']
                }
            },
            {   
                 test:  /\.css$/,
                 include: path.resolve(__dirname, 'src'),
                 use: ['style-loader','css-loader'],
            }
        ]
    },
    resolve: {
        extensions: ['.jsx','.js']
    },
    devServer:{
        historyApiFallback:true,
    },
    devtool: 'inline-source-map' 
 
    
}