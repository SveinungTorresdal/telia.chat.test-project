const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const base = {
  entry: './src/main.js',
  devServer: {
    headers: {
      "Access-Control-Allow-Origin": "payex.humany.net"
    }
  },
  devtool: 'cheap-module-source-map',
  devServer: {
    https: true
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader'
        ]
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        loader: 'file-loader',
        options: {
            outputPath: 'img/',
            name: '[hash:8].[ext]'
        }
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "main.css",
      chunkFilename: "[name].css"
    }),
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      title: 'Telia Chat Demo',
      favicon: './src/img/favicon.png',
      template: './src/index.html',
      filename: 'index.html',
      inject: 'body',
      minify: {
          collapseWhitespace: false,
          removeComments: true,
          removeRedundantAttributes: true,
          removeScriptTypeAttributes: true,
          removeStyleLinkTypeAttributes: true,
          useShortDoctype: true
      }
    }),
  ],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'main.js',
    publicPath: '/',
  }
}

const development = {
  ...base,
  mode: 'development'
}

module.exports = [development]
