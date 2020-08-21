// Node import
const path = require('path');

// treatment plugins for dist/
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');

// Settings for devServer
const host = 'localhost';
const port = 8080;

const devMode = process.env.NODE_ENV !== 'production';

// Settings of Webpack
module.exports = {
  // Pass build by defaukt in développement process
  mode: 'development',
  // Source maps
  devtool: 'eval-source-map',
  // Expose folder src/ for imports
  resolve: {
    alias: {
      src: path.resolve(__dirname, 'src/'),
    },
  },
  // Enter point for webpack working
  entry: {
    app: [
      // JS
      './src/index.js',
    ],
  },
  // Output
  output: {
    // name of bundle
    filename: 'app.js',
    // name of vendor bundle if optimization option / splitChunks is enable
    chunkFilename: 'vendors.js',
    // taget bundles
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
  },
  // Optimization for build
  optimization: {
    // Code spliting
    splitChunks: {
      chunks: 'all',
    },
    // Minification
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: false, // pass to true for JS source maps
      }),
      new OptimizeCSSAssetsPlugin({}),
    ],
  },
  // Modules
  module: {
    rules: [
      // JS
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          // babel with cache option
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true,
            },
          },
        ],
      },
      // CSS / SASS / SCSS
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          // style-loader or file
          devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          // load of CSS
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => [require('autoprefixer')],
              sourceMap: true,
            },
          },
          // SASS
          'sass-loader',
        ],
      },
      // Images
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'assets/',
            },
          },
        ],
      },
      // fonts
      {
        test: /\.(ttf|otf|eot|woff2?)(\?[a-z0-9]+)?$/,
        exclude: /medias/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'fonts/',
              name: '[name][hash].[ext]',
            },
          },
        ],
      },
    ],
  },
  devServer: {
    overlay: true, // Overlay browserif errors of build
    stats: 'minimal', // console informations limited
    progress: true, // progression of build in console
    inline: true, // Reload of browser in case of change
    open: true, // open browser
    historyApiFallback: true,
    host: host,
    port: port,
  },
  plugins: [
    // allow to take index.html from src as base for dist file
    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: './index.html',
    }),
    // allow export CSS stylesin CSS file of dist/
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
  ],
};
