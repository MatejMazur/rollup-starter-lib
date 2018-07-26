import isObject from 'isobject';

let flattened = {};

function flatten(input, delimiter = '/', parentPath) {
  if (isObject(input)) {
    const object = input;

    for (let key in object) {
      const path = parentPath ? [parentPath, key].join('/') : key;

      if (isObject(object[key])) {
        flattened = { ...flattened, ...flatten(object[key], delimiter, path) };
      } else {
        flattened = { ...flattened, [path]: object[key] };
      }
    }

    return flattened;
  }

  return new Error('the input is not an object');
}

export default flatten;
