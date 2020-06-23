const webpack = require('webpack');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const isDev = process.env.NODE_ENV === 'development';
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackMd5Hash = require('webpack-md5-hash');
const MiniCssExtractPlugin = require("mini-css-extract-plugin"); // добавили плагин
module.exports = {
  entry: {
    main: './src/articles/index.js',
    news: './src/news/index.js',
    savenews:'./src/savenews/index.js' },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[chunkhash].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/i,
        use: [
          (isDev ? 'style-loader' : MiniCssExtractPlugin.loader),
          'css-loader',
          'postcss-loader'
        ]
      },
      {
        test: /\.(png|jpg|gif|ico|svg)$/,
        use: [
            {
                loader: 'file-loader',
                options: {
                    name: './images/[name].[ext]',
                    esModule: false
                },
            },
            {
                loader: 'image-webpack-loader',
                options: {
                },
            },
        ],
    },
      {
        test: /\.(eot|ttf|woff|woff2)$/,
        loader: 'file-loader?name=./vendor/[name].[ext]'
    }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({ //
      filename: 'style.[contenthash].css',
    }),
    new OptimizeCssAssetsPlugin({
      assetNameRegExp: /\.css$/g,
      cssProcessor: require('cssnano'),
      cssProcessorPluginOptions: {
              preset: ['default'],
      },
      canPrint: true
}),
    new HtmlWebpackPlugin({
      inject: false,
      template: './src/articles/index.html',
      filename: 'index.html'
    }),
    new HtmlWebpackPlugin({
      inject: false,
      template: './src/news/index.html',
      filename: 'news/index.html'
    }),
    new HtmlWebpackPlugin({
      inject: false,
      template: './src/savenews/index.html',
      filename: 'savenews/index.html'
    }),
    new WebpackMd5Hash(),
    new webpack.DefinePlugin({
      'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    })

  ]
};