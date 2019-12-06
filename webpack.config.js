'use strict';

var JavaScriptObfuscator =  require ( 'webpack-obfuscator' );
var webpack = require('webpack');
var path = require('path');
var fs = require('fs'); 
var nodeModules = {};

fs.readdirSync(path.resolve(__dirname, 'node_modules'))
    .filter(x => ['.bin'].indexOf(x) === -1)
    .forEach(mod => { nodeModules[mod] = `commonjs ${mod}`; });

module.exports = {
    name: 'ServeNode',
    target: 'node',
    entry: {
        'main': './app.js'
    },
    output: {
        path: path.resolve('bin'),
        publicPath: 'bin/',
        filename: '[name].js'
    },
    plugins: [
        new JavaScriptObfuscator({
            rotateUnicodeArray: true
        })
    ]
    
};