module.exports = {
  helloWorld() {
    return `Hello World`;
  },
  helloWorldAsync() {
    return Promise.resolve(`Hello World`);
  },
  timersDemo(cb) {
    setTimeout(() => {
      cb();
    }, 3000);
  },
};
