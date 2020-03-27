import fs from 'fs';

/**
 * Returns object with implemented formats
 * @returns {Object} supported formats
 */
exports.supported_formats = () => {
  return [];
};

/**
 * Extracts the extension from a filename
 * @param {String} filename
 * @returns {String} extension
 */
exports.get_extension_by_filename = (filename) => {
  return filename.split('.').pop() || '';
};

/**
 *
 */
exports.write_embroidery = (writer, pattern, stream, settings = null) => {
  //
  if (!pattern) return false;
  if (!settings) settings = {};

  settings.encode = 'encode' in settings ? settings.encode : writer.ENCODE || true;
  settings.max_jump = 'max_jump' in settings ? settings.max_jump : writer.MAX_JUMP_DISTANCE;
  settings.max_stitch = 'max_stitch' in settings ? settings.max_stitch : writer.MAX_STITCH_DISTANCE;
  settings.full_jump = 'max_stitch' in settings ? settings.full_jump : writer.FULL_JUMP;
  settings.round = 'max_stitch' in settings ? settings.round : writer.ROUND;
  settings.writes_speeds = 'writes_speeds' in settings ? settings.writes_speeds : writer.WRITES_SPEEDS;
  settings.sequin_contingency =
    'sequin_contingency' in settings ? settings.sequin_contingency : writer.SEQUIN_CONTINGENCY;
  settings.thread_change_command =
    'thread_change_command' in settings ? settings.thread_change_command : writer.THREAD_CHANGE_COMMAND;
  settings.translate = 'translate' in settings ? settings.translate : writer.TRANSLATE;
  settings.scale = 'scale' in settings ? settings.scale : writer.SCALE;
  settings.rotate = 'rotate' in settings ? settings.rotate : writer.ROTATE;

  pattern = pattern.get_normalized_pattern(settings);

  if (this.is_str(stream)) {
    // FIXME: not tested
    // with open(stream, "wb") as stream:
    // writer.write(pattern, stream, settings)
    // const streamF = fs.open(stream, 'w+')
    const streamF = fs.createWriteStream(stream, 'w+');
    writer.write(pattern, streamF, settings);
  } else {
    writer.write(pattern, stream, settings);
  }
};

/**
 * Writes fileobject as DST file
 */
exports.write_dst = (pattern, stream, settings = null) => {
  return this.write_embroidery(DstWriter, pattern, stream, settings);
};

/**
 * Writes fileobject as PNG file
 * @param {String} filename
 * @returns {Boolean}
 */
exports.write_png = (pattern, stream, settings = null) => {
  //
  return this.write_embroidery(PngWriter, pattern, stream, settings);
};

/**
 * Writes file, assuming type by extension
 * @param {String} filename
 * @returns {Boolean}
 */
exports.write = (pattern, filename, settings = null) => {
  const extension = this.get_extension_by_filename(filename).toLowerCase();
  for (let i = 0; i < extension.length; i++) {
    const file_type = extension[i];
    if (file_type.extension === extension) {
      const { writer } = file_type;
      if (writer) {
        return this.write_embroidery(writer, pattern, filename, settings);
      }
    }
  }
  return false;
};

exports.is_str = (obj) => {
  return typeof obj === 'string';
};
