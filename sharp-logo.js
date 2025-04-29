// sharp-logo.js
const sharp = require("sharp");

const inputPath = "img/logoCompleto.png";
const outputBase = "img/";
const webpBase = "img/webp/";

const sizes = [200, 400, 600];

sizes.forEach(size => {
  sharp(inputPath)
    .resize(size)
    .toFile(`${outputBase}logoCompleto-${size}.png`);

  sharp(inputPath)
    .resize(size)
    .toFormat("webp")
    .toFile(`${webpBase}logoCompleto-${size}.webp`);
});
