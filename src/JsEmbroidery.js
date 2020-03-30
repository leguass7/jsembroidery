import fs from 'fs';
import { isStr, hexToAlphaNumeric } from './utils/py';
import { getSupportedFormats } from './supportedFormats';
import EmbPattern from './EmbPattern';
// const fs = require('fs');

/**
 * Extracts the extension from a filename
 * @param {String} filename
 * @returns {String} extension
 */
export function getExtensionByFilename(filename) {
  return filename.split('.').pop() || '';
}

export async function readEmbroidery(reader, f, settings, pattern) {
  // Reads fileobject or filename with reader
  if (!reader) return false;
  if (!pattern) pattern = new EmbPattern();

  if (isStr(f)) {
    const textMode = reader.READ_FILE_IN_TEXT_MODE || false;
    // let stream = false;
    if (textMode) {
      // try text as stream
      // stream = fs.createReadStream(f);
    } else {
      // try open file as stream
      // stream = fs.createReadStream(f);
    }
    // const stream = await fs.readFileSync(f);
    const stream = await fs.createReadStream(f);
    stream.on('data', (data) => {
      console.log('stream 1', hexToAlphaNumeric(data, true));
    });
    // fs.createReadStream().read()
    // console.log('stream', stream.read(512));
    await reader.read(stream, pattern, settings);
    return pattern;
  }
  await reader.read(f, pattern, settings);
  return pattern;
}

export async function read(filename, settings, pattern) {
  // Reads file, assuming type by extension
  const extension = getExtensionByFilename(filename).toLowerCase();
  const { reader } = getSupportedFormats(extension);
  if (!reader) throw `not supported ${extension}`;
  await readEmbroidery(reader, filename, settings, pattern);
  return pattern;
}
