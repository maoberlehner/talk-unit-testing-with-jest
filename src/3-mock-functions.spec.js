const makeCallMeAnimalNames = require(`./3-mock-functions`);

describe(`Mock Functions & Dependency Injection`, () => {
  let mockCallback;
  let callMeAnimalNames;

  beforeEach(() => {
    mockCallback = jest.fn();
    callMeAnimalNames = makeCallMeAnimalNames(mockCallback);
  });

  test.only(`It should call the callback with the given animal names.`, () => {
    callMeAnimalNames([`Koala`, `Panda`, `Murmeltier`]);

    expect(mockCallback).toHaveBeenCalledWith([`Koala`, `Panda`, `Murmeltier`]);
  });

  test(`It should return the result of the given mock function.`, () => {
    mockCallback.mockReturnValue(`some return value`);

    expect(callMeAnimalNames()).toBe(`some return value`);
  });
});
