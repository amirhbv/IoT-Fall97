const path = require('path');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

const srcPath = path.resolve(__dirname, 'public/javascripts');
const outputPath = path.resolve(__dirname, 'public/dist');

module.exports = {
    target: "web",
    entry: {
        dashboard: `${srcPath}/dashboard.js`,
    },
    output: {
        path: outputPath,
        filename: 'js/[name].bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    { loader: 'babel-loader' }
                ]
            },
            {
                test: /\.s?css$/,
                oneOf: [
                    {
                        resourceQuery: /module/,
                        use: [
                            { loader: MiniCssExtractPlugin.loader },
                            {
                                loader: 'css-loader',
                                options: {
                                    modules: true,
                                    localIdentName: '[local]_[hash:base64:5]',
                                    sourceMap: true,
                                },
                            },
                            {
                                loader: 'resolve-url-loader',
                                options: { sourceMap: true },
                            },
                            {
                                loader: 'sass-loader',
                                options: { sourceMap: true },
                            },
                        ],
                    },
                    {
                        use: [
                            { loader: MiniCssExtractPlugin.loader },
                            {
                                loader: 'css-loader',
                                options: { sourceMap: true }
                            },
                            {
                                loader: 'resolve-url-loader',
                                options: { sourceMap: true }
                            },
                            {
                                loader: 'sass-loader',
                                options: { sourceMap: true }
                            }
                        ]
                    },
                ],
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'images/[name].[ext]'
                        }
                    }
                ]
            },
            {
                test: /\.(ttf|woff|woff2|otf|eot)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'fonts/[name].[ext]'
                        }
                    }
                ]
            },
            {
                test: /\.vue$/,
                use: [
                    { loader: 'vue-loader' }
                ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'css/[name].css',
            chunkFilename: '[id].css'
        }),
        new VueLoaderPlugin()
    ]
};
