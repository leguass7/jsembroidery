import fs from 'fs';
import chunk from 'chunk';

/* eslint-disable no-throw-literal */
export function bytearray(bytable) {
  if (typeof bytable === 'undefined') return new Uint8Array(0);

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

// export function range(start, stop, step) {
//   if (stop === undefined) {
//     stop = start;
//     start = 0;
//   }
//   if (step === undefined) {
//     step = 1;
//   }
//   if ((step > 0 && start >= stop) || (step < 0 && start <= stop)) {
//     return [];
//   }
//   const result = [];
//   for (let i = start; step > 0 ? i < stop : i > stop; i += step) {
//     result.push(i);
//   }
//   return result;
// }

export function* range(start, stop, step = 1) {
  if (stop === undefined) [start, stop] = [0, start];
  if (step > 0) while (start < stop) yield start, (start += step);
  else if (step < 0) while (start > stop) yield start, (start += step);
  else throw new RangeError('range() step argument invalid');
}

export function readBytesSync(filePath, filePosition, numBytesToRead) {
  const buf = Buffer.alloc(numBytesToRead, 0);
  let fd;
  try {
    fd = fs.openSync(filePath, 'r');
    fs.readSync(fd, buf, 0, numBytesToRead, filePosition);
  } finally {
    if (fd) {
      fs.closeSync(fd);
    }
  }
  return buf;
}

export function hexToInt(strhex) {
  if (Array.isArray(strhex)) {
    return strhex.map((item) => this.hexToInt(item));
  }

  try {
    const result = parseInt(strhex, 16) || 0;
    return result;
  } catch (error) {
    console.log('utils hexToInt', error.code);
    return 0;
  }
}
/**
 * Converte Hexadecimal em Alphanumeric String
 * @function hexToAlphaNumeric
 * @param {Buffer | String | Array<String>} hexx
 * @param {Boolean} preserve se true converte invalid ALPHANUMERIC in space
 * @returns {String} hexadecimal string
 * @example
 * hexToAlphaNumeric('414243') // return 'ABC'
 * hexToAlphaNumeric('413943', true) // return 'A C'
 */
export function hexToAlphaNumeric(hexx, preserve) {
  if (!hexx) return '';
  let hex = '';

  if (hexx instanceof Buffer) {
    hex = hexx.toString('hex').toUpperCase();
  } else if (Array.isArray(hexx)) {
    hex = hexx.join('').toUpperCase();
  } else {
    hex = hexx;
  }
  hex = chunk(hex, 2);
  let result = '';
  for (let i = 0; i < hex.length; i++) {
    const h = hex[i];
    const num = hexToInt(h);
    if (preserve) {
      result += num >= 30 && num <= 126 ? String.fromCharCode(num) : ' ';
    } else if (num >= 30 && num <= 126) result += String.fromCharCode(num);
  }
  return result;
}
