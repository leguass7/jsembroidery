import * as PesWriter from './PesWriter';
import * as PesReader from './PesReader';
import DstWriter from './DstWriter';

/**
 * @constant {Array} supportedFormats
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
    // reader: DstReader,
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
