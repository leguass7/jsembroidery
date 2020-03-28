// import fs from 'fs';
import { isStr } from './utils/py';
import { getSupportedFormats } from './supportedFormats';
import EmbPattern from './EmbPattern';

const fs = require('fs');

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
    let stream = false;
    if (textMode) {
      // try text as stream
      // stream = fs.createReadStream(f);
    } else {
      // try open file as stream
      // stream = fs.createReadStream(f);
    }
    stream = await fs.readFileSync(f);
    // stream = fs.createReadStream(f);
    // stream.on('data', (data) => {
    //   reader.read(data, pattern, settings);
    //   stream.close();
    // });
  }
  reader.read(f, pattern, settings);
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

// def read_embroidery(reader, f, settings=None, pattern=None):
//     """Reads fileobject or filename with reader."""
//     if reader is None:
//         return None
//     if pattern is None:
//         pattern = EmbPattern()

//     if is_str(f):
//         text_mode = False
//         try:
//             text_mode = reader.READ_FILE_IN_TEXT_MODE
//         except AttributeError:
//             pass
//         if text_mode:
//             try:
//                 with open(f, "r") as stream:
//                     reader.read(stream, pattern, settings)
//                     stream.close()
//             except IOError:
//                 pass
//         else:
//             try:
//                 with open(f, "rb") as stream:
//                     reader.read(stream, pattern, settings)
//                     stream.close()
//             except IOError:
//                 pass
//     else:
//         reader.read(f, pattern, settings)
//     return pattern

/**
 *
 */
