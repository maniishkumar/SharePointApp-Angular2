﻿var webpack = require('webpack');
var webpackMerge = require('webpack-merge');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var commonConfig = require('./webpack.common.js');
var helpers = require('./helpers');

module.exports = webpackMerge(commonConfig, {
    devtool: 'source-map',

    output: {
        path: helpers.root('../app'),
        publicPath: '/SharePointApp-Angular2/app',
        filename: '[name].js',
        chunkFilename: '[id].chunk.js'
    },

    htmlLoader: {
        minimize: false // workaround for ng2
    },

    plugins: [
      new ExtractTextPlugin('[name].css')
    ],
});
