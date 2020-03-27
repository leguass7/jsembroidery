/* eslint-disable no-throw-literal */
export function bytearray(bytable) {
  if (bytable === undefined) return new Uint8Array(0);

  const aType = typeof bytable;
  if (aType === 'number') return new Uint8Array(bytable);

  if (aType === 'string') {
    const len = bytable.length;
    const aBytes = new Uint8Array(len);
    for (let i = 0; i < len; i++) {
      aBytes[i] = bytable.charCodeAt(i);
    }
    return aBytes;
  }

  throw 'Error: py.js bytearray';
}
