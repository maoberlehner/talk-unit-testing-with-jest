const fs = jest.genMockFromModule(`fs`);

let mockFiles = {
  '/foo/bar': [
    `/foo/bar/baz.jpg`,
    `/foo/bar/qux.jpg`,
  ],
};

// eslint-disable-next-line no-underscore-dangle
function __setMockFiles(newMockFiles) {
  mockFiles = newMockFiles;
}

function readdirSync(directoryPath) {
  return mockFiles[directoryPath] || [];
}

// eslint-disable-next-line no-underscore-dangle
fs.__setMockFiles = __setMockFiles;
fs.readdirSync = readdirSync;

module.exports = fs;
