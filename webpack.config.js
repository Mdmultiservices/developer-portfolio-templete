module.exports = {
  entry: {
    module: {
      preLoaders: [
        {
          test: /\.js$/,
          loader: "source-map-loader",
        },
      ],
      loaders: [
        {
          test: /\.(jpe?g|png|gif|svg)$/i,
          loader: "file-loader",
          options: {
            name: "../assets/[name].[ext]",
          },
        },
      ],
    },
  },
};
