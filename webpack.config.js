const path = require("path")
const webpack = require("webpack")
module.exports = {
  entry: './src/client/index.js',

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192, // Die Größe (in Bytes), ab der Dateien als Data-URL behandelt werden sollen
              // Weitere Konfigurationsoptionen für den url-loader
            },
          },
        ],
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  }
}