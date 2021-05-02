const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const nodeExternals = require('webpack-node-externals');
const { DefinePlugin } = require('webpack');

const webpackconfig = {
    target: 'node',

    entry: {
        server: `${process.cwd()}/src/app.js`
    },

    output: {
        filename: '[name].bundle.js',
        path: `${process.cwd()}/dist`
    },

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: {
                    loader: 'babel-loader'
                },
                exclude: [`${process.cwd()}/node_modules`]
            }
        ]
    },

    plugins: [
        new CleanWebpackPlugin(),
        new DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify(
                    process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'prod'
                        ? 'production'
                        : 'development'
                )
            }
        })
    ],

    externals: [nodeExternals()]
};

module.exports = webpackconfig;
