const { __setMockFiles } = require(`fs`);
const getFileNames = require(`./4-manual-mocks`);

// See: https://github.com/facebook/jest/issues/5368
// eslint-disable-next-line quotes
jest.mock('fs');

test.only(`It should return the file names of all files in a directory.`, () => {
  expect(getFileNames(`/foo/bar`)).toEqual([`baz.jpg`, `qux.jpg`]);
});

test(`It should return an empty array if no files are found.`, () => {
  __setMockFiles({});

  expect(getFileNames(`/foo/bar`)).toEqual([]);
});
