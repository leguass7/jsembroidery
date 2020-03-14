'use strict'

// The commands below 0xFF are intended to denote proper commands.
// The encodings beyond this is supplying additional information.

exports.COMMAND_MASK = 0x000000FF
exports.THREAD_MASK = 0x0000FF00
exports.NEEDLE_MASK = 0x00FF0000
exports.ORDER_MASK = 0xFF000000

exports.NO_COMMAND = -1
exports.STITCH = 0
exports.JUMP = 1
exports.TRIM = 2
exports.STOP = 3
exports.END = 4
exports.COLOR_CHANGE = 5
exports.NEEDLE_SET = 9
exports.SEQUIN_MODE = 6
exports.SEQUIN_EJECT = 7
exports.SLOW = 0xB // 11
exports.FAST = 0xC // 12

// Assigns the change sequences, allowing the color change commands to trigger any event.
// For these can be processed in some needle, thread, order values to preset or postset the
// Underlying change sequence.
exports.SET_CHANGE_SEQUENCE = 0x10 // 16

// Stitch with implied contingency.
exports.SEW_TO = 0xB0 // 176
exports.NEEDLE_AT = 0xB1 // 177

exports.STITCH_BREAK = 0xE0 // 224

exports.SEQUENCE_BREAK = 0xE1 // 225
exports.COLOR_BREAK = 0xE2 // 226

// Middle Level commands.
exports.TIE_ON = 0xE4 // 228
exports.TIE_OFF = 0xE5 // 229
exports.FRAME_EJECT = 0xE9 // 233

// Matrix Commands.
exports.MATRIX_TRANSLATE = 0xC0 // 192
exports.MATRIX_SCALE_ORIGIN = 0xC1 // 193
exports.MATRIX_ROTATE_ORIGIN = 0xC2 // 194
exports.MATRIX_SCALE = 0xC4 // 196
exports.MATRIX_ROTATE = 0xC5 // 197
exports.MATRIX_RESET = 0xC3 // 195

exports.OPTION_MAX_STITCH_LENGTH = 0xD5
exports.OPTION_MAX_JUMP_LENGTH = 0xD6
exports.OPTION_EXPLICIT_TRIM = 0xD7
exports.OPTION_IMPLICIT_TRIM = 0xD8

exports.CONTINGENCY_TIE_ON_NONE = 0xD3
exports.CONTINGENCY_TIE_ON_THREE_SMALL = 0xD1

exports.CONTINGENCY_TIE_OFF_NONE = 0xD4
exports.CONTINGENCY_TIE_OFF_THREE_SMALL = 0xD2

exports.CONTINGENCY_LONG_STITCH_NONE = 0xF0
exports.CONTINGENCY_LONG_STITCH_JUMP_NEEDLE = 0xF1
exports.CONTINGENCY_LONG_STITCH_SEW_TO = 0xF2

exports.CONTINGENCY_SEQUIN_UTILIZE = 0xF5
exports.CONTINGENCY_SEQUIN_JUMP = 0xF6
exports.CONTINGENCY_SEQUIN_STITCH = 0xF7
exports.CONTINGENCY_SEQUIN_REMOVE = 0xF8
