const path = require("path");
const Spritesmith = require("spritesmith");
const fs = require("fs");


module.exports = function (resource) {
    const callback = this.async();
    const imgs = resource.match(/url\((\S*)\?__sprite/g);

    const matchedImgs = [];

    for (let i = 0; i < imgs.length; i++) {
        const img = imgs[i].match(/url\((\S*)\?__sprite/)[1];
        matchedImgs.push(path.join(__dirname, img));
    }

    console.log(matchedImgs);

    Spritesmith.run({src: matchedImgs}, (err, result) => {
        fs.writeFileSync(path.join(process.cwd(), "dist/sprite.jpg"), result.image);

        resource = resource.replace(/url\((\S*)\?__sprite/g, (match) => {
            return `url("sprite.jpg"`;
        });

        fs.writeFileSync(path.join(process.cwd(), "dist/index.css"), resource);

        callback(null, resource);
    })

};
