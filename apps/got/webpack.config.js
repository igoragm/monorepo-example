const path = require("path");
const fs = require("fs");
const resolve = require("resolve");
const configDir = fs.realpathSync(__dirname);
const appDirectory = path.resolve(configDir, ".");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const ForkTsCheckerWebpackPlugin = require("react-dev-utils/ForkTsCheckerWebpackPlugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

process.env.NODE_ENV = "development";

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        publicPath: "",
        filename: "bundle-[hash].js"
    },
    mode: "development",
    resolve: {
        extensions: [".js", ".json", ".ts", ".tsx"]
    },
    devServer: {
        historyApiFallback: true
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/index.html"
        }),
        new ForkTsCheckerWebpackPlugin({
            typescript: resolve.sync("typescript", {
                basedir: resolveApp("node_modules")
            }),
            async: true,
            useTypescriptIncrementalApi: true,
            checkSyntacticErrors: true,
            tsconfig: resolveApp("tsconfig.json"),
            reportFiles: ["**", "!**/__tests__/**", "!**/?(*.)(spec|test).*"],
            silent: true
        }),
        new MiniCssExtractPlugin({
            filename: "[name].[hash].css",
            chunkFilename: "[id].[hash].css"
        })
    ],
    module: {
        rules: [
            // Disable require.ensure as it's not a standard language feature.
            { parser: { requireEnsure: false } },
            // First, run the linter.
            // It's important to do this before Babel processes the JS.
            {
                test: /\.(js|mjs|jsx|ts|tsx)$/,
                enforce: "pre",
                use: [
                    {
                        options: {
                            cache: true,
                            formatter: require.resolve("react-dev-utils/eslintFormatter"),
                            eslintPath: require.resolve("eslint"),
                            resolvePluginsRelativeTo: __dirname,
                            configFile: resolveApp(".eslintrc.js")
                        },
                        loader: require.resolve("eslint-loader")
                    }
                ],
                exclude: [/\.(ejs)$/],
                include: resolveApp("src")
            },
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
                }
            },
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "ts-loader",
                        options: {
                            transpileOnly: true,
                            happyPackMode: true,
                            configFile: resolveApp("tsconfig.json")
                        }
                    }
                ]
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader
                    },
                    {
                        loader: "css-loader"
                    },
                    {
                        loader: "postcss-loader"
                    },
                    {
                        loader: "sass-loader",
                        options: {
                            implementation: require("sass")
                        }
                    }
                ]
            }
        ]
    }
};
