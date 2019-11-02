const loaderUtils = require("loader-utils");
const path = require('path');
const fs = require("fs");

module.exports = function (resource) {
    debugger;
    const options = loaderUtils.getOptions(this);
    const callback = this.async();
    console.log(options);
    const json = JSON.stringify(resource)
        .replace(/\u2028/g, "\\u2028")
        .replace(/\u2029/g, "\\u2029");

    fs.readFile(path.join(__dirname, "async.txt"), "utf-8", (err, result) => {
        if (err) {
            callback(err, "");
        }
        callback(null, result);
    });

    // return `export default ${json}`;
    // throw new Error("ddd");
    // this.callback(new Error("erro"), json);

};
