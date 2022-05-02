// const nodeExternals = require('webpack-node-externals');
const HtmlWebpackPlugin = require("html-webpack-plugin");
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");
// const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const { resolve } = require("path");

module.exports = {
  entry: {
    router: "./src/router.js",
    app: "./src/index.js",
  },
  output: {
    path: resolve(__dirname, "./dist"),
    filename: "[name].js",
  },
  // target: 'web',
  //   node: {
  //     fs: "empty",
  //     net: "empty",
  //   },
  // externals: [nodeExternals()],

  module: {
    rules: [
      {
        test: /\.hbs$/,
        loader: "handlebars-loader",
      },
      //   {
      //     test: /\.css$/,
      //     use: [MiniCssExtractPlugin.loader, "css-loader"],
      //   },
      {
        test: /\.(jpg|jpeg|png|gif)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "img/",
            },
          },
        ],
      },
      {
        test: /\.(json)$/,
        loader: ["json"],
      },
    ],
  },

  // resolve: {
  //     extension: ['.js', '.jsx']
  // },

  // plugin
  plugins: [
    // html webpack
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      title: "CDP ADMIN",
      meta: {
        "X-UA-Compatible": {
          "http-equiv": "X-UA-Compatible",
          content: "IE=edge",
        },
      },
      favicon: "",
    }),
    // new MiniCssExtractPlugin({ filename: "app.css" }),
    // new CleanWebpackPlugin({
    //   cleanAfterEveryBuildPatterns: ["dist"],
    // }),
  ],

  // dev server
  devServer: {
    // host: "127.0.0.1",
    // contentBase: path.join(__dirname, "/src"),
    compress: true,
    hot: true,
    // inline: true,
    port: 9000,
    open: true,
    historyApiFallback: true,
  },
};
