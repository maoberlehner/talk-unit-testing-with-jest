const callMe = require(`./2-assertions`);

describe(`Boolean`, () => {
  test.only(`Exact: toBe()`, () => {
    expect(true).toBe(true);
    expect(false).toBe(false);

    // expect('foo').toBe(true);
    // expect(undefined).toBe(false);
  });

  test(`Kinda: toBeTruthy() / toBeFalsy()`, () => {
    expect(true).toBeTruthy();
    expect(false).toBeFalsy();
    expect(`foo`).toBeTruthy();
    expect(undefined).toBeFalsy();

    // Quiz: is an empty string truthy or falsy?
    // expect('').toBeTruthy();
    // expect('').toBeFalsy();
  });
});

describe(`Object`, () => {
  test(`Exact: toBe()`, () => {
    const anObject = { foo: `bar` };

    expect(anObject).toBe(anObject);

    // Quiz: are those two objects the same?
    // expect({ foo: `bar` }).toBe({ foo: `bar` });
  });

  test(`Kinda: toEqual()`, () => {
    const anObject = { foo: `bar` };

    expect(anObject).toEqual(anObject);
    expect({ foo: `bar` }).toEqual({ foo: `bar` });
  });
});

describe(`Function`, () => {
  test(`toHaveBeenCalled()`, () => {
    const maybe = jest.fn();

    callMe(maybe);

    expect(maybe).toHaveBeenCalled();
  });
});
