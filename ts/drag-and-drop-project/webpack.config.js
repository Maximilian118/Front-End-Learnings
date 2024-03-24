const path = require("path") // A core Node.js module that gives us the absolute path for a certain folder.

module.exports = { // Node.js syntax.
  entry: "./src/app.ts", // The .ts root entry file for the app that Webpack will use to compile with.
  output: { // Where should Webpack to compile to?
    filename: "app.js", // Call the output file app.js.
    path: path.resolve(__dirname, "./dist"), // The absolute path in which the output file will be created.
  },
  devtool: "inline-source-map", // There will be generated sourcemaps already which Webpack should use.
  module: { // How should Webpack handle modules/files? I.E the export and import of [".ts", ".js"] files.
    rules: [ // An array of multiple rules for modules if need be.
      { // First rule =
        test: /\.ts$/, // Using Regex, target .ts files.
        use: "ts-loader", // A loader is simply a package that tells Webpack how to deal with certain files.
        exclude: path.resolve(__dirname, './node_modules'), // It's good practice to exclude node_modules.
      },
    ],
  },
  resolve: { // What do we do with the modules we've targeted?
    extensions: [".ts", ".js"], // Add these extensions to the module imports Webpack finds. Default = ".js".
  },
  mode: "development", // Tells Webpack to use its built-in optimizations accordingly.
}