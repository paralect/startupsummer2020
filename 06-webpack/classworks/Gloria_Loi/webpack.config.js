const path = require('path')
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
	mode: 'development',
  entry: './src/index.js',
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new MiniCssExtractPlugin(),
    new CleanWebpackPlugin(),
    new webpack.DefinePlugin({
        STUDENT: JSON.stringify('Gloria Loi'),
      })
  ],
  devServer: {
    port: 9000
  },
  optimization: {
    minimize: true,
    minimizer: [new OptimizeCSSAssetsPlugin(), new TerserPlugin()]
  },
  module :{
  rules: [
    {
      test: /\.js$/,
      exclude: /(node_modules)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env'],
          plugins: ['@babel/plugin-proposal-object-rest-spread']
        }
      }
    },

    {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
    },
    { 
        test: /\.pcss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader']
    },
    {
        test: /\.(png|jpg|ttf|jpeg)$/,
        use: ['file-loader']
    },
    {
        test: /\.txt$/i,
        use: 'raw-loader',
    }
  ]}
}

