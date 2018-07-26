import flatten from '../src';

it('should flatten the nested object', () => {
  const actual = flatten({
    foo: {
      bar: 'boo',
      bee: {
        bii: 'cool'
      }
    }
  });
  const expected = {
    'foo.bar': 'boo',
    'foo.bee.bii': 'cool'
  };

  expect(actual).toEqual(expected);
});
