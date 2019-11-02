const { runLoaders } = require("loader-runner");
const path = require("path");
const fs = require("fs");

runLoaders({
    resource: path.join(__dirname, "src/index.css"),
    loaders: [
        path.resolve(__dirname, "./src/sprite-loader.js")
    ],
    readResource: fs.readFile.bind(fs)
}, (err, result) => {
    console.log(err || result);
})
