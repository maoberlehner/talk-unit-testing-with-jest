const { helloWorld, helloWorldAsync } = require(`./1-basics`);

test(`It should return the string "Hello World".`, () => {
  expect(helloWorld()).toBe(`Hello World`);
});

// it(`should return the string "Hello World".`, () => {
//   expect(helloWorld()).toBe('Hello World');
// });

// test(`it should be test.`, () => {
//   expect(it).toBe(test);
// });

// describe(`helloWorld()`, () => {
//   test(`It should return the string "Hello World".`, () => {
//     expect(helloWorld()).toBe('Hello World');
//   });
// });

// test.only(`It should return the string "Hello World".`, () => {
//   expect(helloWorld()).toBe('Hello World');
// });

// describe.only(`helloWorld()`, () => {
//   test(`It should return the string "Hello World".`, () => {
//     expect(helloWorld()).toBe('Hello World');
//   });

//   it(`should return the string "Hello World".`, () => {
//     expect(helloWorld()).toBe('Hello World');
//   });
// });

// test.skip(`Don't run me.`, () => {
//   expect(true).toBe(false);
// });

// test(`It should work with promises.`, async () => {
//   expect(await helloWorldAsync()).toBe(`Hello World`);
// });

// beforeAll(() => {
//   console.log('Mock DB set up!');
// });

// afterAll(() => {
//   console.log('Mock DB destroyed!');
// });

// beforeEach(() => {
//   console.log('Mock data set up!');
// });

// afterEach(() => {
//   console.log('Mock data reset!');
// });
