module.exports = {
    entry: {
        main: "./scripts/entry.js"
    },
    output: {
        path: __dirname + "/build",
        filename: "bundle.js",
        libraryTarget: "var",
        library: "Foo"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" }
        ]
    }
};