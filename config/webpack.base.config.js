const path = require('path');
const webpack = require('webpack');
const merge = require("webpack-merge");

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

// Set APP_DIR
const APP_DIR = path.resolve(__dirname, '../src');

module.exports = env => {
  const { PLATFORM, VERSION } = env;
  return merge([
      {
        // Use entry pont as APP_DIR. You can use static entry point without using pollyfill
        entry: ['@babel/polyfill', APP_DIR],
        module: {
          rules: [
            {
              test: /\.(js|jsx)$/,
              exclude: /node_modules/,
              use: {
                loader: 'babel-loader'
              }
            },
            // Sass
            {
              test: /\.scss$/,
              use: [
                // Minify on production env
                PLATFORM === 'production' ? MiniCssExtractPlugin.loader : 'style-loader',
                'css-loader',
                'sass-loader'
              ]
            },
            // Eslint
            {
              test: /\.js$/,
              exclude: /node_modules/,
              use: ['babel-loader', 'eslint-loader']
            }
          ]
        },
        plugins: [
          new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: './index.html'
          }),
          new webpack.DefinePlugin({ 
            'process.env.VERSION': JSON.stringify(env.VERSION),
            'process.env.PLATFORM': JSON.stringify(env.PLATFORM)
          }),
          // When building the app, 'src/static' folder will copy to 'dist' folder
          new CopyWebpackPlugin([ { from: 'src/static' } ]),
        ],
    }
  ])
};