import * as PesWriter from './writer/PesWriter';
import * as PesReader from './reader/PesReader';
import * as DstWriter from './writer/DstWriter';
import * as DstReader from './reader/DstReader';

/** @typedef {Object}  ISupported
 *  @property {String} description
 *  @property {String} extension
 *  @property {String} mimetype
 *  @property {String} category
 *  @property {Object} reader
 *  @property {Object} writer
 *  @property {Array<Number>} versions
 *  @property {Array<String>} metadata
 */

/**
 * @constant {Array<ISupported>} supportedFormats
 */
export const supportedFormats = [
  {
    description: 'Brother Embroidery Format',
    extension: 'pes',
    extensions: ['pes'],
    mimetype: 'application/x-pes',
    category: 'embroidery',
    reader: PesReader,
    writer: PesWriter,
    versions: ['1', '6', '1t', '6t'],
    metadata: ['name', 'author', 'category', 'keywords', 'comments'],
  },
  {
    description: 'Tajima Embroidery Format',
    extension: 'dst',
    extensions: ['dst'],
    mimetype: 'application/x-dst',
    category: 'embroidery',
    reader: DstReader,
    writer: DstWriter,
    read_options: {
      trim_distance: [null, 3.0, 50.0],
      trim_at: [2, 3, 4, 5, 6, 7, 8],
      clipping: [true, false],
    },
    write_options: {
      trim_at: [2, 3, 4, 5, 6, 7, 8],
    },
    versions: ['default', 'extended'],
    metadata: ['name', 'author', 'copyright'],
  },
];

/**
 * @function getSupportedFormats
 * @param {String} extension
 * @return {ISupported}
 */
export function getSupportedFormats(extension) {
  for (let i = 0; i < supportedFormats.length; i++) {
    const supported = supportedFormats[i];
    if (extension === supported.extension) {
      return supported;
    }
  }
  return false;
}
