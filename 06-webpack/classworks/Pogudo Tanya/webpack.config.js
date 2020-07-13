const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;



module.exports = {
  mode: 'development',
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

  plugins: [
    new HtmlWebpackPlugin({
        template: './src/index.html',
        minify: true
      }),
      new CleanWebpackPlugin(),
      new MiniCssExtractPlugin(),
      new webpack.DefinePlugin({
        'STUDENT': JSON.stringify('Pogudo Tatyana')
      }),
      new BundleAnalyzerPlugin()
  ],
  optimization: {
    minimize: true,
    minimizer: [new OptimizeCSSAssetsPlugin(), new TerserPlugin()]
  },
  module: {
    rules: [
      {
        test: /\.[p]css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader']
      },{
        test: /\.(png|jpg|jpeg|ttf)$/,
        use: ['file-loader']
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
      },
    {
        test: /\.txt$/i,
        use: 'raw-loader',
      }
    ]
  }
}