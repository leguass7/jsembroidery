/* eslint-disable no-throw-literal */
export function bytearray(bytable) {
  if (bytable === undefined) return new Uint8Array(0);

  const aType = typeof bytable;
  if (aType === 'number') return new Uint8Array(bytable);

  if (aType === 'string') {
    const size = bytable.length;
    const aBytes = new Uint8Array(size);
    for (let i = 0; i < size; i++) {
      aBytes[i] = bytable.charCodeAt(i);
    }
    return aBytes;
  }

  throw 'Error: py.js bytearray';
}

export function isStr(value) {
  return !!(typeof value === 'string');
}

export function len(value) {
  return value ? value.length : 0;
}

export function isInstance(value, Instance) {
  return !!(value instanceof Instance);
}
