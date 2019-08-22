'use strict'

const PesReader = require('./PesReader')
const PesWriter = require('./PesWriter')

let DstReader
let DstWriter

/**
 * Returns object with implemented formats
 * @returns {Object} supported formats
 */
exports.supported_formats = () => {
  return [{
    description: 'Brother Embroidery Format',
    extension: 'pes',
    extensions: ['pes'],
    mimetype: 'application/x-pes',
    category: 'embroidery',
    reader: PesReader,
    writer: PesWriter,
    versions: ['1', '6', '1t', '6t'],
    metadata: ['name', 'author', 'category', 'keywords', 'comments']
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
      clipping: [true, false]
    },
    write_options: {
      trim_at: [2, 3, 4, 5, 6, 7, 8]
    },
    versions: ['default', 'extended'],
    metadata: ['name', 'author', 'copyright']
  }
  ]
}

/**
 * Extracts the extension from a filename
 * @param {String} filename
 * @returns {String} extension
 */
exports.get_extension_by_filename = (filename) => {
  return filename.split('.').pop() || ''
}

exports.write_embroidery = () => {
  //
}

/**
 * Writes file, assuming type by extension
 * @param {String} filename
 * @returns {Boolean}
 */
exports.write = (pattern, filename, settings = null) => {
  const extension = this.get_extension_by_filename(filename).toLowerCase()
  for (let i = 0; i < extension.length; i++) {
    const file_type = extension[i]
    if (file_type.extension === extension) {
      const writer = file_type.writer
      if (writer) {
        return this.write_embroidery(writer, pattern, filename, settings)
      }
    }
  }
  return false
}

exports.is_str = (obj) => {
  return typeof obj === 'string'
}
