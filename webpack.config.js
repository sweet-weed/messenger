const { WebpackManifestPlugin } = require('webpack-manifest-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path');

const entries = {
    signup: "./src/pages/signup/index.js",
    signin: "./src/pages/signin/index.js",
    error: "./src/pages/error/index.js",
    profile: "./src/pages/profile/index.js",
    conversation: "./src/pages/conversation/index.js",
    chats: "./src/pages/chats/index.js",
};

module.exports = {
    mode: "development",
    entry: entries,
    output: {
        filename: "[name]/[name].[contenthash].js",
        publicPath: "/",
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"],
            },
            {
                test: /\.isvg$/i,
                use: 'raw-loader',
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.tmpl$/i,
                use: 'handlebars-loader',
            },
        ],
    },
    plugins: [
        new WebpackManifestPlugin(),
        new MiniCssExtractPlugin({
            filename: "[name]/[name].[contenthash].css",
            chunkFilename: "[id].css",
            ignoreOrder: false,
        }),
        ...Object.keys(entries).map((entry) => {
            return new HtmlWebpackPlugin({
                filename: entry + '/index.html',
                template: 'src/assets/templates/main.html',
                chunks: [entry],
                inject: 'body'
            })
        })
    ],
};