const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');



const config = {
    devtool: 'source-map',
    output: {
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: { presets: ["@babel/preset-env"]}
                    }
                ]
            }
            
            
        
        ]
    }
};

module.exports = config;