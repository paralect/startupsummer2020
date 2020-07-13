const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const { DefinePlugin } = require ('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');


module.exports = {
  mode: 'development',
  entry: {
    main: './src/index.js',
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin({}), new OptimizeCSSAssetsPlugin({})],
    splitChunks: {
      chunks: 'all'
    }
  },
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new DefinePlugin({
      STUDENT: JSON.stringify('Chernov Artem'),
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      minify: true,
    }),
    new MiniCssExtractPlugin(),
    new CleanWebpackPlugin(),

  ],
  module: {
    rules: [
      {
        test: /\.[p]css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader']
      },
      {
        test: /\.(png|jpe?g|ttf)$/i,
        use: ['file-loader'],
      },
      {
        test: /\.txt$/i,
        use: 'raw-loader',
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  }
};