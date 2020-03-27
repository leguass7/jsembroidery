// The commands below 0xFF are intended to denote proper commands.
// The encodings beyond this is supplying additional information.

exports.COMMAND_MASK = 0x000000ff;
exports.THREAD_MASK = 0x0000ff00;
exports.NEEDLE_MASK = 0x00ff0000;
exports.ORDER_MASK = 0xff000000;

exports.NO_COMMAND = -1;
exports.STITCH = 0;
exports.JUMP = 1;
exports.TRIM = 2;
exports.STOP = 3;
exports.END = 4;
exports.COLOR_CHANGE = 5;
exports.NEEDLE_SET = 9;
exports.SEQUIN_MODE = 6;
exports.SEQUIN_EJECT = 7;
exports.SLOW = 0xb; // 11
exports.FAST = 0xc; // 12

// Assigns the change sequences, allowing the color change commands to trigger any event.
// For these can be processed in some needle, thread, order values to preset or postset the
// Underlying change sequence.
exports.SET_CHANGE_SEQUENCE = 0x10; // 16

// Stitch with implied contingency.
exports.SEW_TO = 0xb0; // 176
exports.NEEDLE_AT = 0xb1; // 177

exports.STITCH_BREAK = 0xe0; // 224

exports.SEQUENCE_BREAK = 0xe1; // 225
exports.COLOR_BREAK = 0xe2; // 226

// Middle Level commands.
exports.TIE_ON = 0xe4; // 228
exports.TIE_OFF = 0xe5; // 229
exports.FRAME_EJECT = 0xe9; // 233

// Matrix Commands.
exports.MATRIX_TRANSLATE = 0xc0; // 192
exports.MATRIX_SCALE_ORIGIN = 0xc1; // 193
exports.MATRIX_ROTATE_ORIGIN = 0xc2; // 194
exports.MATRIX_SCALE = 0xc4; // 196
exports.MATRIX_ROTATE = 0xc5; // 197
exports.MATRIX_RESET = 0xc3; // 195

exports.OPTION_MAX_STITCH_LENGTH = 0xd5;
exports.OPTION_MAX_JUMP_LENGTH = 0xd6;
exports.OPTION_EXPLICIT_TRIM = 0xd7;
exports.OPTION_IMPLICIT_TRIM = 0xd8;

exports.CONTINGENCY_TIE_ON_NONE = 0xd3;
exports.CONTINGENCY_TIE_ON_THREE_SMALL = 0xd1;

exports.CONTINGENCY_TIE_OFF_NONE = 0xd4;
exports.CONTINGENCY_TIE_OFF_THREE_SMALL = 0xd2;

exports.CONTINGENCY_LONG_STITCH_NONE = 0xf0;
exports.CONTINGENCY_LONG_STITCH_JUMP_NEEDLE = 0xf1;
exports.CONTINGENCY_LONG_STITCH_SEW_TO = 0xf2;

exports.CONTINGENCY_SEQUIN_UTILIZE = 0xf5;
exports.CONTINGENCY_SEQUIN_JUMP = 0xf6;
exports.CONTINGENCY_SEQUIN_STITCH = 0xf7;
exports.CONTINGENCY_SEQUIN_REMOVE = 0xf8;
