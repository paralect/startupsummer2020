const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

const isDev = process.env.NODE_ENV === 'development'

module.exports = {
  mode: isDev ? 'development' : 'production',
  entry: {
    main: './src/index.js'
  },
  output: {
    filename: '[name].[hash].js',
    path: path.resolve(__dirname, 'dist')
  },
  devServer: {
    port: 9000
  },
  devtool: isDev ? 'source-map' : 'none',
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin(),
    new webpack.DefinePlugin({
      STUDENT: JSON.stringify('Aleksei Malkov')
    })
  ],
  optimization: {
    minimize: true,
    minimizer: [new OptimizeCSSAssetsPlugin(), new TerserPlugin()]
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }, {
        test: /\.p?css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader']
      }, {
        test: /\.(png|jpg|jpeg|ttf)$/,
        use: ['file-loader']
      }, {
        test: /\.txt$/,
        use: ['raw-loader']
      }
    ]
  }
}