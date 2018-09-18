function sum(a, b) {
  return a + b;
}

function nameMe(name) {
  return { name };
}

function division(a, b) {
  if (b === 0) {
    throw new Error('You can not divide by zero');
  }
  return a / b;
}

test('Another example test', () => {
  // Boolean(value)
  expect(sum(0, 0)).toBeFalsy();
  expect(sum(1, 2)).toBeTruthy();
  /*
    false
    0
    ""
    NaN
    undefined
    null
  */
});

test('Division test', () => {
  const result = division(10, 5);
  expect(division.bind(null, 10, 0)).toThrowError('You can not divide');
  expect(result).toBe(2);
});

test('Should return an object with a passed name', () => {
  const result = nameMe('John');
  expect(result).toEqual({
    name: 'John'
  });
});

test('Example test', () => {
  const result = sum(1, 3);
  expect(result).not.toBe(2);
  expect(result > 1).toBe(true);
});
