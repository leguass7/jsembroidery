// # The commands below 0xFF are intended to denote proper commands.
// # The encodings beyond this is supplying additional information.

export const COMMAND_MASK = 0x000000ff;
export const THREAD_MASK = 0x0000ff00;
export const NEEDLE_MASK = 0x00ff0000;
export const ORDER_MASK = 0xff000000;

export const FLAGS_MASK = 0x0000ff00;

export const NO_COMMAND = -1;
export const STITCH = 0;
export const JUMP = 1;
export const TRIM = 2;
export const STOP = 3;
export const END = 4;
export const COLOR_CHANGE = 5;
export const NEEDLE_SET = 9;
export const SEQUIN_MODE = 6;
export const SEQUIN_EJECT = 7;
export const SLOW = 0xb; // # 11
export const FAST = 0xc; // # 12

// # Assigns the change sequences, allowing the color change commands to trigger any event.
// # For these can be processed in some needle, thread, order values to preset or postset the
// # Underlying change sequence.
export const SET_CHANGE_SEQUENCE = 0x10; // # 16

// # Stitch with implied contingency.
export const SEW_TO = 0xb0; // # 176
export const NEEDLE_AT = 0xb1; // # 177

export const STITCH_BREAK = 0xe0; // # 224

export const SEQUENCE_BREAK = 0xe1; // # 225
export const COLOR_BREAK = 0xe2; // # 226

// # Middle Level commands.
export const TIE_ON = 0xe4; // # 228
export const TIE_OFF = 0xe5; // # 229
export const FRAME_EJECT = 0xe9; // # 233

// # Matrix Commands.
export const MATRIX_TRANSLATE = 0xc0; // # 192
export const MATRIX_SCALE_ORIGIN = 0xc1; // # 193
export const MATRIX_ROTATE_ORIGIN = 0xc2; // # 194
export const MATRIX_SCALE = 0xc4; // # 196
export const MATRIX_ROTATE = 0xc5; // # 197
export const MATRIX_RESET = 0xc3; // # 195

export const OPTION_MAX_STITCH_LENGTH = 0xd5;
export const OPTION_MAX_JUMP_LENGTH = 0xd6;
export const OPTION_EXPLICIT_TRIM = 0xd7;
export const OPTION_IMPLICIT_TRIM = 0xd8;

export const CONTINGENCY_TIE_ON_NONE = 0xd3;
export const CONTINGENCY_TIE_ON_THREE_SMALL = 0xd1;

export const CONTINGENCY_TIE_OFF_NONE = 0xd4;
export const CONTINGENCY_TIE_OFF_THREE_SMALL = 0xd2;

export const CONTINGENCY_LONG_STITCH_NONE = 0xf0;
export const CONTINGENCY_LONG_STITCH_JUMP_NEEDLE = 0xf1;
export const CONTINGENCY_LONG_STITCH_SEW_TO = 0xf2;

export const CONTINGENCY_SEQUIN_UTILIZE = 0xf5;
export const CONTINGENCY_SEQUIN_JUMP = 0xf6;
export const CONTINGENCY_SEQUIN_STITCH = 0xf7;
export const CONTINGENCY_SEQUIN_REMOVE = 0xf8;

export const ALTERNATIVE = 0x100; // # Generic flag for an alternative form.
