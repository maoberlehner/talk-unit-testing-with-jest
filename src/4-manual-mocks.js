const fs = require(`fs`);

module.exports = function getFileNames(directory) {
  return fs
    .readdirSync(directory)
    .map(file => file.split(`/`).reverse()[0]);
};
