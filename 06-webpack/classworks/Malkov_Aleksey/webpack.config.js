const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;


module.exports = {
  mode: 'production',
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
  devtool: 'none',
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin(),
    new webpack.DefinePlugin({
      STUDENT: JSON.stringify('Aleksei Malkov')
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
        test: /\.m?js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      },{
        test: /\.pcss$/,
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