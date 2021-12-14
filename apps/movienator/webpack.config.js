
const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
process.env.NODE_ENV = "development";

module.exports = {
  entry: "/src/index.js",
  output: { path: path.resolve(__dirname, "dist") },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: require.resolve("babel-loader"),
          options: {
            rootMode: "upward",
            customize: require.resolve("babel-preset-react-app/webpack-overrides"),

            plugins: [
                [
                    require.resolve("babel-plugin-named-asset-import"),
                    {
                        loaderMap: {
                            svg: {
                                ReactComponent: "@svgr/webpack?-svgo,+titleProp,+ref![path]"
                            }
                        }
                    }
                ]
            ].filter(Boolean),
            // This is a feature of `babel-loader` for webpack (not Babel itself).
            // It enables caching results in ./node_modules/.cache/babel-loader/
            // directory for faster rebuilds.
            cacheDirectory: true,
            cacheCompression: false,
            compact: false
        }
        },
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
    }),
  ],
};