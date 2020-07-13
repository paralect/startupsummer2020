const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const webpack = require('webpack');


module.exports = (env, options) => {
  const debug = options.mode === 'development';
  const mode = debug ? 'development' : 'production';

  const config = {
    mode,
    devtool: debug ? 'source-map' : 'none',
    entry: './src/index.js',
    output: {
      filename: 'main.js',
      path: path.resolve(__dirname, 'dist'),
    },

    optimization: {
      minimize: true,
      minimizer: [
        new TerserPlugin(),
        new OptimizeCSSAssetsPlugin(),
      ],
    },

    module: {
      rules: [
        {
          test: /\.p?css$/,
          use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
        },
        {
          test: /\.js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
            }
          }
        },
        {
          test: /\.(jpe?g|png|ttf)$/,
          loader: 'file-loader',
        },
        {
          test: /\.txt$/,
          loader: 'raw-loader',
        }
      ]
    },

    plugins: [
      new CleanWebpackPlugin(),
      new MiniCssExtractPlugin(),
      new HtmlWebpackPlugin({
        filename: 'index.html',
        template: './src/index.html',
      }),
      new webpack.DefinePlugin({
        STUDENT: '"Vladimir Shevtsov"',
      }),
    ]
  }

  return config;
};
